import React, { useState } from 'react';

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
       {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please Sign in</h1>}
       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
       {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default Greeting;