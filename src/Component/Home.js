import React from  "react"
import {useState,useEffect} from  "react"
import Circles from "./Circles";
import CategoriesCard  from "./CategoriesCard";
import { useNavigate } from "react-router-dom";
import { fetcher } from "../fetcher";
import Loadingt from "./loading";
import Carousel from "./Carousel";
import CarouselHome from "./CarouselHome";
import AboutCard from "./AboutCard";
import ContactBanner from "./ContactBanner";
import Img2 from '../Imgs/homeimg2.webp'
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const Home = ()=>{
 
  const [result,setResult] = useState([])
  const [loading,setLoading] = useState(true)
  const navigate = useNavigate();
  const localdata = JSON.parse(localStorage.getItem("categories"))
  useEffect(()=>{
    const setLocal =()=>{
      if(localdata){
         setResult(JSON.parse(localStorage.getItem("categories")))
        setLoading(false)
      }
     
    }
    

    setLocal()
 
  },[])
  

   const apiuri =  '","'+ "location.city"+'":"'+"Patna"+'","'+"location.state"+'":"'+"Bihar"+'","'+"location.country"+'":"'+"India"+'"}'

   const handleCatClick = (id,catname) =>{
    navigate("/products", { state: { id,catname } })
   }

  
   const renCatT = ()=>{
       return  result.map( (cat, index) => (
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:false, amount:0.4}}
        transition={{duration:0.5,delay: index * 0.1}}
        > 
              <CategoriesCard 
              key={cat.uuid} 
              id={cat.uuid} 
              catName={cat.name}
              image={cat.displayImage}
              productDetail={cat.description}
              showBtn={true}
              onCatClick={(id)=>handleCatClick(id,cat.name)}
              
              />   
        </motion.div>
      
       )
       
       )
   }

   const renAc = ()=>{
    return <AboutCard 
      key={12} 
      cardLabel= "About Company"
      title = "About Us"
      desc = "Awzing Healthcare pvt. ltd. is a pharmaceutical company headquartered at Panchkula(HR). Our main activities are focused on to improve the quality of life by providing better health services by developing and marketing quality and proprietary pharmaceutical product. Every molecule here is researched to trace the soul of happiness. Our significant achievements during the last few years have helped us build an Organization and infrastructure that has led Awzing to spread its wings. At Awzing, New and innovative business models are in motion to make the most of emerging opportunities. We aim to market high quality and affordable pharmaceuticals to be made available everywhere, everyday."
      img = "https://5.imimg.com/data5/SELLER/Default/2022/3/KF/CN/NG/22057608/whatsapp-image-2022-03-22-at-11-03-46.jpeg"
      onAboutCardClick={()=>  navigate("/about-us")}
     
     />   
    
}



   const catProduct = ()=>{
    // return product.map( pro => 
    //  <CategoriesCard 
    //  key={pro.uuid} 
    //  id={pro.uuid} 
    //  catName={pro.title}
    //  image={pro.images[0]}
    //  productDetail={pro.description}
    //  onCatClick={()=>handleCatClick(pro.uuid)}
     
    //  />   
    // )

    
}
   
  
   
const isScreenSmall = ()=> {
  return window.innerWidth <= 768}
  const isMedSmall = ()=>{
    return window.innerWidth <=900
}
  return ( 
    <>
   
  
      <div >
    <CarouselHome/>

    
   {renAc()}
 
    <h1 style={{textAlign:"center", }}>Products Categories</h1>
    {loading? <h2 style={{textAlign:"center"}} >Loading....</h2>:(  
   <div style={{justifyContent:"center"}} className= {isScreenSmall()? "allCatCardMobile" :  isMedSmall()? "allProductsShowTab": "allCatCard"}>
   {renCatT()}
   </div>)
   }
   <ContactBanner/>
   
   
   <h1 style={{textAlign:"center", }}>Our Products</h1>
   <Carousel/>
  

  
   </div>
 </>
  )
}

export default Home
