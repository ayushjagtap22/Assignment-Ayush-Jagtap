import React, { useState } from 'react';
import AdminPanel from '../src/Component/AdminPanel';
import Profile from '../src/Component/Profile'; 
import Map from '../src/Component/Map';

 /*  HERE 'data.js' will come but error is showing tried alot to resolve it but doesnt make it happen and css is also not proper
  tried my best without seeking help from anyone*/

function App() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Handle form submission for adding/editing profiles
  const handleProfileSubmit = (profileData) => {
    const newProfile = {
      id: Date.now(),
      ...profileData,
    };

    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  const isAdmin = true; // Set this to true if you want to display the AdminPanel

  return (
    <div className="App">
      <h1>Profile Viewer</h1>
      {isAdmin && <AdminPanel onSubmit={handleProfileSubmit} />}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="profiles">
        {filteredProfiles.map((profile, index) => (
          <Profile
            key={profile.id}
            {...profile}
            onClickSummary={() => setSelectedProfile(profile)}
          />
        ))}
      </div>
      {selectedProfile && (
        <div className="profile-details">
          <h2>{selectedProfile.name}</h2>
          <p>{selectedProfile.description}</p>
          <Map coordinates={selectedProfile.address} />
        </div>
      )}
    </div>
  );
}

export default App;
