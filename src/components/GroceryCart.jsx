import React from 'react';
import GroceryItem from './GroceryItem';
import InteractionButton from './InteractionButton.jsx';
import * as storageModule from '../modules/cart-storage.js'

function GroceryCart() {
    // Initializes a state variable to store the user's cart, initializes with an empty array.
    const [ userCart, setUserCart ] = React.useState([]);

    // Triggers only on page load, pulls the current string associated with the userCart key.
    // If no key exists, calls setItem to add the userCart key and an empty array string with it.
    React.useEffect(() => {
        setUserCart(storageModule.CartStorage.getShoppingCart());
    }, []);

    const cartUpdated = () => {
        setUserCart(storageModule.CartStorage.getShoppingCart())
    };

    if (userCart.length == 0) {
        return (
            <div>
                <h1>Cart</h1>
                <p>Empty</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Cart</h1>
                <ol>
                    {userCart.map((obj, i) => (
                        <li key={i} >
                            <GroceryItem 
                            id={obj.inventoryNum}
                            productName={obj.itemName}
                            productPrice={obj.price}
                            productWeight={obj.weight}
                            /> 
                            <InteractionButton cartItem={true} addition={obj.itemName} productNum={obj.inventoryNum}/>
                        </li>)
                        )}
                </ol>
            </div>
        )
    }
}

export default GroceryCart;