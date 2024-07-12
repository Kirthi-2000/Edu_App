import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this path is correct
import App from './App';
import AnimatedCursor from './components/AnimatedCursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AnimatedCursor />

  </React.StrictMode>
);
