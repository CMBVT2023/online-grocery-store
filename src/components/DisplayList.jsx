import React from "react";
import GroceryItem from './GroceryItem';
import InteractionButtonGroup from "../containers/InteractionButtonGroup.jsx";
import styles from '../styles/DisplayList.module.css';

function DisplayList(props) {

    if (props.cartItems) {
        return (
            <div className={styles.divStyle}>
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
                            <InteractionButtonGroup
                            forCart={true}
                            addToCart={props.addToCart}
                            removeFromCart={props.removeFromCart}
                            multipleInCart={obj.itemAmount > 1 ? true : false}
                            productNum={obj.inventoryNum}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (
            <div className={styles.divStyle}>
                <ul>
                    {props.list.map((obj, i) => (
                        <li key={'inventory_' + i}>
                            <GroceryItem 
                            id={obj.inventoryNum}
                            productName={obj.itemName}
                            productPrice={obj.price}
                            productWeight={obj.weight}
                            />
                            <InteractionButtonGroup
                            forCart={false}
                            addToCart={props.addToCart}
                            removeFromCart={props.removeFromCart}
                            inCart={props.checkInCart(obj.inventoryNum)} //checks if the item is already in cart and returns true if it is and false if it is not.
                            multipleInCart={obj.itemAmount > 1 ? true : false}
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