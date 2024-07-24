import React from 'react';
import GrocerySelection from './components/GrocerySelection';
import GroceryCart from './components/GroceryCart';
import Inventory from './modules/store-inventory.js'
import * as storageModule from './modules/cart-storage.js'
import './App.css'

function App() {
    // Initializes a state variable to store the user's cart, initializes with an empty array.
    const [ userCart, setUserCart ] = React.useState([]);

    // Triggers only on page load, pulls the current string associated with the userCart key.
    // If no key exists, calls setItem to add the userCart key and an empty array string with it.
    React.useEffect(() => {
        setUserCart(storageModule.CartStorage.getShoppingCart());
    }, []);

    React.useEffect(() => {
      if (userCart.length !== 0) {
        storageModule.CartStorage.setShoppingCart(userCart);
      }
    }, [userCart])

    const addToCart = (id) => {
      let i = 0;
      while (id !== Inventory[i].inventoryNum) {
        i++;
      }

      if (userCart.indexOf(Inventory[i]) === -1) {
        setUserCart(prev => [ Inventory[i], ...prev ]);       
      }
    };

    const removeFromCart = (id) => {
      let i = 0;
      while (id !== Inventory[i].inventoryNum) {
        i++;
      }

      console.log(userCart, Inventory[i])
      console.log(userCart.indexOf(Inventory[i]))
      if (userCart.indexOf(Inventory[i]) !== -1) {
        setUserCart(prev => prev.filter((value, index) => {
          console.log(value.inventoryNum === Inventory[i].inventoryNum)
          return value.inventoryNum === Inventory[i].inventoryNum ? value : ''; 
        }));       
      }
    };

    return (
      <div id="main-container">
        <GrocerySelection addToCart={addToCart} removeFromCart={removeFromCart} list={Inventory}/>
        <GroceryCart removeFromCart={removeFromCart} cart={userCart}/>
      </div>
    )
}

export default App
