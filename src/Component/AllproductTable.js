import React,{useRef} from 'react'
import { useLocation,useParams,useNavigate } from "react-router-dom";
import {useState,useEffect} from  "react"
import { fetcher } from "../fetcher";
import LoadingT from './loading';
import AllProductCard from './AllProductCard';
import noImg from '../Imgs/noimagemed.jpg'
import ContactBanner from './ContactBanner';
import Banner from './banner';
import  html2pdf  from 'html2pdf.js';


const AllproductTable = ()=>{
    const navigate = useNavigate();
    const DivRef = useRef()
  
    const [result,setResult] = useState([])
    // const [specification,setSpecification] = useState({})
    const [loading, setLoading] = useState(true);

    const url = "/products"
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
            const data = await fetcher(url)
             setResult (data.data.products)
            
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

    const renCatT = ()=>{
      
        return result && result.map( (cat ,index) => (
         
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{cat ? cat.title:""} </td>
            <td>{cat.specifications ? cat.specifications.composition:""} </td>
            <td>{cat.specifications ? cat.specifications.packing:""} </td>
            <td>₹ {cat ?cat.price: ""} </td>
           </tr>
       
        ));
    }
  

    const isScreenSmall = ()=>{
        return window.innerWidth <=768
    }

    const donwloadHandler =()=>{
        const contentRef = DivRef
        const element = contentRef.current;
        const options = {
          margin: 1,
          filename: "awzing-all-product.pdf",
          html2canvas: { scale: 5 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };
        html2pdf().set(options).from(element).save();
    }


    return (

      <div  >
       <div  style={{margin:"20px"}}>
      <Banner bannerTitle={ `All Products` } />
      </div>
        {loading? <LoadingT/>: 
        <>
             <div ref={DivRef} className='productDetailList'>
                <h2 style={{
                    textAlign:"center",
                    padding:"10px"
                }}>Awzing Heathcare Pvt. Ltd.</h2>
                 { result && (
             <table className='table table-striped  table-bordered '>
                <thead className='tblHead'>
                <tr className='thead'>
                    <th>No.</th>
                    <th>Name</th>
                    <th>COMPOSITION</th>
                    <th>PACK</th>
                    <th>MRP</th>
                </tr>
               </thead>
               <tbody>
             {renCatT()}
              
               </tbody>
                </table>
                )}
                 
                 </div>

                <div style={{
                    width:"100%",
                    textAlign:"center",
                    
                    }} >
                <button style={{
                position:"fixed",
                    bottom:"40px",
                    right:"20px",
                    alignItems:"center",
                    backgroundColor:"#3275e0",
                    border:"none",
                    padding:"10px",
                    fontSize:"1.1rem",
                    color:"white",
                    borderRadius:"5px",
                    fontWeight:"600",
                    cursor:"pointer"
                }} onClick={donwloadHandler} > Download As Pdf ⬇️</button>
                </div>

                </>
                 
                 }
   
    </div>
    )
}
export default AllproductTable