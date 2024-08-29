import React from 'react';

function Card({ children }) {
  return <div className='card'>{children}</div>;
}

function AppTask9Example1() {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>Card content goes here.</p>
      </Card>
    </div>
  );
}

export default AppTask9Example1;