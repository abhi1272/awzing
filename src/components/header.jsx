import  { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import HomeComponent from './home';
import ContactComponent from './contact';
import ProductListComponent from './product/product-list';

  
class HeaderComponent extends Component {
    constructor(){
        super()
    }

    render(){
        return <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Router>
                        <Nav bg="light" variant="light">
                            <Nav.Link><Link to="/" >Home</Link></Nav.Link>
                            <Nav.Link><Link to="/product" >Product</Link></Nav.Link>
                            <Nav.Link><Link to="/contact" >Contact</Link></Nav.Link>
                            <Nav.Link><Link to="/" >Gallery</Link></Nav.Link>
                            <Nav.Link><Link to="/">Login/Signup</Link></Nav.Link>
                        </Nav>
                    </Router>
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    }
} 

export default HeaderComponent
