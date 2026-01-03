"use client";
import React, { useRef, useEffect } from "react";

export function QuantumField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = 1000; // Optimized count
        const flowFieldScale = 0.01;
        const flowSpeed = 1;
        let hue = 0;
        let animationId: number;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            history: { x: number; y: number }[];
            maxLength: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.history = [];
                this.maxLength = Math.random() * 20 + 10;
            }

            update() {
                // Simple flow field based on Perlin-ish noise (using simple trig here for demo speed)
                const angle = (Math.cos(this.x * flowFieldScale) + Math.sin(this.y * flowFieldScale)) * Math.PI * 2;

                this.vx += Math.cos(angle) * 0.1;
                this.vy += Math.sin(angle) * 0.1;

                // Friction
                this.vx *= 0.95;
                this.vy *= 0.95;

                // Mouse interaction (repel)
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    this.vx += dx / dist * 0.5;
                    this.vy += dy / dist * 0.5;
                }

                this.x += this.vx * flowSpeed;
                this.y += this.vy * flowSpeed;

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > this.maxLength) {
                    this.history.shift();
                }

                // Wrap around
                if (this.x > width) { this.x = 0; this.history = []; }
                if (this.x < 0) { this.x = width; this.history = []; }
                if (this.y > height) { this.y = 0; this.history = []; }
                if (this.y < 0) { this.y = height; this.history = []; }
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                if (this.history.length > 0) {
                    context.moveTo(this.history[0].x, this.history[0].y);
                    for (let i = 1; i < this.history.length; i++) {
                        context.lineTo(this.history[i].x, this.history[i].y);
                    }
                }
                context.strokeStyle = `hsla(${(hue + this.x * 0.1) % 360}, 50%, 50%, 0.5)`;
                context.stroke();
            }
        }

        const mouse = { x: -1000, y: -1000 };

        function init() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!ctx) return;
            // Fade out trail
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            hue += 0.5;
            animationId = requestAnimationFrame(animate);
        }

        init();
        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        }
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 bg-black" />;
}
