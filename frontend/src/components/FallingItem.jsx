import React from "react";
import { useDrag } from "react-dnd";
import "../App.css";

function FallingItem({ item }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id: item.id, type: item.type }, // Pass the item type
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="falling-item"
      style={{
        top: `${item.y}%`,
        left: `${item.x}%`,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img src={item.image} alt={item.name} className="item-image" />
    </div>
  );
}

export default FallingItem;