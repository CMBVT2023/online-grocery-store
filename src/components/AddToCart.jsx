import React from 'react';

function AddToCart(props) {
    const [ inCart, setInCart ] = React.useState(false);
    const [ buttonText, setButtonText ] = React.useState('Add To Cart'); 

    React.useEffect(() => {
        if (inCart) {
            setButtonText('Remove From Cart')
        } else {
            setButtonText('Add To Cart')
        }
    }, [inCart])
    
    function handleClick() {
        let item = props.addition;

        if (inCart) {
            setInCart(false);
            if (item[item.length - 1] === 's') {
                alert(`${item} have been removed from the cart`);
            } else {
                alert(`${item} has been removed from the cart`);
            }            
        } else {
            setInCart(true);
            if (item[item.length - 1] === 's') {
                alert(`${item} have been added to the cart`);
            } else {
                alert(`${item} has been added to the cart`);
            }
        }
        
    }

    return (
        <button onClick={handleClick}>{buttonText}</button>
    )
}

export default AddToCart;