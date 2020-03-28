import React, { Component } from "react";
import Aux from "../../hocs/Auxi/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumay from "../../components/Burger/OrderSumary/OrderSumary";


const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
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

  purchaseContinueHandler = ()=>{
    alert('Your continue!');
  }

  render() {

    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPerchaseHandler}>
          <OrderSumay ingredients={this.state.ingredients} purchaseCancel={this.cancelPerchaseHandler} purchaseContinue={this.purchaseContinueHandler}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdd={this.addIngredientHandler}
          ingredientMinus={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.perchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;