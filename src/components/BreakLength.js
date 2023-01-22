import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const BreakLength = (props) => {
  const { breakDecrement, breakLength, isPlaying, breakIncrement } = props;
  return (
    <div className="control">
      <h3 id="break-label" className="control-label">
        Break Length
      </h3>
      <button
        id="break-decrement"
        onClick={breakDecrement}
        disabled={isPlaying}
      >
        <AiOutlineMinusCircle />
      </button>
      <h4 id="break-length">{breakLength}</h4>
      <button
        id="break-increment"
        onClick={breakIncrement}
        disabled={isPlaying}
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default BreakLength;
