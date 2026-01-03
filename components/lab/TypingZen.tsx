"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    color: string;
}

export function TypingZen() {
    const [text, setText] = useState("");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const particlesRef = useRef<Particle[]>([]);

    // Focus text area on load
    useEffect(() => {
        if (textRef.current) {
            textRef.current.focus();
        }
    }, []);

    const createParticles = (x: number, y: number) => {
        const colors = ["#ffffff", "#61dafb", "#d946ef", "#a855f7"];
        for (let i = 0; i < 8; i++) {
            particlesRef.current.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                life: 1.0,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);

        // Estimate cursor position roughly (centered for Zen feeling)
        const rect = textRef.current?.getBoundingClientRect();
        if (rect && canvasRef.current) {
            createParticles(canvasRef.current.width / 2, canvasRef.current.height / 2);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;

                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();

                if (p.life <= 0) {
                    particlesRef.current.splice(i, 1);
                }
            });
            requestAnimationFrame(loop);
        };

        // Resize
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        const animId = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        }
    }, []);

    return (
        <div className="w-full h-screen relative bg-[#0f172a] text-white flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

            <div className="z-20 w-full max-w-4xl px-8">
                <AnimatePresence mode="wait">
                    {text.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                            <p className="text-white/20 text-2xl font-light">Type something to begin...</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <textarea
                    ref={textRef}
                    value={text}
                    onChange={handleInput}
                    className="w-full h-[60vh] bg-transparent resize-none outline-none border-none text-3xl md:text-5xl font-mono text-center text-white/90 placeholder-transparent"
                    spellCheck={false}
                />
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none">
                <p className="text-white/20 text-sm">Zen Mode • Just type</p>
            </div>
        </div>
    );
}
