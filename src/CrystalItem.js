import React from 'react';
import './crystal.css';

export default function CrystalItem({ name, color, zodiac, })
{
  return (
    <div className='crystal-item'>
      <p>the crystal {name}</p>
      <p>is a {color} color.</p>
      <p>Its zoidac sign is {zodiac}</p>
    </div>
  );
}

