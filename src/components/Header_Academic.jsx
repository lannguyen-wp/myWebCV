import React from 'react';
import { useStyle } from '../styles/Styling_Context';

const Header = ({ personalInfo }) => {
  // Handle both array and object formats for backward compatibility
  const info = Array.isArray(personalInfo) ? personalInfo[0] : personalInfo;

  const styles = useStyle();
  const { HEADER } = styles;
  return (
    <div className={HEADER.headerContainer}>
      <h1 className={HEADER.headerName}>{info.name}</h1>
      <p className={HEADER.headerTitle}>{info.title_academic}</p>
    </div>
  );
};

export default Header;
