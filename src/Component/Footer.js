import React from "react";
import '../Style.css'
import logo from '../Imgs/logoAwzing.png'
import MedicationIcon from '@mui/icons-material/ArrowRight';
import CallIcon from '@mui/icons-material/Call';
const Footer = ()=>{
    return <div className="footerMain">
       <div className="webDetailsDev">
       <img src={logo} width={200}/>
       <div className="webDetails">
        <p>Working together for a healthier world.</p>
        <p><CallIcon style={{fontSize:12}}/> 9135048439</p>
       </div>
       </div>
       <div className="listsDiv">
        <ul>
            <li><MedicationIcon style={{fontSize:12}}/><a href="/">Home</a> </li>
            <li><MedicationIcon style={{fontSize:12}}/><a href="/about-us">About Us</a></li>
            <li><MedicationIcon style={{fontSize:12}}/><a href="tel:9135048439">Contact Us</a></li>
        </ul>
       </div>
       <div className="listsDiv">
       <ul>
            <li><MedicationIcon style={{fontSize:12}}/><a href="/all-products">Products</a></li>
            <li> <MedicationIcon style={{fontSize:12}}/><a href="/folder">Folder</a></li>
            
        </ul>
       </div>
        </div>
}
export default Footer
