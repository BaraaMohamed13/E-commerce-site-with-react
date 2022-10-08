import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";

import ProductsList from "./components/productsList";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/not-found";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contactUs"
import Buttons from "./components/buttons";

function App() {
  return (
    
    <>
      <NavBar />
      
      <div className="container">
        <Switch>
          <Route path="/home" exact component={ProductsList} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={Contact} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="not-found" />
        </Switch>
       
        <Footer/>

      </div>
    </>
  );
}

export default App;
