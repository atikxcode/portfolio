"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Node {
    id: string;
    label: string;
    subLabel?: string;
    icon?: React.ReactNode;
    status?: "active" | "inactive" | "loading";
}

export interface Edge {
    source: string;
    target: string;
    label?: string;
}

interface ArchitectureDiagramProps {
    nodes: Node[];
    edges: Edge[];
    className?: string;
}

export const ArchitectureDiagram = ({
    nodes,
    edges,
    className,
}: ArchitectureDiagramProps) => {
    return (
        <div className={cn("relative w-full h-[300px] md:h-[400px] bg-black-100/50 rounded-xl border border-white/10 p-8 flex items-center justify-center overflow-hidden", className)}>
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full max-w-4xl">
                {nodes.map((node, idx) => (
                    <React.Fragment key={node.id}>
                        {/* Node */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(203, 172, 249, 0.5)" }}
                            className="relative flex flex-col items-center justify-center p-4 bg-[#10132E] border border-white/20 rounded-xl min-w-[140px] shadow-lg z-20 group cursor-pointer"
                        >
                            {/* Connection Point (Left - incoming) */}
                            {idx > 0 && (
                                <div className="absolute -left-2 top-1/2 w-4 h-4 bg-purple/20 rounded-full md:block hidden" />
                            )}
                            {/* Connection Point (Top - incoming mobile) */}
                            {idx > 0 && (
                                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-purple/20 rounded-full md:hidden block" />
                            )}

                            <div className="text-purple mb-2 text-2xl group-hover:scale-110 transition-transform duration-200">
                                {node.icon}
                            </div>
                            <h3 className="text-white font-bold text-sm tracking-wide">{node.label}</h3>
                            {node.subLabel && (
                                <span className="text-white/50 text-[10px] uppercase tracking-wider mt-1">{node.subLabel}</span>
                            )}

                            {/* Glowing Pulse for 'active' nodes */}
                            <div className="absolute inset-0 bg-purple/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
                        </motion.div>

                        {/* Edge / Connection Line */}
                        {idx < nodes.length - 1 && (
                            <div className="relative flex items-center justify-center">
                                {/* Desktop Horizontal Line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.4 }}
                                    className="hidden md:block h-[2px] w-12 lg:w-24 bg-gradient-to-r from-purple/20 to-purple/60 rounded-full"
                                />
                                {/* Mobile Vertical Line */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "100%" }}
                                    transition={{ delay: idx * 0.2 + 0.3, duration: 0.4 }}
                                    className="md:hidden w-[2px] h-12 bg-gradient-to-b from-purple/20 to-purple/60 rounded-full"
                                />

                                {/* Edge Label */}
                                {edges.find(e => e.source === node.id)?.label && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: idx * 0.2 + 0.5 }}
                                        className="absolute bg-black-100 px-2 py-1 text-[10px] text-white/40 border border-white/10 rounded-md whitespace-nowrap"
                                    >
                                        {edges.find(e => e.source === node.id)?.label}
                                    </motion.span>
                                )}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
