"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Layout, Smartphone, Globe, Cloud, Terminal } from "lucide-react";
import { Mascot } from "@/components/mascot";

const skills = [
    { name: "Backend", icon: Server, tags: ["NestJS", "Express", "Node.js"] },
    { name: "Frontend", icon: Layout, tags: ["React (MUI)", "Jetpack Compose", "Tailwind CSS"] },
    { name: "Languages", icon: Code, tags: ["TypeScript", "JavaScript", "C++", "Kotlin", "Java"] },
    { name: "Database", icon: Database, tags: ["PostgreSQL", "MongoDB", "Redis"] },
    { name: "DevOps", icon: Cloud, tags: ["Azure DevOps", "Docker"] },
    { name: "Tools", icon: Terminal, tags: ["Git", "GitHub", "Postman", "Swagger"] },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
                    {/* Text Content - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 text-center lg:text-left"
                    >
                        <h2 className="text-4xl font-bold mb-4 neon-text">Technical Arsenal</h2>
                        <div className="h-1 w-24 bg-secondary mx-auto lg:ml-0 lg:mr-auto rounded-full shadow-neon" />
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto lg:ml-0 lg:mr-auto">
                            Specialized in NestJS backend development and modern full-stack solutions.
                        </p>
                    </motion.div>

                    {/* Mascot - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex justify-center lg:justify-end items-center"
                    >
                        <Mascot
                            seed="skills-bot-v3"
                            className="w-48 h-48 md:w-64 md:h-64"
                            dialogue="Behold! My magical tech stack!"
                        />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-black/50 border border-white/10 group-hover:border-secondary/50 transition-colors">
                                    <category.icon className="text-gray-400 group-hover:text-secondary transition-colors" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                                    {category.name}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm rounded-full bg-black/40 border border-white/5 text-gray-400 group-hover:text-gray-200 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
