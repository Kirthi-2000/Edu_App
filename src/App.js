// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./components/styles.css";
import Login from './components/Login';
import AnimatedText from './components/AnimatedText';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/animated-text" element={
          <>
            <AnimatedText />
            <Carousel />
          </>
        } />
      </Routes>
    </Router>
    
  );
}
