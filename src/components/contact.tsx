"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";
import { Mascot } from "@/components/mascot";

export function Contact() {
    return (
        <section id="contact" className="py-32 relative bg-gradient-to-b from-transparent to-primary/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

                    {/* Mascot - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 flex justify-center lg:justify-start items-center"
                    >
                        <Mascot
                            seed="contact-bot-v4"
                            className="w-64 h-64 md:w-80 md:h-80 mb-10 md:mb-20"
                            dialogue="Sending transmission... let's connect!"
                        />
                    </motion.div>

                    {/* Text Content - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 text-center lg:text-right"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">
                            Let's Collaborate
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            I'm always open to discussing new ideas, whether it's a NestJS backend, a mobile app, or a full-stack project.
                        </p>

                        <div className="flex flex-col lg:items-end items-center gap-6">
                            <Link
                                href="mailto:rahmanhere642@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-neon-strong"
                            >
                                <Mail size={20} /> Say Hello
                            </Link>

                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://www.linkedin.com/in/abdur-rahman-aab322297"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                                    title="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </Link>
                                <Link
                                    href="https://wa.me/923222521336"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                                    title="WhatsApp"
                                >
                                    <MessageCircle size={24} />
                                </Link>
                                <Link
                                    href="https://instagram.com/rahmanhere_1x1"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                                    title="Instagram"
                                >
                                    <Instagram size={24} />
                                </Link>
                                <Link
                                    href="https://github.com/iamrehman16"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                                    title="GitHub"
                                >
                                    <Github size={24} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-8 border-t border-white/5 text-gray-600 text-sm w-full text-center"
                >
                    © {new Date().getFullYear()} Abdur Rahman. Built with Next.js & Tailwind.
                </motion.footer>
            </div>
        </section>
    );
}
