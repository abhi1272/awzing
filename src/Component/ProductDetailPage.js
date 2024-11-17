import React from 'react'
import { useLocation,useParams,useNavigate } from "react-router-dom";
import {useState,useEffect} from  "react"
import { fetcher } from "../fetcher";
import LoadingT from './loading';
import CategoriesCard from './CategoriesCard';
import noImg from '../Imgs/noimagemed.jpg'
import ContactBanner from './ContactBanner';
import Banner from './banner';


const ProductDetailPage = ()=>{
    let params = useParams()
    const location = useLocation();
    const dataCat= params.id || null;
    const navigate = useNavigate();
  
    const [result,setResult] = useState([])
    const [relatedPro,setrelatedPro] = useState([])
    const [imagee,setImagee] = useState([])
    const [specification,setSpecification] = useState({})
    const [category,setCategory ]= useState({})
    const [loading, setLoading] = useState(true);

    const url = "/products/" + dataCat

    const relatedProUrl = "/products/" + dataCat + "?includeSimilarProducts=true"
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
            const data = await fetcher(url)
            const relateData = await fetcher(relatedProUrl)
             setResult (data.data.product)
             setrelatedPro (relateData.data.similarProducts)
             setImagee (data.data.product.images[0])
             setSpecification(data.data.product.specifications)
             setCategory(data.data.product.category)
             setLoading(false);
        }catch (error) {
            console.error("Error fetching product data:", error);
            setLoading(false); // Even in error case, stop loading
        } } 
      
        fetchData()

    },[])
   
    const openProduct = (id)=>{
        navigate(`/product/${id}` )
        window.location.reload()
    }
    const showRelatedProduct = ()=>{
        return relatedPro.map(related => 
        <CategoriesCard
        id={related.uuid}
        catName={related.title}
        image={related.images[0]}
        productDetail={related.description}
        proDate={related.postedAt}
        onCatClick={()=> openProduct(related.uuid) }
        />)
    }

    const isScreenSmall = ()=>{
        return window.innerWidth <=768
    }
    return (

      <>
        {loading? <LoadingT/>: 
        
        (<div className={isScreenSmall()? 'mainDivProductMobile'  : 'mainDivProduct'} >

            <Banner bannerTitle={result? result.title:"Loading"}/>
<div className= {isScreenSmall()? 'productPageMobile':'productPage'}>
<div className= {isScreenSmall()? 'productImgMobile':'productImg'}>
    <img src= {imagee? imagee: noImg} alt='image'/>
</div>
<div className='productDetails'>
            <div className='productTitle'>
                <h1>{result.title}</h1>
            </div>
         <div className='productDetailList'>
         <table className='table table-striped  table-bordered '>
            <thead className='tblHead'>
            <tr className='thead'>
                <th>Name</th>
                <th>Description</th>
            </tr>
           </thead>
           <tbody>
           <tr>
            <td>Category</td>
            <td> { category? category.name : ""}</td>
           </tr>
           <tr>
           <td>Composition</td>
           <td>{specification? specification.composition :""}</td>
           </tr>
           <tr>
           <td>Packing</td>
           <td>{ specification? specification.packing :""  }</td>
           </tr>
           <tr>
           <td>MRP</td>
           <td> ₹ {result.price} <span style={{fontSize:"0.7rem"}}>M.R.P</span> </td>
           </tr>
           </tbody>
            </table>
             </div>
    
             </div>
        </div>
        <ContactBanner/>
        <div className= {isScreenSmall()? 'productDescriptionMobile' :'productDescription'}>
        <h2>Product Description</h2>
        <p>{result.description}</p>
</div>

<div className={isScreenSmall()? 'productRelatedMobile' :'productRelated'}>
<h2>Related Products</h2>
<div className={isScreenSmall()? "allProductsShowMobile" :"allProductsShow"}>
{showRelatedProduct()}
</div>
</div>

            </div>)}
   
    </>
    )
}
export default ProductDetailPage