import React from 'react';
import CrystalItem from './CrystalItem.js';
import './crystal.css';


export default function CrystalList({ crystals }) {
  return (
    <div className='crystal-list'>
      <h1>Crystals</h1>
      {
        crystals.map((crystal, i) => 
          <CrystalItem {...crystal}
            key={crystal.name + i} />)
      }
    </div>
  );
}

