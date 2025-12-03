import Link from "next/link";
import { Twitter, Github, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8">
                                <img src="/logo_web.png" alt="VoixCore Logo" className="object-contain w-full h-full" />
                            </div>
                            <span className="text-xl font-bold text-foreground">VoixCore</span>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-md">
                            The Sovereign Layer 1 Blockchain designed for speed, security, and scalability.
                            Powered by Proof of Authority consensus.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-4">Ecosystem</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="https://explorer.voixcore.xyz" className="hover:text-primary">Explorer</Link></li>
                            <li><Link href="#" className="hover:text-primary">Wallet (Coming Soon)</Link></li>
                            <li><Link href="#" className="hover:text-primary">DEX (Coming Soon)</Link></li>
                            <li><Link href="#" className="hover:text-primary">Bridge (Coming Soon)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-4">Community</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <MessageCircle size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} VoixCore Foundation. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
