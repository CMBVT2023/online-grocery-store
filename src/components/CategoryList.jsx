import React from 'react'
import GroceryItem from './GroceryItem';

function CategoryList(props) {
    let items = props.list.map((item, i) => <GroceryItem id={props.category + "Item_" + i} item={item.name} price={item.price} weight={item.weight} />);
    return (
        <div className='GroceryList'>
            <h1>{props.category}</h1>
            <ul>{items}</ul>
        </div>
      )
}

export default CategoryList;