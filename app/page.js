import React from 'react';
import Hero from '../components/Hero';
import Whitepaper from '../components/Whitepaper';
import Roadmap from '../components/Roadmap';
import Ecosystem from '../components/Ecosystem';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Hero />
      <Whitepaper />
      <Roadmap />
      <Ecosystem />
    </main>
  );
}
