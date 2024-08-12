import React, { useState } from "react";

function TemperatureConverterUseState() {
  const [celsius, setCelsius]  = useState(30);

  const fahrenheit = (celsius * 9/5) + 32;

  return (
    <div>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
      <p>{celsius}°C is {fahrenheit}°F</p>
    </div>
  );
}

export default TemperatureConverterUseState;