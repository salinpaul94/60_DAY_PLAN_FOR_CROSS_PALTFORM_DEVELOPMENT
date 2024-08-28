import React, { useState } from 'react';

function ParentTask6Example1() {
  const [sharedState, setSharedState] = useState('');

  return (
    <div>
      <Child1 sharedState={sharedState} setSharedState={setSharedState}/>
      <Child2 sharedState={sharedState} />
    </div>
  );
}

function Child1({ sharedState, setSharedState }) {
  return (
    <div>
      <input
        type='text'
        value={sharedState}
        onChange={(e) => setSharedState(e.target.value)}
      />
    </div>
  );
}

function Child2({ sharedState }) {
  return <p>Shared State: {sharedState}</p>;
}

export default ParentTask6Example1;