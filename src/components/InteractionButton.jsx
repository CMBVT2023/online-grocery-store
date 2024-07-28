import React from 'react';

function InteractionButton(props) {
    const [buttonText, setButtonText] = React.useState('');

    React.useEffect(() => {
            setButtonText(props.buttonText);
    }, [props.buttonText]);

    function handleClick(bool) {
        if (bool) {
            props.removeFromCart(props.productNum);
        } else {
            props.addToCart(props.productNum);
        }    
    }

    return (
        <button onClick={() => {handleClick(props.cartItem)}}>{buttonText}</button>
    )
}

export default InteractionButton;