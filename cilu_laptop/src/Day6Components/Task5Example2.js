import React, { useState } from 'react';

function Task5Example2ContactForm() {
  const [formData, setFormData] =  useState({
    username: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`Submitted data: ${JSON.stringify(formData)}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red'}}>{errors.username}</p>}
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red'}}>{errors.email}</p>}
      </label>
      <br />
      <label>
        Message:
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p style={{ color: 'red'}}>{errors.message}</p>}
      </label>
      <br />
      <button type='submit'>Send</button>
    </form>
  );
}

export default Task5Example2ContactForm;