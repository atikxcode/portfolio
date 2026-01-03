"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaCode, FaMusic, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const experiments = [
    {
        id: "skill-galaxy",
        title: "Skill Galaxy",
        description: "A 3D interactive universe visualizing my technical expertise.",
        icon: <FaReact className="w-6 h-6 text-[#61dafb]" />,
        color: "from-[#61dafb]/20 to-blue-500/20",
        href: "/lab/skill-galaxy",
        status: "Live"
    },
    {
        id: "code-city",
        title: "Code City",
        description: "Isometric city generated from GitHub contribution data.",
        icon: <FaCode className="w-6 h-6 text-emerald-400" />,
        color: "from-emerald-400/20 to-green-600/20",
        href: "/lab/code-city",
        status: "Live"
    },
    {
        id: "tone-matrix",
        title: "Tone Matrix",
        description: "Sequencer for composing loop-based generative music.",
        icon: <FaMusic className="w-6 h-6 text-purple" />,
        color: "from-purple/20 to-pink-500/20",
        href: "/lab/tone-matrix",
        status: "Live"
    }
];

export default function LabHubPage() {
    return (
        <div className="w-full min-h-screen bg-black-100 relative overflow-hidden flex flex-col">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />

            {/* Nav */}
            <div className="w-full p-6 flex justify-between items-center z-10">
                <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                    <FaArrowLeft />
                    <span className="text-sm">Back to Portfolio</span>
                </Link>
                <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur">
                    <span className="text-xs text-white/50 font-mono">LAB STATUS: ONLINE</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-6xl mx-auto w-full z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
                        The Creative Lab
                    </h1>
                    <p className="text-white/50 max-w-xl mx-auto">
                        A sandbox for experimental interfaces, interactive 3D elements, and creative coding projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {experiments.map((item, idx) => (
                        <Link key={item.id} href={item.href} className="group relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="h-full bg-[#10132E] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors group-hover:shadow-2xl overflow-hidden relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                                    <p className="text-sm text-white/50 mb-6 min-h-[40px]">{item.description}</p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded border ${item.status === 'Live' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'}`}>
                                            {item.status}
                                        </span>
                                        <span className="text-white/30 text-sm group-hover:text-white transition-colors">Enter &rarr;</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
