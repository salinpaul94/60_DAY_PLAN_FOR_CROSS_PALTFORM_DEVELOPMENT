import React, { useState } from 'react';

function Task4Example1EamilForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateEmail(email)) {
      alert(`Submitted email: ${email}`);
    } else {
      setError('Invalid email address');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type='submit'>Submit</button>
      </label>
    </form>
  );
}

export default Task4Example1EamilForm;