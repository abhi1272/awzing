import React from  "react"
import Circles from "./Circles";
import { fetcher } from "../fetcher";
import { useNavigate } from "react-router-dom";
import { useState,useEffect, } from "react"



const Categories = ({color})=>{

  const navigate = useNavigate();
  const [result,setResult] = useState([])
  
       useEffect( ()=>{
      const fetchData = async ()=>{
      const data = await fetcher("/categories")
      setResult(data.data)
      }
      fetchData()
      }, [])

      const handleCatClick = (id,catname) =>{
          navigate("/products", { state: { id,catname } })
          window.location.reload()
         }

  return ( 
    <>
    {result.map(catt =>{
      return   <button 
      style={{ 
       margin:"10px",
       cursor:"pointer",
       border:"none",
       fontWeight:"bold",
       backgroundColor:"transparent",
       color: color,
       fontSize:"1rem"
     }} 
      key={catt.uuid} 
      onClick={()=> handleCatClick(catt.uuid,catt.name)}
      >{catt.name}</button> 
    })}
 
   </>
 
  )
}

export default Categories
