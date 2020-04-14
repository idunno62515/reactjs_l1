import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {

  state = {
    orders: null,
    loading: true
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        this.setState({
          orders: Object.values(res.data),
          loading: false
        });
      })
      .catch(console.log);
  }

  render() {

    let orders=null;
    if (!this.state.loading) {
      orders = this.state.orders.map((el, index) => {
        return <Order key={index}  price={el.price} ingredients={el.ingredients} />
      })
    } else {
      orders = <Spinner />
    }

    return (
      <div>
        {orders}
      </div>
    );
  }
}

export default Orders;
