import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import Logo from "../imgs/logo.png";
import '../Nav.css'; 

const Nav = () => {

    const navigate =useNavigate();
    const logoutFun=()=>{
        localStorage.removeItem('credentials')
        alert("You are logging out...")
navigate("/");
    }
 
    return (
        <header className="navbar">

            
            <div className="nav-logo">
                <Link to="/home"><img src={Logo} alt="Logo" /></Link>
            </div>
            <nav className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/start">Let's get started</Link>
                <Link to="/how-it-works">How it works</Link>
                <Link to="/about-us">About us</Link>
            </nav>
            <div className="nav-search">
                <input type="text" placeholder="Search" aria-label="Search" />
                <button type="submit" aria-label="Submit search">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.0183 18.4851L21.5423 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="nav-signup">
                
{
    localStorage.getItem("credentials")?
    <div onClick={logoutFun} className='linq'> Logout </div>:
    <div className='linq'>

    <Link to="/">login</Link>
    </div> 
}
              
            </div>
        </header>
    );
};

export default Nav;
