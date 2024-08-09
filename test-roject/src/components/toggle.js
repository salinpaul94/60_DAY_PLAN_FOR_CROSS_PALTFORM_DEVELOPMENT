import React, { useState } from 'react';

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <p>The light is {isOn ? 'On' : 'Off'}</p>
						<button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </div>
    );
}


export default Toggle;
