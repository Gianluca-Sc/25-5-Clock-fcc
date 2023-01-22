import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const SessionLength = (props) => {
  const { sessionDecrement, sessionLength, sessionIncrement, isPlaying } =
    props;
  return (
    <div className="control">
      <h3 id="session-label" className="control-label">
        Session Length
      </h3>
      <button
        id="session-decrement"
        onClick={sessionDecrement}
        disabled={isPlaying}
      >
        <AiOutlineMinusCircle />
      </button>
      <h4 id="session-length">{sessionLength}</h4>
      <button
        id="session-increment"
        onClick={sessionIncrement}
        disabled={isPlaying}
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default SessionLength;
