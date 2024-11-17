import React from "react";
import { useState,useEffect } from "react";
import { fetcher } from "../fetcher";
import CategoriesCard from './CategoriesCard'
import { useNavigate } from "react-router-dom";
import Banner from "./banner";
import '../'

const ListedProduct = ()=>{
    const navigate = useNavigate();
    const[result,setResult]= useState([])

    useEffect(()=>{
        const fetchData = async()=>{
        const data = await fetcher("/products/user/c05ebaf6-72e0-45f9-98cf-2934788f6577")
        setResult(data.data)
    }
    fetchData()
   
    },[])
   console.log(result)

   const handleCatClick = id =>{
    navigate(`/product/${id}` )
    window.location.reload()
   }

const catProduct = ()=>{
    return result.map( pro => 
     <CategoriesCard 
     key={pro.uuid} 
     id={pro.uuid} 
     catName={pro.title}
     image={pro.images[0]}
     proDate= {pro.createdAt}
     productDetail={pro.description}
     onCatClick={()=>handleCatClick(pro.uuid)}
     />   
    )
}

            const isScreenSmall = ()=>{
                return window.innerWidth <= 768
            }
    return <div className="addProductDev">
        <Banner bannerTitle= {result? "Listed Product": "No Listed Product Found"}/>
        <div  style={{justifyContent:"center"}} className= {isScreenSmall()? "allProductsShowMobile" :"allProductsShow"}>
        {result && catProduct()}
        </div>

    </div>
}
export default ListedProduct