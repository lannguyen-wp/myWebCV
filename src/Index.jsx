import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Tailwind.css'; // tailwind.css and index.jsx are in the same directory

console.log('Rendering App component...');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
