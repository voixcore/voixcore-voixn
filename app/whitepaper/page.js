import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Whitepaper() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        VoixCore: The Sovereign Voice of the Blockchain
                    </h1>

                    <div className="p-6 bg-cyan-900/10 border border-cyan-500/20 rounded-2xl mb-12">
                        <p className="text-xl text-cyan-100 italic leading-relaxed">
                            "Voixcore Blockchain Voice. Sovereign You and I Advance Without Limits. Powered by VOIXN's native coin."
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">1. Introduction</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            In an era where digital centralization threatens individual autonomy, VoixCore emerges as a beacon of sovereignty. We are not just building a blockchain; we are building a voice for the voiceless, a platform where "You and I" can advance without limits.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            VoixCore is a high-performance Layer 1 blockchain designed to return power to the community. By leveraging the speed and security of our Proof of Authority (PoA) consensus mechanism, we ensure that the network remains efficient, scalable, and accessible to all.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">2. The Vision: Sovereign You and I</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            The core philosophy of VoixCore is <strong>Sovereignty</strong>. We believe that every participant in the network should have full control over their digital assets and identity.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                            <li><strong>Without Limits:</strong> No censorship, no barriers to entry, and infinite scalability.</li>
                            <li><strong>Community First:</strong> The future of VoixCore is dictated by the community that builds it.</li>
                            <li><strong>True Ownership:</strong> Your keys, your coins, your voice.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">3. VOIXN: The Native Coin</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            <strong>VOIXN</strong> is the lifeblood of the VoixCore ecosystem. It is not merely a transactional currency but a tool for governance and utility.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-cyan-400 mb-2">Utility</h3>
                                <p className="text-gray-400">Used for gas fees, staking, and accessing premium dApps within the ecosystem.</p>
                            </div>
                            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-bold text-cyan-400 mb-2">Governance</h3>
                                <p className="text-gray-400">VOIXN holders shape the future of the protocol through decentralized voting.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">4. Future of the Community</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            The strength of VoixCore lies in its community. We are committed to a fair and transparent distribution model that rewards early adopters and active participants.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            <strong>Airdrop Phases:</strong> To kickstart our ecosystem, we have allocated significant portions of the supply for Airdrop Phase 1 and Phase 2. These are designed to put VOIXN in the hands of real users who will contribute to the network's growth.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            <strong>Presale Stages:</strong> Our Presale (Stage 1, 2, and 3) offers an opportunity for early supporters to acquire VOIXN at a preferential rate before public listing, ensuring a diverse and decentralized holder base from Day 1.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">5. Conclusion</h2>
                        <p className="text-gray-300 leading-relaxed">
                            VoixCore is more than technology; it is a movement. A movement towards a future where technology serves humanity, not the other way around. Join us as we build a sovereign future, together.
                        </p>
                    </section>
                </article>
            </div>

            <Footer />
        </main>
    );
}
