"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import ContactUs from "./CotactUs";
import MorphingModal from "./MorphingModal";

const AsteriskShape = () => (
    <div className="w-full h-full flex items-center justify-center p-0 overflow-hidden relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 149" className="w-full h-full">
            <style type="text/css">{`.cls-0{fill:#e2ff6f;}.cls-1{fill:#D1D1D1;}.cls-2{fill:#D1D1D1;fill-opacity:0.1;}.cls-3{fill:#D1D1D1;}`}</style>
            <rect className="cls-0" x=".3" y=".2" width="149.7" height="148.6" />
            <path className="cls-2" d="m132.1 69.5h-36.2l26.1-26.4c1-1.1 1-2.7 0-3.6l-6.7-6.5c-0.9-1-2.5-1-3.6 0l-27 25.4v-36.7c0-1.5-1.2-2.8-2.7-2.8h-9.3c-1.5 0-2.8 1.2-2.8 2.8v37.3l-25.8-26.1c-1-1-2.5-1-3.5 0l-7.3 7.1c-1 1-1 2.5 0 3.5l26.4 26h-36c-1.4 0-2.8 1.1-2.8 2.6v9.3c0 1.5 1.2 2.7 2.8 2.7h36l-26.4 26.4c-1 1-1 2.6 0 3.6l6.7 6.8c1 0.9 2.6 1.1 3.6 0.1l26.3-26.3v36.4c0 1.5 1.2 2.6 2.7 2.6l9.3-0.1c1.6 0 2.7-1.1 2.7-2.6v-36.3l26.4 25.9c1 1 2.6 1.1 3.6 0.1l6.7-6.7c1-1 1-2.6 0-3.5l-25.4-26.4h35.4c1.5 0 2.8-1.2 2.8-2.8v-9.2c0.1-1.3-1-2.5-2-2.6zm-47.3 14c0 0.4-0.3 0.7-0.7 0.7h-13.9c-0.4 0-0.8-0.3-0.8-0.7v-13.7c0-0.4 0.4-0.8 0.8-0.8h13.7c0.4 0 0.8 0.4 0.8 0.8h-0.8 0.9v13.7z" />
            <path className="cls-3" d="m130.8 68.2h-36.2l25.9-26.2c1-0.9 1.1-2.6 0.1-3.6l-6.7-6.8c-1-1-2.5-1-3.6 0l-26.6 26v-36.6c0-1.5-1.2-3-2.8-3h-9.2c-1.5 0-2.9 1.2-2.9 2.9v36.6l-26.1-26c-1-1-2.5-0.9-3.7 0.1l-7.1 6.6c-1 1-1.1 2.6 0 3.7l26.3 26.3h-35.8c-1.5 0-2.9 1.1-2.9 2.8v9.3c0 1.5 1.2 2.8 2.9 2.8h35.8l-26.3 26.4c-1.1 1-1.1 2.8 0 3.9l6.8 6.8c1 0.9 2.7 1.1 3.8 0.1l26.3-26.7v36.8c0 1.5 1.2 2.8 2.9 2.8h8.9c1.6 0 3-0.9 3-2.7v-37l26.2 26.1c1 1 2.6 1.6 4 0.6l6.7-6.7c1.1-1 1.2-2.7 0.1-3.8l-26-26.6h36.1c1.5 0 2.9-1.1 2.9-2.8v-9.3c0-1.4-1.3-2.7-2.8-2.8zm-47.2 14.8h-14.1c-0.4 0-0.7-0.3-0.7-0.7v-13.4c0-0.4 0.3-0.8 0.7-0.8h13.3c0.4 0 0.8 0.4 0.8 0.8v13.4c0.1 0.3-0.3 0.7 0 0.7z" />
        </svg>
    </div>
);

const ClusterShape = () => (
    <div className="w-full h-full flex items-center justify-center overflow-hidden" style={{ background: "#D1D1D1" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <path d="m2.2 14.2 16.7-13.2 21.7 4.6 9.3 19.5-9.3 20.1-21.6 4.7-16.8-13.9v-21.8z" />
            <path d="m18.9 50-16.7 13.5v22.2l16.7 13.7 21.7-5 9.3-19.3-9.4-20.3-21.5-4.7-0.1-0.1z" />
            <path d="m49.9 25.1 9.5-19.5 21.7-4.7 17 13.3v21.8l-17.1 14.1-21.6-4.9-9.5-19.9v-0.2z" />
            <path d="m81 50.1 17.1 13.4v22.2l-17.1 13.6-21.6-4.9-9.5-19.3 9.5-20.4 21.6-4.6z" />
        </svg>
    </div>
);

const ArrowIconShape = () => (
    <div className="w-full h-full flex items-center justify-center overflow-hidden" style={{ background: "transparent" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            {/* Solid black decagon */}
            <polygon fill="black" points="78.8,10.3 50,0.9 20.9,10.3 4.1,34.7 4.1,65 21,89.9 50,99.3 78.8,89.9 95.9,65 95.9,34.7" />
            {/* Arrow in hero gray */}
            <polygon fill="#D1D1D1" points="28.3,26.7 28.3,37.7 56.9,37.7 28.2,66.7 35.9,74.7 62.4,47.4 62.4,74.6 73.1,74.6 73.1,44.9 55,26.7" />
        </svg>
    </div>
);

const SmallLabel = ({ children, className = "", style }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.4, duration: 1 }}
        style={style}
        className={`absolute font-sans text-[10px] lg:text-[16px] font-bold text-[#374151] uppercase tracking-[0.2em] leading-[1.3] z-[100] ${className}`}
    >
        <div className={`flex items-center gap-3 ${className.includes('text-right') ? 'flex-row-reverse' : 'flex-row'}`}>
            <span>{children}</span>
        </div>
    </motion.div>
);



const OrbitWrapper = ({ children, delay = 0, reverse = false }) => (
    <motion.div
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
            delay: delay
        }}
        className="w-full h-full"
    >
        {children}
    </motion.div>
);


export default function Hero({ onAnimationComplete }) {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 1500], [0, 50]);
    const scaleText = useTransform(scrollY, [0, 1500], [1, 0.98]);

    // Split Motion with Spring smoothing for fluidity
    const xLeftRaw = useTransform(scrollY, [0, 1500], [0, -600]);
    const xRightRaw = useTransform(scrollY, [0, 1500], [0, 600]);

    const springConfig = { stiffness: 40, damping: 20, mass: 0.5 };
    const xLeft = useSpring(xLeftRaw, springConfig);
    const xRight = useSpring(xRightRaw, springConfig);

    // Icon Fading - smoother transition as next page comes
    const iconOpacity = useTransform(scrollY, [0, 1000], [1, 0.2]);
    const iconScale = useTransform(scrollY, [0, 1000], [1, 0.9]);

    // Opacity for lines - stay visible longer to overlap with services
    const opacityLine1 = useTransform(scrollY, [600, 1800], [1, 0]);
    const opacityLine2 = useTransform(scrollY, [700, 1900], [1, 0]);
    const opacityLine3 = useTransform(scrollY, [800, 2000], [1, 0]);

    // Label horizontal motion
    const xLabelLeft = useTransform(scrollY, [0, 500], [0, -150]);
    const xLabelRight = useTransform(scrollY, [0, 500], [0, 150]);
    const buttonRotate = useTransform(scrollY, [0, 1500], [0, 8]);
    const mobileButtonRotate = useTransform(scrollY, [0, 1000], [0, 4]);

    const [showOrbit, setShowOrbit] = useState(true);
    const [introFinished, setIntroFinished] = useState(false);

    const [isContactOpen, setIsContactOpen] = useState(false);
    const [buttonPos, setButtonPos] = useState(null);
    const buttonRef = useRef(null);

    const handleOpenContact = (e) => {
        e.stopPropagation();
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setButtonPos({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
            setIsContactOpen(true);
        }
    };

    const fontClass = "font-sharp text-[13vw] sm:text-[14vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] leading-[0.8] tracking-[0.03em] select-none whitespace-nowrap uppercase inline-block scale-x-[0.80] scale-y-[1.1] origin-center font-bold";
    // Asterisk (icon1) — tighter right margin to reduce gap before "FORMING"
    const shapeWrapper1 = "w-[13vw] h-[13vw] sm:w-[14vw] sm:h-[14vw] md:w-[6.5rem] md:h-[6.5rem] lg:w-[9.5rem] lg:h-[9.5rem] mx-[-1.5vw] md:mx-[-1rem] lg:mx-[-1.5rem] shrink-0 self-center z-20 relative scale-y-[1.1]";
    // Cluster (icon2) — original symmetric margins
    const shapeWrapper2 = "w-[13vw] h-[13vw] sm:w-[14vw] sm:h-[14vw] md:w-[6.5rem] md:h-[6.5rem] lg:w-[9.5rem] lg:h-[9.5rem] mx-[-1.5vw] md:mx-[-1rem] lg:mx-[-1.5rem] shrink-0 self-center z-20 relative scale-y-[1.1]";
    // Arrow (icon3) — original symmetric margins
    const shapeWrapper3 = "w-[13vw] h-[13vw] sm:w-[14vw] sm:h-[14vw] md:w-[6.5rem] md:h-[6.5rem] lg:w-[9.5rem] lg:h-[9.5rem] mx-[-1.5vw] md:mx-[-1rem] lg:mx-[-1.5rem] shrink-0 self-center z-20 relative scale-y-[1.1]";

    useEffect(() => {
        // Force scroll to top on mount/reload
        if (typeof window !== 'undefined') {
            window.history.scrollRestoration = 'manual';

            // Clear any hash from URL that might cause auto-scroll
            if (window.location.hash) {
                window.history.replaceState(null, '', window.location.pathname);
            }

            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
                window.scrollTo(0, 0);
                // Double-check after a brief delay
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 10);
            });
        }

        const timer = setTimeout(() => {
            setShowOrbit(false);
        }, 1800); // reduced to 1.8s for immediate transition

        const introTimer = setTimeout(() => {
            setIntroFinished(true);
            if (onAnimationComplete) onAnimationComplete();
        }, 3700); // Trigger earlier to match button expansion end

        return () => {
            clearTimeout(timer);
            clearTimeout(introTimer);
        };
    }, []);

    const textFade = {
        initial: { opacity: 0, y: 20, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.8, delay: introFinished ? 0 : 2.0, ease: "easeOut" }
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Forceful scroll lock during intro animation and when contact modal is open
    useEffect(() => {
        const preventDefault = (e) => {
            if (!introFinished || isContactOpen) {
                e.preventDefault();
            }
        };

        if (!introFinished || isContactOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
            window.scrollTo(0, 0);

            window.addEventListener('wheel', preventDefault, { passive: false });
            window.addEventListener('touchmove', preventDefault, { passive: false });
            window.addEventListener('keydown', (e) => {
                // Don't block keyboard input when user is typing in form fields
                const tag = e.target.tagName;
                if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
                if (['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)) {
                    preventDefault(e);
                }
            }, { passive: false });
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "unset";
            document.body.style.touchAction = "auto";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "unset";
            document.body.style.touchAction = "auto";
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
        };
    }, [introFinished, isContactOpen]);

    const CenteredOrbit = () => {
        // Diagonal offset values
        const offset = isMobile ? 60 : 150;

        return (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
                <div className="relative flex items-center justify-center gap-4 md:gap-12 lg:gap-16">
                    {/* Icon 1: Asterisk - From Left -> Horizontal -> Up-Left Diagonal */}
                    <motion.div
                        className="w-[18vw] h-[18vw] md:w-[7rem] md:h-[7rem] lg:w-[10.5rem] lg:h-[10.5rem] relative"
                        initial={{ x: "-100vw", y: 0, opacity: 0 }}
                        animate={{
                            x: 0,
                            y: [0, 0, -offset], // 0 to 0.5 (Horizontal), 0.5 to 1 (Diagonal Up)
                            opacity: 1
                        }}
                        transition={{
                            x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                            y: { duration: 1.6, times: [0, 0.5, 1], ease: "easeInOut" },
                            opacity: { duration: 0.5 }
                        }}
                    >
                        <motion.div className="w-full h-full relative" layoutId="icon1">
                            <AsteriskShape />

                        </motion.div>
                    </motion.div>

                    {/* Icon 2: Cluster - From Bottom -> Horizontal -> Center Diagonal */}
                    <motion.div
                        className="w-[18vw] h-[18vw] md:w-[7rem] md:h-[7rem] lg:w-[10.5rem] lg:h-[10.5rem] relative"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{
                            y: ["100vh", 0, 0], // 0 to 0.5 (Enter), 0.5 to 1 (Stay)
                            opacity: 1
                        }}
                        transition={{
                            y: { duration: 1.6, times: [0, 0.5, 1], ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.5 }
                        }}
                    >
                        <motion.div className="w-full h-full relative" layoutId="icon2">
                            <ClusterShape />
                        </motion.div>
                    </motion.div>

                    {/* Icon 3: Arrow - From Right -> Horizontal -> Down-Right Diagonal */}
                    <motion.div
                        className="w-[18vw] h-[18vw] md:w-[7rem] md:h-[7rem] lg:w-[10.5rem] lg:h-[10.5rem] relative"
                        initial={{ x: "100vw", y: 0, opacity: 0 }}
                        animate={{
                            x: 0,
                            y: [0, 0, offset], // 0 to 0.5 (Horizontal), 0.5 to 1 (Diagonal Down)
                            opacity: 1
                        }}
                        transition={{
                            x: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
                            y: { duration: 1.6, times: [0, 0.5, 1], ease: "easeInOut" },
                            opacity: { duration: 0.5 }
                        }}
                    >
                        <motion.div className="w-full h-full relative" layoutId="icon3">
                            <ArrowIconShape />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className={`sticky top-0 w-full h-screen bg-[#D1D1D1] selection:bg-[#e2ff6f] selection:text-black overflow-hidden z-0 flex flex-col items-center justify-center pt-6 md:pt-16 pointer-events-none`}>
            <style>{`
                .font-sharp { font-family: 'Sharp Grotesk', 'Space Grotesk', sans-serif; font-weight: 700; }
            `}</style>

            {/* CenteredOrbit moved inside layout below */}

            <motion.div
                className="w-full h-full flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 pointer-events-none px-4"
            >
                {showOrbit && <CenteredOrbit />}
                <motion.div style={{ opacity: opacityLine1 }} className={`relative flex ${isMobile ? 'flex-col gap-2' : 'items-center justify-start'} w-full overflow-visible md:ml-[7%] ml-0`}>
                    <motion.div className={`flex items-center ${isMobile ? 'justify-start pl-6 gap-0' : 'justify-center pl-18 gap-0'}`}>
                        <motion.span {...textFade} style={{ x: xLeft }} className={`${fontClass} text-white`}>SANJAI</motion.span>
                        <motion.div style={{ opacity: iconOpacity, scale: iconScale }} className={shapeWrapper1}>
                            {!showOrbit && (
                                <motion.div
                                    className="w-full h-full"
                                    layoutId="icon1"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <AsteriskShape />
                                </motion.div>
                            )}
                        </motion.div>
                        {!isMobile && <motion.span {...textFade} style={{ x: xRight }} className={`${fontClass} text-white`}>PANDIAN</motion.span>}
                    </motion.div>
                    {isMobile && (
                        <motion.div className="flex justify-end w-full pr-2">
                            <motion.span {...textFade} style={{ x: xRight }} className={`${fontClass} text-white`}>PANDIAN</motion.span>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div style={{ opacity: opacityLine2 }} className={`relative flex ${isMobile ? 'flex-col gap-4' : 'items-center'} justify-start w-full text-center overflow-visible md:ml-[4%] ml-0`}>
                    <motion.div className="flex justify-center items-center gap-0">
                        <motion.span {...textFade} style={{ x: xLeft }} className={`${fontClass} text-white`}>FULL</motion.span>
                        <motion.div style={{ opacity: iconOpacity, scale: iconScale }} className={shapeWrapper2}>
                            {!showOrbit && (
                                <motion.div
                                    className="w-full h-full"
                                    layoutId="icon2"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <ClusterShape />
                                </motion.div>
                            )}
                        </motion.div>
                        <motion.span {...textFade} style={{ x: xRight }} className={`${fontClass} text-white`}>STACK</motion.span>

                        {!isMobile && (
                            <motion.button
                                ref={buttonRef}
                                initial={{ width: "65px", opacity: 0, scale: 0.8 }}
                                animate={{
                                    width: isContactOpen ? "50px" : "280px",
                                    opacity: isContactOpen ? 0 : 1,
                                    scale: isContactOpen ? 0.5 : 1,
                                }}
                                transition={{
                                    width: { delay: introFinished ? 0 : 3.2, duration: introFinished ? 0.6 : 1.4, ease: [0.16, 1, 0.3, 1] },
                                    opacity: { delay: introFinished ? 0 : 2.4, duration: introFinished ? 0.4 : 0.8 },
                                    scale: { delay: introFinished ? 0 : 2.4, duration: introFinished ? 0.4 : 0.8 },
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleOpenContact}
                                className="relative bg-black text-white h-[45px] md:h-[55px] lg:h-[65px] flex items-center justify-center overflow-hidden ml-8 md:ml-12 lg:ml-16 self-center group pointer-events-auto flex-shrink-0 shadow-2xl"
                                style={{
                                    x: xRight,
                                    rotate: buttonRotate,
                                    clipPath: "polygon(15px 0%, calc(100% - 15px) 0%, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0% calc(100% - 15px), 0% 15px)"
                                }}
                            >
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    transition={{ delay: introFinished ? 0 : 3.8, duration: 1.5, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                                />

                                <div className="flex items-center justify-between w-full h-full px-6 md:px-10">
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: introFinished ? 0 : 3.6, duration: 0.8 }}
                                        className="font-sharp font-bold text-[16px] md:text-[18px] lg:text-[22px] whitespace-nowrap tracking-tight"
                                    >
                                        Work with me
                                    </motion.span>
                                    <motion.div
                                        initial={{ rotate: -90, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        transition={{ delay: introFinished ? 0 : 2.8, duration: 0.6, type: "spring" }}
                                        className="shrink-0 ml-4"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </motion.button>
                        )}
                    </motion.div>

                    {isMobile && (
                        <motion.button
                            ref={buttonRef}
                            onClick={handleOpenContact}
                            className="bg-black text-white h-[50px] px-8 font-bold tracking-tight text-base pointer-events-auto self-center"
                            style={{
                                clipPath: "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% 12px)"
                            }}
                        >
                            Work with me
                        </motion.button>
                    )}
                </motion.div>

                <motion.div style={{ opacity: opacityLine3 }} className="relative flex items-center justify-start w-full text-center overflow-visible md:ml-[15%] ml-0">
                    <motion.div className={`flex justify-center items-center gap-0 ${isMobile ? 'pl-4' : 'pl-36'}`}>
                        <motion.span {...textFade} style={{ x: xLeft }} className={`${fontClass} !text-[#e2ff6f]`}>DEVE</motion.span>
                        <motion.div style={{ opacity: iconOpacity, scale: iconScale }} className={shapeWrapper3}>
                            {!showOrbit && (
                                <motion.div
                                    className="w-full h-full"
                                    layoutId="icon3"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <ArrowIconShape />
                                </motion.div>
                            )}
                        </motion.div>
                        <motion.span {...textFade} style={{ x: xRight }} className={`${fontClass} !text-[#e2ff6f]`}>LOPER</motion.span>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Sub-labels positioned in "safe zones" to ensure visibility across all devices */}
            <SmallLabel
                style={{ x: xRight }}
                className="absolute right-[5%] lg:right-[23%] top-[12%] lg:top-[14%] text-right lg:text-left"
            >
                CUSTOM AI SOLUTIONS<br />& INTEGRATION
            </SmallLabel>

            <SmallLabel
                style={{ x: xLeft }}
                className="absolute left-[5%] lg:left-[3%] top-[22%] lg:top-[37%] text-left lg:text-right"
            >
                WEB & APP<br />DEVELOPMENT
            </SmallLabel>

            <SmallLabel
                style={{ x: xLeft }}
                className="absolute left-[5%] lg:left-[10%] bottom-[20%] lg:top-[67%] text-left lg:text-right"
            >
                SYSTEM<br />INTEGRATION<br />& CLOUD
            </SmallLabel>

            <SmallLabel
                style={{ x: xRight }}
                className="absolute right-[5%] lg:right-[2%] bottom-[8%] lg:bottom-[13%] text-right lg:text-left"
            >
                DATABASE MANAGEMENT<br />&  OPTIMIZATION
            </SmallLabel>



            <MorphingModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} initialPos={buttonPos} />
        </div>
    );
}
