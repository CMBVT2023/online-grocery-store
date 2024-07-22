import React from 'react';

function AddToCart(props) {
    let item = props.addition;
    function handleClick() {
        if (item[item.length - 1] === 's') {
            alert(`${item} have been added to the cart`);
        } else {
            alert(`${item} has been added to the cart`);
        }
    }
    return (
        <button onClick={handleClick}>Add To Cart</button>
    )
}

export default AddToCart;