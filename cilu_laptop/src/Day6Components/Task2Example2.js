import React, { useState } from 'react';

function FeedBackFormTask2Example2() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted feedback: ${feedback}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Feedback:
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default FeedBackFormTask2Example2;