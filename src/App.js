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
import AllproductTable from './Component/AllproductTable';
import Folder from './Component/Folder'
import Aboutus from './Component/AboutUs';
function App() {
 
 
  return (
   

      <div style={{height:"100%"}}>
        <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductsDetailPage/>} />
          <Route path="/all-products" element={<AllproductTable/>} />
          <Route path="/folder" element={<Folder/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about-us" element={<Aboutus/>} />
        </Routes>

        </Router>
        <Footer/>
     
        </div>
    
  );
}

export default App;
