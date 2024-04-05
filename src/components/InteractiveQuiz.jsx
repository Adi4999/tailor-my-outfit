import React, { useState } from 'react';
import '../InteractiveQuiz.css'; // Make sure this path is correct

const questions = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Phone Number', name: 'phoneNumber', type: 'tel' },
  { label: 'Shoulders (in inches)', name: 'shoulders', type: 'number' },
  { label: 'Bust (in inches)', name: 'bust', type: 'number' },
  { label: 'Hips (in inches)', name: 'hips', type: 'number' },
  { label: 'Waist (in inches)', name: 'waist', type: 'number' },
  { label: 'Neck (in inches)', name: 'neck', type: 'number' },
  { label: 'Arms (in inches)', name: 'arms', type: 'number' },
  { label: 'Message for us', name: 'message', type: 'textarea' },
];

const InteractiveQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    shoulders: '',
    bust: '',
    hips: '',
    waist: '',
    neck: '',
    arms: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the submission only after the last question
    if (currentStep === questions.length - 1) {
      setIsSubmitted(true);
    }
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit(new Event('submit')); // Programmatically submit form at last question
    }
  };

  return (
    <div className="quiz-container">
      <h1>Interactive Quiz</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="question-container">
            <label>{questions[currentStep].label}</label>
            {questions[currentStep].type === 'textarea' ? (
              <textarea
                name={questions[currentStep].name}
                value={formData[questions[currentStep].name]}
                onChange={handleInputChange}
              />
            ) : (
              <input
                type={questions[currentStep].type}
                name={questions[currentStep].name}
                value={formData[questions[currentStep].name]}
                onChange={handleInputChange}
              />
            )}
          </div>
          <button type="button" onClick={nextQuestion}>{currentStep === questions.length - 1 ? 'Submit' : 'Next'}</button>
        </form>
      ) : (
        <div className="receipt-container">
          <h2>Your Submission Receipt</h2>
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InteractiveQuiz;
