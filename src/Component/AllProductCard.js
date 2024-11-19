import React from 'react'
import noImg from '../Imgs/noimagemed.jpg'

const AllProductCard =({id, catName,onCatClick,productDetail,mrp,packing,showBtn})=>{
    const testTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada tincidunt"
   const productTxt = productDetail  || ""
   const isScreenSmall = ()=>{
    return window.innerWidth <=768
}
    return (
        
    <div key={id} onClick={()=>onCatClick(id)} className={isScreenSmall()? 'allProductCatCardMobile' : 'allProductcardBody'} >
        <div className='cardContent'>
            <h3> {catName.length > 50? catName.slice(0,50)+'...':catName}</h3>
             {productTxt.length > 100? "Composition: "+productTxt.slice(0,100)+'...': "Composition: " +productTxt || testTxt }
             {packing && <h6>PACK: {packing} | PRICE: ₹{mrp}</h6>}
          
           
        </div>
        
        <div className='cardFooter'>
    
          {showBtn && <button onClick={()=>onCatClick(id)}>View</button>}
        
        </div>
    </div>
)
}
export default AllProductCard