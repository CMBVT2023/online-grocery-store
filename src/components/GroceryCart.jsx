import React from 'react';
import GroceryItem from './GroceryItem';
import InteractionButton from './InteractionButton.jsx';

function GroceryCart(props) {
    if (props.cart.length == 0) {
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
                    {props.cart.map((obj, i) => (
                        <li key={i} >
                            <GroceryItem 
                            id={obj.inventoryNum}
                            productName={obj.itemName}
                            productPrice={obj.price}
                            productWeight={obj.weight}
                            /> 
                            <InteractionButton removeFromCart={props.removeFromCart} cartItem={true} addition={obj.itemName} productNum={obj.inventoryNum}/>
                        </li>)
                        )}
                </ol>
            </div>
        )
    }
}

export default GroceryCart;