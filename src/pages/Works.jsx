import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import '../works.css'; // Ensure you have a CSS file for styling

const steps = [
    {
        title: "Choose Your Lining",
        content: `We cater to women of all shades, so simply match the lining to your skin tone for that nude look, no LOUNGE SIZES 0-30 BRA SIZES 28A-44J.`,
        actionText: "LEARN ABOUT LININGS",
        actionLink: "/learn-about-linings", // Update with your actual link
    },
    {
        title: "Choose Your Design",
        content: `Start your creation by selecting a design from soft bralettes and cute undies, to soft flowy slips and full-length robes.`,
        actionText: "SEE ALL THE STYLES",
        actionLink: "/all-styles", // Update with your actual link
    },
    {
        title: "Choose Your Fabrics",
        content: `Be unique by designing with 50+ curated fabrics: Sexy laces, soft meshes, exotic burn velvets, and limited, novelty prints.`,
        actionText: "GET TO KNOW OUR MATERIALS",
        actionLink: "/materials", // Update with your actual link
    },
    {
        title: "Choose Your Finishes",
        content: `Select the little details that make your creation one of a kind. Choose variations for the bows, straps sleeves, and more.`,
        actionText: "CUSTOMIZE NOW",
        actionLink: "/start", // Update with your actual link
    },
    // Add more steps as needed
];

const Works = () => {

    const navigate = useNavigate();
  useEffect(() => {
     
      const credentials = localStorage.getItem("credentials");
      if (!credentials) {
       
      navigate('/'); 
      }
  }, [navigate]);

    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const { title, content, actionText, actionLink } = steps[currentStep];

    return (
        <div className="content-container">
            <h2>How It Works</h2>
            <section className="step">
                <h3>{title}</h3>
                <p>{content}</p>
                <a href={actionLink} className="step-action">{actionText}</a>
            </section>
            {currentStep < steps.length - 1 && (
                <button onClick={nextStep}>Next</button>
            )}
        </div>
    );
};

export default Works;
