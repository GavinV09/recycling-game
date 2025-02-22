import React from "react";
import Bin from "./Bin";
import "../App.css";

function Bins({ onDropItem }) {
  return (
    <div className="bins">
      <Bin
        type="recycling"
        image="/bins/recycle_bin.png"
        onDropItem={onDropItem}
      />
      <Bin
        type="trash"
        image="/bins/trash_bin.png"
        onDropItem={onDropItem}
      />
      <Bin
        type="compost"
        image="/bins/compost_bin.png"
        onDropItem={onDropItem}
      />
    </div>
  );
}

export default Bins;