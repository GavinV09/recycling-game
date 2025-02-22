import React from 'react';
import { useDrop } from 'react-dnd';
import '../App.css';

function Bins({ onDropItem }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => onDropItem(item.type, 'bin-type'), // Replace 'bin-type' with actual bin type
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <div className="bins" ref={drop}>
      <div className="bin-container recycling" onClick={() => onDropItem('recycling', 'recycling')}>
        <div className="label">Recycling</div>
        <img src="bins/recycle_bin.png" alt="Recycling Bin" className="bin recycling-bin" />
      </div>
      <div className="bin-container compost" onClick={() => onDropItem('compost', 'compost')}>
        <div className="label">Compost</div>
        <img src="bins/compost_bin.png" alt="Compost Bin" className="bin compost-bin" />
      </div>
      <div className="bin-container trash" onClick={() => onDropItem('trash', 'trash')}>
        <div className="label">Trash</div>
        <img src="bins/trash_bin.png" alt="Trash Bin" className="bin trash-bin" />
      </div>
    </div>
  );
}

export default Bins;