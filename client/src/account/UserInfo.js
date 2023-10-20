import React from 'react';

const UserInfo = ({ user, pending, error }) => {
  if (pending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="centered-content">
      <h1>User Information</h1>
      <div>
        <p>ID: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
