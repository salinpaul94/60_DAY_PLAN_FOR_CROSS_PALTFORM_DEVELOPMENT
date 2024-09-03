import React, { useState, useMemo } from 'react';

function ExpensiveCalcualtion({ number }) {
  const calculate = ( num ) => {
    console.log( 'Calculating...' );
    return num * 2;
  };

  const result = useMemo(() => calculate( number ), [ number ]);

  return <p>Result: { result }</p>;
}

function Task13Example2() {
  const [ count, setCount ] = useState( 0 );

  return (
    <div>
      <button onClick={() => setCount( count + 1 )}>Increment</button>
      <ExpensiveCalcualtion number={ count }/>
    </div>
  );
}

export default Task13Example2;