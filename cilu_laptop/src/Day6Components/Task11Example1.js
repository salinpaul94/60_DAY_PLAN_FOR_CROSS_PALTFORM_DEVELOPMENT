import React, { useState } from 'react';

const Button = React.memo(({ onClick, children }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>{children}</button>;
});


function AppTask11Example1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <Button onClick={() => alert('Button clicked')}>Click Me</Button>
    </div>
  );
}

export default AppTask11Example1;