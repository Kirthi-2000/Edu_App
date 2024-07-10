import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaTrophy, FaMobileAlt, FaSmile } from 'react-icons/fa';
import { FiMonitor, FiPlayCircle, FiCode } from 'react-icons/fi';
import './AnimatedText.css';
import { Link } from 'react-router-dom';

const iconStyle = { color: 'red' }; // You can change this color to your preference

const AnimatedText = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, scale: 0, rotateY: -90 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: 'spring',
                damping: 15,
                stiffness: 150,
                duration: 0.5,
            },
        },
        hover: {
            scale: 1.2,
            rotateY: 360,
            transition: {
                duration: 1,
            },
        },
    };

    const getIcon = (char) => {
        switch (char) {
            case '😊':
                return <FaSmile style={iconStyle} />;
            case '📖':
                return <FaBook style={iconStyle} />;
            case '🥇':
                return <FaTrophy style={iconStyle} />;
            case '📱':
                return <FaMobileAlt style={iconStyle} />;
            default:
                return char;
        }
    };

    return (
        <div className="animated-text-wrapper">
            <motion.div
                className="animated-text-container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <Link to="/">
                    <button className="top-right-button">LOGIN</button>
                </Link>
                {Array.from('Igniting😊the📖Power🥇of📱Learning').map((letter, index) => (
                    <motion.div
                        key={index}
                        className="animated-box"
                        variants={child}
                        whileHover="hover"
                    >
                        <span className="animated-letter">
                            {getIcon(letter)}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default AnimatedText;
