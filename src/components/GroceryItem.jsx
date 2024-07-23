import React from 'react';
import AddToCart from './AddToCart';

function GroceryItem(props) {
    return (
        <li>
            <h3>{props.productName}</h3>
            <h4>${props.productPrice}</h4>
            <h5>{props.productWeight} lbs</h5>
            <AddToCart addition={props.productName}/>
        </li>
    )
}

GroceryItem.defaultProps = {
    productName: "PlaceHolder",
    productWeight: 0,
    productPrice: 0,
}

export default GroceryItem;