import React from 'react';
import { ArrowRight, RefreshCw, Gift, CreditCard } from 'lucide-react';

const Ecosystem = () => {
    const apps = [
        {
            title: 'VoixSwap',
            description: 'The native decentralized exchange for the VoixCore ecosystem. Swap tokens instantly with minimal fees.',
            icon: RefreshCw,
            status: 'Coming Soon',
            color: 'text-purple-400'
        },
        {
            title: 'VoixDrop',
            description: 'Exclusive airdrop platform for early adopters and community members. Check your eligibility.',
            icon: Gift,
            status: 'Coming Soon',
            color: 'text-pink-400'
        },
        {
            title: 'Buy VOIXN',
            description: 'Direct fiat on-ramp to purchase VOIXN securely using credit cards or bank transfers.',
            icon: CreditCard,
            status: 'Coming Soon',
            color: 'text-green-400'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white" id="ecosystem">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">
                        Ecosystem
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore the growing suite of decentralized applications built on VoixCore.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {apps.map((app, index) => (
                        <div key={index} className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="px-3 py-1 text-xs font-bold bg-gray-800 text-gray-400 rounded-full border border-gray-700">
                                    {app.status}
                                </span>
                            </div>

                            <div className={`w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <app.icon className={`w-7 h-7 ${app.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {app.description}
                            </p>

                            <button disabled className="flex items-center text-sm font-semibold text-gray-600 cursor-not-allowed group-hover:text-gray-500 transition-colors">
                                Launch App <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
