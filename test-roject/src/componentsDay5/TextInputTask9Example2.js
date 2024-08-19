import React, { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}

function TextInputTask9Exaple2() {
  const inputProps = useInput('');

  return (
    <div>
      <input type='text' {...inputProps} />
      <p>Input value: {inputProps.value}</p>
    </div>
  );
}

export default TextInputTask9Exaple2;