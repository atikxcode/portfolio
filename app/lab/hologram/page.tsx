"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function HologramPage() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-[#050510] relative overflow-hidden">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                <Link href="/lab" className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Lab</span>
                </Link>
                <div className="pointer-events-auto bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h1 className="text-white font-bold tracking-wider text-sm uppercase">Experiment 07</h1>
                </div>
            </div>

            <div className="h-[40rem] w-full flex items-center justify-center ">
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
            </div>
            <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none">
                <p className="text-white/20 text-sm">Hover to reveal the hologram.</p>
            </div>
        </div>
    );
}
