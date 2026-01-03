"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ROWS = 8;
const COLS = 16;
// Pentatonic Scale (C minor pentatonicish)
const SCALE = [
    523.25, // C5
    466.16, // Bb4
    392.00, // G4
    349.23, // F4
    311.13, // Eb4
    261.63, // C4
    233.08, // Bb3
    196.00, // G3
];

const ToneMatrix = () => {
    const [grid, setGrid] = useState<boolean[][]>(
        Array(ROWS).fill(null).map(() => Array(COLS).fill(false))
    );
    const [playing, setPlaying] = useState(false);
    const [currentCol, setCurrentCol] = useState(0);
    const audioCtxRef = useRef<AudioContext | null>(null);

    // Initialize Audio Context on user interaction
    const initAudio = () => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }
    };

    const toggleCell = (row: number, col: number) => {
        initAudio();
        const newGrid = [...grid];
        newGrid[row][col] = !newGrid[row][col];
        setGrid(newGrid);
    };

    // Synthesize Sound
    const playNote = (freq: number) => {
        if (!audioCtxRef.current) return;

        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);

        gain.gain.setValueAtTime(0.1, audioCtxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        osc.stop(audioCtxRef.current.currentTime + 0.5);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (playing) {
            interval = setInterval(() => {
                setCurrentCol((prev) => {
                    const nextCol = (prev + 1) % COLS;

                    // Trigger notes for the *new* column
                    grid.forEach((row, rowIndex) => {
                        if (row[nextCol]) {
                            playNote(SCALE[rowIndex]);
                        }
                    });

                    return nextCol;
                });
            }, 200); // 300 BPM (approx)
        }
        return () => clearInterval(interval);
    }, [playing, grid]); // Depend on grid to play correctly if changed while playing

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="mb-6 flex gap-4">
                <button
                    onClick={() => {
                        initAudio();
                        setPlaying(!playing);
                    }}
                    className={`px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all ${playing ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white shadow-lg`}
                >
                    {playing ? "Stop" : "Play"}
                </button>
                <button
                    onClick={() => setGrid(Array(ROWS).fill(null).map(() => Array(COLS).fill(false)))}
                    className="px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                    Clear
                </button>
            </div>

            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
                {grid.map((row, rIdx) => (
                    // React.Fragment key is usually index if stable, here row index is stable
                    <React.Fragment key={rIdx}>
                        {row.map((cell, cIdx) => (
                            <motion.div
                                key={`${rIdx}-${cIdx}`}
                                onClick={() => toggleCell(rIdx, cIdx)}
                                className={`w-6 h-6 sm:w-8 sm:h-8 rounded cursor-pointer border border-white/5 transition-colors duration-100 ${cell
                                        ? 'bg-purple shadow-[0_0_10px_rgba(203,172,249,0.8)]'
                                        : 'bg-white/5 hover:bg-white/10'
                                    } ${currentCol === cIdx ? 'brightness-150' : ''}`}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>

            <p className="mt-8 text-white/50 text-xs text-center max-w-md">
                Click grid cells to activate notes. Press Play to start the sequencer.
            </p>
        </div>
    );
};

export default ToneMatrix;
