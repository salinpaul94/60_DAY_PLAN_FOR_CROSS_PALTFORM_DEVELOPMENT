import React, { useState, useCallback } from 'react';

function Button({ onClick, children }) {
  return <button onClick={ onClick }>{ children }</button>;
}

function Task13Example1() {
  const [ count, setCount ] = useState(0);

  const handleClick = useCallback(
    () => {
      setCount(( prevCount ) => prevCount + 1 );
  }, []);

  return (
    <div>
      <p>Count: { count }</p>
      <Button onClick={ handleClick }>Increment</Button>
    </div>
  );
}

export default Task13Example1;