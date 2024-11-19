import  React from "react";
import { useState } from "react";
import '../Style.css'
import Categories from "./Categories";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Imgs/logoAwzing.png'
import CancelIcon from '@mui/icons-material/Cancel';

const MobileMenu = ()=>{
    const [display,setDisplay] = useState(true)
    const [search,setSearch] = useState(true)
    const onClickSearch = ()=>{
        if(search === true){
            setSearch(false)
            setDisplay(true)
        }else{
            setSearch(true)
            setDisplay(true)
        }
    }
    const onClickMenu = ()=>{
        if(display === true){
            setDisplay(false)
           
            setSearch(true)
        }else{
            setDisplay(true)
            setSearch(true)
        }
    }
    

    const isScreenSmall = ()=> {
        return window.innerWidth <= 768}

      
    return  <div>
     <div style={{marginLeft:"100px"}}>
        <button style={{
            zIndex:"12000",
            backgroundColor:"transparent",
            border:"none",
            color:"white",
          
            }} onClick={()=> onClickMenu()}> <MenuIcon sx={{fontSize:"2rem"}}/></button>
        {/* <button onClick={()=> onClickSearch()}>  <MenuIcon/></button> */}
        </div>
      
        <div style={{display: display && "none"}}>
        <div style={{
            width:"1500px",
            zIndex:"11000", 
            backgroundColor:" rgba(000,000,000,0.5)",
            position:"absolute",
            top:"0px",
            height:"100vh",
            right:"0px",}}
            onClick={()=>onClickMenu()}>
            
        </div>
            <div style={{
                        zIndex:"11000", 
                        position:"absolute",
                        top:"0px",
                        right:"0px",
                        width:"50vw",
                        height:"100vh",
                        padding: "10px",
                        justifyItems:"center",
                        backgroundColor:"black",  
                        }}> 
                        <CancelIcon onClick={()=>onClickMenu()} style={{color:"white"}}/>

                         <img style={{zIndex:"12000",
                            width:200,
                            height:100
                            }} src={Logo}/>
                       <hr class="dotted"/>
                    <div style={{
                    marginTop:"20px",
                    width:"20vw",
                    }}>
                        
                    <Categories color={"white"}/>
                    </div>
                     
                    </div>
            </div>
       
    
       
    

    </div>
}
export default MobileMenu