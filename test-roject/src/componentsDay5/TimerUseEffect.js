import React, { useState, useEffect } from 'react';

function TimerUseEffect() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}

export default TimerUseEffect;