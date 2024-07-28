import React from 'react'
import GroceryItem from './GroceryItem';
import InteractionButton from './InteractionButton';

function GrocerySelection(props) {
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

    const checkInCart = (id) => {
        let result = false;
        idArray.map((i) => {
            i == id ? result = true : ''
        });
        return (result ? '+' : 'Add To Cart');
    }

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
                    <InteractionButton addToCart={props.addToCart} removeFromCart={props.removeFromCart} cartItem={false} buttonText={checkInCart(obj.inventoryNum)} addition={obj.itemName} productNum={obj.inventoryNum}/>
                </li>))}
            </ul>
        </div>
      )
}

export default GrocerySelection;