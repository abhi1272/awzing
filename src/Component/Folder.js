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
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder1.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder2.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder3.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder4.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder5.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder6.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder7.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder8.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder9.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder10.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder11.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder12.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder13.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder14.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder15.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder16.jpeg",
        "https://www.awzinghealthcare.com/assets/img/product_folder/folder17.jpeg"
    ],]
  
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