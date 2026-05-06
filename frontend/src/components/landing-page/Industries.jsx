"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Helper to render condensed text word-by-word
const CondensedText = ({ children, className = "" }) => {
    return (
        <span className={`inline-flex gap-[0.45em] ${className}`}>
            {children.split(" ").map((word, i) => (
                <span key={i} className="text-condensed">{word}</span>
            ))}
        </span>
    );
};

// Arrow Icon Shape: Decagon with inset arrow
const ArrowIconShape = () => (
    <div className="inline-flex items-center justify-center w-[0.85em] h-[0.85em] shrink-0 transform -translate-y-[0.02em]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <polygon fill="black" points="78.8,10.3 50,0.9 20.9,10.3 4.1,34.7 4.1,65 21,89.9 50,99.3 78.8,89.9 95.9,65 95.9,34.7" />
            <polygon fill="#D1D1D1" points="28.3,26.7 28.3,37.7 56.9,37.7 28.2,66.7 35.9,74.7 62.4,47.4 62.4,74.6 73.1,74.6 73.1,44.9 55,26.7" />
        </svg>
    </div>
);

// Cluster Shape: 4 irregular paths
const ClusterShape = () => (
    <div className="inline-flex items-center justify-center w-[0.95em] h-[0.95em] shrink-0 transform -translate-y-[0.02em]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full" fill="black">
            <path d="m2.2 14.2 16.7-13.2 21.7 4.6 9.3 19.5-9.3 20.1-21.6 4.7-16.8-13.9v-21.8z" />
            <path d="m18.9 50-16.7 13.5v22.2l16.7 13.7 21.7-5 9.3-19.3-9.4-20.3-21.5-4.7-0.1-0.1z" />
            <path d="m49.9 25.1 9.5-19.5 21.7-4.7 17 13.3v21.8l-17.1 14.1-21.6-4.9-9.5-19.9v-0.2z" />
            <path d="m81 50.1 17.1 13.4v22.2l-17.1 13.6-21.6-4.9-9.5-19.3 9.5-20.4 21.6-4.6z" />
        </svg>
    </div>
);

const lineVariant = (delay = 0) => ({
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
});

export default function Industries() {
    return (
        <section 
            id="projects"
            className="w-full h-[115vh] bg-[#D1D1D1] flex flex-col justify-between px-6 sm:px-12 lg:px-16 py-14 overflow-hidden relative cursor-default select-none"
        >
            <style>{`
                .font-sharp-condensed { 
                    font-family: 'Sharp Grotesk', 'Inter', sans-serif; 
                    font-weight: 500;
                    letter-spacing: -0.04em;
                }
                .text-condensed {
                    transform: scale-x(0.82);
                    transform-origin: left;
                    display: inline-block;
                    margin-right: -0.05em; 
                }
            `}</style>

            {/* ── Top Labels ── */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <p className="text-zinc-600 text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase mb-1">
                    PROJECTS
                </p>
                <p className="text-black text-[14px] sm:text-[18px] font-bold tracking-tight uppercase font-sharp-condensed">
                    CHECK OUT THE LATEST PROJECTS
                </p>
            </motion.div>

            {/* ── Main Giant Headline ── */}
            <div className="flex flex-col justify-center flex-grow py-6 w-full overflow-hidden">
                <div className="font-sharp-condensed text-[7.5vw] sm:text-[11.5vw] leading-[0.85] uppercase">
                    
                    {/* Line 1: Left Aligned */}
                    <motion.div 
                        {...lineVariant(0)}
                        className="text-white block whitespace-nowrap"
                    >
                        <CondensedText>I HAVE COMPLETED</CondensedText>
                    </motion.div>

                    {/* Line 2: Indented */}
                    <motion.div 
                        {...lineVariant(0.1)}
                        className="flex items-center block whitespace-nowrap ml-[0vw] gap-[0.25em]"
                    >
                        <CondensedText className="text-white">BEYOND</CondensedText>
                        
                        {/* Asterisk Neon Icon */}
                        <div className="w-[0.85em] h-[0.85em] shrink-0 mx-[0.1em] transform -translate-y-[0.02em]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 149" className="w-full h-full">
                                <rect fill="#e2ff6f" x=".3" y=".2" width="149.7" height="148.6" />
                                <path fill="#D1D1D1" d="m130.8 68.2h-36.2l25.9-26.2c1-0.9 1.1-2.6 0.1-3.6l-6.7-6.8c-1-1-2.5-1-3.6 0l-26.6 26v-36.6c0-1.5-1.2-3-2.8-3h-9.2c-1.5 0-2.9 1.2-2.9 2.9v36.6l-26.1-26c-1-1-2.5-0.9-3.7 0.1l-7.1 6.6c-1 1-1.1 2.6 0 3.7l26.3 26.3h-35.8c-1.5 0-2.9 1.1-2.9 2.8v9.3c0 1.5 1.2 2.8 2.9 2.8h35.8l-26.3 26.4c-1.1 1-1.1 2.8 0 3.9l6.8 6.8c1 0.9 2.7 1.1 3.8 0.1l26.3-26.7v36.8c0 1.5 1.2 2.8 2.9 2.8h8.9c1.6 0 3-0.9 3-2.7v-37l26.2 26.1c1 1 2.6 1.6 4 0.6l6.7-6.7c1.1-1 1.2-2.7 0.1-3.8l-26-26.6h36.1c1.5 0 2.9-1.1 2.9-2.8v-9.3c0-1.4-1.3-2.7-2.8-2.8z" />
                            </svg>
                        </div>

                        <span className="text-condensed text-black">15+</span>
                    </motion.div>

                    {/* Line 3: Left Aligned */}
                    <motion.div 
                        {...lineVariant(0.2)}
                        className="text-black block whitespace-nowrap"
                    >
                        <CondensedText>EXCEPTIONAL</CondensedText>
                    </motion.div>

                    {/* Line 4: Left Aligned with Arrow Icon */}
                    <motion.div 
                        {...lineVariant(0.3)}
                        className="flex items-center block whitespace-nowrap gap-[0.25em]"
                    >
                        <ArrowIconShape />
                        <CondensedText className="text-black">PROJECTS.</CondensedText>
                    </motion.div>
                </div>
            </div>


          


            {/* ── Bottom Right Description ── */}
            <div className="flex justify-end w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-[230px] sm:max-w-[320px] lg:max-w-[420px] text-right lg:text-left"
                >
                    <p className="text-zinc-800 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] font-medium opacity-80 mb-21">
                        I architect stunning digital platforms that
                        blend aesthetic excellence with technical precision.
                        I build high-performance, user-centric apps
                        that solve complex problems and captivate users.
                    </p>
                </motion.div>
            </div>


        </section>
    );
}


