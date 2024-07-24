import React from 'react';
import * as storageModule from '../modules/cart-storage.js'

function InteractionButton(props) {
    const [ inCart, setInCart ] = React.useState(props.cartItem);

    function handleClick() {
        let item = props.addition;
        if (inCart) {
            setInCart(false);
            if (item[item.length - 1] === 's') {
                alert(`${item} have been removed from the cart`);
            } else {
                alert(`${item} has been removed from the cart`);
            }
            props.removeFromCart(props.productNum);
        } else {
            setInCart(true);
            if (item[item.length - 1] === 's') {
                alert(`${item} have been added to the cart`);
            } else {
                alert(`${item} has been added to the cart`);
            }
            props.addToCart(props.productNum);
        }
        
    }

    return (
        <button onClick={handleClick}>{inCart ? 'Remove From Cart' : 'Add To Cart'}</button>
        
    )
}

// <button onClick={handleClick}>{buttonText}</button>
export default InteractionButton;