import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import PersonGrid from '../components/PersonGrid'

export default function Gallery() {
  const navigate = useNavigate();
  useEffect(() => {
     
      const credentials = localStorage.getItem("credentials");
      if (!credentials) {
       
      navigate('/'); 
      }
  }, [navigate]);


  return (
    <>
<PersonGrid/>

    </>
  )
}
