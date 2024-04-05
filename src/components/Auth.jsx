import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css'; 
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
const [elog,setElog]= useState('');
const [plog,setPlog]= useState('');
let navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

const emailInp=(e)=>{
if (isLogin){
setElog(e.target.value)
}
}

const passInp=(e)=>{
  setPlog(e.target.value)
}

const submitBtn=()=>{
if(isLogin && elog!==""&& plog!==""){
  localStorage.setItem('credentials', [elog,plog]);

  navigate('/home');

}

else{
  alert("Kindly fill details!")
}
}

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form>
          {!isLogin && (
            <input type="text" placeholder="Name"  />
          )}
          <input type="email" placeholder="Email"  onChange={emailInp}/>
          <input type="password" placeholder="Password" onChange={passInp} />
          <button type="submit" onClick={submitBtn}>{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        {isLogin ? (
          <p>
            Don't have an account? <button onClick={toggleAuthMode}>Sign Up</button>
          </p>
        ) : (
          <p>
            Already have an account? <button onClick={toggleAuthMode}>Login</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
