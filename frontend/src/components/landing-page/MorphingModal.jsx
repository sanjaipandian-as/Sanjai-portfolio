"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "./CotactUs";

export default function MorphingModal({ isOpen, onClose, initialPos }) {
    const [mounted, setMounted] = useState(false);
    const [status, setStatus] = useState("button");
    const [showContent, setShowContent] = useState(false);
    const isClosingRef = React.useRef(false);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        if (isOpen && initialPos) {
            isClosingRef.current = false;
            setStatus("button");
            const t1 = setTimeout(() => setStatus("center"), 20);
            const t2 = setTimeout(() => setStatus("pillar"), 550);
            const t3 = setTimeout(() => setStatus("modal"), 1100);
            const t4 = setTimeout(() => setShowContent(true), 1650);
            return () => {
                clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
            };
        } else {
            setStatus("button");
            setShowContent(false);
        }
    }, [isOpen, initialPos]);

    const handleClose = () => {
        if (isClosingRef.current) return;
        isClosingRef.current = true;
        setShowContent(false);
        setStatus("pillar");
        setTimeout(() => {
            setStatus("center");
            setTimeout(() => {
                setStatus("button");
                setTimeout(() => {
                    onClose();
                    isClosingRef.current = false;
                }, 500);
            }, 550);
        }, 550);
    };

    useEffect(() => {
        if (!isOpen) return;

        const preventDefault = (e) => {
            if (isOpen) e.preventDefault();
        };

        // Scroll lock
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";

        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });

        const handleScrollAttempt = () => {
            handleClose();
        };

        // We use a small timeout before enabling the auto-close-on-scroll to avoid immediate closure
        const scrollCloseTimer = setTimeout(() => {
            window.addEventListener('wheel', handleScrollAttempt, { passive: true });
            window.addEventListener('touchmove', handleScrollAttempt, { passive: true });
        }, 2000);

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "unset";
            document.body.style.touchAction = "auto";
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
            window.removeEventListener('wheel', handleScrollAttempt);
            window.removeEventListener('touchmove', handleScrollAttempt);
            clearTimeout(scrollCloseTimer);
        };
    }, [isOpen]);

    if (!mounted || !initialPos) return null;

    const variants = {
        button: {
            top: initialPos.top,
            left: initialPos.left,
            width: initialPos.width,
            height: initialPos.height,
            x: 0,
            y: 0,
            clipPath: "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        },
        center: {
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            width: initialPos.height,
            height: initialPos.height,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        },
        pillar: {
            top: 0,
            left: "50%",
            x: "-50%",
            y: 0,
            width: initialPos.height,
            height: "100vh",
            clipPath: "polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        },
        modal: {
            top: 0,
            left: "50%",
            x: "-50%",
            y: 0,
            width: "100vw",
            height: "100vh",
            clipPath: "polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        }
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] pointer-events-none">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50 backdrop-blur-md pointer-events-auto" onClick={handleClose} />
                    <motion.div initial="button" animate={status} exit="button" variants={variants} className="absolute bg-[#e2ff6f] overflow-hidden flex flex-col items-center justify-center pointer-events-auto shadow-2xl">
                        <AnimatePresence mode="wait">
                            {status === "modal" && showContent && (
                                <motion.div key="content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-full h-full">
                                    <ContactUs isOpen={true} onClose={handleClose} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
