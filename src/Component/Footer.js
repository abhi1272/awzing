import React from "react";
import '../Style.css'
import logo from '../Imgs/logoAwzing.png'

const Footer = ()=>{
    return <div className="footerMain">
       <div className="webDetailsDev">
       <img src={logo} width={200}/>
       <div className="webDetails">
        <p>Working together for a healthier world.</p>
        <p>Mob No. 9135048439</p>
       </div>
       </div>
       <div className="listsDiv">
        <ul>
            <li><a href="/">Home</a> </li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
       </div>
       <div className="listsDiv">
       <ul>
            <li>Products</li>
            <li>Folder</li>
            
        </ul>
       </div>
        </div>
}
export default Footer
