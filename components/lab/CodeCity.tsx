"use client";

import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

// Simulated GitHub Contribution Data (Weeks x Days)
// Level 0-4 (0 = No commit, 4 = High activity)
const generateCityData = () => {
    const weeks = 20;
    const days = 7;
    const data = [];

    for (let w = 0; w < weeks; w++) {
        for (let d = 0; d < days; d++) {
            // Random activity level with bias towards 0 and 1
            const rand = Math.random();
            let level = 0;
            if (rand > 0.9) level = 4;
            else if (rand > 0.7) level = 3;
            else if (rand > 0.5) level = 2;
            else if (rand > 0.2) level = 1;

            data.push({ x: w, z: d, level });
        }
    }
    return data;
};

const Building = ({ position, level }: { position: [number, number, number], level: number }) => {
    if (level === 0) return null;

    // Height based on contribution level
    const height = level * 1.5;
    // Color gradient based on level (Greenish like GitHub)
    const colors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
    const color = colors[level];

    return (
        <group position={position}>
            <Box args={[0.8, height, 0.8]} position={[0, height / 2, 0]}>
                <meshStandardMaterial color={color} roughness={0.2} metalness={0.5} />
            </Box>
            {/* Roof Light for high activity */}
            {level >= 3 && (
                <pointLight position={[0, height + 0.5, 0]} color={color} intensity={1} distance={3} />
            )}
        </group>
    );
};

const City = () => {
    const data = useMemo(() => generateCityData(), []);

    // Center the city
    const centerX = (20 * 1) / 2;
    const centerZ = (7 * 1) / 2;

    return (
        <group position={[-centerX, 0, -centerZ]}>
            {/* Ground Plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[centerX, -0.1, centerZ]}>
                <planeGeometry args={[30, 15]} />
                <meshStandardMaterial color="#0d1117" roughness={0.8} />
            </mesh>

            {/* Grid of Buildings */}
            {data.map((block, i) => (
                <Building key={i} position={[block.x, 0, block.z]} level={block.level} />
            ))}
        </group>
    );
};

export const CodeCity = () => {
    return (
        <div className="w-full h-full relative">
            <Canvas camera={{ position: [20, 20, 20], fov: 45 }}>
                <color attach="background" args={["#0d1117"]} />
                <ambientLight intensity={0.2} />
                <directionalLight position={[-10, 20, 5]} intensity={1} castShadow />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#39d353" />

                <City />
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
};
