import React from 'react';
import styles from '../styles/InteractionButton.module.css';

function InteractionButton(props) {
    const [buttonText, setButtonText] = React.useState('');

    React.useEffect(() => {
        if (props.cartItem) {
            setButtonText(props.buttonText ? '-' : 'Remove From Cart');
        } else {
            setButtonText(props.buttonText ? '+' : 'Add To Cart');
        }
    }, [props.buttonText, props.cartItem]);

    function handleClick(bool) {
        if (bool) {
            props.removeFromCart(props.productNum);
        } else {
            props.addToCart(props.productNum);
        }    
    }

    return (
        <button onClick={() => {handleClick(props.cartItem)}} className={styles.buttonStyle}>{buttonText}</button>
    )
}

export default InteractionButton;