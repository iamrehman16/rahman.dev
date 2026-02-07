"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";
import { Mascot } from "@/components/mascot";

const projects = [
    {
        title: "CampusConnect (FYP)",
        description: "A comprehensive student resource collaboration platform fostering academic growth and connection.",
        tags: ["NestJS", "React", "MongoDB"],
        github: "#",
        demo: "#",
        color: "from-purple-500 to-cyan-500",
    },
    {
        title: "DataTricks Portfolio",
        description: "Professional corporate portfolio designed for DataTricks, showcasing their services and expertise.",
        tags: ["React", "Tailwind", "Framer Motion", "MUI"],
        github: "#",
        demo: "#",
        color: "from-pink-500 to-rose-500",
    },
    {
        title: "CS QAU Website",
        description: "A complete recreation of the QAU Computer Science department website with enhanced UX/UI.",
        tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        github: "#",
        demo: "#",
        color: "from-blue-500 to-indigo-500",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 relative bg-black/50">
            <div className="container mx-auto px-4">
                {/* Header Section - Mascot Left on Desktop, Top on Mobile? Or Mascot with text? */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex justify-center lg:justify-start items-center"
                    >
                        <Mascot
                            seed="projects-bot-v2"
                            className="w-48 h-48 md:w-64 md:h-64"
                            dialogue="I built these with my shiny metal hands!"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-2/3 text-center lg:text-right"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Featured Projects</h2>
                        <div className="h-1 w-24 bg-primary mx-auto lg:ml-auto lg:mr-0 rounded-full shadow-neon" />
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto lg:ml-auto lg:mr-0">
                            From student platforms to corporate solutions, here's a glimpse of my development journey.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                                <Folder size={48} className="text-gray-600 group-hover:text-primary transition-colors duration-500 mb-2" />
                            </div>

                            <div className="p-6 relative z-10">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    {/* Note: Links are placeholders as they weren't provided */}
                                    <Link href={project.demo} className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                                        <ExternalLink size={16} /> Details
                                    </Link>
                                    <Link href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
