import React, { createContext, useContext } from 'react';
import webStyles from '../styles/Styling_Web.jsx';
import a4p1Styles from './Styling_GIS_1p_A4.jsx';
import a4p2Styles from './Styling_RS_2p_A4.jsx';
import { useLocation } from 'react-router-dom';
import coverletterStyles from './Styling_CoverLetter.jsx';

const StyleContext = createContext(webStyles); // Provide a default value

export const StyleProvider = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  let styles = webStyles; // Initialize with default styles

  if (currentPath === '/' || currentPath === '/cv-web') {
    styles = webStyles;
  } else if (currentPath === '/cv-gis-1p-a4') {
    styles = a4p1Styles;
  } else if (currentPath === '/cv-rs-2p-a4') {
    styles = a4p2Styles;
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