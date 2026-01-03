"use client";
import React from "react";
import { Button } from "@/components/ui/MovingBorders";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BorderlinePage() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0B0B0F] relative overflow-hidden p-8">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                <Link href="/lab" className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Lab</span>
                </Link>
                <div className="pointer-events-auto bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h1 className="text-white font-bold tracking-wider text-sm uppercase">Experiment 12</h1>
                </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center">
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Dynamic Borders
                </Button>

                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    duration={2000}
                >
                    Fast Speed
                </Button>

                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    duration={8000}
                >
                    Slow Speed
                </Button>
            </div>

            <p className="text-white/30 text-sm mt-12 max-w-md text-center">
                Buttons using SVG path animations to calculate the moving border effect.
            </p>
        </div>
    );
}
