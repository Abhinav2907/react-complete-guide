import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            country: '',
            zipcode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Abhinav",
                email: 'wert@test.com',
                address: {
                    street: 'jank',
                    zipcode: '123456',
                    country: 'India'
                }
            },
            deliveryMethod: 'fastest'
        }
        axios.post('orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false})
            });
    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your Street Name" />
                <input className={classes.Input} type="text" name="country" placeholder="Your Country" />
                <input className={classes.Input} type="text" name="zip" placeholder="Your PIN Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>);
        if(this.state.loading)
        {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Contact Details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;