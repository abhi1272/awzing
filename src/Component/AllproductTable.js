import React from 'react'
import { useLocation,useParams,useNavigate } from "react-router-dom";
import {useState,useEffect} from  "react"
import { fetcher } from "../fetcher";
import LoadingT from './loading';
import AllProductCard from './AllProductCard';
import noImg from '../Imgs/noimagemed.jpg'
import ContactBanner from './ContactBanner';
import Banner from './banner';


const AllproductTable = ()=>{
    const navigate = useNavigate();
  
    const [result,setResult] = useState([])
    const [relatedPro,setrelatedPro] = useState([])
    const [imagee,setImagee] = useState([])
    // const [specification,setSpecification] = useState({})
    const [category,setCategory ]= useState({})
    const [loading, setLoading] = useState(true);

    const url = "/products"
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
            const data = await fetcher(url)
             setResult (data.data.products)
            
             setLoading(false);
        }catch (error) {
            console.error("Error fetching product data:", error);
            setLoading(false); // Even in error case, stop loading
        } } 
      
        fetchData()

    },[])
   
    const openProduct = (id)=>{
        navigate(`/product/${id}` )
        window.location.reload()
    }

    const renCatT = ()=>{
      
        return result.map( cat => 
         <AllProductCard 
         key={cat.uuid} 
         id={cat.uuid} 
         catName={cat.title}
         productDetail={cat.specifications ? cat.specifications.composition:""}
         showBtn={false}
         packing={cat.specifications ? cat.specifications.packing:""}
         mrp={cat.specifications ? cat.price:""}

         onCatClick={(id)=>openProduct(id,cat.name)}
         />   
        )
    }
  

    const isScreenSmall = ()=>{
        return window.innerWidth <=768
    }
    return (

      <>
       <div style={{margin:"20px"}}>
      <Banner bannerTitle={"All Products"} />
      </div>
        {loading? <LoadingT/>:  
        <div 
        style={{justifyContent:"center"}} 
        className= {isScreenSmall()? "allCatCardMobile" :"allProductCatCard"}>
        {renCatT()}
         </div>}
   
    </>
    )
}
export default AllproductTable