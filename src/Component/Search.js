import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ display }) => {
    const navigate = useNavigate()

  const [inputValue, setInputValue] = useState("");
  var arr = ["Tablet","Syrup","Injection","Powder"]
  const [displayV, setDisplayV] = useState(arr[0]);


  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClickHandle = () => {
    if(inputValue){
      navigate("/products", { state: { inputValue } })
    }
    
  };

  var number = 0
  const vrr = () => {
    return setInterval(() => {
      setDisplayV(arr[number]);
      number = (number + 1) % arr.length; 
    }, 2000);
  };

 
  useEffect(() => {
    const interval = vrr(); 

    
    return () => clearInterval(interval);
  }, []);

  const isScreenSmall = ()=> {
    return window.innerWidth <= 768}

  return (
    <>
      {display && (
        <div style={{
           
            width:"40vw",
            display:"flex"
            
            
            }}>
              
          
          <input
            type="text"
            placeholder= {`Search Here (${displayV})`}
            onChange={onChange}
            value={inputValue}
            style={{
                width: isScreenSmall()? "60vw": "30vw",
                height:"3rem",
                borderRadius:"25px",
                border:"none",
                paddingLeft:"15px",
                boxShadow:" 0px 0px 50px 0px rgba(0, 0, 0, 0.1)",
                fontSize:"1rem"

            }}
          />
          <button
            style={{
                width: isScreenSmall()? "10vw":"4vw",
                height:isScreenSmall()? "3rem":"3.3rem",
                marginLeft:"5px",
                borderRadius:"50px",
                border:"none",
                backgroundColor:"#009999",
                color:"white",
                cursor:"pointer",
                 boxShadow:" 0px 0px 50px 0px rgba(0, 0, 0, 0.1)"

            }}
          onClick={onClickHandle}><SearchIcon/></button>
        </div>
      )}
    </>
  );
};

export default Search;
