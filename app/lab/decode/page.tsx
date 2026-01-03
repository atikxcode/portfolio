"use client";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const words = `System Initialized...
Scanning for vulnerabilities...
Access Granted.
Welcome to the Matrix.
This effect reveals text character by character, simulating a decoding process or a terminal output. It is perfect for cyberpunk or technical themes.`;

export default function DecodePage() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black relative overflow-hidden p-8">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                <Link href="/lab" className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Lab</span>
                </Link>
                <div className="pointer-events-auto bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h1 className="text-white font-bold tracking-wider text-sm uppercase">Experiment 11</h1>
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                <TextGenerateEffect words={words} />
            </div>
        </div>
    );
}
