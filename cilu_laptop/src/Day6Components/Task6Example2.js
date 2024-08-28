import React, { useState } from 'react';

function TemperatureConverterTask6Example2() {
  const [temperature, setTemperatur] = useState({
    celsius: '',
    fahrenheit: ''
  });

  const handleCelesiusChange = (e) => {
    const celsius = e.target.value;
    setTemperatur({
      celsius,
      fahrenheit: celsius ? (celsius * 9/5 + 32).toFixed(2) : ''
    });
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    setTemperatur({
      fahrenheit,
      celsius: fahrenheit ? ((fahrenheit - 32) * 5/9).toFixed(2) : ''
    });
  };

  return (
    <div>
      <CelsiusInput
        temperature={temperature.celsius}
        onTemperatureChange={handleCelesiusChange}
      />
      <FahrenheitInput
        temperature={temperature.fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

function CelsiusInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>
        Celsius:
        <input
          type='number'
          value={temperature}
          onChange={onTemperatureChange}
        />
      </label>
    </div>
  );
}

function FahrenheitInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>
        Fahrenheit:
        <input
          type='number'
          value={temperature}
          onChange={onTemperatureChange}
        />
      </label>
    </div>
  );
}

export default TemperatureConverterTask6Example2;