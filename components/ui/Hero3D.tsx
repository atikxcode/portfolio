"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, Environment, useTexture } from "@react-three/drei";
import * as THREE from "three";

const TechIcon = ({ icon, position, rotation, scale = 1 }: any) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture(icon) as THREE.Texture;

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle constant rotation
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <Float floatIntensity={2} rotationIntensity={1}>
            <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
                <planeGeometry args={[1, 1]} />
                <meshStandardMaterial
                    map={texture}
                    transparent={true}
                    side={THREE.DoubleSide}
                    alphaTest={0.5}
                    emissive={"#CBACF9"}
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
};

const Scene = () => {
    // Icons configuration
    const items = useMemo(() => [
        { icon: "/re.svg", pos: [0, 0, 0], scale: 1.5 }, // Center React
        { icon: "/tail.svg", pos: [-2, 1, -1], scale: 1 },
        { icon: "/ts.svg", pos: [2, 1, -1], scale: 1 },
        { icon: "/three.svg", pos: [-1.5, -1.5, 0], scale: 1.2 },
        { icon: "/fm.svg", pos: [1.5, -1.5, 0], scale: 1 },
        { icon: "/next.svg", pos: [0, 2, -2], scale: 1.2 },
    ], []);

    return (
        <group>
            {items.map((item, idx) => (
                <TechIcon
                    key={idx}
                    icon={item.icon}
                    position={item.pos as [number, number, number]}
                    rotation={[0, 0, 0]}
                    scale={item.scale}
                />
            ))}
            <Environment preset="city" />
        </group>
    );
};

export const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-60">
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Scene />
            </Canvas>
        </div>
    );
};
