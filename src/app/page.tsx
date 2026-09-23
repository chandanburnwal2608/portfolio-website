"use client";

import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  Printer
} from "lucide-react";

// Clean Inline Brand SVGs for LinkedIn & GitHub
const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/>
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} (${text}) to clipboard!`);
    }).catch(() => {
      showToast(`Copied: ${text}`);
    });
  };

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Ambient background light gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#080b12]/80 backdrop-blur-xl border-b border-white/10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#intro" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/chandan_burnwal.jpg"
                alt="Chandan Burnwal"
                className="w-full h-full object-cover rounded-full bg-slate-900"
              />
            </div>
            <div>
              <div className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                Chandan Burnwal
              </div>
              <div className="text-xs text-cyan-400 font-medium tracking-wide">
                Director · EY Technology Consulting
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
            <a href="#intro" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Intro</a>
            <a href="#about" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">About</a>
            <a href="#experience" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Experience</a>
            <a href="#projects" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Featured Projects</a>
            <a href="#skills" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Skills</a>
            <a href="#clients" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Clients</a>
            <a href="#contact" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">Contact</a>
          </nav>

          {/* Header Action Utilities */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
              title="Print executive profile"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>

            <a
              href="https://www.linkedin.com/in/chandan-burnwal-4027109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/10 bg-[#0b0f19] px-4 pt-3 pb-6 space-y-2">
            <a onClick={() => setMobileMenuOpen(false)} href="#intro" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">Intro</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">About</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">Experience</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">Featured Projects</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">Skills</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#clients" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">Clients</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">Contact</a>
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="https://www.linkedin.com/in/chandan-burnwal-4027109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* =========================================================================
            1. INTRO / HERO SECTION
           ========================================================================= */}
        <section id="intro" className="pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Information Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  23+ Years Leadership
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Director – Technology Consulting @ EY
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Former CIO (EPC & Metals)
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Driving Global <br />
                <span className="text-gradient-cyan-blue">Digital Transformation</span> <br />
                & Enterprise Scale.
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-cyan-400 font-medium max-w-2xl mx-auto lg:mx-0">
                Supply Chain Architecture · Industry 4.0 · SAP S/4HANA · Enterprise AI
              </p>

              {/* Summary Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Over two decades of architecting enterprise technology roadmaps and steering mega SAP rollouts across India, Europe, and global markets. Former Chief Information Officer (CIO) with a proven record of leading 150+ member multidisciplinary teams for leading Fortune 500 corporations.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-xl shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>

                <a
                  href="https://www.linkedin.com/in/chandan-burnwal-4027109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/chandanburnwal2608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-200" />
                  GitHub ↗
                </a>
              </div>

              {/* Quick direct details */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  chanub@yahoo.com
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  Alumnus: IIM Mumbai · NPTI · Bhopal Univ
                </span>
              </div>
            </div>

            {/* Portrait Visual Column with Floating Metrics */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
                {/* Glow rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 opacity-60 blur-2xl animate-pulse" />
                <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-2xl shadow-blue-500/30">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#080b12] bg-[#0c1222]">
                    <img
                      src="/chandan_burnwal.jpg"
                      alt="Chandan Burnwal - Director Technology Consulting"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Floating Stat Pill: 150+ Scale */}
                <div className="absolute -left-6 top-8 glass-panel rounded-2xl p-3.5 shadow-xl flex items-center gap-3 border border-white/10 animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 font-bold">
                    👥
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-white">150+ Team</div>
                    <div className="text-[11px] text-slate-400">Scale Led</div>
                  </div>
                </div>

                {/* Floating Stat Pill: 7+ Years Global */}
                <div className="absolute -right-6 bottom-8 glass-panel rounded-2xl p-3.5 shadow-xl flex items-center gap-3 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 font-bold">
                    🌍
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-white">7+ Years</div>
                    <div className="text-[11px] text-slate-400">Global Exposure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="text-center p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan-blue">23+</div>
              <div className="text-sm font-semibold text-white mt-1">Years Experience</div>
              <div className="text-xs text-slate-400 mt-0.5">Consulting & Transformation</div>
            </div>
            <div className="text-center p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-gold">1st</div>
              <div className="text-sm font-semibold text-white mt-1">EPC S/4HANA in India</div>
              <div className="text-xs text-slate-400 mt-0.5">Pioneered full lifecycle</div>
            </div>
            <div className="text-center p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan-blue">15+</div>
              <div className="text-sm font-semibold text-white mt-1">Global Clients</div>
              <div className="text-xs text-slate-400 mt-0.5">Unilever, P&G, PepsiCo, SAIL</div>
            </div>
            <div className="text-center p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-gold">150+</div>
              <div className="text-sm font-semibold text-white mt-1">Project Scale</div>
              <div className="text-xs text-slate-400 mt-0.5">Cross-functional team size</div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. ABOUT ME & CREDENTIALS
           ========================================================================= */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Executive Profile
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">About Chandan Burnwal</h2>
            <p className="text-slate-400 mt-2 text-base">
              A high-impact technology executive bridging C-level business vision with complex, large-scale systems deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Detailed Bio Narrative */}
            <div className="lg:col-span-7 glass-panel rounded-2xl p-8 space-y-5 border border-white/10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                Strategic Leadership & Transformation Track Record
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                With over <strong>23+ years of enterprise experience</strong> spanning Supply Chain Consulting, SAP Consulting, Digital Strategy and Roadmap, Industry 4.0, IT Center of Excellence (CoE), and CIO leadership, I have consistently driven measurable business value for industry leaders in India and abroad.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Having spent <strong>7 years delivering projects in global environments</strong> across Germany, Austria, Indonesia, and India, my experience covers multi-country SAP rollouts, supply chain network planning with linear programming and capacity constraints, and enterprise digital architecture across Microsoft Azure and Google Cloud Platform (GCP).
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                As former <strong>Chief Information Officer (CIO)</strong> and Head of IT Center of Excellence at JMC Projects (Kalpataru Group), I led India’s first SAP S/4HANA implementation in the EPC space, creating an integrated digital backbone spanning SAP, Microsoft, RPA bots, and AI chatbots. Currently at <strong>Ernst & Young (EY)</strong>, I lead Industry 4.0 practices, CDIO as a Service engagements, and enterprise Generative AI GTM and delivery.
              </p>

              {/* Core Philosophy Pills */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>C-Suite & Board Advisory Alignment</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>India&apos;s 1st EPC S/4HANA Implementation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Large Program Governance (150+ staff)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Industry 4.0 & GenAI Deployment</span>
                </div>
              </div>
            </div>

            {/* Academic Background & Professional Certifications */}
            <div className="lg:col-span-5 space-y-6">
              {/* Certifications Card */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  Professional Certifications
                </h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="font-semibold text-sm text-white">PMP® – Project Management Professional</div>
                    <div className="text-xs text-cyan-400">Project Management Institute (PMI)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="font-semibold text-sm text-white">CPIM – Certified in Planning and Inventory Management</div>
                    <div className="text-xs text-cyan-400">APICS / ASCM</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="font-semibold text-sm text-white">Gen.AI Mastermind</div>
                    <div className="text-xs text-cyan-400">Outskill</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="font-semibold text-sm text-white">Leadership Program</div>
                    <div className="text-xs text-cyan-400">Indian Institute of Management Ahmedabad (IIMA)</div>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  Academic Background
                </h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="font-semibold text-sm text-white">Indian Institute of Management Mumbai (IIM Mumbai)</div>
                    <div className="text-xs text-slate-400">Alumnus · Formerly NITIE Mumbai</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="font-semibold text-sm text-white">National Power Training Institute (NPTI)</div>
                    <div className="text-xs text-slate-400">Alumnus · Nagpur, India</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="font-semibold text-sm text-white">Bhopal University</div>
                    <div className="text-xs text-slate-400">Alumnus · Bhopal, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WORK EXPERIENCE (TIMELINE)
           ========================================================================= */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Career Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Work Experience</h2>
            <p className="text-slate-400 mt-2 text-base">
              A 23+ year trajectory of executive technology leadership across Ernst & Young, Kalpataru, IBM, Patni, Bristlecone, and PowerGen.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-transparent">
            {/* 1. EY */}
            <div className="relative pl-12 sm:pl-18">
              <div className="absolute left-3.5 sm:left-6.5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-[#080b12] shadow-lg shadow-cyan-400/50" />
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Ernst & Young (EY LLP)</h3>
                    <div className="text-cyan-400 font-semibold text-sm">Director – Technology Consulting</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                    Dec 2022 – Present
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-xs text-slate-400 mr-2 font-medium">Clients & Engagements:</span>
                  {["Jindal Stainless", "Unilever", "Kraft Heinz", "AkzoNobel (JSW Dulux)", "Legrand", "Force Motors", "OIL"].map((client) => (
                    <span key={client} className="px-2.5 py-0.5 rounded text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {client}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                  <li><strong>CDIO as a Service:</strong> Spearheaded complete IT & digital leadership for India&apos;s largest stainless-steel company (Jindal Stainless Ltd), managing the end-to-end SAP and digital landscape.</li>
                  <li><strong>Industry 4.0 Practice & Alliances:</strong> Established the Industry 4.0 Center of Excellence, managing high-level partner alliances and architecting digital roadmaps across Azure and GCP.</li>
                  <li><strong>Generative AI Strategy:</strong> Headed Go-To-Market (GTM) strategy and production delivery of GenAI solutions for premier global consumer packaged goods (Unilever).</li>
                  <li><strong>M&A / TSA Transition:</strong> Directed sales and delivery for Transition Services Agreement (TSA) strategy and full IT landscape carve-out (including SAP) for a leading paints manufacturer.</li>
                  <li><strong>Digital Mining Operations:</strong> Led digital mining transformation, deploying real-time automated monitoring and analytics systems for a major Indian mining player.</li>
                  <li><strong>IndustryX Practice Growth:</strong> Built and led the IndustryX practice spanning talent recruitment, workforce training, product development, GTM, and international delivery.</li>
                </ul>
              </div>
            </div>

            {/* 2. Kalpataru Group / JMC Projects */}
            <div className="relative pl-12 sm:pl-18">
              <div className="absolute left-3.5 sm:left-6.5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#080b12]" />
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">JMC Projects India Ltd (Kalpataru Group)</h3>
                    <div className="text-blue-400 font-semibold text-sm">
                      Sr. General Manager · Head, IT CoE & Chief Information Officer (CIO)
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/10">
                    Mar 2017 – Dec 2022
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-xs text-slate-400 mr-2 font-medium">Domain:</span>
                  <span className="px-2.5 py-0.5 rounded text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Infrastructure & EPC Conglomerate
                  </span>
                </div>

                <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                  <li><strong>CIO Leadership:</strong> Directed total corporate IT strategy, cyber posture, and digital operations as CIO for one of India&apos;s leading infrastructure EPC organizations.</li>
                  <li><strong>Pioneered 1st EPC S/4HANA in India:</strong> Architected and delivered India&apos;s very first SAP S/4HANA enterprise implementation in the EPC domain.</li>
                  <li><strong>Enterprise IT Center of Excellence:</strong> Established group IT CoE covering enterprise applications (SAP suite, Microsoft ecosystem, Robotic Process Automation bots, and AI conversational chatbots).</li>
                </ul>
              </div>
            </div>

            {/* 3. IBM India */}
            <div className="relative pl-12 sm:pl-18">
              <div className="absolute left-3.5 sm:left-6.5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[#080b12]" />
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">IBM India Pvt Ltd</h3>
                    <div className="text-indigo-400 font-semibold text-sm">
                      Sr. Managing Consultant · Managing Consultant · Sr. Consultant
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/10">
                    Sep 2006 – Feb 2017
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-xs text-slate-400 mr-2 font-medium">Key Engagements:</span>
                  {["PepsiCo India", "Adani Ports & Power", "VoestAlpine (Austria)", "SAIL Bokaro", "T-Mobile Europe", "Hindustan Unilever"].map((client) => (
                    <span key={client} className="px-2.5 py-0.5 rounded text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {client}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                  <li><strong>GST Program Lead (PepsiCo India):</strong> Directed the nationwide Goods and Services Tax (GST) transition and ERP harmonization program.</li>
                  <li><strong>Ports & Power Transformation (Adani Group):</strong> Led multi-location SAP business process transformation, including BPC, mobility, CRM, and rollouts for new operational ports.</li>
                  <li><strong>VoestAlpine (Austria):</strong> SAP Delivery Lead for full implementation in Austria; engineered a specialized capacity-based scheduling engine adopted across global plants.</li>
                  <li><strong>Steel Authority of India Ltd (SAIL Bokaro):</strong> Managed full-suite SAP rollout and transition, delivering complete implementation in an aggressive 6-month turnaround with a new team.</li>
                  <li><strong>T-Mobile Europe:</strong> Orchestrated SAP Demand Planning (DP) and Supply Network Planning (SNP) deployment across European telecom infrastructure.</li>
                  <li><strong>Hindustan Unilever (India):</strong> Implemented integrated supply network planning, production planning, and detailed scheduling (PPDS) factoring complex business constraints.</li>
                </ul>
              </div>
            </div>

            {/* 4. Patni Computers */}
            <div className="relative pl-12 sm:pl-18">
              <div className="absolute left-3.5 sm:left-6.5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-500 ring-4 ring-[#080b12]" />
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">Patni Computers (CG) India Ltd</h3>
                    <div className="text-slate-300 font-semibold text-sm">Sr. Software Engineer</div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Feb 2005 – Aug 2006</span>
                </div>
                <div className="text-xs text-cyan-400 mb-2">Client: Gillette – Procter & Gamble (P&G), Germany</div>
                <p className="text-slate-300 text-sm">
                  Implemented SAP Demand Planning (DP), designing statistical forecast models and demand aggregation workflows for Gillette–P&G in Germany.
                </p>
              </div>
            </div>

            {/* 5. Bristlecone India */}
            <div className="relative pl-12 sm:pl-18">
              <div className="absolute left-3.5 sm:left-6.5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-600 ring-4 ring-[#080b12]" />
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">Bristlecone India Ltd</h3>
                    <div className="text-slate-300 font-semibold text-sm">Supply Chain Consultant</div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Jan 2003 – Jan 2005</span>
                </div>
                <div className="text-xs text-cyan-400 mb-2">Clients: Mahindra Tractors & Unilever Indonesia</div>
                <p className="text-slate-300 text-sm">
                  Delivered supply chain optimization and SAP Supply Network Planning (SNP) utilizing linear programming and finite capacity scheduling techniques.
                </p>
              </div>
            </div>

            {/* 6. PowerGen India */}
            <div className="relative pl-12 sm:pl-18">
              <div className="absolute left-3.5 sm:left-6.5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-700 ring-4 ring-[#080b12]" />
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">PowerGen India Ltd</h3>
                    <div className="text-slate-300 font-semibold text-sm">Asst. Manager, Production</div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">May 2000 – Apr 2001</span>
                </div>
                <div className="text-xs text-slate-400 mb-2">Domain: Energy & Power Plant Operations</div>
                <p className="text-slate-300 text-sm">
                  Supervised thermal operations and gas turbine performance for an MNC-owned combined cycle gas-fired power station in India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. FEATURED PROJECTS & ENTERPRISE WORK
           ========================================================================= */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Key Engagements
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Featured Projects & Case Studies</h2>
            <p className="text-slate-400 mt-2 text-base">
              Real-world transformations delivered across manufacturing, supply chain, infrastructure, and heavy industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 mb-4">
                  🏗️
                </div>
                <span className="text-xs text-amber-400 font-semibold">EPC & Infrastructure</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">India&apos;s 1st S/4HANA EPC Rollout</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Spearheaded the nation&apos;s pioneering SAP S/4HANA enterprise migration for JMC Projects (Kalpataru Group), standardizing finance, procurement, and project controls across construction megaprojects.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Role: CIO / IT Head</span>
                <span className="font-semibold text-cyan-400">Kalpataru</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-4">
                  🤖
                </div>
                <span className="text-xs text-cyan-400 font-semibold">Enterprise AI</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">Generative AI GTM & Delivery</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Architected and directed the Go-To-Market and execution of enterprise Generative AI solutions for Unilever, enabling intelligent decision support and automated workflow augmentation across global CPG units.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Role: Director, EY</span>
                <span className="font-semibold text-cyan-400">Unilever</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-4">
                  🏭
                </div>
                <span className="text-xs text-emerald-400 font-semibold">Metals & Heavy Industry</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">CDIO as a Service for Jindal Stainless</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Led digital and IT strategy as Chief Digital & Information Officer (CDIO as a Service) for India&apos;s largest stainless-steel manufacturer, modernizing SAP core systems and plant IoT networks.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Role: Director, EY</span>
                <span className="font-semibold text-cyan-400">Jindal Stainless</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 mb-4">
                  🎨
                </div>
                <span className="text-xs text-purple-400 font-semibold">M&A & IT Transition</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">TSA Carve-Out & SAP Architecture</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Sold and directed the delivery of Transition Services Agreement (TSA) strategy, separating and migrating the entire corporate IT landscape (including SAP) for AkzoNobel / JSW Dulux.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Role: Director, EY</span>
                <span className="font-semibold text-cyan-400">AkzoNobel / JSW Dulux</span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 mb-4">
                  📦
                </div>
                <span className="text-xs text-amber-400 font-semibold">Regulatory & Supply Chain</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">Nationwide GST Program</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Program Lead for PepsiCo India’s Goods and Services Tax (GST) rollout, aligning national distributor networks, SAP finance modules, and automated e-way billing without supply chain downtime.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Role: Sr. Managing Consultant</span>
                <span className="font-semibold text-cyan-400">PepsiCo India</span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 transition-all hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center text-sky-400 mb-4">
                  ⚙️
                </div>
                <span className="text-xs text-sky-400 font-semibold">International Manufacturing</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">Global Scheduling Program</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Designed and deployed a capacity-constrained scheduling program for VoestAlpine in Austria, which became an IBM benchmark asset deployed across multiple international steel mills.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Role: Managing Consultant</span>
                <span className="font-semibold text-cyan-400">VoestAlpine (Austria)</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. SKILLS MATRIX
           ========================================================================= */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Executive & Technical Skills</h2>
            <p className="text-slate-400 mt-2 text-base">
              A comprehensive toolset combining enterprise ERP suites, industrial platforms, cloud frameworks, and C-suite leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. ERP & Supply Chain */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 font-bold">
                  📦
                </div>
                <h3 className="text-lg font-bold text-white">ERP & Supply Chain Excellence</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "SAP S/4HANA",
                  "Supply Chain Management (SCM)",
                  "Demand Planning (DP)",
                  "Supply Network Planning (SNP)",
                  "Production Planning & Detailed Scheduling (PPDS)",
                  "Transportation Management (TM)",
                  "Global Available-to-Promise (GATP)",
                  "Full Suite SAP Implementations",
                  "GST Regulatory Rollouts"
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-200 border border-white/5 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Digital Strategy & Industry 4.0 */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 font-bold">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-white">Digital Strategy & Industry 4.0</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Industry 4.0 Center of Excellence",
                  "Digital Twin Solutions",
                  "Asset Health & Energy Monitoring",
                  "Manufacturing Excellence",
                  "Transition Services Agreements (TSA)",
                  "Go-To-Market (GTM) Strategy",
                  "Digital Mining Automation",
                  "Business Process Re-engineering"
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-200 border border-white/5 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Cloud, Data & AI */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 font-bold">
                  ☁️
                </div>
                <h3 className="text-lg font-bold text-white">Cloud, Data & Emerging AI</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Generative AI (GenAI) Architecture",
                  "Microsoft Azure Ecosystem",
                  "Google Cloud Platform (GCP)",
                  "Cognite Industrial Data Platform",
                  "AVEVA Industrial Software",
                  "Enterprise Cloud & Data Lakehouses",
                  "Software Development Lifecycle (SDLC)",
                  "Conversational AI Chatbots"
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-200 border border-white/5 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Leadership & Automation */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 font-bold">
                  🛡️
                </div>
                <h3 className="text-lg font-bold text-white">Executive Governance & Automation</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Chief Information Officer (CIO) Leadership",
                  "CDIO as a Service",
                  "Automation Anywhere (RPA)",
                  "IT Center of Excellence (CoE)",
                  "Global Team Management (150+)",
                  "Strategic Partner Alliances",
                  "Vendor Contract Negotiations",
                  "C-Suite Stakeholder Advisory"
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-200 border border-white/5 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. CLIENTS & INDUSTRY VERTICALS
           ========================================================================= */}
        <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Enterprise Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Clients & Industry Verticals</h2>
            <p className="text-slate-400 mt-2 text-base">
              Trusted by industry-defining Fortune 500 corporations and global institutions.
            </p>
          </div>

          {/* Client Logos / Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
            {[
              { name: "Unilever", sub: "Global CPG", tag: "UL" },
              { name: "Procter & Gamble", sub: "Gillette · Germany", tag: "P&G" },
              { name: "PepsiCo", sub: "Food & Beverage", tag: "PEP" },
              { name: "T-Mobile", sub: "Telecom · Europe", tag: "TM" },
              { name: "Mahindra Tractors", sub: "Automotive / Farm", tag: "M&M" },
              { name: "Jindal Stainless", sub: "Metals & Mining", tag: "JSL" },
              { name: "SAIL Bokaro", sub: "Steel Authority", tag: "SAIL" },
              { name: "Adani Ports & Power", sub: "Infrastructure", tag: "AD" },
              { name: "JSW Paints / Dulux", sub: "Chemicals & Coatings", tag: "JSW" },
              { name: "Kraft Heinz", sub: "Consumer Goods", tag: "KH" },
              { name: "VoestAlpine", sub: "Specialty Steel · Austria", tag: "VA" },
              { name: "Legrand", sub: "Digital Infrastructure", tag: "LEG" },
            ].map((client) => (
              <div
                key={client.name}
                className="glass-panel glass-panel-hover rounded-xl p-4 flex flex-col items-center text-center border border-white/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center mb-2">
                  {client.tag}
                </div>
                <div className="font-semibold text-sm text-white">{client.name}</div>
                <div className="text-[11px] text-slate-400">{client.sub}</div>
              </div>
            ))}
          </div>

          {/* Industries Served Chips */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Sectors & Industry Verticals Served
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "🏗️ Infrastructure & EPC",
                "🏢 Real Estate",
                "🚢 Ports & Logistics",
                "⚡ Power & Utilities",
                "🎨 Paints & Coatings",
                "🛒 Consumer Packaged Goods (CPG)",
                "⛏️ Metals & Mining",
                "🚗 Automotive",
                "📡 Telecommunications",
                "💊 Pharmaceuticals"
              ].map((ind) => (
                <span key={ind} className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-300 border border-white/5">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. CONTACT SECTION
           ========================================================================= */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Initiate a Discussion</h2>
            <p className="text-slate-400 mt-2 text-base">
              Available for enterprise digital transformation strategy, executive advisory, and speaking engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Executive Channels</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect directly via email, phone, or LinkedIn. I look forward to exploring impactful advisory and technological transformation initiatives.
              </p>

              <div className="space-y-4">
                {/* Email card */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Email</div>
                      <a href="mailto:chanub@yahoo.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                        chanub@yahoo.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("chanub@yahoo.com", "Email")}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 transition-colors"
                  >
                    Copy
                  </button>
                </div>

                {/* LinkedIn Card */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Official LinkedIn</div>
                      <div className="text-sm font-semibold text-white">Chandan Burnwal</div>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/chandan-burnwal-4027109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    View ↗
                  </a>
                </div>

                {/* GitHub Card */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-700/30 flex items-center justify-center text-slate-300">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">GitHub Profile</div>
                      <div className="text-sm font-semibold text-white">@chandanburnwal2608</div>
                    </div>
                  </div>
                  <a
                    href="https://github.com/chandanburnwal2608"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 transition-colors"
                  >
                    View ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Email Launcher Form */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-8 border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white">Send an Inquiry</h3>
              <p className="text-slate-400 text-xs">
                Fill in the details below to open a pre-formatted message in your default email client addressed to Chandan Burnwal.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.target as HTMLFormElement;
                  const name = (target.elements.namedItem("name") as HTMLInputElement).value;
                  const org = (target.elements.namedItem("org") as HTMLInputElement).value;
                  const subject = (target.elements.namedItem("subject") as HTMLInputElement).value;
                  const message = (target.elements.namedItem("message") as HTMLTextAreaElement).value;

                  const mailSubject = encodeURIComponent(`Executive Inquiry: ${subject}`);
                  const mailBody = encodeURIComponent(
                    `Hi Chandan,\n\n${message}\n\nBest regards,\n${name}${org ? ` (${org})` : ""}`
                  );

                  showToast("Opening default email client...");
                  window.location.href = `mailto:chanub@yahoo.com?subject=${mailSubject}&body=${mailBody}`;
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Organization / Company</label>
                  <input
                    type="text"
                    name="org"
                    placeholder="e.g. Global Enterprises Ltd"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="e.g. Digital Transformation & S/4HANA Advisory"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-cyan-500/20 transition-all"
                >
                  Send via Email Client ✉️
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Chandan Burnwal. All professional records verified from official credentials.
          </div>
          <div className="flex items-center gap-6">
            <a href="#intro" className="hover:text-slate-300 transition-colors">Intro</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-slate-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
            <a href="https://www.linkedin.com/in/chandan-burnwal-4027109" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/chandanburnwal2608" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 border border-cyan-400/40 text-cyan-200 text-sm shadow-2xl flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
