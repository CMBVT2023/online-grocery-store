import React from 'react';
import GroceryItem from './GroceryItem';
import InteractionButton from './InteractionButton.jsx';

function GroceryCart() {
    // Initializes a state variable to store the user's cart, initializes with an empty array.
    const [ userCart, setUserCart ] = React.useState([]);

    // Triggers only on page load, pulls the current string associated with the userCart key.
    // If no key exists, calls setItem to add the userCart key and an empty array string with it.
    React.useEffect(() => {
        let list = JSON.parse(localStorage.getItem('userCart'));
        if (list === null) {
            localStorage.setItem('userCart', '[]')
        } else {
            setUserCart(list); 
        }
    }, []);

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
                            <InteractionButton addItem={addToCart} removeItem={removeFromCart} cartItem={true} addition={obj.itemName} productNum={obj.inventoryNum}/>
                        </li>)
                        )}
                </ol>
            </div>
        )
    }
}

export default GroceryCart;