import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: 'fastest'
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const customer = {}; 
    Object.entries(this.state.orderForm).forEach(el => {
      customer[el[0]] = el[1].value;
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: customer
    };

    axios.post('/orders.json', order)
      .then(res => {
        this.setState({
          loading: false
        });
        this.props.history.replace('/');
      })
      .catch(err => { this.setState({ loading: false }) })
  }

  onChangeHandler = (event) =>{
    // console.log(event.target.name);
    const updateOrderForm = {...this.state.orderForm};
    const updateFormElement = {...updateOrderForm[event.target.name]};
    updateFormElement.value = event.target.value;
    updateOrderForm[event.target.name] = updateFormElement;
    this.setState({
      orderForm: updateOrderForm
    })
  }

  render() {
    let form = (
      <form onSubmit={this.orderHandler}>
        {
          Object.entries(this.state.orderForm).map((el) =>
            (<Input key={el[0]} name={el[0]} elementType={el[1].elementType} elementConfig={el[1].elementConfig} value={el[1].value} onChanged={this.onChangeHandler} />))
        }
        <Button btnType="Success"  >Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;