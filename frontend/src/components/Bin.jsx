import React, { useRef } from "react";
import { useDrop } from "react-dnd";

function Bin({ type, image, onDropItem }) {
  const binRef = useRef(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => {
      const binRect = binRef.current.getBoundingClientRect();
      const binPosition = { x: binRect.left + binRect.width / 2, y: binRect.top + binRect.height / 2 };
      onDropItem(item.id, item.type, type, binPosition);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={(node) => {
        drop(node);
        binRef.current = node;
      }}
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