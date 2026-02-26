import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 800); // Wait a bit after 100%
                    return 100;
                }
                return prev + 1;
            });
        }, 25); // Slightly slower for dramatic effect

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#03060a] text-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.1, // Slight zoom out on exit
                filter: "blur(10px)",
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-[#03060a] to-[#03060a]" />
            {/* Moving Grid Pattern */}
            <motion.div
                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"
                animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-4">

                {/* Logo: Zoom Out Effect */}
                <div className="relative mb-12 flex justify-center items-center">
                    {/* Glowing Backlight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                        className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full"
                    />

                    <motion.div
                        initial={{ scale: 15, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{
                            duration: 1.8,
                            ease: [0.22, 1, 0.36, 1] // Custom ease for smooth "landing"
                        }}
                        className="relative z-20"
                    >
                        <img
                            src="/logo.png"
                            alt="ARC Logo"
                            className="w-32 md:w-48 h-auto drop-shadow-2xl"
                        />
                    </motion.div>
                </div>

                {/* Text Container with Staggered Reveal */}
                <div className="text-center space-y-4 mb-12">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                            className="font-cinzel font-bold tracking-widest text-center"
                            style={{ textShadow: "0 0 20px rgba(var(--accent), 0.3)" }}
                        >
                            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] animate-shimmer">COIMBATORE</span>
                            <span className="block text-[10px] sm:text-xs md:text-2xl lg:text-3xl tracking-[0.2em] sm:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] animate-shimmer">ARC TRAVELS</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 1 }}
                        className="font-playfair text-accent/80 text-lg md:text-xl italic tracking-wide"
                    >
                        Experience the Extraordinary
                    </motion.p>
                </div>

                {/* Elegant Progress Line */}
                <div className="w-full max-w-xs relative flex flex-col items-center gap-3">
                    <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-accent"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                        {/* Shimmer on bar */}
                        <motion.div
                            className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                            animate={{ x: ["-100%", "500%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <div className="flex justify-between w-full text-[10px] font-cinzel text-white/30 tracking-[0.2em] uppercase">
                        <span>Loading Assets</span>
                        <span>{progress}%</span>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Preloader;
