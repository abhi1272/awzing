import React from 'react'
import LoadingImg from '../Imgs/loading.webp'

const loading =()=>{
    return <div 
    style={{textAlign:"center",marginTop:"10%"}}>
    <img width={200} src={LoadingImg}/>
    <h3>  Loading....</h3>
  </div>
}
export default loading