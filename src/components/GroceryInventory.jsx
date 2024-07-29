import React from 'react';
import GroceryItem from './GroceryItem';
import InteractionButton from './InteractionButton';

function GroceryInventory(props) {
    return (
        <div className='grocery'>
          <ul>
            {props.inventory.map((obj, i) => (
              <li key={'inventory' + i}>
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

export default GroceryInventory;