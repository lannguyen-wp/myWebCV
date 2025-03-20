import React, { createContext, useContext } from 'react';
import webStyles from '../styles/Styling_Web.jsx';
import a4private1pStyles from './Styling_Private_1p_A4.jsx';
import a4private2pStyles from './Styling_Private_2p_A4.jsx';
import a4academicStyles from './Styling_Academic_A4.jsx';
import { useLocation } from 'react-router-dom';
import coverletterStyles from './Styling_CoverLetter.jsx';

const StyleContext = createContext(webStyles); // Provide a default value

export const StyleProvider = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  let styles = webStyles; // Initialize with default styles

  if (currentPath === '/' || currentPath === '/cv-web') {
    styles = webStyles;
  } else if (currentPath === '/cv-private-1p-a4') {
    styles = a4private1pStyles;
  } else if (currentPath === '/cv-private-2p-a4') {
    styles = a4private2pStyles;
  } else if (currentPath === '/cv-academic-a4') {
    styles = a4academicStyles;
  } else if (currentPath === '/cover-letter') {
    styles = coverletterStyles;
  }
    
  return (
    <StyleContext.Provider value={styles}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => useContext(StyleContext);