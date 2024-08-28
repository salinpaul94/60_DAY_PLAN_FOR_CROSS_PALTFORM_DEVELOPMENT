import React, { useState } from 'react';

function Task3Example2AgeForm() {
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted age: ${age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Task3Example2AgeForm;