import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function AppTask10Example2() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
      setCount((prevCount) => prevCount + 1);
  },[]);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}

export default AppTask10Example2;