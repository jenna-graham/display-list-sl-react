import React from 'react';
import './App.css';

export default function childItem({ name, age, favoriteFood, hobbies }) {
  return (
    
    <div className="kid-item">
      <h2>{name}</h2>
      <p>is {age} years old.</p>
      <p>Their favorite food is {favoriteFood}!</p>
      <h4>They Like to: </h4>
      <p>🔸{hobbies [0]}</p>
      <p>🔻{hobbies [1]}</p>
      <p>🔹{hobbies [2]}</p>
        
    </div>
  );
}

