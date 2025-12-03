"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Block Time", value: "3s" },
    { label: "Total Transactions", value: "10K+" },
    { label: "Active Nodes", value: "50+" },
    { label: "Avg. Gas Fee", value: "< $0.001" },
];

export default function Stats() {
    return (
        <section className="py-12 border-y border-border bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
