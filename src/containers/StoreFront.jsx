import React from 'react';
import GroceryInventory from '../components/GroceryInventory.jsx';
import GroceryCart from '../components/GroceryCart.jsx';
import Inventory from '../modules/store-inventory.js';
import * as storageModule from '../modules/cart-storage.js';
import '../styles/App.css';

// I learned the actual issue that was occurring, it was the fact that I had states and javascript running in the
// separate component files instead of in a single parent container. This caused the out of sink changes to occur
// since the separate files were no longer basing their updates on the same variables or info since they would update
// their own states and not based on the container. I have now successfully fixed this problem.

function StoreFront() {
    // Initializes a state variable to store the user's cart, initializes with an empty array.
    const [ userCart, setUserCart ] = React.useState(storageModule.CartStorage.getShoppingCart());

    // Triggers only on page load, pulls the current string associated with the userCart key.
    // If no key exists, calls setItem to add the userCart key and an empty array string with it.
    React.useEffect(() => {
        storageModule.CartStorage.setShoppingCart(userCart);
    }, [userCart]);

    const findIndex = (id, list) => {
      let i = 0;
      while (id !== list[i].inventoryNum) {
        i++;
      }
      return i;
    }

    const checkInCart = (id) => {
      let result = false;
      userCart.forEach((value) => {
        if (value.inventoryNum == id) {
          result = true;
        }
      })
      return result;
    }

    const addToCart = (id) => {
      let item = Inventory[findIndex(id, Inventory)];
      let result = checkInCart(item.inventoryNum);

      if (!result) {
        item.itemAmount = 1;
        setUserCart(prev => [ item, ...prev ]);
      } else {
        // Ran into an issue and misunderstanding involving setState. I finally remembered that it is a callback
        // function so it is ran twice basically, and the currentState of any values for the component are not the same between
        // those two calls. Thus, when I was trying to increment the value of itemAmount from within the setState function, it was basically
        // calling it twice and incrementing it twice. The solution to this problem was to set the new value outside of the callback function, or before
        // the entire setState function and then have it set the value to that, since it is only ran once and will remain constant through both call back functions.
        
        // The other problem I ran into is the fact that when it comes to arrays and the useEffect variable dependent updates, any altering of properties only is 
        // not flagged as a change to trigger the update or the function inside the useEffect. Thus, I had to look up a solution that recommended mapping through
        // the previous array, since any attempt to use userCart would not work since it's value is not updated or consistent through both callbacks,
        // pulling the previous value, in this case prev, and mapping through the array until finding what I wanted to alter allowed me to store the newly changed
        // list in a new variable and returning that flags the useEffect update.
        let newAmount = item.itemAmount + 1;
        setUserCart((prev) => {
          const newCart = prev.map((value) => {
            if (id == value.inventoryNum) {
              value.itemAmount = newAmount;
            }
            return value;
          })
          return newCart
          })
      }
    };

    const removeFromCart = (id) => {
      let item = userCart[findIndex(id, userCart)]

      if (item.itemAmount <= 1) {
        setUserCart(prev => prev.filter((value) => {
            return value.inventoryNum != id;
          }
        ));
      } else {
        let newAmount = item.itemAmount - 1;
        setUserCart((prev) => {
          const newCart = prev.map((value) => {
            if (id == value.inventoryNum) {
              value.itemAmount = newAmount;
            }
            return value;
          })
          return newCart
          })
      }
    };

    const clearCart = () => {
      let userChoice = confirm('Warning, doing this will completely empty your cart. Do you wish to proceed?')
      if (userChoice) {
        setUserCart([]);
      }
    };

    return (
      <div id="main-container" >
            <GroceryInventory
              inventory={Inventory} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart}
              checkInCart={checkInCart}
              />

            <GroceryCart removeFromCart={removeFromCart} userCart={userCart}/>
            {userCart.length != 0 ? <button onClick={clearCart} id='clear-button'>Clear Cart</button> : ''}
        </div>
    )
}

export default StoreFront;
