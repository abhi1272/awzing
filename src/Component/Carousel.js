import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { fetcher } from "../fetcher";
import LoadingT from "./loading";
import {  useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
   const apiuri =  '","'+ "location.city"+'":"'+"Patna"+'","'+"location.state"+'":"'+"Bihar"+'","'+"location.country"+'":"'+"India"+'"}'
  const [result, setresult] = useState([])

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async ()=>{
      const data  = await fetcher("/products")
       const pro = data.data.products
      
       const images = pro.slice(0, 20)
     
       setresult(images)
       setLoading(false)
  }

  fetchData()

  },[])

  const [stopInterval, setStopInterval] = useState(false)
  const [picIndex, setPicIndex] = useState()
  
  useEffect(() => {
  const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === result.length - 1 ? 0 : stopInterval?( prevIndex) : (prevIndex + 1 ) 
      );
    },2000); // Change slide every 2 seconds
  
    return () => clearInterval(interval); // Cleanup interval on component unmount

  }, [result.length, stopInterval]);
 

 

  const isSmallScreen = ()=>{
    return window.innerWidth <= 768
  }
  
  return (
  <>
     {loading? <LoadingT/> : 
    <div className= {isSmallScreen()? "carousel-container-Mobile": "carousel-container"}>
      <div
        className="carousel"
        style={{ transform: `translateX(-${isSmallScreen()? currentIndex * 50:currentIndex * 10}%)` }}
      >
        {result.map((image, index) => (
       <div className= {isSmallScreen()?"carousel-new-Mobile":"carousel-new"}>
          <img
            key={index}
            src={image.images[0]}
            alt={`Slide ${index + 1}`}
            className={isSmallScreen()? "carousel-image-Mobile": "carousel-image"}
            style={{position:"static", cursor:"pointer"}}
            onMouseEnter={() => {setStopInterval(true); setPicIndex(index)}}
            onMouseLeave={() => setStopInterval(false)}
            onClick={()=>  navigate(`/product/${image.uuid}` )}
          />
          {stopInterval && picIndex === index && <h1 style={{color:"white",
           
             position:"fixed",
             bottom:"50px",
            
             margin:"auto",
           
             backgroundColor:"black",
             width:"170px",
             fontSize:"1rem",
             alignSelf:"center",
             textAlign:"center",
             
             }}
             onMouseEnter={() => setStopInterval(true)}
             onMouseLeave={() => setStopInterval(false)}
              >{image.title}</h1>}
         </div>
        ))}
      </div>
     
    </div>
      }
      </>
  );
};

export default Carousel;
