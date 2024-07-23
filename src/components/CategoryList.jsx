import React from 'react'
import GroceryItem from './GroceryItem';

function CategoryList(props) {

    return (
        <div className='GroceryList'>
            <ul>
                {props.list.map((obj, i) => 
                    <GroceryItem 
                    key={i} 
                    id={obj.inventoryNum}
                    productName={obj.itemName}
                    productPrice={obj.price}
                    productWeight={obj.weight}
                    />
                )}
            </ul>
        </div>
      )
}

export default CategoryList;