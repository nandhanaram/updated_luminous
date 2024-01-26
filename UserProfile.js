
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ userEmail }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (userEmail) {
      axios.get(`http://localhost:5040/profile/${userEmail}`)
        .then(response => {
          setUserProfile(response.data);
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, [userEmail]);

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile ? (
        <div>
          <p>
            <strong>Username:</strong> {userProfile.username}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
