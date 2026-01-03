"use client";
import React, { useRef, useEffect } from "react";

export function GravityWell() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let animationId: number;

        // Simulation parameters
        const G = 0.5;
        const friction = 0.995;

        interface Body {
            x: number;
            y: number;
            vx: number;
            vy: number;
            mass: number;
            radius: number;
            color: string;
            isStatic: boolean;
            trail: { x: number, y: number }[];
        }

        let bodies: Body[] = [];

        // Initialize with a central sun
        bodies.push({
            x: width / 2,
            y: height / 2,
            vx: 0,
            vy: 0,
            mass: 2000,
            radius: 30,
            color: "#ffffff",
            isStatic: true, // Anchor it
            trail: []
        });

        // Add some random planets
        for (let i = 0; i < 50; i++) {
            const radius = Math.random() * 200 + 100;
            const angle = Math.random() * Math.PI * 2;
            const x = width / 2 + Math.cos(angle) * radius;
            const y = height / 2 + Math.sin(angle) * radius;

            // Calculate orbital velocity: v = sqrt(GM/r)
            const v = Math.sqrt(G * 2000 / radius);
            // Perpendicular vector
            const vx = -Math.sin(angle) * v;
            const vy = Math.cos(angle) * v;

            bodies.push({
                x, y, vx, vy,
                mass: Math.random() * 5 + 1,
                radius: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
                isStatic: false,
                trail: []
            });
        }


        function update() {
            if (!ctx) return;
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trail effect
            ctx.fillRect(0, 0, width, height);

            // Physics Loop
            for (let i = 0; i < bodies.length; i++) {
                const b1 = bodies[i];

                // Gravity forces
                for (let j = 0; j < bodies.length; j++) {
                    if (i === j) continue;
                    const b2 = bodies[j];

                    const dx = b2.x - b1.x;
                    const dy = b2.y - b1.y;
                    const distSq = dx * dx + dy * dy;
                    const dist = Math.sqrt(distSq);

                    if (dist > (b1.radius + b2.radius)) { // Don't compute gravity inside collisions roughly
                        // F = G * m1 * m2 / r^2
                        const force = (G * b1.mass * b2.mass) / distSq;
                        const ax = (force * dx / dist) / b1.mass;
                        const ay = (force * dy / dist) / b1.mass;

                        if (!b1.isStatic) {
                            b1.vx += ax;
                            b1.vy += ay;
                        }
                    }
                }

                if (!b1.isStatic) {
                    b1.x += b1.vx;
                    b1.y += b1.vy;
                    // b1.vx *= friction; // Minimal friction for orbits
                    // b1.vy *= friction;
                }

                // Bounce off walls (optional, maybe wrap is better? Let's bouncing)
                if (b1.x < 0 || b1.x > width) b1.vx *= -1;
                if (b1.y < 0 || b1.y > height) b1.vy *= -1;

                // Draw
                ctx.beginPath();
                ctx.arc(b1.x, b1.y, b1.radius, 0, Math.PI * 2);
                ctx.fillStyle = b1.color;
                ctx.shadowBlur = b1.radius * 2;
                ctx.shadowColor = b1.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            animationId = requestAnimationFrame(update);
        }

        update();

        // Interaction
        let isDragging = false;
        let dragStart = { x: 0, y: 0 };

        const onMouseDown = (e: MouseEvent) => {
            if (e.button === 0) { // Left click
                isDragging = true;
                dragStart = { x: e.clientX, y: e.clientY };
            } else if (e.button === 2) { // Right click
                bodies.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: 0,
                    vy: 0,
                    mass: 1000, // Black Holeish
                    radius: 15,
                    color: "#ff0055", // Red
                    isStatic: true,
                    trail: []
                });
            }
        };

        const onMouseUp = (e: MouseEvent) => {
            if (isDragging && e.button === 0) {
                isDragging = false;
                const dx = dragStart.x - e.clientX;
                const dy = dragStart.y - e.clientY;

                bodies.push({
                    x: dragStart.x,
                    y: dragStart.y,
                    vx: dx * 0.05, // Sling velocity
                    vy: dy * 0.05,
                    mass: Math.random() * 10 + 5,
                    radius: Math.random() * 4 + 2,
                    color: "#ffffff",
                    isStatic: false,
                    trail: []
                });
            }
        };

        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("contextmenu", e => e.preventDefault());

        return () => {
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("contextmenu", e => e.preventDefault());
            cancelAnimationFrame(animationId);
        }

    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 bg-[#050505] cursor-crosshair" />;
}
