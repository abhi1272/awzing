import React from "react";
import "../Style.css"

const AboutCard = ({title,desc,img,cardLabel,onAboutCardClick})=>{
    const isScreenSmall = ()=>{
        return window.innerWidth <=768
    }
 return <div className= {isScreenSmall()? "AboutCardMobile" :"AboutCard"}>
    <div className= {isScreenSmall()? "aboutDivContentMobile":"aboutDivContent"}>
    <h3>{cardLabel}</h3>
    <h1>{title}</h1>
    <p>{desc}</p>
    <button onClick={()=>onAboutCardClick()} > Read More</button>
    </div>
    <div   className={isScreenSmall()? "aboutCardImgMobile" : "aboutCardImg"}>
        <img src={img}/>
    </div>

 </div>
}
export default AboutCard;