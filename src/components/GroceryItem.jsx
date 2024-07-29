import React from 'react';

function GroceryItem(props) {
    return (
        <div>
            <h3>{props.productName}</h3>
            <h4>${props.productPrice}</h4>
            <h5>{props.productWeight} lbs</h5>
            {props.productAmount !== undefined && <h5>Items: {props.productAmount}</h5>}
        </div>
    )
}

GroceryItem.defaultProps = {
    productName: "PlaceHolder",
    productWeight: 0,
    productPrice: 0,
}

export default GroceryItem;