import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ number }) {
  const calculate = (num) => {
    console.log('Calculating...');
    return num * 2;
  };

  const result = useMemo(() => calculate(number), [number]);

  return <p>Result: {result}</p>;
}

function AppTask10Example1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <ExpensiveCalculation number={count}/>
      <ExpensiveCalculation number={count}/>

    </div>
  );
}

export default AppTask10Example1;