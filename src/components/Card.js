import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faJava, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'; // Import your modal component

export default function Card({ title, icon, isCenter, index }) {
  const CARDSIZE = 150;
  const CARDWIDTH = CARDSIZE * 2;
  const CARDBORDERRADIUS = CARDSIZE * 0.1;
  const CARDTITLEPOS = CARDWIDTH * 0.21;

  // Define an array of dark background gradient colors
  const darkGradients = [
    'linear-gradient(135deg, #333 0%, #6b2737 100%)', // Dark gradient
    'linear-gradient(135deg, #4b0082 0%, #556B2F 100%)', // Another dark gradient
    'linear-gradient(135deg, #483D8B 0%, #2F4F4F 100%)', // Yet another dark gradient
  ];
  const [modalShow, setModalShow] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(''); // Add state for background

  // Choose a dark gradient based on the index (to ensure uniqueness)
  const chosenGradient = darkGradients[index % darkGradients.length];

  // Map programming language titles to FontAwesome icons
  const iconMapping = {
    'JavaScript': faJs,
    'Python': faPython,
    'Java': faJava,
    'HTML5': faHtml5,
    'CSS3': faCss3Alt,
    'React': faReact,
  };

  // Determine the FontAwesome icon based on the title
  const languageIcon = iconMapping[title];

  const handleClick = () => {
    setSelectedTitle(title);
    setSelectedIcon(languageIcon);
    setSelectedBackground(chosenGradient); // Set the selected background
    setModalShow(true);
  };

  return (
    <div
      className={`cardContainer ${isCenter ? 'centerCard' : ''}`}
      style={{
        height: CARDSIZE,
        width: CARDWIDTH,
        borderRadius: CARDBORDERRADIUS,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transition: 'transform 0.5s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Outer card with light background */}
      <div
        onClick={handleClick}
        className="outerCard"
        style={{
          background: '#f0f0f0', // Light background color
          padding: '10px',
          borderRadius: '10px',
          width: '80%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Inner card with dynamically chosen dark gradient background */}
        <div
          className="innerCard"
          style={{
            background: chosenGradient, // Dynamically chosen dark gradient background
            padding: '20px',
            borderRadius: '8px',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', // Ensure absolute positioning works within
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s, background 0.5s',
            transform: isCenter ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          {/* Icon */}
          <div
            className={`cardIconContainer ${isCenter ? 'zoomEffect' : ''}`}
            style={{
              fontSize: '70px', // Adjust icon size as needed
              color: '#61DBFB', // Icon color
              marginBottom: '10px',
              transition: 'transform 0.5s',
              position: 'absolute',
              top: '-40px', // Move icon outside the inner card
              zIndex: 1,
            }}
          >
            <FontAwesomeIcon icon={languageIcon} />
          </div>

          {/* Title */}
          <div
            className="titleContainer"
            style={{
              textAlign: 'center',
              color: '#fff', // Title color
              zIndex: 1,
            }}
          >
            <div id="title" style={{ right: CARDTITLEPOS }}>
              {title}
            </div>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={selectedTitle}
        icon={selectedIcon}
        background={selectedBackground} // Pass the selected background to the modal
      />
    </div>
  );
}
