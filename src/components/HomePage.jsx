import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import '../HomePage.css'; // Make sure to create a corresponding CSS file
// Use the image generated or any placeholder

// Dummy data for featured dresses
const featuredDresses = [
  { id: 1, name: 'Elegant Evening Gown', image: 'https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_1280.jpg', description: 'A stunning gown perfect for any formal event.' },
  { id: 2, name: 'Classic Cocktail Dress', image: 'https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_1280.jpg', description: 'A timeless piece for your cocktail party collection.' },
  
  { id: 3, name: 'Summer Floral Dress', image: 'https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_1280.jpg', description: 'Bright and beautiful, ideal for summer outings.' }

];
const x ='https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_1280.jpg'

const HomePage = () => {

  const navigate = useNavigate();
    useEffect(() => {
       
        const credentials = localStorage.getItem("credentials");
        if (!credentials) {
         
        navigate('/'); 
        }
    }, [navigate]);
  return (
    <div className="home-page">
      <section className="hero">
       
        <div className="hero-content">
          <h1>Discover Your Perfect Fit</h1>
          <p>Explore our exclusive collection of custom-tailored dresses.</p>
          <Link to="#" className="btn-primary">Shop Now</Link>
        </div>
      </section>

      <section className="featured-dresses">
        <h2>Featured Dresses</h2>
        <div className="dress-gallery">
          {featuredDresses.map(dress => (
            <div className="dress-item" key={dress.id}>
              <img width={'350px'} src={dress.image} alt={dress.name} />
              <h3>{dress.name}</h3>
              <p>{dress.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Transform Your Wardrobe?</h2>
        <Link to="/contact" className="btn-secondary">Get Started</Link>
      </section>
    </div>
  );
};

export default HomePage;
