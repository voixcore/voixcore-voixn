import React from 'react';
import { Shield, Zap, Globe, FileText } from 'lucide-react';

const Whitepaper = () => {
    return (
        <section className="py-20 bg-black text-white" id="whitepaper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">
                        The Vision
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        VoixCore is built to be the sovereign Layer 1 blockchain for the future, prioritizing speed, security, and accessibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                        <p className="text-gray-400 text-sm">
                            Optimized block times and high throughput ensure your transactions are confirmed in seconds, not minutes.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                            <Shield className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Secure & Sovereign</h3>
                        <p className="text-gray-400 text-sm">
                            Built on battle-tested EVM architecture with a decentralized consensus mechanism to protect your assets.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                            <Globe className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
                        <p className="text-gray-400 text-sm">
                            Minimal transaction fees make VoixCore accessible to everyone, everywhere, enabling true financial inclusion.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300">
                        <FileText className="w-5 h-5 mr-2" />
                        Read Whitepaper
                    </button>
                    <p className="mt-4 text-xs text-gray-500">
                        *Full technical paper coming soon
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Whitepaper;
