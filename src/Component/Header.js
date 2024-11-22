import React from "react"
import { useState,useEffect, } from "react"
import "../Style.css"
import { useNavigate } from "react-router-dom";
import Categories from "./Categories"
import { fetcher } from "../fetcher"
import Logo from '../Imgs/logoSh.png'
import MobileMenu from "./MobileMenu";
import Search from "./Search";

const Header = ()=>{

    const navigate = useNavigate();
    const [searchShow,setSearchShow] = useState(false)
    const isScreenSmall = ()=> {
        return window.innerWidth <= 900}

        const setDisplay = ()=>{
            setSearchShow(true);
            console.log(searchShow)
            
        }
        const hideDis =()=>{
            setSearchShow((prev) => !prev);
        }

        const renSearch = ()=>{
            
               return  <Search display= {true}/>
      
        }
    
    return (

    <div className= {isScreenSmall()? "headerMobile":"header"}>
      
        <div className=  {isScreenSmall()? "headerItemsMobile":"headerItems"}>
        <a href="/"> <img src={Logo} width={250}/></a> 
           
        {isScreenSmall()? <MobileMenu/> : <div className="menuItems">
                               
                                <Categories color={"white"}/>
                               
                                
                                </div>  }
            
                                 </div>
                               
    </div>
    )
}
export default Header