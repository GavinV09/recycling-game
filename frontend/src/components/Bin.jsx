import React from "react";
import { useDrop } from "react-dnd";

function Bin({ type, image, onDropItem }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => {
      onDropItem(item.id, item.type, type);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`bin ${type}-bin`}
      data-bin-type={type}
      style={{
        background: isOver ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.2)",
      }}
    >
      <img src={image} alt={`${type} Bin`} className="bin-image" />
    </div>
  );
}

export default Bin;