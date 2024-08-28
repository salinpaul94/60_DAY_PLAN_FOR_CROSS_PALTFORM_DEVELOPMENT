import React, { useState } from 'react'

function Task3Example1UsernameForm() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted username: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Task3Example1UsernameForm;