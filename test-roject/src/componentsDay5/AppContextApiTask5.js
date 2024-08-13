import React, { createContext, useState } from 'react';

const UserContext = createContext();

function AppContextApiTask5() {
  const [user, setUser] = useState({ name: 'John', age: 30 });

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: name === "age" ? parseInt(value) : value });
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <input
          type='text'
          name='name'
          value={user.name}
          onChange={handleNameChange}
          placeholder='Enter name'
        />
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleNameChange}
          placeholder='Enter'
        />
      <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

function UserProfile() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default AppContextApiTask5;