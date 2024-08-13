import React, { useState } from 'react';

function CounterHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Deccrement</button>
    </div>
  );
}

export default CounterHooks;