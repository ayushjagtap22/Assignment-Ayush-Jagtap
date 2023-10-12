import React from 'react';

function Profile({ name, photo, description, onClickSummary }) {
  return (
    <div className="profile-card">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={onClickSummary}>Summary</button>
    </div>
  );
}

export default Profile;
