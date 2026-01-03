"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
    FaRegClipboard,
    FaFileAlt,
    FaPenNib,
    FaTable,
    FaArrowUp,
    FaBoxOpen,
    FaThList
} from "react-icons/fa";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function GridPage() {
    const items = [
        {
            title: "The Dawn of Innovation",
            description: "Explore the birth of groundbreaking ideas and inventions.",
            header: <Skeleton />,
            icon: <FaRegClipboard className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Digital Revolution",
            description: "Dive into the transformative power of technology.",
            header: <Skeleton />,
            icon: <FaFileAlt className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Art of Design",
            description: "Discover the beauty of thoughtful and functional design.",
            header: <Skeleton />,
            icon: <FaPenNib className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Power of Communication",
            description:
                "Understand the impact of effective communication in our lives.",
            header: <Skeleton />,
            icon: <FaTable className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Pursuit of Knowledge",
            description: "Join the quest for understanding and enlightenment.",
            header: <Skeleton />,
            icon: <FaArrowUp className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Joy of Creation",
            description: "Experience the thrill of bringing ideas to life.",
            header: <Skeleton />,
            icon: <FaBoxOpen className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Spirit of Adventure",
            description: "Embark on exciting journeys and thrilling discoveries.",
            header: <Skeleton />,
            icon: <FaThList className="h-4 w-4 text-neutral-500" />,
        },
    ];
    return (
        <div className="min-h-screen w-full bg-black relative p-8 pt-24 overflow-y-auto">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                <Link href="/lab" className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Lab</span>
                </Link>
                <div className="pointer-events-auto bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                    <h1 className="text-white font-bold tracking-wider text-sm uppercase">Experiment 10</h1>
                </div>
            </div>

            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
