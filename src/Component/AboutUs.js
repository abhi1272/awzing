import React from "react";
import Banner from "./banner";
import ContactBanner from "./ContactBanner"
const Aboutus = ()=>{
    return <>

<div  style={{margin:"20px"}}>
<Banner
    bannerTitle={"About Us"}
    key={"aboutus"}/> 

    <p style={{
        fontSize:"1.2rem",
         marginLeft:"20%",
         marginRight:"20%",
        textAlign:"center"
    }}>
    Awzing Healthcare pvt. ltd. is a pharmaceutical company headquartered at Panchkula(HR). Our main activities are focused on to improve the quality of life by providing better health services by developing and marketing quality and proprietary pharmaceutical product. Every molecule here is researched to trace the soul of happiness. Our significant achievements during the last few years have helped us build an Organization and infrastructure that has led Awzing to spread its wings. At Awzing, New and innovative business models are in motion to make the most of emerging opportunities. We aim to market high quality and affordable pharmaceuticals to be made available everywhere, everyday.
    </p>
    <ContactBanner/>
    </div>
  
    </>
}
export default Aboutus