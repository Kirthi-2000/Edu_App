// src/3DIcons.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const ThreeDIcons = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} color="#FFB83F">
                <meshStandardMaterial attach="material" color="#FFB83F" />
            </Box>
            <Box position={[1.2, 0, 0]} color="#FFB83F">
                <meshStandardMaterial attach="material" color="#FFB83F" />
            </Box>
            <OrbitControls />
        </Canvas>
    );
};

export default ThreeDIcons;
