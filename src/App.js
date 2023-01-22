import { useEffect, useRef, useState } from "react";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerType, setTimerType] = useState("session");
  const timerRef = useRef();

  const breakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength((prev) => prev + 1);
    }
  };

  const breakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength((prev) => prev - 1);
    }
  };

  const sessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const sessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
    }
  };

  const formatTimer = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(1500);
    setIsPlaying(false);
    setTimerType("session");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  const play = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPlaying) {
        if (timeLeft > 0) {
          setTimeLeft((prev) => prev - 1);
          timerRef.current.animate(
            [
              {
                boxShadow: "0px 0px 15px 8px #8375ff51",
              },
              {
                boxShadow: "0px 0px 15px 5px #758eff51",
              },
              {
                boxShadow: "0px 0px 15px 8px #8375ff51",
              },
            ],
            1000
          );
        }
        if (timeLeft <= 0) {
          setTimeLeft(
            timerType === "session" ? breakLength * 60 : sessionLength * 60
          );
          setTimerType(timerType === "session" ? "break" : "session");
          const audio = document.getElementById("beep");
          audio.currentTime = 0;
          audio.play();
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isPlaying, timeLeft, timerType, breakLength, sessionLength]);

  return (
    <div className="container">
      <h1>25 + 5 Clock</h1>
      <div className="controls">
        <BreakLength
          breakDecrement={breakDecrement}
          breakLength={breakLength}
          isPlaying={isPlaying}
          breakIncrement={breakIncrement}
        />
        <SessionLength
          sessionDecrement={sessionDecrement}
          sessionLength={sessionLength}
          sessionIncrement={sessionIncrement}
          isPlaying={isPlaying}
        />
      </div>
      <Timer
        timerRef={timerRef}
        formatTimer={formatTimer}
        play={play}
        isPlaying={isPlaying}
        timerType={timerType}
        reset={reset}
      />
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}

export default App;
