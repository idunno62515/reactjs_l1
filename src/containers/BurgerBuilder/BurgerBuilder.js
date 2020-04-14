import React, { Component } from "react";
import Aux from "../../hocs/Auxi/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumay from "../../components/Burger/OrderSumary/OrderSumary";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from '../../hocs/WithErrorHandler/WithErrorHandler';

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    console.log('Buider mounted');
    axios.get('/ingredients.json').then(res => {
      // axios.get('/users').then(res => {
      console.log(res);
      this.setState({ ingredients: res.data });
    }).catch(err => { this.setState({ error: true }) });
  }

  componentWillUnmount() {
    console.log('Buider will unmount');
  }

  updatePurchasable = (ingredients) => {
    let sum = 0;
    new Map(Object.entries(ingredients)).forEach(el => sum += el);
    this.setState({
      purchasable: sum > 0
    });

  }

  ingredientManipulate = (type, action) => {
    const oldCount = this.state.ingredients[type];
    if (action === -1 && oldCount === 0) return;
    const updatedCount = oldCount + 1 * action;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const newTotalPrice = this.state.totalPrice + priceAddition * action;
    this.setState({
      totalPrice: newTotalPrice,
      ingredients: updateIngredients
    });
    this.updatePurchasable(updateIngredients);
  }

  addIngredientHandler = type => {
    this.ingredientManipulate(type, 1);
  }

  removeIngredientHandler = type => {
    this.ingredientManipulate(type, -1);
  }

  perchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  }

  cancelPerchaseHandler = () => {
    this.setState({
      purchasing: false
    });
  }

  purchaseContinueHandler = () => {



    this.props.history.push({
      pathname: '/checkout',
      state: {
        ingredients: this.state.ingredients,
        totalPrice: this.state.totalPrice
      }
    });


  }

  render() {
    // return null;
    const disableInfo = { ...this.state.ingredients };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSumary = null;

    let burger = this.state.error ? <p style={{ textAlign: 'center' }}><strong>Can't load the data from server</strong></p> : <Spinner />

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdd={this.addIngredientHandler}
            ingredientMinus={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.perchaseHandler}
          />
          {/* {burger} */}
        </Aux>
      );
      orderSumary = <OrderSumay ingredients={this.state.ingredients} purchaseCancel={this.cancelPerchaseHandler} purchaseContinue={this.purchaseContinueHandler} />;
    }

    if (this.state.loading) {
      orderSumary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPerchaseHandler}>
          {orderSumary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);