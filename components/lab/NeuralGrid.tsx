"use client";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "framer-motion";

export function NeuralGrid() {
    return (
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8 h-screen relative">
            <div className="absolute inset-0 w-full h-full bg-black">
                <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-black"
                    colors={[
                        [236, 72, 153],
                        [232, 121, 249],
                    ]}
                    dotSize={2}
                />
            </div>

            <div className="z-20 relative text-center pointer-events-none">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    Neural Grid
                </h1>
                <p className="text-white/50 mt-4 max-w-lg mx-auto">
                    Interactive shader matrix responding to cursor movement and time.
                </p>
            </div>

            <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
        </div>
    );
}
