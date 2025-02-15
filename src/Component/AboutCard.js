import React from "react";
import "../Style.css"
import {motion} from "framer-motion"

const AboutCard = ({title,desc,img,cardLabel,onAboutCardClick})=>{
    const isScreenSmall = ()=>{
        return window.innerWidth <=768
    }
 return( 
<div className= {isScreenSmall()? "AboutCardMobile" :"AboutCard"}>
<motion.div 
  initial={{opacity:0, x:1}}
  whileInView={{opacity:1, x:0}}
  viewport={{once:false,amount: 0.4}}
  transition={{duration:0.5}}
>
    <div className= {isScreenSmall()? "aboutDivContentMobile":"aboutDivContent"}>
    <h3>{cardLabel}</h3>
    <h1>{title}</h1>
    <p>{desc}</p>
    <button onClick={()=>onAboutCardClick()} > Read More</button>
    </div>
    </motion.div>

    <motion.div 
  initial={{opacity:0, x:50}}
  whileInView={{opacity:1, x:0}}
  viewport={{once:false,amount: 0.4}}
  transition={{duration:0.5}}
>

<div   className={isScreenSmall()? "aboutCardImgMobile" : "aboutCardImg"}>
        <img src={img}/>
    </div>
 </motion.div>
   

 </div>
 )
}
export default AboutCard;