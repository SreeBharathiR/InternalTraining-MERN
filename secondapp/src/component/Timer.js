import React, { useRef, useState } from "react";

const Timer = () => {
  const [timerStart, setTimerStart] = useState(false);
  const [timeExpri, setTimeExpri] = useState(false);
  const id = useRef();
  function handleStart() {
    id.current = setTimeout(() => {
      setTimeExpri(true);
      console.log("start" + id.current);
    }, 5000);
  }
  function handleStop() {
    console.log("stop" + id.current);
    clearTimeout(id.current);
  }
  return (
    <div>
      <h2>Timer Component</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      {timeExpri && <p>Timer Expired</p>}
    </div>
  );
};

export default Timer;
