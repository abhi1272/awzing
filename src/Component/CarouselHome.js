import React  from "react";
import { useState,useEffect } from "react";
import "./Carousel.css";
import Search from "./Search";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const CarouselHome = ({imgs})=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const image = [ 
        "https://blogger.googleusercontent.com/img/a/AVvXsEiH0a3YbZNhDQThpoxJh5je-U-_HMW9PNzHGfQhZOqrNa3mSgmCMuixiK4_ahG67JHQqttuDqcNC2nlhWCX0CbZyL7Y1FZfwIK0t7WGpm_uP7SyO4AGpo-On6r35mckpL6euwY8sUhZnmiGl4JhgZ7fTKnQGSxnFYSYdDjx6T8Uy3xL-ECqGv77qNxqnV5d",
        "https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661304713898-b6980743aa2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const [images,setimages]= useState([])

    

   
    useEffect(() => {
        setimages(imgs? imgs :image)

       
        const interval = !imgs && setInterval(() => {
         
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
         
        }, 4000); // Change slide every 2 seconds
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
    
      }, [images.length]);
      const nxt = ()=>{
     
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        
        );
      }
      const prev = ()=>{
        setCurrentIndex((prevIndex) =>{
         
           return prevIndex === images.length + 1 ? 0 : prevIndex - 1
        } );
      }
     
      const isScreenSmall = ()=> {
        return window.innerWidth <= 900}
     return<>
      <div className="carousel-container-home">
      <div
       id={currentIndex}
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         > 
                {images.map((img,index) => ( 
                <img 
                key={index}
                src= {img} 
                alt= {`image ${index+1}`} 
                className={ isScreenSmall()?  "carousel-image-home-mobile" : "carousel-image-home"}
                 />
                
                )
                
                )}
                 
                </div>
                {imgs && imgs.length>1 && <div style={{zIndex:10000,position:"absolute",top: isScreenSmall()? 135:250,width:"100%"}}>
               {currentIndex !==0 && <button id="imgSlideBtn" onClick={prev}><NavigateBeforeIcon/></button>}
             <button id="imgSlideBtn" style={{justifyContent:"center",position:"absolute",right:0}} onClick={nxt}><NavigateNextIcon/></button>
                </div>}
                </div>
              
           
              
  
    
    </>
}
export default CarouselHome