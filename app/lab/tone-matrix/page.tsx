"use client";

import React from "react";
import ToneMatrix from "@/components/lab/ToneMatrix";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ToneMatrixPage() {
    return (
        <div className="w-full min-h-screen relative bg-[#1a0b2e] flex flex-col items-center justify-center">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
                <Link href="/lab" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Lab</span>
                </Link>
                <div className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h1 className="text-white font-bold tracking-wider text-sm uppercase">Experiment 03: Tone Matrix</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full relative z-10 scale-90 md:scale-100">
                <ToneMatrix />
            </div>
        </div>
    );
}
