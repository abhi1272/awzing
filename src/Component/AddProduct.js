import React, { useState, useEffect } from 'react'
import { fetcher } from "../fetcher";
import '../Style.css'
import Banner from './banner';

const AddProduct = () => {
  const [categories,setCategories] = useState([]) 
  const onSubmit = async () => {
    const form = document.getElementById('addProductForm')
    const formData = new FormData(form)
    const userToken = sessionStorage.getItem('token')
    try {
      const response = await fetch('https://api.techmavericks.in.net/api/ps/v1/products/', {
        method: 'POST',
        headers: {
          'Authorization':  `Bearer ${userToken}`
        },
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        alert('Form submitted successfully');
        console.log(result);
      } else {
        const error = await response.json();
        alert(`Error submitting form: ${error.message}`);
        console.error(error);
      }
    
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(()=>{
    const fetch = async()=>{
      const data = await fetcher('/categories')
      setCategories(data.data)
    }
    fetch()
  },[])

  const [subCat,setSubCat] = useState([])
  const[catName, setCatName] = useState()
   
  const showSubCat = (e)=>{
   

    const cat = ()=> categories.filter(cate => cate.uuid === e.target.value)
    const catg = cat()
    
    if(e.target.value==='none'){
      setSubCat([])
    }else{
      setSubCat(catg[0].subcategories)
      setCatName(catg[0].displayName)
    }
   
  }


  return (
    <div className='addProductDev'>
    <Banner bannerTitle="Add Product" />
    <form className='addProductForm' id='addProductForm'>
      <input type='text' placeholder='Title' name='title' />
      <textarea rows="4" cols="50" placeholder='Description' name='description' />
      <textarea rows="4" cols="50" placeholder='Composition' name='specifications.composition' />
      <input type='text' placeholder='Packing' name='specifications.packing' />
      <input type='number' placeholder='Price' name='price' />
      <select onChange={(e) => showSubCat(e)} id="category" name="category.uuid">
        <option>none</option>
        {!categories ? <option>none</option> : categories.map(category => (
          <option key={category.uuid} value={category.uuid}>{category.name}</option>
        ))}
      </select>
      {subCat && (
        <select required id="subcategory" name="subcategory.uuid">
          {subCat.map(sub => (
            <option key={sub.uuid} value={sub.uuid}>{sub.name}</option>
          ))}
        </select>
      )}
      <input type='file' name='images' multiple />
      <button className='submitBtn' type="button" onClick={onSubmit}>Submit</button>
    </form>
  </div>
  
  )
}

export default AddProduct
