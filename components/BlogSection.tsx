"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const blogPosts = [
    {
        id: 1,
        title: "How I hit 100/100 Lighthouse with Next.js 14",
        des: "A deep dive into optimizing CLS, LCP, and using hardware-accelerated animations for a buttery smooth experience.",
        img: "/b1.svg",
        date: "Jan 15, 2024",
        tags: ["Performance", "Next.js"],
        content: `
            <p>Achieving a perfect Lighthouse score is an art form. It requires a deep understanding of how browsers render content and how Next.js handles hydration.</p>
            <h3>1. Optimizing Images</h3>
            <p>Use the <code>next/image</code> component always. It handles lazy loading and format serving (WebP/AVIF) automatically.</p>
            <h3>2. Font Optimization</h3>
            <p>Next.js 14's font optimization module removes layout shifts (CLS) by using fallback fonts that match the x-height of your web font.</p>
            <h3>3. Code Splitting</h3>
            <p>Dynamic imports are your friend. Don't load heavy chart libraries until the user scrolls them into view.</p>
        `
    },
    {
        id: 2,
        title: "Why I chose SQL over NoSQL for this Architecture",
        des: "Breaking down the ACID compliance needs for modern payment systems and why MongoDB wasn't the right fit here.",
        img: "/grid.svg", // Fallback
        date: "Feb 02, 2024",
        tags: ["Architecture", "Database"],
        content: `
            <p>While MongoDB is great for rapid prototyping, transactional integrity is non-negotiable for payment systems.</p>
            <h3>The ACID Test</h3>
            <p>Atomicity, Consistency, Isolation, Durability. If a payment fails, the order status must roll back. SQL makes this atomic operation trivial.</p>
        `
    },
    {
        id: 3,
        title: "Mastering Framer Motion: Beyond Simple Fades",
        des: "Tutorial on creating physics-based micro-interactions and the custom cursor logic used in this portfolio.",
        img: "/re.svg", // Fallback
        date: "Feb 20, 2024",
        tags: ["Animation", "React"],
        content: `
            <p>Animations should feel "physical", not just linear. Springs are the secret sauce.</p>
            <h3>Spring vs Tween</h3>
            <p>A tween is a movement over time. A spring is a simulation of physics. Using stiffness and damping creates interfaces that feel alive.</p>
        `
    }
];

const BlogSection = () => {
    const [selectedPost, setSelectedPost] = useState<any>(null);

    return (
        <section className="py-20 w-full" id="blog">
            <h1 className="heading mb-16">
                My <span className="text-purple">Technical Insights</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
                {blogPosts.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedPost(item)}
                        className="group relative flex flex-col h-full bg-[#10132E] border border-white/[0.1] rounded-3xl overflow-hidden hover:border-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple/10 cursor-pointer"
                    >
                        {/* Image Container */}
                        <div className="relative w-full h-48 bg-[#13162D] overflow-hidden group-hover:scale-105 transition-transform duration-500">
                            <img src="/bg.png" alt="bg-pattern" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img src={item.img} alt={item.title} className="w-20 h-20 object-contain" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex gap-2 mb-4">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold bg-purple/10 text-purple px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-purple transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-sm text-white/60 mb-6 line-clamp-3 leading-relaxed">
                                {item.des}
                            </p>

                            <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
                                <span>{item.date}</span>
                                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-white/60 group-hover:text-white">
                                    Read Article
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Blog Reader Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#10132E] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
                            >
                                <IoClose className="w-6 h-6 text-white" />
                            </button>

                            <div className="relative h-64 w-full bg-[#04071D]">
                                <img src="/bg.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img src={selectedPost.img} alt={selectedPost.title} className="h-32 w-32 object-contain" />
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                <div className="flex gap-2 mb-6">
                                    {selectedPost.tags.map((tag: string) => (
                                        <span key={tag} className="text-xs font-bold px-3 py-1 bg-purple/20 text-purple rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                    {selectedPost.title}
                                </h2>

                                <div className="prose prose-invert prose-lg max-w-none text-white/80">
                                    <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BlogSection;
