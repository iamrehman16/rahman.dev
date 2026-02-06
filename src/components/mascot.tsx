"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MascotProps {
    seed: string;
    className?: string;
    dialogue?: string;
}

export function Mascot({ seed, className = "", dialogue }: MascotProps) {
    // Use Robohash set 1 (robots)
    const imageUrl = `https://robohash.org/${seed}.png?set=set1`;

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            whileHover={{ y: -10, rotate: 2 }}
            className={`relative group ${className}`}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[50px] animate-pulse" />

            {/* Speech Bubble (Manga Style) */}
            {dialogue && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:-top-16 md:-right-10 z-20 w-48 md:w-[200px]"
                >
                    <div className="relative bg-white text-black p-3 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]">
                        <p className="text-xs font-bold leading-tight font-comic uppercase tracking-wider">
                            {dialogue}
                        </p>
                        {/* Bubble Tail */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 w-4 h-4 bg-white border-b-4 border-r-4 border-black rotate-45 transform" />
                    </div>
                </motion.div>
            )}

            {/* Mascot Image */}
            <div className="relative w-full h-full">
                <Image
                    src={imageUrl}
                    alt={`Mascot ${seed}`}
                    fill
                    className="object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
            </div>
        </motion.div>
    );
}
