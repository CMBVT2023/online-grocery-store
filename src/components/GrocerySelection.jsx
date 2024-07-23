import React from 'react';
import Inventory from '../StoreInventory.js'
import CategoryList from './CategoryList';

function GrocerySelection() {
    return (
          <div className='StoreFront'>
            <CategoryList list={Inventory}/>
          </div>
      )
}

export default GrocerySelection;