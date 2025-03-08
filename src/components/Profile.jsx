import React from 'react';
import { SectionTitle } from '../styles/globalStyles.jsx';
import { PROFILE } from '../styles/componentStyles.jsx';

const Profile = ({ profile }) => {
  if (!profile) return null;
  
  return (
    <div className={PROFILE.profileContainer}>
      <SectionTitle position="right">Profile</SectionTitle>
      <p className={PROFILE.profileText}>
        {profile.description}
      </p>
    </div>
  );
};

export default Profile;
