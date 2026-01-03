"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function FocusPage() {
    return (
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                <Link href="/lab" className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Lab</span>
                </Link>
                <div className="pointer-events-auto bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h1 className="text-white font-bold tracking-wider text-sm uppercase">Experiment 09</h1>
                </div>
            </div>

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Spotlight <br /> is the new trend.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Spotlight effect is a great way to draw attention to a specific part of the page. It creates a sense of depth and focus, guiding the user&apos;s eye to the most important content.
                </p>
            </div>
        </div>
    );
}
