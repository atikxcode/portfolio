"use client";

import React from "react";
import { NeuralGrid } from "@/components/lab/NeuralGrid";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NeuralGridPage() {
    return (
        <div className="w-full min-h-screen relative bg-[#020617]">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                <Link href="/lab" className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Lab</span>
                </Link>
                <div className="pointer-events-auto bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h1 className="text-white font-bold tracking-wider text-sm uppercase">Experiment 05</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full h-screen overflow-hidden">
                <NeuralGrid />
            </div>
        </div>
    );
}
