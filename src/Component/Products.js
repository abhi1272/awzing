import React from "react"
import {useState,useEffect} from  "react"
import { useLocation } from "react-router-dom";
import CategoriesCard  from "./CategoriesCard";
import { fetcher } from "../fetcher";
import { useNavigate } from "react-router-dom";
import LoadingT from "./loading";
import Banner from "./banner";
import Search from "./Search";




const Product= ()=>{
    const apiuri =  '","'+ "location.city"+'":"'+"Patna"+'","'+"location.state"+'":"'+"Bihar"+'","'+"location.country"+'":"'+"India"+'"}'
    const location = useLocation();
    const dataCat= location.state?.id || null;
    const dataCatName= location.state?.catname || null;
    var dataSearch = location.state?.inputValue || null;
    const navigate = useNavigate();

    const [result,setResult] = useState([])
   
    const [loading,setLoading] = useState(true)

    useEffect( ()=>{

        const fetchData = async ()=>{
            if(dataCat){
            const data  = await fetcher("/products?filter={" + '"' + "category.uuid"+'":"' + dataCat  + apiuri)
            setResult(data.data.products)
        }
        if(dataSearch){
            const searchData = await fetcher("/products?search="+ dataSearch)
            setResult(searchData.data.products)
        }
           
           
            setLoading(false)
        }

        fetchData()
        }, [dataSearch])
        
        const handleCatClick = id =>{
            navigate(`/product/${id}` )
          
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
            return window.innerWidth <=768
        }
    return (
    <>
    {loading? <LoadingT/> :
    (<div className={isScreenSmall()? 'mainDivProductMobile'  : 'mainDivProduct'} >

        <Banner bannerTitle= { dataSearch? result[0]? "Showing Product For " + dataSearch: dataSearch+" Not Available" : dataCatName }/>
       
    <div  style={{justifyContent:"center"}} className= {isScreenSmall()? "allProductsShowMobile" :"allProductsShow"}>
    { !result[0]? <h3 style={{textAlign:"center"}}>No Product Available</h3> : catProduct()}
   </div>
    </div>)
    }
    </>
    )
}
export default Product