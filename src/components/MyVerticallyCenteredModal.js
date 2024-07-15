import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

function MyVerticallyCenteredModal({ show, onHide, title, icon, background }) {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (show) {
      setAnimationClass('transform-in');
    } else {
      setAnimationClass('transform-out');
    }
  }, [show]);

  return (
    <div className={`popup-wrap ${show ? 'd-block' : 'd-none'}`}>
      <div className={`popup-box ${animationClass}`}>
        <div
          className="popup-content"
          style={{
            background, // Apply the background gradient from the card
            padding: '20px',
            borderRadius: '10px',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s, background 0.5s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Icon */}
          <div
            className="popup-icon"
            style={{
              fontSize: '90px', // Adjust icon size as needed
              color: '#61DBFB', // Icon color
              position: 'absolute',
              top: '-30px',
              left: '10px',
              zIndex: 1,
            }}
          >
            <FontAwesomeIcon icon={icon} />
          </div>

          <div className="popup-text" style={{ marginTop: '100px' }}>
            {/* Title */}
            <div
              className="popup-title"
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#fff', // Title color
                zIndex: 1,
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              className="popup-description"
              style={{
                fontSize: '18px',
                color: '#fff',
                zIndex: 1,
              }}
            >
              A sub-heading for the popup with a little description.
            </div>
          </div>

          {/* Close Button */}
          <a className="close-btn popup-close" href="#" onClick={(e) => { e.preventDefault(); onHide(); }}>x</a>
        </div>
      </div>
    </div>
  );
}

export default MyVerticallyCenteredModal;
