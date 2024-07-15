// App.js
import React from 'react';
import './components/styles.css';
import Login from './components/Login';
import AnimatedText from './components/AnimatedText';
import Carousel from './components/Carousel';
import NavScrollExample from './components/NavScrollExample';
import './App.css';
import { faJs, faPython, faJava, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import Card from './components/Card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
// App.js
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const cards = [
    { key: uuidv4(), content: <Card title="JavaScript" icon={faJs} /> },
    { key: uuidv4(), content: <Card title="Python" icon={faPython} /> },
    { key: uuidv4(), content: <Card title="Java" icon={faJava} /> },
    { key: uuidv4(), content: <Card title="HTML5" icon={faHtml5} /> },
    { key: uuidv4(), content: <Card title="CSS3" icon={faCss3Alt} /> },
    { key: uuidv4(), content: <Card title="React" icon={faReact} /> },
  ];

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
                <div className="App">
                  <Carousel
                    cards={cards}
                    height="500px"
                    width="80%"
                    margin="0 auto"
                    offset={2}
                    showArrows={true}
                  />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
