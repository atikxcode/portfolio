"use client";

import React from "react";
import { CodeCity } from "@/components/lab/CodeCity";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function CodeCityPage() {
    return (
        <div className="w-full h-screen relative bg-[#0d1117] overflow-hidden">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                <Link href="/lab" className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Lab</span>
                </Link>
                <div className="pointer-events-auto bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h1 className="text-white font-bold tracking-wider text-sm uppercase">Experiment 02: Code City</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full h-full relative z-10">
                <CodeCity />
            </div>

            {/* Footer Overlay */}
            <div className="absolute bottom-10 left-0 w-full z-50 flex justify-center pointer-events-none">
                <p className="text-white/30 text-xs text-center font-mono">
                    Visualizing GitHub Contribution Data
                </p>
            </div>
        </div>
    );
}
