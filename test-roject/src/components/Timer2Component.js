import React, { useState, useEffect } from 'react';

function Timer2() {
  const [ seconds, setSeconds ] = useState(10);
  const incrementValue = 0.1;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + incrementValue);
    }, (incrementValue*1000));
    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}

export default Timer2;