import React from  "react"
import "./GameStyle.css"

const Circles = ({id})=>{

    return(
         <div className= {`circle ${ id %2 ===0? "evenC":"oddC"}  `}

       ></div>
    )
}
export default Circles