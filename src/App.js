import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles.css';
import Login from './components/Login';
import AnimatedText from './components/AnimatedText';
import Carousel from './components/Carousel';
import AnimatedCursor from './components/AnimatedCursor';
import NavScrollExample from './components/NavScrollExample'; // Import Navbar example or your Navbar component
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        {/* Render Navbar component */}
        <NavScrollExample />
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/animated-text"
            element={
              <>
                <AnimatedText />
                <Carousel />
                <AnimatedCursor />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
