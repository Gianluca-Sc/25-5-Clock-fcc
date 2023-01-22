import React from "react";

const SessionLength = () => {
  return (
    <div className="control">
      <h3 id="session-label" className="control-label">
        Session Length
      </h3>
      <button id="session-decrement" onClick={sessionDecrement} disabled={isOn}>
        <AiOutlineMinusCircle />
      </button>
      <h4 id="session-length">{sessionLength}</h4>
      <button id="session-increment" onClick={sessionIncrement} disabled={isOn}>
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default SessionLength;
