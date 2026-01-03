"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const skills = [
    { name: "React", level: 9, color: "#61dafb" },
    { name: "Next.js", level: 9, color: "#ffffff" },
    { name: "TypeScript", level: 8, color: "#3178c6" },
    { name: "Node.js", level: 8, color: "#339933" },
    { name: "Three.js", level: 6, color: "#ffffff" },
    { name: "Tailwind", level: 9, color: "#38bdf8" },
    { name: "MongoDB", level: 7, color: "#47a248" },
    { name: "AWS", level: 6, color: "#ff9900" },
    { name: "Framer", level: 8, color: "#0055ff" },
    { name: "GraphQL", level: 7, color: "#e10098" },
    { name: "PostgreSQL", level: 7, color: "#336791" },
    { name: "Docker", level: 6, color: "#2496ed" },
];

const Word = ({ children, position, color, level }: any) => {
    const fontRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (fontRef.current) {
            // Subtle floating rotation 
            fontRef.current.rotation.y = Math.sin(clock.getElapsedTime() + position[0]) * 0.2;
            fontRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[1]) * 0.1;
        }
    });

    return (
        <Float floatIntensity={2} rotationIntensity={1}>
            <Text
                ref={fontRef}
                position={position}
                fontSize={0.5 + (level / 20)}
                color={color}
                anchorX="center"
                anchorY="middle"
            >
                {children}
                <meshStandardMaterial emissive={color} emissiveIntensity={0.5} color={color} />
            </Text>
        </Float>
    );
};

const Galaxy = () => {
    const points = useMemo(() => {
        return skills.map((skill, i) => {
            // Spherical distribution formula (Fibonacci lattice)
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;

            const x = 8 * Math.cos(theta) * Math.sin(phi);
            const y = 8 * Math.sin(theta) * Math.sin(phi);
            const z = 8 * Math.cos(phi);

            return {
                ...skill,
                pos: [x, y, z] as [number, number, number]
            }
        })
    }, []);

    return (
        <group>
            {points.map((skill, i) => (
                <Word key={i} position={skill.pos} color={skill.color} level={skill.level}>
                    {skill.name}
                </Word>
            ))}
        </group>
    )
}

export const SkillGalaxy = () => {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <color attach="background" args={["#050510"]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Galaxy />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
            </Canvas>
        </div>
    );
};
