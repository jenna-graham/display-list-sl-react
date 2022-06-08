import React from 'react';
import CrystalItem from './CrystalItem.js';
import './crystal.css';


export default function CrystalList({ crystals }) {
  return (
    <div className='crystal-list'>
      {
        crystals.map((crystal, i) => 
          <CrystalItem {...crystal}
            key={crystal.name + i} />)
      }
    </div>
  );
}

