import React from 'react';
import * as storageModule from '../modules/cart-storage.js'

function InteractionButton(props) {



    function handleClick(bool) {
        if (bool) {
            props.removeFromCart(props.productNum);
        } else {
            props.addToCart(props.productNum);
        }

        
    }

    return (
        <button onClick={() => {handleClick(props.cartItem)}}>{props.cartItem ? 'Remove From Cart' : 'Add To Cart'}</button>
        
    )
}

export default InteractionButton;