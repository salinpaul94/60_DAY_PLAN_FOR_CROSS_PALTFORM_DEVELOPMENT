import React, { useState, useEffect } from 'react';

function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
}

function TimerTask9Example1() {
  const seconds = useTimer();

  return <div>Seconds: {seconds}</div>
}

export default TimerTask9Example1;