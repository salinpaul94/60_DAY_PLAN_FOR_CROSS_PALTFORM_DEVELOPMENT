import React, { useState } from 'react';

function ColorChangeUseState() {
  const [color, setColor] = useState('red');

  return (
    <div>
      <p style={{ color }}>The current color is {color}</p>
      <button onClick={() => setColor('blue')}>Change to Blue</button>
      <button onClick={() => setColor('green')}>Change to Green</button>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default ColorChangeUseState;