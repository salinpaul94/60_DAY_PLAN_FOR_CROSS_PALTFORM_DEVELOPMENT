import React, { useState } from 'react';

function UserProfile() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <h1>User Profile</h1>
      {isAdmin ? (
        <p>Welcome, Admin!</p>
      ) : (
        <p>Welcome, User!</p>
      )}
      <button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? 'Revoke Admin' : 'Grant Admin'}
      </button>
    </div>
  );
}

export default UserProfile;