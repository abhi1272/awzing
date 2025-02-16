import React  from 'react';
import {useState,useEffect} from  "react"
import Carousel from './Component/Carousel';
import Dashboard from './Component/Home';
import Header from './Component/Header';
import Products from './Component/Products';
import ProductsDetailPage from './Component/ProductDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  const msgArr = ["Mobile", "firecrackers"]

  const [giftArry,setGiftArry] = useState(msgArr);

  const [inputValue,setInputValue] = useState('');
  const [names, setNames] = useState([]); 
  const [showBtn,setshowBtn] = useState(false)
  const [gift,setGift] = useState(false)

  const onchange = (e)=>{
    setInputValue(e.target.value)
  }


  const btnClick = ()=>{
    if (inputValue){

      setNames ([...names,inputValue])
      setshowBtn(true)
      console.log(names)

      setInputValue('')
      
   
   

  }
}

const giveGift = ()=>{
  if(!gift){
  setGift(true)
}else{
  alert("already gifted")
}
}

const changeGift = ()=>{

  for (let i = msgArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    // Swap elements
    [msgArr[i], msgArr[j]] = [msgArr[j], msgArr[i]];
}
console.log(giftArry)
return setGiftArry (msgArr);
}
 
  

  return (
   
      <>
      <input 
      type='text' 
      id='textValue' 
      value={inputValue} 
      onChange={onchange} 
      placeholder='Enter Text'/>

      <button onClick={()=> btnClick()}>Submit</button>

      <div>
        {names.map((name,index) => (
          <>
          <div key={index}> name is {name} {gift && giftArry[index]}</div>
          </>
        ))}
      </div>
      {showBtn && <div>
        <button onClick={()=> giveGift() }>give gift</button>
        <button  onClick={()=> changeGift()}>change gift</button>
        <button  onClick={()=> {setGift(false)}}>reset</button>
        </div>}
      
        {/* <Header/>


       
        <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductsDetailPage/>} />
        </Routes>
        </Router> */}
        
      </>
  
  );
}

export default App;
