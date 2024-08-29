import React from 'react';

function WelcomeMessage({ user }) {
  return <h1>Welcome, {user.name}</h1>;
}

function AppTask8Example1() {
  const user = { name: 'John' };

  return (
    <div>
      <WelcomeMessage user={user} />
    </div>
  );
}

export default AppTask8Example1;