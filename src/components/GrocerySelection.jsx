import React from 'react'
import GroceryItem from './GroceryItem';
import InteractionButton from './InteractionButton';

function CategoryList(props) {

    return (
        <div className='GroceryList'>
            <ul>
                {props.list.map((obj, i) => (
                    <li key={i} >
                        <GroceryItem 
                        id={obj.inventoryNum}
                        productName={obj.itemName}
                        productPrice={obj.price}
                        productWeight={obj.weight}
                        /> 
                        <InteractionButton addToCart={props.addToCart} removeFromCart={props.removeFromCart} cartItem={false} addition={obj.itemName} productNum={obj.inventoryNum}/>
                    </li>)
                    )}
            </ul>
        </div>
      )
}

export default CategoryList;