import React from 'react';
import Carousel from './Component/Carousel';
import Dashboard from './Component/Home';
import Header from './Component/Header';
import Products from './Component/Products';
import ProductsDetailPage from './Component/ProductDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './Component/AddProduct';
import Footer from './Component/Footer';
import Login from './Component/login';
function App() {
 
 
  return (
   
      <>
        <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductsDetailPage/>} />
          {/* <Route path="/add-product" element={<AddProduct/>} /> */}
          <Route path="/login" element={<Login/>} />
        </Routes>
        </Router>
        <Footer/>
      </>
  
  );
}

export default App;
