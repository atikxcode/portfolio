"use client";
import React from "react";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function CreativeLabCTA() {
    return (
        <section className="py-20 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <BackgroundGradient className="rounded-[22px] max-w-5xl mx-auto p-10 bg-white dark:bg-zinc-900 overflow-hidden relative">
                    <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-6">
                            <span className="text-xs text-purple font-mono tracking-widest uppercase">Experimental Zone</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            The Creative Lab
                        </h2>

                        <p className="text-base text-zinc-400 mb-8 max-w-xl">
                            Step inside my digital playground. A collection of unique interactive experiments,
                            physics simulations, and WebGL visualizations built from scratch.
                        </p>

                        <Link href="/lab">
                            <button className="px-8 py-3 rounded-full bg-slate-900 border border-slate-700 text-white font-bold transition-transform hover:scale-105 hover:bg-slate-800 active:scale-95 flex items-center gap-2 group">
                                Enter the Lab
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </Link>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple/30 rounded-full blur-[100px]" />
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px]" />
                </BackgroundGradient>
            </div>
        </section>
    );
}
