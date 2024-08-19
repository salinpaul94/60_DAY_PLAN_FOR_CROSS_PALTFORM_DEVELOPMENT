import React from "react";

function AppTask10Example1() {
  const user = { name: 'John', age: 30 };

  return <Parent user = { user } />;
}

function Parent({ user }) {
  return <Child user = { user } />;
}

function Child({ user }) {
  return <GrandChild user = { user } />;
}

function GrandChild({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default AppTask10Example1;