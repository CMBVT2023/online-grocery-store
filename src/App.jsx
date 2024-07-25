import React from 'react';
import GrocerySelection from './components/GrocerySelection';
import GroceryCart from './components/GroceryCart';
import Inventory from './modules/store-inventory.js'
import * as storageModule from './modules/cart-storage.js'
import './App.css'

function App() {
    // Initializes a state variable to store the user's cart, initializes with an empty array.
    const [ userCart, setUserCart ] = React.useState(storageModule.CartStorage.getShoppingCart());

    // Triggers only on page load, pulls the current string associated with the userCart key.
    // If no key exists, calls setItem to add the userCart key and an empty array string with it.
    React.useEffect(() => {
        storageModule.CartStorage.setShoppingCart(userCart);
    }, [userCart]);

    const addToCart = (id) => {
      let i = 0;
      while (id !== Inventory[i].inventoryNum) {
        i++;
      }
      let item = Inventory[i];
      let result = false;
      userCart.forEach((value) => {
        if (value.inventoryNum == id) {
          result = true;
          value.itemAmount = value.itemAmount + 1;
        }
      })

      if (!result) {
        item.itemAmount = 1;
        setUserCart(prev => [ item, ...prev ]);
      } else {
        setUserCart(userCart);
      }
    };

    const removeFromCart = (id) => {
      let i = 0;
      while (id !== Inventory[i].inventoryNum) {
        i++;
      }

      setUserCart(prev => prev.filter((value, index) => {
          return value.inventoryNum != id;
        }
      ));
    };

    return (
      <div id="main-container">
        <GrocerySelection addToCart={addToCart} removeFromCart={removeFromCart} list={Inventory} cart={userCart} />
        <GroceryCart removeFromCart={removeFromCart} cart={userCart}/>
      </div>
    )
}

export default App
