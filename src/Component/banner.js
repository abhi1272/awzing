import React from "react";
import '../Style.css'


const Banner =({bannerTitle})=>{
    const isScreenSmall = ()=> {
        return window.innerWidth <= 768}
    return  <div className= {isScreenSmall()? 'bannerMobile' :'banner'}>
    <div className= {isScreenSmall()? 'bannerOppMobile' :'bannerOpp'} >
    </div>
    <h1 style={{marginLeft:"50px"}}> {bannerTitle} </h1>


</div>
}
export default Banner