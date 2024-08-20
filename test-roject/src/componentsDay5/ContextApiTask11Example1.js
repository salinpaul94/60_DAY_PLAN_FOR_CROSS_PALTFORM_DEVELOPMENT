import React, { createContext, useContext } from 'react';

const UserContext = createContext();

function AppContextApiTask11Example1() {
  const user = { name: 'John', age: 30 };

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default AppContextApiTask11Example1;