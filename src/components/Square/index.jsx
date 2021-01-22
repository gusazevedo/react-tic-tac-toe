import React from "react";
import "./style.css";

function Square({onClick, value}) {
  return (
    <button className="square" onClick={() => onClick()}>
      { value }
    </button>
  );
}

export default Square;
