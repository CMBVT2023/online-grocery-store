import React from 'react';
import AddToCart from './AddToCart';


function GroceryItem(props) {
    
    return (
        <li>
            <h3>{props.item}</h3>
            <h4>${props.price}</h4>
            <h5>{props.weight} lbs</h5>
            <AddToCart addition={props.item}/>
        </li>
    )
}

GroceryItem.defaultProps = {
    item: "PlaceHolder",
    weight: 0,
    price: 0,
}

export default GroceryItem;