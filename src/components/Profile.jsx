import React from 'react';
import { SectionTitle, PROFILE } from '../styles/Styling.jsx';

const Profile = ({ profile }) => {
  if (!profile) return null;
  
  return (
    <div className={PROFILE.profileContainer}>
      <SectionTitle position="left">Profile</SectionTitle>
      <p className={PROFILE.profileText}>
        {profile.description}
      </p>
    </div>
  );
};

export default Profile;
