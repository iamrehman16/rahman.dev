"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Mascot } from "@/components/mascot";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 md:pt-0">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="container px-4 mx-auto relative z-10 w-full flex flex-col justify-center">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full">
                    {/* Text Content - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 w-fit border border-white/10 mb-8 backdrop-blur-sm mx-auto lg:mx-0">
                            <Sparkles size={14} className="text-primary" />
                            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
                                Available for new projects
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">Abdur Rahman</span> <br />
                            <span className="text-4xl md:text-6xl text-white">Full Stack Developer</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
                            NestJS Backend Developer & Full Stack Engineer crafting scalable web solutions with Modern Tech.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="#projects"
                                className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 rounded-full bg-white blur-md opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
                            </Link>

                            <Link
                                href="#contact"
                                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all font-medium text-white flex items-center gap-2"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    {/* Mascot - Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end items-center"
                    >
                        <Mascot
                            seed="hero-bot-v1"
                            className="animate-bounce-slow w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                            dialogue="Welcome, Traveler! Ready to explore?"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-bounce" />
            </motion.div>
        </section>
    );
}
