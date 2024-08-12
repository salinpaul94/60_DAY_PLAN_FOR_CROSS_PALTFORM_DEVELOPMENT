import React, { useState } from 'react';

function Notification() {
  const [hasUnreadMeassages, setHasUnreadMessages] = useState(true);

  return (
    <div>
      {hasUnreadMeassages ? (
        <p>You have unread messages</p>
      ) : (
        <p>No new messages</p>
      )}
      <button onClick={() => setHasUnreadMessages(!hasUnreadMeassages)}>
        Toggle message status
      </button>
    </div>
  );
}

export default Notification;