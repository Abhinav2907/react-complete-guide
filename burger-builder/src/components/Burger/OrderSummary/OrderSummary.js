import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
        return (<li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span> :{props.ingredients[igkey]}</li>);
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout??</p>
            <Button btnType="Danger" clicked={props.canc}>CANCEL</Button>
            <Button btnType="Success" clicked={props.cont}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;