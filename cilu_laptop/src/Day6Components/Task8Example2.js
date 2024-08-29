import React from 'react';

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}

function AppTask8Example2() {
  return (
    <div>
      <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
    </div>
  );
}

export default AppTask8Example2;