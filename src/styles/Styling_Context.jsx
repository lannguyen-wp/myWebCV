import React, { createContext, useContext } from 'react';
import webStyles from '../styles/Styling_Web.jsx';
import a4Styles from '../styles/Styling_A4_01.jsx';
import { useLocation } from 'react-router-dom';

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  let styles;

  if (currentPath === '/home') {
    styles = webStyles;
  } else if (currentPath === '/fullcv-a4-01') {
    styles = a4Styles;
  }

  return (
    <StyleContext.Provider value={styles}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => useContext(StyleContext);