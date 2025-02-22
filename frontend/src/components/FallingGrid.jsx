import React from 'react';
import FallingItem from './FallingItem';
import '../App.css';

function FallingGrid({ items }) {
  return (
    <div className="falling-grid">
      {items.map((item) => (
        <FallingItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FallingGrid;