import React, { useState } from 'react';

function Task4Example2PasswordForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePasswrord = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswrord(password)) {
      alert(`Submitted password: ${password}`);
    } else {
      setError('Password must be at least 8 characters long');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Task4Example2PasswordForm;