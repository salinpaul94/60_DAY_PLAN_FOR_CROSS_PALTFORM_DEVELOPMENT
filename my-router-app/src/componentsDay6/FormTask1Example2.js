import React, { useState } from "react";

function FormTask1Example2MultiInputForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted data: ${JSON.stringify(formData)}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormTask1Example2MultiInputForm;