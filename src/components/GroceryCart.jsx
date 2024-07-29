import React from 'react';
import GroceryItem from './GroceryItem';
import InteractionButton from './InteractionButton';

function GroceryCart(props) {
    return (
        <div className='grocery'>
            <ul>
            {props.userCart.map((obj, i) => (
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
}

export default GroceryCart;