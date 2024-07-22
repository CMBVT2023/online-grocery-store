import React from 'react'
import GroceryItem from './GroceryItem';

function CategoryList(props) {
    let items = props.list.map((item, i) => <GroceryItem id={props.category + "Item_" + i} item={item.name} price={item.price} weight={item.weight} />);
    return (
        // className is specified through a prop since custom components don't have access to className, instead it just passes it as a prop.
        // To solve this issue, simply passing in the class name through the divName prop and then setting it as the class name of the main div works,
        // // Not to sure if this is the best solution but it works.
        <div className={props.divName}>
            <h1>{props.category}</h1>
            <ul>{items}</ul>
        </div>
      )
}

export default CategoryList;