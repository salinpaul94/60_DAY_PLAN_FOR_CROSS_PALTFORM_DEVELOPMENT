import React, { useState } from 'react';

function ParentTask7Example1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Increment count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} />
      <Display count={count} />
    </div>
  );
}

function Increment({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

function Decrement({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

function Display({ count }) {
  return <p>Count: {count}</p>;
}

export default ParentTask7Example1;