import React, { useState } from 'react';

const ExpensiveComponent = React.memo(({ number }) => {
  console.log('Exepensive Component rendered');
  const result = number * 2;
  return <p>Result: {result}</p>;
});

function Task12Example1() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <ExpensiveComponent number = {count}/>
    </div>
  );
}

export default Task12Example1;