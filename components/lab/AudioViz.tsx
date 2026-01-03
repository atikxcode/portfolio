"use client";
import React, { useRef, useEffect, useState } from "react";

export function AudioViz() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let animationId: number;

        const draw = () => {
            if (!ctx) return;

            // Clear with fade effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, width, height);

            if (analyser) {
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                analyser.getByteFrequencyData(dataArray);

                const centerX = width / 2;
                const centerY = height / 2;
                const radius = Math.min(width, height) / 4;

                ctx.beginPath();
                for (let i = 0; i < bufferLength; i++) {
                    const barHeight = dataArray[i] * 1.5;
                    const rads = (Math.PI * 2 * i) / bufferLength;

                    const x = centerX + Math.cos(rads) * (radius + barHeight);
                    const y = centerY + Math.sin(rads) * (radius + barHeight);
                    const xEnd = centerX + Math.cos(rads) * radius;
                    const yEnd = centerY + Math.sin(rads) * radius;

                    ctx.moveTo(xEnd, yEnd);
                    ctx.lineTo(x, y);

                    const hue = (i / bufferLength) * 360;
                    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
                }
                ctx.lineWidth = 2;
                ctx.stroke();

                // Inner circle
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
                ctx.stroke();
            } else {
                // Idle animation
                ctx.font = "20px monospace";
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                ctx.fillText("Click to Activate Audio Engine", width / 2 - 150, height / 2);
            }

            animationId = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
        }
    }, [analyser]);

    const initAudio = () => {
        if (isActive) return;

        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const ana = ctx.createAnalyser();
        ana.fftSize = 256;

        setAudioContext(ctx);
        setAnalyser(ana);
        setIsActive(true);

        // Play a startup sound
        playNote(440, ctx, ana);
    };

    const playNote = (freq: number, ctx: AudioContext, dest: AudioNode) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(dest);
        gain.connect(ctx.destination);

        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
        osc.stop(ctx.currentTime + 1);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (!audioContext) {
            initAudio();
        } else if (analyser) {
            // Play random note
            const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
            const note = notes[Math.floor(Math.random() * notes.length)];
            playNote(note * (Math.random() > 0.5 ? 0.5 : 1), audioContext, analyser);
            playNote(note * 1.5, audioContext, analyser); // Harmony
        }
    };

    return (
        <canvas
            ref={canvasRef}
            onClick={handleClick}
            className="fixed inset-0 bg-[#111] cursor-pointer"
        />
    );
}
