import React from 'react'
import { useLocation,useParams,useNavigate } from "react-router-dom";
import {useState,useEffect} from  "react"
import { fetcher } from "../fetcher";
import LoadingT from './loading';
import AllProductCard from './AllProductCard';
import CarouselHome from './CarouselHome';
import noImg from '../Imgs/noimagemed.jpg'
import ContactBanner from './ContactBanner';
import Banner from './banner';


const AllproductTable = ()=>{
    const navigate = useNavigate();

    const image =[ [ 
        "https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1639829743267-cb0341cf341e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661304713898-b6980743aa2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ], [ 
        "https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1639829743267-cb0341cf341e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661304713898-b6980743aa2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]]
  
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
      
        return image.map( (img,index) => 
         <CarouselHome 
         key={index} 
         imgs={img}
        
         />   
        )
    }
  

    const isScreenSmall = ()=>{
        return window.innerWidth <=768
    }
    return (

      <>
      <div style={{margin:"20px"}}>
      <Banner bannerTitle={"Folder"} />
      </div>
        {loading? <LoadingT/>:  
        <div style={{justifyItems:"center",margin:20}}>
       <div  className= {isScreenSmall()? 'productImgMobile':'productImg'}>
        {renCatT()}
         </div>
         
         </div>}
         
   
    </>
    )
}
export default AllproductTable