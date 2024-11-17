// Import necessary modules
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import LoginDashboard from './LoginDashboard'
import ListedProduct from './ListedProduct';
import '../Style.css'
import Banner from './banner';
import Loading from './loading' 
import LogoutIcon from '@mui/icons-material/Logout';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate ();
  const [loading,setLoading] = useState(false)
  
  const getToken = sessionStorage.getItem('token')
  const [sessionToken, setSessionToken] = useState(getToken)
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true)
    try {
      const response = await fetch('https://auth.bidzbay.com/api/as/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.data.token;  
        sessionStorage.setItem('token', token);
       
     setSessionToken(token)
     setLoading(false)
     
    } catch (err) {
      setError(err.message);
      setLoading(false)
    }
  };

  const logout = ()=>{
    sessionStorage.removeItem('token')
    window.location.reload()
  }


  return (
    <div>
    
    {sessionToken? <>

    <div style={{
      display:"flex",
      justifyContent:"center",
      backgroundColor:"black"
      
    }}>
    <h1 style={{
      textAlign:"center",
      backgroundColor:"Black",
      color:"white",
      padding:"10px",
      fontSize:"1rem",
      display:"inline"
      }}>DASHBOARD</h1>

       <h1 onClick={()=> logout()} className='logout'>LOGOUT <LogoutIcon sx={{fontSize:"0.8rem"}}/></h1>
    </div>
   
      <LoginDashboard/>
    </>  : <div className='loginDiv'> 
       <Banner bannerTitle="LOGIN"/>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading? <Loading/>: 
      <form className='loginForm' enctype="application/x-www-form-urlencoded" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br/>
        <button className='loginBtn' type="submit">Login  </button>
      
      </form>
}
      </div>
      }
     
    </div>
  );
};

export default LoginPage;
