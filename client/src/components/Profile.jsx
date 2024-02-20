import React from 'react';
import { useUser } from '../stores/userStore';

function Profile() {
  const [user] = useUser((state) => [state.user]);

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #94a3e8, #c79fef, #ffb6d9)', // Lighter shades of Blue to Purple to Pink
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust as needed
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1>Welcome dear {user.username}</h1>
        <h2>Email: {user.emaile}</h2>
      </div>
    </div>
  );
}

export default Profile;
