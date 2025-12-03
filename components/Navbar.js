"use client";

import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <img src="/logo_web.png" alt="VoixCore Logo" className="object-contain w-full h-full" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        VoixCore
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#ecosystem" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Ecosystem
                    </Link>
                    <Link href="#roadmap" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Roadmap
                    </Link>
                    <Link href="https://explorer.voixcore.xyz" target="_blank" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Explorer <ExternalLink size={14} />
                    </Link>
                </div>

                {/* Action Button */}
                <div className="hidden md:block">
                    <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border p-4 flex flex-col gap-4">
                    <Link href="#features" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                        Features
                    </Link>
                    <Link href="#ecosystem" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                        Ecosystem
                    </Link>
                    <Link href="#roadmap" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                        Roadmap
                    </Link>
                    <Link href="https://explorer.voixcore.xyz" target="_blank" className="flex items-center gap-1 text-sm font-medium text-foreground">
                        Explorer <ExternalLink size={14} />
                    </Link>
                    <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm w-full">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}
