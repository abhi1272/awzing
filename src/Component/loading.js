import React from 'react'
import { useState,useEffect } from 'react'
import LoadingImg from '../Imgs/loading.webp'

const Loading =()=>{

  const [load,setLoading] = useState(false)
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 20000);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);
  
    return <> {!load?  <div 
    style={{textAlign:"center",
    marginTop:"10%",
    height:"100vh",
    justifyContent:"center"}}>
    <img width={200} src={LoadingImg} alt='loading img'/>
    <h3>  Loading....</h3>
  </div> :  <h3 style={{
    textAlign:"center",
    backgroundColor:"red",
    color:"white",
    padding:10,
    }}> Server Error:( Failed To Fetch)</h3>}
  </>
}
export default Loading