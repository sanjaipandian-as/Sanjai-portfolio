"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MorphingModal from './MorphingModal';
import {
    ArrowUpRight,
    Zap,
    MessageSquare,
    Globe,
    Code2,
    GitBranch,
    Database,
    Terminal,
    Figma,
    Box,
    Layout,
    CheckCircle2,
    MapPin,
    Users,
    Layers,
    Wind,
    Github,
    Linkedin,
    Twitter,
    ExternalLink,
    Star,
    Cpu,
    Mail,
    Smartphone,
} from 'lucide-react';

/* ─── CondensedText ─── */
const CondensedText = ({ children }) => (
    <span className="inline-flex overflow-hidden">
        {children.split(' ').map((word, i) => (
            <span key={i} className="inline-block" style={{ transform: 'scaleX(0.85)', transformOrigin: 'left', marginRight: '0.1em' }}>
                {word}
            </span>
        ))}
    </span>
);

/* ─── BentoCard ─── */
const BentoCard = ({ children, className = "", color = "bg-white", textColor = "text-black", delay = 0, style = {} }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.18 } }}
        className={`relative rounded-[26px] overflow-hidden flex flex-col shadow-xl ${color} ${textColor} ${className}`}
        style={style}
    >
        {children}
    </motion.div>
);

/* ─── AppIcon ─── */
const AppIcon = ({ icon: Icon, bg, iconColor = "text-white", label, size = 20 }) => (
    <div className="flex flex-col items-center gap-1.5">
        <div className={`w-[52px] h-[52px] rounded-[14px] ${bg} flex items-center justify-center shadow-md flex-shrink-0`}>
            <Icon size={size} className={iconColor} />
        </div>
        {label && <span className="text-[8px] font-semibold text-indigo-900/50 text-center leading-tight">{label}</span>}
    </div>
);

/* ─── StatBadge ─── */
const StatBadge = ({ value, label }) => (
    <div className="flex flex-col">
        <span className="text-2xl font-black leading-none">{value}</span>
        <span className="text-[10px] font-semibold uppercase tracking-widest opacity-60 mt-0.5">{label}</span>
    </div>
);



export default function WhyChooseUs() {
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

    return (
        <section id="about" className="bg-black py-12 px-6 md:px-12 lg:px-20 overflow-hidden relative z-20">
            <div className="max-w-[1400px] mx-auto">

                {/* ─── Section Header ─── */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-3  uppercase"
                        >
                            <CondensedText>ABOUT ME</CondensedText>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg md:text-xl leading-relaxed font-light"
                        >
                            I engineer tailored digital solutions that transform ambitious ideas into{' '}
                            <span className="text-white font-medium">measurable results</span>. Fast, refined, and built to last.
                        </motion.p>
                    </div>
                    {/* <m  */}
                </div>

                {/* ══════════════════════════════════════════
                    DESKTOP BENTO GRID
                    gridTemplateAreas:
                    "mentorship  mentorship  basewallet  apex  apex"
                    "drivers     ben         ben         apex  apex"
                    "drivers     ben         ben         zippy mix "
                ══════════════════════════════════════════ */}
                <div
                    className="hidden md:grid gap-4"
                    style={{
                        gridTemplateColumns: '1.4fr 1fr 0.85fr 1.6fr 0.95fr',
                        gridTemplateRows: '200px 200px 130px',
                        gridTemplateAreas: `
                            "mentorship  mentorship  basewallet  apex  apex"
                            "drivers     ben         ben         apex  apex"
                            "drivers     ben         ben         zippy mix"
                        `,
                    }}
                >

                    {/* ══ 1. CONSULTING ══ */}
                    <BentoCard
                        color="bg-[#f0f0f0]"
                        textColor="text-black"
                        delay={0.05}
                        className="justify-between px-8 py-7"
                        style={{ gridArea: 'mentorship' }}
                    >
                        {/* Top row */}
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                <MessageSquare className="text-[#efff84]" size={26} />
                            </div>
                            <h3 className="text-[2.2rem] font-bold tracking-tight leading-none">Consulting</h3>
                        </div>
                        {/* Bottom row */}
                        <div className="flex items-end justify-between">
                            <p className="text-black/50 text-sm leading-snug max-w-[55%]">
                                Strategic planning &amp; technical roadmaps for ambitious founders.
                            </p>
                            <div className="flex gap-5">
                                <StatBadge value="12+" label="Clients" />
<StatBadge value="6+" label="Months" />
                            </div>
                        </div>
                    </BentoCard>

                    {/* ══ 2. CLOUD NATIVE ══ */}
                    <BentoCard
                        color="bg-[#2563EB]"
                        textColor="text-white"
                        delay={0.1}
                        className="!p-0 relative overflow-hidden flex flex-col justify-between"
                        style={{ gridArea: 'basewallet' }}
                    >
                        {/* Decorative background element */}
                        <div className="absolute -bottom-10 -right-10 opacity-[0.15]">
                            <Globe size={180} strokeWidth={1} />
                        </div>

                        <div className="relative z-10 pt-7 px-7">
                            <h3 className="text-[1.7rem] font-black uppercase tracking-tight leading-[1.05]">
                                CLOUD<br />NATIVE
                            </h3>
                        </div>

                        <div className="relative z-10 p-6 flex gap-2 flex-wrap">
                            {['AWS', 'Vercel'].map((name) => (
                                <div key={name} className="bg-white/20 backdrop-blur-md rounded-full px-3.5 py-1.5 text-[10px] font-bold tracking-widest text-center">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* ══ 3. SYSTEM INTEGRATION (spans rows 1-2) ══ */}
                    <BentoCard
                        color="bg-[#FF6B00]"
                        textColor="text-black"
                        delay={0.15}
                        className="!p-0 relative overflow-hidden"
                        style={{ gridArea: 'ben' }}
                    >
                        {/* dot pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.12]"
                            style={{
                                backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                                backgroundSize: '22px 22px',
                            }}
                        />
                        {/* huge background graphic */}
                        <div className="absolute -bottom-16 -right-16 opacity-[0.07]">
                            <Cpu size={320} strokeWidth={1} />
                        </div>

                        <div className="relative z-10 py-8 pr-8 pl-0 md:pl-5 flex flex-col justify-between h-full">
                            <div className="flex flex-wrap gap-2.5">
                                <div className="bg-black text-white rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest flex items-center gap-1.5 shadow-md">
                                    <Zap size={12} className="text-[#efff84]" /> Stripe
                                </div>
                                <div className="bg-white text-black rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest flex items-center gap-1.5 shadow-md">
                                    <Database size={12} className="text-[#FF6B00]" /> PostgreSQL
                                </div>
                                <div className="bg-black text-white rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest flex items-center gap-1.5 shadow-md">
                                    <Globe size={12} className="text-[#efff84]" /> Firebase
                                </div>
                                <div className="bg-black/10 border border-black/10 text-black rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider">
                                    20+ APIs
                                </div>
                                <div className="bg-black/10 border border-black/10 text-black rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider">
                                    REST · GraphQL
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3
                                    className="font-black uppercase tracking-tighter leading-[0.82]"
                                    style={{ fontSize: 'clamp(2.2rem, 3vw, 3.5rem)' }}
                                >
                                    SYSTEM<br />INTEGRATION
                                </h3>
                            </div>
                        </div>
                    </BentoCard>

                    {/* ══ 4. DAILY DRIVERS (spans rows 2-3) ══ */}
                    <BentoCard
                        color="bg-[#C7D2FE]"
                        textColor="text-black"
                        delay={0.2}
                        className="p-5"
                        style={{ gridArea: 'drivers' }}
                    >
                        <p className="text-indigo-900/50 font-semibold uppercase tracking-widest text-[9px] mb-4 text-center">
                            My Daily Drivers
                        </p>
                        <div className="grid grid-cols-3 gap-3 place-items-center flex-1">
                            <AppIcon icon={Code2} bg="bg-[#3178C6]" label="TypeScript" />
                            <AppIcon icon={Layout} bg="bg-black" label="Next.js" />
                            <AppIcon icon={Globe} bg="bg-[#61DAFB]/80" iconColor="text-black" label="React" />
                            <AppIcon icon={Terminal} bg="bg-[#339933]" label="Node.js" />
                            <AppIcon icon={Smartphone} bg="bg-[#54C5F8]" label="Flutter" />
                            <AppIcon icon={Wind} bg="bg-[#06B6D4]" label="Tailwind" />
                            <AppIcon icon={Database} bg="bg-[#336791]" label="PostgreSQL" />
                            <AppIcon icon={GitBranch} bg="bg-[#1F2328]" label="GitHub" />
                            <AppIcon icon={Box} bg="bg-[#2496ED]" label="Docker" />
                        </div>
                    </BentoCard>

                    {/* ══ 5. AVATAR / IDENTITY (spans rows 2-3) ══ */}
                    <BentoCard
                        color="bg-black"
                        textColor="text-white"
                        delay={0.25}
                        className="!p-0 relative overflow-hidden"
                        style={{ gridArea: 'apex' }}
                    >
                        <img src="/ME.jpeg" alt="Sanjai" className="absolute inset-0 w-full h-full object-cover z-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                        <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-6 px-5 text-center">
                            <p className="text-white/70 font-semibold uppercase tracking-widest text-[9px] mb-1">
                                You can call me
                            </p>
                            <h3 className="text-[1.6rem] font-bold text-white mb-1">Sanjai</h3>
                            {/* Location */}
                            <div className="flex items-center gap-1 text-white/60 text-[10px] font-medium">
                                <MapPin size={10} />
                                Tamil Nadu, India
                            </div>
                        </div>
                    </BentoCard>

                    {/* ══ 6. ZIPPY STUDIO ══ */}
                    <BentoCard
                        color="bg-[#5B5BD6]"
                        textColor="text-white"
                        delay={0.35}
                        className="!flex-row items-center px-6 py-4 gap-4"
                        style={{ gridArea: 'zippy' }}
                    >
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow flex-shrink-0">
                            <span className="text-[#5B5BD6] text-2xl font-black leading-none">Z</span>
                        </div>
                        <div>
                            <h3 className="text-[1.35rem] font-bold leading-tight tracking-tight">
                                Zippy<br />Studio
                            </h3>
                            <p className="text-white/50 text-[9px] uppercase tracking-widest mt-1 font-semibold">
                                5 Products Shipped
                            </p>
                        </div>
                        <ExternalLink size={14} className="ml-auto opacity-40" />
                    </BentoCard>

                    {/* ══ 7. THE MIX / SOCIALS ══ */}
                    <BentoCard
                        color="bg-[#0d0d0d]"
                        textColor="text-white"
                        delay={0.4}
                        className="px-4 py-4 justify-between"
                        style={{ gridArea: 'mix' }}
                    >
                        <h3 className="text-[1.3rem] font-black tracking-tighter uppercase leading-tight mb-2">
                            Let's<br />Connect
                        </h3>
                        <div className="flex gap-4 opacity-60">
                            <a href="mailto:sanjaipandian.as@gmail.com" className="hover:text-[#efff84] transition-colors">
                                <Mail size={22} />
                            </a>
                            <a href="https://linkedin.com/in/sanjaipandian" target="_blank" rel="noopener noreferrer" className="hover:text-[#efff84] transition-colors">
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </BentoCard>

                </div>

                {/* ══════════════════════════════════════════
                    MOBILE LAYOUT
                ══════════════════════════════════════════ */}
                <div className="flex flex-col gap-4 md:hidden">

                    {/* Consulting */}
                    <BentoCard color="bg-[#f0f0f0]" textColor="text-black" delay={0.05} className="p-7" style={{ minHeight: '160px' }}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="text-[#efff84]" size={24} />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight">Consulting</h3>
                        </div>
                        <p className="text-black/50 text-sm">Strategic planning &amp; technical roadmaps for ambitious founders.</p>
                        <div className="flex gap-6 mt-4">
                            <StatBadge value="12+" label="Clients" />
                            <StatBadge value="6+" label="Months" />
                        </div>
                    </BentoCard>

                    {/* Cloud Native */}
                    <BentoCard color="bg-[#2563EB]" textColor="text-white" delay={0.1} className="p-7 relative overflow-hidden" style={{ minHeight: '150px' }}>
                        <div className="absolute -bottom-8 -right-8 opacity-20">
                            <Globe size={140} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <h3 className="text-3xl font-black uppercase tracking-tight leading-tight mb-4">CLOUD<br />NATIVE</h3>
                            <div className="flex gap-2 flex-wrap">
                                {['AWS', 'Vercel'].map(t => (
                                    <span key={t} className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-bold tracking-wider">{t}</span>
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* Avatar */}
                    <BentoCard color="bg-black" textColor="text-white" delay={0.25} className="!p-0 relative overflow-hidden" style={{ minHeight: '240px' }}>
                        <img src="/ME.jpeg" alt="Sanjai" className="absolute inset-0 w-full h-full object-cover z-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                        <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-6 px-5 text-center">
                            <p className="text-white/70 font-semibold uppercase tracking-widest text-[9px] mb-1">You can call me</p>
                            <h3 className="text-2xl font-bold text-white mb-1">Sanjai</h3>
                            <div className="flex items-center gap-1 text-white/60 text-[10px] font-medium">
                                <MapPin size={10} />
                                Tamil Nadu, India
                            </div>
                        </div>
                    </BentoCard>

                    {/* Daily Drivers */}
                    <BentoCard color="bg-[#C7D2FE]" textColor="text-black" delay={0.2} className="p-5">
                        <p className="text-indigo-900/50 font-semibold uppercase tracking-widest text-[9px] mb-4 text-center">My Daily Drivers</p>
                        <div className="grid grid-cols-3 gap-3 place-items-center">
                            <AppIcon icon={Code2} bg="bg-[#3178C6]" label="TypeScript" />
                            <AppIcon icon={Layout} bg="bg-black" label="Next.js" />
                            <AppIcon icon={Globe} bg="bg-[#61DAFB]/80" iconColor="text-black" label="React" />
                            <AppIcon icon={Terminal} bg="bg-[#339933]" label="Node.js" />
                            <AppIcon icon={Smartphone} bg="bg-[#54C5F8]" label="Flutter" />
                            <AppIcon icon={Wind} bg="bg-[#06B6D4]" label="Tailwind" />
                            <AppIcon icon={Database} bg="bg-[#336791]" label="PostgreSQL" />
                            <AppIcon icon={GitBranch} bg="bg-[#1F2328]" label="GitHub" />
                            <AppIcon icon={Box} bg="bg-[#2496ED]" label="Docker" />
                        </div>
                    </BentoCard>

                    <BentoCard color="bg-[#FF6B00]" textColor="text-black" delay={0.15} className="py-8 pr-8 pl-0 md:pl-5 relative overflow-hidden" style={{ minHeight: '180px' }}>
                        <div
                            className="absolute inset-0 opacity-[0.12]"
                            style={{
                                backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                                backgroundSize: '20px 20px',
                            }}
                        />
                        <div className="absolute -bottom-8 -right-8 opacity-[0.07]">
                            <Cpu size={200} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex gap-2 flex-wrap mb-6">
                                <span className="bg-black text-white rounded-full px-3 py-1.5 text-[10px] font-bold flex items-center gap-1.5"><Zap size={10} className="text-[#efff84]" /> Stripe</span>
                                <span className="bg-white text-black rounded-full px-3 py-1.5 text-[10px] font-bold flex items-center gap-1.5"><Database size={10} className="text-[#FF6B00]" /> PostgreSQL</span>
                                <span className="bg-black text-white rounded-full px-3 py-1.5 text-[10px] font-bold flex items-center gap-1.5"><Globe size={10} className="text-[#efff84]" /> Firebase</span>
                                <span className="bg-black/10 border border-black/10 text-black rounded-full px-3 py-1.5 text-[10px] font-bold">20+ APIs</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.85]">SYSTEM<br />INTEGRATION</h3>
                        </div>
                    </BentoCard>

                    {/* Zippy Studio + THE MIX */}
                    <div className="flex gap-4">
                        <BentoCard color="bg-[#5B5BD6]" textColor="text-white" delay={0.3} className="flex-1 !flex-row items-center px-5 py-4 gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-[#5B5BD6] text-xl font-black leading-none">Z</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold leading-tight">Zippy<br />Studio</h3>
                                <p className="text-white/50 text-[9px] uppercase tracking-wider mt-0.5">5 Products</p>
                            </div>
                        </BentoCard>
                        <BentoCard color="bg-[#0d0d0d]" textColor="text-white" delay={0.35} className="flex-1 px-5 py-4 justify-center gap-2">
                            <h3 className="text-xl font-black tracking-tighter uppercase">Let's<br />Connect</h3>
                            <div className="flex gap-4 mt-3 opacity-60">
                                <a href="mailto:sanjaipandian.as@gmail.com" className="hover:text-[#efff84] transition-colors"><Mail size={20} /></a>
                                <a href="https://linkedin.com/in/sanjaipandian" target="_blank" rel="noopener noreferrer" className="hover:text-[#efff84] transition-colors"><Linkedin size={20} /></a>
                            </div>
                        </BentoCard>
                    </div>

                </div>

            </div>
            <MorphingModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} initialPos={buttonPos} />
        </section>
    );
}
