import React from "react";
import "../Style.css"
import CallIcon from '@mui/icons-material/Call';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
const ContactBanner = ()=>{
    const isScreenSmall = ()=> {
        return window.innerWidth <= 768}
    return <div className= {isScreenSmall()? "contactBannerMobile":"contactBanner"} >
        <h2> <SettingsSuggestIcon sx={{fontSize:"2rem"}}/> Providing Reliable Results You Can Trust</h2>
        <div className= {isScreenSmall()? "quoteBtnsMobile":"quoteBtns"} >
        <button className={isScreenSmall()? "quoteBtn1Mobile":"quoteBtn1"}>Get A Quote</button>
        <button className={isScreenSmall()? "quoteBtn2Mobile":"quoteBtn2"}> <CallIcon sx={{
            alignItems:"center",
            fontSize:"0.6rem"
        }}/> +91 9135048439</button>
        </div>
       
    </div>
}

export default ContactBanner