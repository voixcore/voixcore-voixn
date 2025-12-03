import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const Roadmap = () => {
    const milestones = [
        {
            quarter: 'Q4 2024',
            title: 'Genesis & Foundation',
            description: 'Successful launch of VoixCore Mainnet, Genesis Block creation, and Explorer deployment.',
            status: 'completed'
        },
        {
            quarter: 'Q1 2025',
            title: 'Expansion & Presale 1',
            description: 'Launch of Presale Stage 1, Airdrop Phase 1 distribution, and Wallet Beta release.',
            status: 'upcoming'
        },
        {
            quarter: 'Q2 2025',
            title: 'Growth & Presale 2',
            description: 'Presale Stage 2, Airdrop Phase 2, DEX Launch (VoixSwap), and Community Governance.',
            status: 'upcoming'
        },
        {
            quarter: 'Q3 2025',
            title: 'Maturity & Presale 3',
            description: 'Final Presale Stage 3, Tier 1 CEX Listings, and Global Ecosystem Expansion.',
            status: 'upcoming'
        }
    ];

    return (
        <section className="py-20 bg-black text-white" id="roadmap">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">
                        Roadmap
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our strategic path to building a decentralized future.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800 hidden md:block"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <div className="w-full md:w-5/12 mb-4 md:mb-0">
                                    <div className={`p-6 rounded-2xl border ${milestone.status === 'completed' ? 'bg-cyan-900/10 border-cyan-500/30' : 'bg-gray-900/50 border-gray-800'} hover:border-cyan-500/30 transition-all duration-300`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-mono text-cyan-400">{milestone.quarter}</span>
                                            {milestone.status === 'completed' ? (
                                                <span className="px-2 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full">Completed</span>
                                            ) : (
                                                <span className="px-2 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full">Upcoming</span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10 w-8 h-8 rounded-full bg-black border-2 border-cyan-500 flex items-center justify-center">
                                    {milestone.status === 'completed' ? (
                                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                                    ) : (
                                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                    )}
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="w-full md:w-5/12 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
