import React from 'react';

const PersonCard = ({ person }) => {
  return (
    <div className="card">
      <img src={person.image} alt={person.name} />
      <h2>{person.name}</h2>
      <p>{person.year}</p>
    </div>
  );
};

export default PersonCard;
