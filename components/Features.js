"use client";

import { Zap, Shield, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Lightning Fast",
        description: "Experience near-instant finality with 3-second block times and high throughput."
    },
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: "Secure & Sovereign",
        description: "Built on a sovereign Layer 1 architecture with Proof of Authority consensus."
    },
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "EVM Compatible",
        description: "Deploy your Ethereum dApps instantly without any code changes."
    },
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "Low Fees",
        description: "Transactions cost a fraction of a cent, making micro-transactions viable."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Build on VoixCore?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Designed for developers and users who demand performance without compromise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-secondary rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
