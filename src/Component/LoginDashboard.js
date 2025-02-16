import React from "react";
import { useState } from "react";
import ListedProduct from "./ListedProduct";
import Addproduct from "./AddProduct"
import "../Style.css"


const LoginDashboard = ()=>{
    const [display,setDisplay] = useState(false)

    return <div>
        <div style={{
        display:"flex",
        margin:"auto",
        justifyContent:"center"
        }}>
        <button 
        style={{
            backgroundColor: !display && "black",
        }} 
        onClick={()=> setDisplay(false)} 
        className="btnsDashboard"
        >Listed Product</button>
        <button
         style={{
            backgroundColor: display && "black",
        }} 
         onClick={()=> setDisplay(true)} className="btnsDashboard">Add New Product</button>
        </div>
        <hr style= {{border: "1px solid #ccc", margin:  "20px 0"}}/>
        {display?  <Addproduct/>:<ListedProduct/> } 
    </div>
}
export default LoginDashboard