import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter.jsx';
import './Tailwind.css'; // Assuming this is your CSS file

console.log('Rendering App component...');
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);