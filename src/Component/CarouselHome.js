import React  from "react";
import { useState,useEffect } from "react";
import "./Carousel.css";
import Search from "./Search";


const CarouselHome = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [ 
        "https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1639829743267-cb0341cf341e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661304713898-b6980743aa2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

   
    useEffect(() => {
        const interval = setInterval(() => {
         
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
         
        }, 4000); // Change slide every 2 seconds
      
        return () => clearInterval(interval); // Cleanup interval on component unmount
    
      }, [images.length]);
      const isScreenSmall = ()=> {
        return window.innerWidth <= 768}
     return<>
      <div className="carousel-container-home">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         > 
                {images.map((img,index) => ( 
                <img 
                src= {img} 
                alt= {`image ${index+1}`} 
                className="carousel-image-home"
                 />
                
                )
                )}
               
                </div>
              
               
                </div>
              
  
    
    </>
}
export default CarouselHome