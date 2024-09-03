import React, { useState } from 'react';

const UseList = React.memo(({ users }) => {
  console.log("User list rendered");
  return (
    <ul>
      {users.map(( user ) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
});


function Task12Example2() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' }
  ]);
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Result: {count}</p>
      <UseList users={users}/>
    </div>
  );
}

export default Task12Example2;