import React from 'react';
import ChildItem from './ChildItem.js';

export default function ChildList({ kids }) {
  return (
    <div className="kid-list">
      {
        kids.map((kid, i) =>
          <ChildItem {...kid}
            key={kid.name + i} />)
      }
    </div>
  );
}

