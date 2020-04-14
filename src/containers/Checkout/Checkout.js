import React, { Component, Fragment } from "react"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from 'react-router-dom';

class Checkout extends Component {

  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        ingredients: this.props.location.state.ingredients,
        totalPrice: this.props.location.state.totalPrice
      })
    }
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    // console.log(this.props.history);
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    console.log(this.props.location);

    return (
      <Fragment>
        <CheckoutSummary
          onCheckoutCancelled={this.checkoutCancelledHandler}
          onCheckoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}
        />
        <Route path={this.props.match.path + '/contact-data'}
         render={(props)=><ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />} />
      </Fragment>
    );
  }
}


export default Checkout;