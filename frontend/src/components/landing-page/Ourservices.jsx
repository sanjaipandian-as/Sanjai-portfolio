"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const AsteriskShape = () => (
    <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center p-0 overflow-hidden relative flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 149" className="w-full h-full">
            <style type="text/css">{`.cls-0{fill:#efff84;}.cls-1{fill:#D1D1D1;}.cls-2{fill:#D1D1D1;fill-opacity:0.1;}.cls-3{fill:#D1D1D1;}`}</style>
            <rect className="cls-0" x=".3" y=".2" width="149.7" height="148.6" />
            <path className="cls-2" d="m132.1 69.5h-36.2l26.1-26.4c1-1.1 1-2.7 0-3.6l-6.7-6.5c-0.9-1-2.5-1-3.6 0l-27 25.4v-36.7c0-1.5-1.2-2.8-2.7-2.8h-9.3c-1.5 0-2.8 1.2-2.8 2.8v37.3l-25.8-26.1c-1-1-2.5-1-3.5 0l-7.3 7.1c-1 1-1 2.5 0 3.5l26.4 26h-36c-1.4 0-2.8 1.1-2.8 2.6v9.3c0 1.5 1.2 2.7 2.8 2.7h36l-26.4 26.4c-1 1-1 2.6 0 3.6l6.7 6.8c1 0.9 2.6 1.1 3.6 0.1l26.3-26.3v36.4c0 1.5 1.2 2.6 2.7 2.6l9.3-0.1c1.6 0 2.7-1.1 2.7-2.6v-36.3l26.4 25.9c1 1 2.6 1.1 3.6 0.1l6.7-6.7c1-1 1-2.6 0-3.5l-25.4-26.4h35.4c1.5 0 2.8-1.2 2.8-2.8v-9.2c0.1-1.3-1-2.5-2-2.6zm-47.3 14c0 0.4-0.3 0.7-0.7 0.7h-13.9c-0.4 0-0.8-0.3-0.8-0.7v-13.7c0-0.4 0.4-0.8 0.8-0.8h13.7c0.4 0 0.8 0.4 0.8 0.8h-0.8 0.9v13.7z" />
            <path className="cls-3" d="m130.8 68.2h-36.2l25.9-26.2c1-0.9 1.1-2.6 0.1-3.6l-6.7-6.8c-1-1-2.5-1-3.6 0l-26.6 26v-36.6c0-1.5-1.2-3-2.8-3h-9.2c-1.5 0-2.9 1.2-2.9 2.9v36.6l-26.1-26c-1-1-2.5-0.9-3.7 0.1l-7.1 6.6c-1 1-1.1 2.6 0 3.7l26.3 26.3h-35.8c-1.5 0-2.9 1.1-2.9 2.8v9.3c0 1.5 1.2 2.8 2.9 2.8h35.8l-26.3 26.4c-1.1 1-1.1 2.8 0 3.9l6.8 6.8c1 0.9 2.7 1.1 3.8 0.1l26.3-26.7v36.8c0 1.5 1.2 2.8 2.9 2.8h8.9c1.6 0 3-0.9 3-2.7v-37l26.2 26.1c1 1 2.6 1.6 4 0.6l6.7-6.7c1.1-1 1.2-2.7 0.1-3.8l-26-26.6h36.1c1.5 0 2.9-1.1 2.9-2.8v-9.3c0-1.4-1.3-2.7-2.8-2.8zm-47.2 14.8h-14.1c-0.4 0-0.7-0.3-0.7-0.7v-13.4c0-0.4 0.3-0.8 0.7-0.8h13.3c0.4 0 0.8 0.4 0.8 0.8v13.4c0.1 0.3-0.3 0.7 0 0.7z" />
        </svg>
    </div>
);

const ClusterShape = () => (
    <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center overflow-hidden flex-shrink-0" style={{ background: "#D1D1D1" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <path d="m2.2 14.2 16.7-13.2 21.7 4.6 9.3 19.5-9.3 20.1-21.6 4.7-16.8-13.9v-21.8z" />
            <path d="m18.9 50-16.7 13.5v22.2l16.7 13.7 21.7-5 9.3-19.3-9.4-20.3-21.5-4.7-0.1-0.1z" />
            <path d="m49.9 25.1 9.5-19.5 21.7-4.7 17 13.3v21.8l-17.1 14.1-21.6-4.9-9.5-19.9v-0.2z" />
            <path d="m81 50.1 17.1 13.4v22.2l-17.1 13.6-21.6-4.9-9.5-19.3 9.5-20.4 21.6-4.6z" />
        </svg>
    </div>
);

const ArrowIconShape = () => (
    <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center overflow-hidden flex-shrink-0" style={{ background: "transparent" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <polygon fill="black" points="78.8,10.3 50,0.9 20.9,10.3 4.1,34.7 4.1,65 21,89.9 50,99.3 78.8,89.9 95.9,65 95.9,34.7" />
            <polygon fill="#D1D1D1" points="28.3,26.7 28.3,37.7 56.9,37.7 28.2,66.7 35.9,74.7 62.4,47.4 62.4,74.6 73.1,74.6 73.1,44.9 55,26.7" />
        </svg>
    </div>
);

// Helper to render condensed text word-by-word to match Industries style
const CondensedText = ({ children, className = "" }) => {
    return (
        <span className={`inline-flex gap-[0.45em] ${className}`}>
            {children.split(" ").map((word, i) => (
                <span key={i} className="text-condensed">{word}</span>
            ))}
        </span>
    );
};

const ServiceBlock = ({ title, subTitle, description, color, textColor, icon: Icon, fullWidth }) => {
    return (
        <motion.div
            className={`relative flex flex-col ${fullWidth ? 'col-span-2 lg:h-[200px]' : 'col-span-2 lg:col-span-1 lg:h-[260px]'} ${color} ${textColor} p-6 lg:p-10 min-h-[160px] overflow-hidden group border-b border-r border-black/5 cursor-pointer`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <style>{`
                .font-sharp-condensed { 
                    font-family: 'Sharp Grotesk', sans-serif; 
                    font-weight: 500;
                    letter-spacing: -0.04em;
                }
                .text-condensed {
                    transform: scale-x(0.82);
                    transform-origin: left;
                    display: inline-block;
                    margin-right: -0.05em; 
                }
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>

            {/* REST STATE (Visible by default, fades on hover) */}
            <motion.div 
                className="absolute inset-0 p-6 lg:p-10 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:translate-y-[-10px]"
            >
                <div className="flex items-center gap-6">
                    <Icon size="medium" />
                    <h2 className="text-2xl lg:text-3xl font-sharp-condensed uppercase leading-none">
                        <CondensedText>{title}</CondensedText>
                    </h2>
                </div>
                <div className="text-[12px] font-sharp-condensed uppercase opacity-40 tracking-[0.4em] hidden sm:block">
                    SERVICES
                </div>
            </motion.div>

            {/* HOVER STATE (Fades in on hover) */}
            <motion.div 
                className={`absolute inset-0 p-6 lg:p-10 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex ${fullWidth ? 'items-center' : 'flex-col justify-between'}`}
            >
                {/* Image 4 style for 2-column cards: Header Row */}
                {!fullWidth && (
                    <div className="flex justify-between items-start w-full">
                        <Icon size="medium" />
                        <div className="text-[11px] lg:text-[13px] font-sharp-condensed uppercase tracking-widest opacity-80 pt-1">
                            {title}
                        </div>
                    </div>
                )}

                {/* Main Content (Centered) */}
                <div className={`flex-grow flex flex-col justify-center ${fullWidth ? 'ml-24 lg:ml-28 max-w-2xl' : 'max-w-xl'}`}>
                    {/* Image 3 style for full-width: Icon on the left */}
                    {fullWidth && (
                        <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden lg:block">
                            <Icon size="medium" />
                        </div>
                    )}
                    
                    <h3 className="text-2xl lg:text-3xl font-sharp-condensed uppercase leading-tight mb-3">
                        <CondensedText>{subTitle}</CondensedText>
                    </h3>
                    <p className="text-[15px] lg:text-[17px] leading-relaxed opacity-80 font-normal">
                        {description}
                    </p>
                </div>

                {/* Bottom/Right Labels */}
                {fullWidth ? (
                    /* Image 3: Large Vertical Label on the right */
                    <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex items-center h-[70%] border-l border-current/20 pl-6">
                        <div className="text-[14px] lg:text-[16px] font-sharp-condensed uppercase vertical-text tracking-[0.3em]">
                            {title}
                        </div>
                    </div>
                ) : (
                    /* Image 4: 'SERVICES' at the bottom left */
                    <div className="text-[11px] font-sharp-condensed uppercase tracking-[0.4em] opacity-40 mt-4">
                        SERVICES
                    </div>
                )}
            </motion.div>

            {/* Subtle Background Accent */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};

const ServiceAccordion = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 30,
        damping: 20,
        mass: 0.8,
        restDelta: 0.001
    });

    const yPosition = useTransform(smoothScroll, [0, 1], [0, 0]);
    const opacity = useTransform(smoothScroll, [0, 0.3], [0, 1]);

    const allServices = [
        {
            title: "Frontend Dev",
            subTitle: "Digital Experiences, Engineered for Impact.",
            description: "We architect stunning digital platforms that do more than just catch the eye. We build intuitive, high-performance websites and apps that captivate users.",
            icon: ArrowIconShape,
            color: "bg-[#efff84]",
            textColor: "text-black",
            fullWidth: true
        },
        {
            title: "Backend Dev",
            subTitle: "Robust Architecture, Seamless Logic.",
            description: "Powering your digital ecosystem with secure, scalable, and high-performance server-side solutions that handle complexity with ease.",
            icon: AsteriskShape,
            color: "bg-white",
            textColor: "text-black",
            fullWidth: false
        },
        {
            title: "Database Management",
            subTitle: "Data Integrity, Infinite Scalability.",
            description: "Optimizing your data flow with modern schema designs and high-availability database architectures tailored for growth.",
            icon: ClusterShape,
            color: "bg-[#D9D9D9]",
            textColor: "text-black",
            fullWidth: false
        },
        {
            title: "Mobile App Dev",
            subTitle: "Native Performance, Everywhere.",
            description: "Crafting seamless mobile experiences across iOS and Android with cross-platform excellence and native-level performance.",
            icon: ArrowIconShape,
            color: "bg-black",
            textColor: "text-white",
            fullWidth: true
        },
        {
            title: "E-Commerce",
            subTitle: "Converting Clicks into Customers.",
            description: "Building powerful online stores with seamless payment integrations and conversion-optimized user journeys.",
            icon: AsteriskShape,
            color: "bg-[#efff84]",
            textColor: "text-black",
            fullWidth: false
        },
        {
            title: "DevOps & Cloud",
            subTitle: "Automated Deployments, Zero Downtime.",
            description: "Streamlining your development lifecycle with automated CI/CD pipelines and robust cloud infrastructure management.",
            icon: ClusterShape,
            color: "bg-white",
            textColor: "text-black",
            fullWidth: false
        },
        {
            title: "System Integration",
            subTitle: "Future-Ready Infrastructure.",
            description: "We unify your systems into one intelligent ecosystem. From cloud migration to API orchestration, we ensure everything works together smoothly.",
            icon: AsteriskShape,
            color: "bg-[#D9D9D9]",
            textColor: "text-black",
            fullWidth: true
        },
        {
            title: "Performance Opt",
            subTitle: "Speed First, Excellence Always.",
            description: "Ensuring your platform scores 100 on Core Web Vitals with advanced caching, lazy loading, and code-splitting techniques.",
            icon: ArrowIconShape,
            color: "bg-black",
            textColor: "text-white",
            fullWidth: false
        },
        {
            title: "Security",
            subTitle: "Fortified Systems, Protected Privacy.",
            description: "Implementing enterprise-grade security protocols to safeguard your data and your users' privacy from every angle.",
            icon: ClusterShape,
            color: "bg-[#efff84]",
            textColor: "text-black",
            fullWidth: false
        }
    ];

    return (
        <section
            ref={containerRef}
            id="experience"
            className="w-full bg-[#efff84] px-0 flex flex-col items-center relative z-10 overflow-hidden"
        >
            <motion.div
                className="w-full flex flex-col"
                style={{ y: yPosition, opacity }}
            >


                {/* Grid Layout */}
                <div className="grid grid-cols-2 w-full">
                    {allServices.map((group, index) => (
                        <ServiceBlock
                            key={index}
                            {...group}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ServiceAccordion;
