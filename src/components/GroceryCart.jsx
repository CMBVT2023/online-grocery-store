import React from 'react';
import GroceryItem from './GroceryItem';
import InteractionButton from './InteractionButton.jsx';

function GroceryCart(props) {
    const [userCart, setUserCart] = React.useState(props.cart);
    const [idArray, setIdArray] = React.useState([]);

    React.useEffect(() => {
        setUserCart(props.cart);
    }, [props.cart])

    React.useEffect(() => {
        setIdArray((prev) => {
            if (prev.length != 0) {
                userCart.map((item) => {
                   prev.indexOf(item.inventoryNum == -1) ? prev.push(item.inventoryNum) : '';
                })
            } else {
                userCart.map(item => prev.push(item.inventoryNum));
            }
            return prev;
        })
    }, [userCart])

    if (userCart.length == 0) {
        return (
            <div>
                <h1>Cart</h1>
                <p>Empty</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Cart</h1>
                <ol>
                    {userCart.map((obj, i) => (
                        <li key={i} >
                            <GroceryItem 
                            id={obj.inventoryNum}
                            productName={obj.itemName}
                            productPrice={obj.price}
                            productWeight={obj.weight}
                            productAmount={obj.itemAmount}
                            /> 
                            <InteractionButton removeFromCart={props.removeFromCart} cartItem={true} buttonText={(obj.itemAmount > 1 ? '-' : 'Remove From Cart')} addition={obj.itemName} productNum={obj.inventoryNum}/>
                        </li>)
                        )}
                </ol>
                <button onClick={props.clearCart}>Clear Cart</button>
            </div>
        )
    }
}

export default GroceryCart;