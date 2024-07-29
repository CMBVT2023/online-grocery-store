import React from "react";
import GroceryItem from './GroceryItem';
import InteractionButton from "./InteractionButton";

function DisplayList(props) {

    if (props.cartItems) {
        return (
            <div>
                <ul>
                    {props.list.map((obj, i) => (
                        <li key={'cart_' + i}> 
                            <GroceryItem 
                            id={obj.inventoryNum}
                            productName={obj.itemName}
                            productPrice={obj.price}
                            productWeight={obj.weight}
                            productAmount={obj.itemAmount}
                            />
                            <InteractionButton
                            removeFromCart={props.removeFromCart}
                            cartItem={true}
                            buttonText={obj.itemAmount > 1 ? true : false} // checks if the item amount is greater than one, if so sets the prop to true if not, sets it to false.
                            addition={obj.itemName}
                            productNum={obj.inventoryNum}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <ul>
                    {props.list.map((obj, i) => (
                        <li key={'inventory_' + i}>
                            <GroceryItem 
                            id={obj.inventoryNum}
                            productName={obj.itemName}
                            productPrice={obj.price}
                            productWeight={obj.weight}
                            />
                            <InteractionButton 
                            addToCart={props.addToCart} 
                            removeFromCart={props.removeFromCart} 
                            cartItem={false} 
                            buttonText={props.checkInCart(obj.inventoryNum)} //checks if the item is already in cart and returns true if it is and false if it is not.
                            addition={obj.itemName}
                            productNum={obj.inventoryNum}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default DisplayList;