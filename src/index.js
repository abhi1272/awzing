import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HeaderComponent from './components/header.jsx'
import HomeComponent from './components/home';
import ContactComponent from './components/contact';
import ProductListComponent from './components/product/product-list';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

class MainApp extends Component{
    
    constructor(){
        // componentName = ''
        super()
    }
    render(){
        return <>
                <HeaderComponent/>
                <Router>
                  <div>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/product" component={ProductListComponent} />
                    <Route path="/contact" component={ContactComponent} />
                  </div>
                </Router>
                <h1>Welcome to your life</h1>
                </>
    }
}

ReactDOM.render(<MainApp/> , document.querySelector("#root"))