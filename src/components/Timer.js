import React from "react";
import {
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineUndo,
} from "react-icons/ai";

const Timer = (props) => {
  const { timerRef, formatTimer, play, isPlaying, timerType, reset } = props;
  return (
    <>
      <div className="timer" ref={timerRef}>
        <div id="timer-label">{timerType}</div>
        <div id="time-left">{formatTimer()}</div>
      </div>
      <div className="timer-controls">
        <button id="start_stop" onClick={play}>
          {isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
        </button>
        <button id="reset" onClick={reset}>
          <AiOutlineUndo />
        </button>
      </div>
    </>
  );
};

export default Timer;
