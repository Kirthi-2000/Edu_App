import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles.css';
import Login from './components/Login';
import AnimatedText from './components/AnimatedText';
import Carousel from './components/Carousel';
import AnimatedCursor from './components/AnimatedCursor';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
export default function App() {
  return (
    <Router>
      <div>
        {/* Render Navbar component */}
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/animated-text"
            element={
              
              <>
              		<div>
                    <Navbar className="p-3"
                        style={{ background:"lightgray"}}>
                      <Navbar.Brand href="#home" style={{ color: "green", paddingLeft: "20px" }}>

                        Home
                      </Navbar.Brand>
                      <Navbar.Brand href="#home"
                            style={{ color: "green", paddingLeft: "20px" }}>
                        C++
                      </Navbar.Brand>
                      <Navbar.Brand href="#home"
                            style={{ color: "green", paddingLeft: "20px" }}>
                        GoLang
                      </Navbar.Brand>
                    </Navbar>
                    <br />
                  </div>
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
