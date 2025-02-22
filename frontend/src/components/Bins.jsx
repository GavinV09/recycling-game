import React from "react";
import { useDrop } from "react-dnd";
import "../App.css";

function Bins({ onDropItem }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item, monitor) => {
      const binType = monitor.getItem().type; // Get the bin type from the item
      onDropItem(item.id, item.type, binType);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="bins" ref={drop}>
      <div className="bin recycling-bin" data-bin-type="recycling">
        <img
          src="/bins/recycle_bin.png"
          alt="Recycling Bin"
          className="bin-image"
        />
      </div>
      <div className="bin trash-bin" data-bin-type="trash">
        <img src="/bins/trash_bin.png" alt="Trash Bin" className="bin-image" />
      </div>
      <div className="bin compost-bin" data-bin-type="compost">
        <img
          src="/bins/compost_bin.png"
          alt="Compost Bin"
          className="bin-image"
        />
      </div>
    </div>
  );
}

export default Bins;