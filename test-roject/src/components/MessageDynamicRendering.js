import React, { useState } from 'react';

function Message() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      {showMessage && <p>This is a conditional message</p>}
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default Message;