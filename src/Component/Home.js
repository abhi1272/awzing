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


const Home = ()=>{
 
  const [result,setResult] = useState([])
  const [loading,setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect( ()=>{
    const fetch = async ()=>{
      const data = await fetcher("/categories")
      setResult(data.data)
      setLoading(false)

    }
       
    fetch()
   
   }, [])

   const apiuri =  '","'+ "location.city"+'":"'+"Patna"+'","'+"location.state"+'":"'+"Bihar"+'","'+"location.country"+'":"'+"India"+'"}'

   const handleCatClick = (id,catname) =>{
    navigate("/products", { state: { id,catname } })
   }

  
   const renCatT = ()=>{
       return result.map( cat => 
        <CategoriesCard 
        key={cat.uuid} 
        id={cat.uuid} 
        catName={cat.name}
        image={cat.displayImage}
        productDetail={cat.description}
        showBtn={true}
        onCatClick={(id)=>handleCatClick(id,cat.name)}
        
        />   
       )
   }

   const renAc = ()=>{
    return <AboutCard 
      key={1} 
      cardLabel= "About Company"
      title = "About Us"
      desc = "Awzing Healthcare pvt. ltd. is a pharmaceutical company headquartered at Panchkula(HR). Our main activities are focused on to improve the quality of life by providing better health services by developing and marketing quality and proprietary pharmaceutical product. Every molecule here is researched to trace the soul of happiness. Our significant achievements during the last few years have helped us build an Organization and infrastructure that has led Awzing to spread its wings. At Awzing, New and innovative business models are in motion to make the most of emerging opportunities. We aim to market high quality and affordable pharmaceuticals to be made available everywhere, everyday."
      img = "https://5.imimg.com/data5/SELLER/Default/2022/3/KF/CN/NG/22057608/whatsapp-image-2022-03-22-at-11-03-46.jpeg"
      onAboutCardClick={()=>  navigate("/products")}
     
     />   
    
}

const renTAc = ()=>{
  return <AboutCard 
    key={1} 
    cardLabel= "Third Party Pharma Manufacturing with Awzing"
    title = "Hello World"
    desc = "Awzing Healthcare pvt. ltd. is a pharmaceutical company headquartered at Panchkula(HR). Our main activities are focused on to improve the quality of life by providing better health services by developing and marketing quality and proprietary pharmaceutical product. Every molecule here is researched to trace the soul of happiness. Our significant achievements during the last few years have helped us build an Organization and infrastructure that has led Awzing to spread its wings. At Awzing, New and innovative business models are in motion to make the most of emerging opportunities. We aim to market high quality and affordable pharmaceuticals to be made available everywhere, everyday."
    img = {Img2}
    onAboutCardClick={()=>  navigate("/products")}
   
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
  return ( 
    <>
   
    {loading? <Loadingt/>:(  
      <div >
        {/* <MobileMenu/> */}
    <CarouselHome/>
    {renAc()}
    <h1 style={{textAlign:"center", }}>Products Categories</h1>
   <div style={{justifyContent:"center"}} className= {isScreenSmall()? "allCatCardMobile" :"allCatCard"}>
   
   {renCatT()}
   </div>
   <ContactBanner/>
   {renTAc()}
   
   <h1 style={{textAlign:"center", }}>Our Products</h1>
   <Carousel/>
  

  
   </div>)
   }
 </>
  )
}

export default Home
