import React from 'react';
import Navbar from '../components/Navbar';
import Whitepaper from '../components/Whitepaper';
import Roadmap from '../components/Roadmap';
import Ecosystem from '../components/Ecosystem';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="flex w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            Mainnet is Live
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            The Future of <br />
            <span className="text-cyan-400">Sovereign Blockchain</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            VoixCore is a high-performance Layer 1 blockchain designed for speed, security, and true decentralization. Powered by the native <span className="text-white font-semibold">VOIXN</span> coin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://explorer.voixcore.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all duration-300 flex items-center justify-center"
            >
              Explore Mainnet <ExternalLink className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#whitepaper"
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full border border-gray-700 transition-all duration-300 flex items-center justify-center"
            >
              Learn More <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Whitepaper />
      <Roadmap />
      <Ecosystem />

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg mr-3"></div>
            <span className="text-xl font-bold">VoixCore</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 VoixCore Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
