import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import LandingPage from './containers/LandingPage/LandingPage';
import Checkout from "./containers/Checkout/Checkout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render(){
    return (
      <div>
        <Layout>
          {/*<LandingPage />
           <BurgerBuilder />
          <Checkout /> */}

        <Switch>
          <Route path="/builder" exact component={BurgerBuilder} />
          <Route path="/checkout"  component={Checkout} />
          <Route path="/orders"  component={Orders} />
          <Route path="/" exact component={LandingPage} />
          <Route component={ErrorPage}/>

          <Redirect from="/burgerbuilder" to="/builder" />
          <Redirect from="/burger-builder" to="/builder" />
          <Redirect from="/home" to="/" exact />
        </Switch>
          
        </Layout>
      </div>
    )
  }
}

export default App;
