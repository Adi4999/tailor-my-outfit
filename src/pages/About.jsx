import React, { useEffect } from 'react';
import '../AboutUs.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    useEffect(() => {
       
        const credentials = localStorage.getItem("credentials");
        if (!credentials) {
         
        navigate('/'); 
        }
    }, [navigate]);


    return (
        <div className="about-container">
            <h1>Welcome to Tailor My Outfit</h1>
            <p>At Tailor My Outfit, we believe that fashion is more than just clothing—it's an expression of individuality. Our mission is to empower you to create custom outfits that reflect your unique style and personality, all from the comfort of your home.</p>

            <h2>Personalized Shopping Experience</h2>
            <p>Gone are the days of settling for off-the-rack garments that don't quite fit your vision. With our interactive quiz, you can easily customize every aspect of your outfit, from the fabric and color to the fit and style. Whether you're a trendsetter, a classicist, or somewhere in between, our intuitive platform makes it simple to curate a wardrobe that's truly yours.</p>

            <h2>Quality Craftsmanship, Delivered to Your Doorstep</h2>
            <p>We understand that when it comes to clothing, quality is paramount. That's why we work with skilled artisans and use only the finest materials to craft each and every garment. From the moment you place your order, our team is dedicated to ensuring that your custom-tailored outfit meets our highest standards of excellence. And with our convenient delivery service, you can enjoy the luxury of personalized fashion without ever having to leave your home.</p>

            <h2>Our Story</h2>
            <p>Tailor My Outfit was born out of a passion for both fashion and technology. As avid shoppers ourselves, we recognized the need for a more personalized and convenient way to shop for clothing online. Inspired by the idea of combining the art of tailoring with the ease of modern technology, we set out to create a platform that would revolutionize the way people shop for custom clothing. Today, we're proud to offer a seamless and enjoyable shopping experience that puts the power of personal style in your hands.</p>

            <h2>Get in Touch</h2>
            <p>Have questions or feedback? We'd love to hear from you! Our dedicated team is here to assist you every step of the way. Feel free to reach out to us via email, phone, or social media—we're always happy to help.</p>

            <p>Thank you for choosing Tailor My Outfit. Here's to a wardrobe that's as unique as you are.</p>

            
        </div>
    );
};

export default About;
