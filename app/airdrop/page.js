"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ethers, formatEther } from "ethers";
import confetti from "canvas-confetti";
import { Wallet, Gift, CheckCircle, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import contractData from "./contract.json";

const CONTRACT_ADDRESS = contractData.address;
const CONTRACT_ABI = contractData.abi;

export default function AirdropPage() {
    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [checking, setChecking] = useState(false);
    const [eligible, setEligible] = useState(false);
    const [claimed, setClaimed] = useState(false);
    const [stats, setStats] = useState({ totalClaimed: "0", totalUsers: "0" });
    const [error, setError] = useState("");

    useEffect(() => {
        checkWallet();
        fetchStats();
    }, []);

    const checkWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            if (accounts.length > 0) {
                setAccount(accounts[0]);
                checkEligibility(accounts[0]);
            }
        }
    };

    const fetchStats = async () => {
        try {
            // Use a read-only provider for stats
            const provider = new ethers.JsonRpcProvider("https://explorer.voixcore.xyz/api/rpc");
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

            const [totalClaimed, totalUsers] = await Promise.all([
                contract.totalClaimed(),
                contract.totalUsers()
            ]);

            setStats({
                totalClaimed: formatEther(totalClaimed),
                totalUsers: totalUsers.toString()
            });
        } catch (err) {
            console.error("Error fetching stats:", err);
        }
    };

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return alert("Please install MetaMask!");
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            checkEligibility(accounts[0]);
        } catch (err) {
            console.error(err);
        }
    };

    const checkEligibility = async (userAddress) => {
        setChecking(true);
        setError("");
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
            const hasClaimed = await contract.hasClaimed(userAddress);

            setClaimed(hasClaimed);
            setEligible(!hasClaimed);
        } catch (err) {
            console.error(err);
            setError("Failed to check eligibility.");
        } finally {
            setChecking(false);
        }
    };

    const claimAirdrop = async () => {
        if (!account) return;
        setLoading(true);
        setError("");

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

            const tx = await contract.claim();
            await tx.wait();

            setClaimed(true);
            setEligible(false);
            triggerConfetti();
            fetchStats(); // Refresh stats
        } catch (err) {
            console.error(err);
            setError(err.reason || "Transaction failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const triggerConfetti = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        VoixCore Airdrop
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Claim your free <span className="text-primary font-bold">100 VOIXN</span> and join the sovereign revolution.
                    </p>
                </div>

                {/* Stats Card */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-card border border-border p-4 rounded-xl text-center">
                        <div className="text-sm text-muted-foreground mb-1">Total Claimed</div>
                        <div className="text-xl font-bold text-primary">{parseFloat(stats.totalClaimed).toLocaleString()} VOIXN</div>
                    </div>
                    <div className="bg-card border border-border p-4 rounded-xl text-center">
                        <div className="text-sm text-muted-foreground mb-1">Participants</div>
                        <div className="text-xl font-bold text-foreground">{stats.totalUsers}</div>
                    </div>
                </div>

                {/* Main Action Card */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                    {/* Decorative Border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                    {!account ? (
                        <div className="text-center py-8">
                            <Wallet className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Connect Wallet</h3>
                            <p className="text-muted-foreground mb-6">Connect your MetaMask wallet to check eligibility.</p>
                            <button
                                onClick={connectWallet}
                                className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Wallet className="w-5 h-5" />
                                Connect Wallet
                            </button>
                        </div>
                    ) : checking ? (
                        <div className="text-center py-12">
                            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                            <p className="text-muted-foreground">Checking eligibility...</p>
                        </div>
                    ) : claimed ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-green-500">Already Claimed!</h3>
                            <p className="text-muted-foreground mb-6">
                                You have successfully claimed your 100 VOIXN.
                            </p>
                            <div className="p-4 bg-secondary/50 rounded-xl border border-border mb-6">
                                <div className="text-sm text-muted-foreground mb-1">Your Wallet</div>
                                <div className="font-mono text-xs md:text-sm truncate">{account}</div>
                            </div>
                            <a
                                href={`https://explorer.voixcore.xyz/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline flex items-center justify-center gap-1"
                            >
                                View on Explorer <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ) : eligible ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Gift className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">You are Eligible!</h3>
                            <p className="text-muted-foreground mb-6">
                                You can claim <span className="text-foreground font-bold">100 VOIXN</span> right now.
                            </p>

                            {error && (
                                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={claimAirdrop}
                                disabled={loading}
                                className="w-full py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Claiming...
                                    </>
                                ) : (
                                    <>
                                        <Gift className="w-5 h-5" />
                                        Claim 100 VOIXN
                                    </>
                                )}
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Not Eligible</h3>
                            <p className="text-muted-foreground">
                                Sorry, this address is not eligible for the airdrop.
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
