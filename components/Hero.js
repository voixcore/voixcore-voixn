"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 z-0" />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                        🚀 Mainnet is Live
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        The Sovereign <br />
                        <span className="text-primary">Layer 1 Blockchain</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        VoixCore is a high-performance, EVM-compatible blockchain built for the next generation of decentralized applications.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link href="https://explorer.voixcore.xyz" target="_blank" className="group bg-primary text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2">
                            Explore Mainnet
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="px-8 py-4 rounded-xl font-bold text-lg border border-border hover:bg-secondary transition-colors text-foreground">
                            Read Whitepaper
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
