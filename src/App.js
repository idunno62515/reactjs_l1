import React from 'react';
import Layout from './hocs/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        {/* <BurgerBuilder/>
        <Checkout/> */}
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout" component={Checkout}/>
      </Layout>
    </div>
  );
}

export default App;
