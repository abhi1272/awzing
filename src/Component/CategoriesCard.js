import React from 'react'
import noImg from '../Imgs/noimagemed.jpg'

const CategoriesCard =({id, catName,onCatClick,image,productDetail,proDate,showBtn})=>{
    const testTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada tincidunt"
   const productTxt = productDetail  || ""
   const isScreenSmall = ()=>{
    return window.innerWidth <=768
}
    return (
    <div key={id} onClick={()=>onCatClick(id)} className={isScreenSmall()? 'cardBodyMobile' : 'cardBody'} >
        <div className='cardHeader'>
            <img src= {!image? noImg : image }  alt='img'/>
        </div>
        <div className='cardContent'>
            <h3> {catName.length > 50? catName.slice(0,50)+'...':catName}</h3>
             {productTxt.length > 100? productTxt.slice(0,100)+'...':productTxt || testTxt }
             {proDate && <h6> Listed On { proDate.slice(0,10)}</h6>}
        </div>
        
        <div className='cardFooter'>
    
          {showBtn && <button onClick={()=>onCatClick(id)}>View</button>}
        
        </div>
    </div>
)
}
export default CategoriesCard