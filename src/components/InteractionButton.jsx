import React from 'react';
import styles from '../styles/InteractionButton.module.css';

function InteractionButton(props) {

    function handleClick() {
        props.interactionFunction(props.productNum);
    }

    return (
        <button
        className={props.disable == false ? styles.buttonStyle : styles.disabledButtonStyle}
        disabled={props.disable}
        onClick={handleClick}>
            {props.buttonText}
        </button>
    )
}

export default InteractionButton;