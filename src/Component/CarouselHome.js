import React  from "react";
import { useState,useEffect } from "react";
import "./Carousel.css";
import Search from "./Search";
import Noimage from "../Imgs/noimagemed.jpg"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const CarouselHome = ({imgs})=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const image = [ 
        "https://blogger.googleusercontent.com/img/a/AVvXsEiH0a3YbZNhDQThpoxJh5je-U-_HMW9PNzHGfQhZOqrNa3mSgmCMuixiK4_ahG67JHQqttuDqcNC2nlhWCX0CbZyL7Y1FZfwIK0t7WGpm_uP7SyO4AGpo-On6r35mckpL6euwY8sUhZnmiGl4JhgZ7fTKnQGSxnFYSYdDjx6T8Uy3xL-ECqGv77qNxqnV5d",
        "https://blogger.googleusercontent.com/img/a/AVvXsEhPWCw58fvMESEe7cbDkbjysoq4CwCP_Q6bEAExUtGMt_TyTIT4rcK6oERO0zbtzd07WryGTAYqg1J_2KNKAjHWrFfFUYpadX-MmxiGqdG2mTfKBolVT35z7HPo70TZoNRKB27_P0K8luONZLiE4SvWNZ2oqaryrEzh7MA81EunqMrGOhStTyJBOedKzK97",
    ]

    const [images,setimages]= useState([])

    const imgg = imgs&&`${imgs[0]}`.includes("bidzbay")


   
    useEffect(() => {
        setimages(imgs ? imgg?  [Noimage] :imgs : image)

       
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
                alt= "images"
                className={ isScreenSmall()?  imgs? "carousel-image-deatilpage-mobile": "carousel-image-home-mobile" : imgs? "carousel-image-deatilpage": "carousel-image-home"}
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