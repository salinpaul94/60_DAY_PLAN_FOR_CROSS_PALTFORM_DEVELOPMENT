import React, { useState } from "react";

function InputFieldEventHandling() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleClick} />
      <p>Current value: {value}</p>
    </div>
  );
}

export default InputFieldEventHandling;