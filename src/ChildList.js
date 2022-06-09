import React from 'react';
import ChildItem from './ChildItem.js';
import './App.css';

export default function ChildList({ kids }) {
  return (
    <div className="kid">
      <h1>My Kids</h1>
      {
        kids.map((kid, i) =>
          <ChildItem {...kid}
            key={kid.name + i} />)
      }
    </div>
  );
}

