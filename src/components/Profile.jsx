import React from 'react';
import { useStyle } from '../styles/Styling_Context';

const Profile = ({ profile, position, title }) => {
  if (!profile) return null;
    const styles = useStyle();
    const { SectionTitle, PROFILE } = styles;
  return (
    <div className={PROFILE.profileContainer}>
      <SectionTitle position={position}>{title || 'Profile'}</SectionTitle>
      <p className={PROFILE.profileText}>
        {profile.description}
      </p>
    </div>
  );
};

export default Profile;
