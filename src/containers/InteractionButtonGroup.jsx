import React from 'react';
import InteractionButton from '../components/InteractionButton';

function InteractionButtonGroup(props) {

    if (props.forCart) {
        return (
        <div>
            <InteractionButton
                    buttonText={'-'}
                    interactionFunction={props.removeFromCart}
                    disable={(props.multipleInCart) ? false : true}
                    productNum={props.productNum}
                    editAmount={true}
                    />
    
            <InteractionButton 
                    buttonText={'Remove From Cart'}
                    interactionFunction={props.removeFromCart}
                    disable={false}
                    productNum={props.productNum}
                    editAmount={false}
                    />
    
            <InteractionButton
                    buttonText={'+'}
                    interactionFunction={props.addToCart}
                    disable={false}
                    productNum={props.productNum}
                    editAmount={true}
                    />
            </div>
        )
    } else {
        return (
            <div>
                <InteractionButton
                    buttonText={'-'}
                    interactionFunction={props.removeFromCart}
                    disable={(props.multipleInCart && props.inCart) ? false : true}
                    productNum={props.productNum}
                    />
    
                <InteractionButton 
                    buttonText={props.inCart ? 'Remove From Cart' : 'Add To Cart'}
                    interactionFunction={props.inCart ? props.removeFromCart : props.addToCart}
                    disable={false}
                    productNum={props.productNum}
                    />
    
                <InteractionButton
                    buttonText={'+'}
                    interactionFunction={props.addToCart}
                    disable={props.inCart ? false : true}
                    productNum={props.productNum}
                    />
            </div>
        )
    }
}

export default InteractionButtonGroup;