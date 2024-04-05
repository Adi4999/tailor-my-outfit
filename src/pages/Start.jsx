import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import InteractiveQuiz from '../components/InteractiveQuiz'

function Start() {
  const navigate = useNavigate();
  useEffect(() => {
     
      const credentials = localStorage.getItem("credentials");
      if (!credentials) {
       
      navigate('/'); 
      }
  }, [navigate]);


  return (
    <>
   
    <InteractiveQuiz/>
    </>
  )
}

export default Start