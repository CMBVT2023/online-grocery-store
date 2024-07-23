import React from 'react';
import Inventory from '../StoreInventory.js'
import GroceryItem from './GroceryItem';


function GroceryCart(props) {
    const [ userCart, setUserCart ] = React.useState(Inventory);

    // // Will be needed when I store the cart in localStorage.
    // React.useEffect(() => {
    //      setUserCart()
    // }, [userCart]);

    return (
        <div>
            <h1>Cart</h1>
            <ol>
                {userCart.map((obj, i) => <GroceryItem 
                    key={i} 
                    id={obj.inventoryNum}
                    productName={obj.itemName}
                    productPrice={obj.price}
                    productWeight={obj.weight}
                    />)}
            </ol>
        </div>
    )
}

export default GroceryCart;