import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  TrendingUp, 
  Sparkles, 
  Cpu, 
  Shield, 
  Database, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  User, 
  Menu, 
  X, 
  BarChart3, 
  Lock, 
  Globe2, 
  ChevronRight, 
  ArrowUpRight,
  GitBranch,
  Mail
} from 'lucide-react'

// Import custom components
import ThreeHero from './components/ThreeHero'
import DashboardPreview from './components/DashboardPreview'

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Custom SVGs for trademarked social icons
const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const appContainerRef = useRef(null)

  // GSAP Entrance and Scroll Trigger Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero entrance staggering (Always runs on page load)
      const heroTl = gsap.timeline()
      heroTl.from('.hero-reveal', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      })

      // Use GSAP MatchMedia for pixel-perfect responsive layouts
      const mm = gsap.matchMedia()

      // Desktop Animations (768px and up)
      mm.add("(min-width: 768px)", () => {
        // Trust Bar Fade In
        gsap.from('.trust-bar-item', {
          opacity: 0,
          y: 15,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#trust-bar',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })

        // Feature Grid Scroll Stagger
        gsap.from('.feature-card', {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#features-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        })

        // Dashboard Mockup Reveal
        gsap.from('.dashboard-reveal', {
          opacity: 0,
          scale: 0.95,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#dashboard-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        })

        // Testimonial Stagger
        gsap.from('.testimonial-card', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#testimonial-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        })

        // Pricing Tier Stagger
        gsap.from('.pricing-card', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#pricing-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        })
      })

      // Mobile & Tablet Animations (Under 768px)
      // Highly tolerant trigger thresholds to prevent elements getting stuck or black empty gaps on small viewport scrolls
      mm.add("(max-width: 767px)", () => {
        // Trust Bar Fade In
        gsap.from('.trust-bar-item', {
          opacity: 0,
          y: 10,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '#trust-bar',
            start: 'top 95%', // Trigger as soon as the top enters viewport even slightly
            toggleActions: 'play none none none' // Avoid reverse on scroll up to lock in visibility
          }
        })

        // Feature Grid
        gsap.from('.feature-card', {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#features-section',
            start: 'top 95%', // Triggers much higher to reveal earlier on small mobile heights
            toggleActions: 'play none none none'
          }
        })

        // Dashboard Mockup Reveal
        gsap.from('.dashboard-reveal', {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#dashboard-section',
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        })

        // Testimonial Stagger
        gsap.from('.testimonial-card', {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '#testimonial-section',
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        })

        // Pricing Cards
        gsap.from('.pricing-card', {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#pricing-section',
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Force recalculation of scroll trigger points 1s after initial mount
      // to account for dynamic canvas render dimensions or loaded unsplash images
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 1000)

    }, appContainerRef)

    // Trigger full ScrollTrigger refresh on window fully loaded to prevent offset bugs
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', handleLoad)

    // Cleanup GSAP context & listener
    return () => {
      ctx.revert()
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Fictional Trust Partners
  const clientCompanies = [
    { name: "Apex Capital", logo: "APEX CAP" },
    { name: "Horizon Wealth", logo: "HORIZON" },
    { name: "Equinox Alpha", logo: "EQX FUND" },
    { name: "Sovereign Asset", logo: "SOV QUANT" },
    { name: "Quantum Capital", logo: "QUANTUM" },
  ]

  // Fictional Features list
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Strategy Signals",
      desc: "Receive algorithmic insights that constantly parse sentiment, macro indexes, and historical patterns to output probability vectors.",
      glow: "group-hover:border-purple-500/40"
    },
    {
      icon: TrendingUp,
      title: "Predictive Asset Modeling",
      desc: "Simulate portfolio stress and forecast asset trajectory using deep neural networks backtested over 25+ years of market data.",
      glow: "group-hover:border-blue-500/40"
    },
    {
      icon: Database,
      title: "Sub-Second Ingestion Engine",
      desc: "Our high-throughput data architecture ingests millions of global trade, order book, and social signals in real-time.",
      glow: "group-hover:border-cyan-500/40"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Compliance",
      desc: "Encrypted, audit-ready reports keeping your fund in absolute alignment with SEC, ESMA, and global regulatory standards.",
      glow: "group-hover:border-indigo-500/40"
    },
    {
      icon: Layers,
      title: "Dynamic Asset Allocation",
      desc: "Rebalance assets based on live volatility markers, maximizing Sharpe ratios while mitigating systemic tail risk automatically.",
      glow: "group-hover:border-fuchsia-500/40"
    },
    {
      icon: Globe2,
      title: "Macro Risk Isolation",
      desc: "Identify geographical and political risk factors early, isolating your core portfolio from local inflation shocks.",
      glow: "group-hover:border-emerald-500/40"
    }
  ]

  // Fictional Testimonials
  const testimonials = [
    {
      quote: "Nexora's predictive vectors completely modernized our risk team. We managed to dodge the Q1 sector drawdowns entirely because the neural signal warned us 72 hours prior.",
      author: "Marcus Vance",
      role: "Managing Director, Vance & Capital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "The interface is absolute art, but the real power is sub-second data synthesis. Nexora integrates standard quant layers with cognitive AI that reads between regular numbers.",
      author: "Elena Rostova",
      role: "Chief Investment Officer, Zenith Capital",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "As an early-stage investor, I see dozens of pitch decks. Nexora's live predictive interface is the first dashboard that gave me confidence in real-time automated hedging.",
      author: "David Chen",
      role: "General Partner, BlueCore Ventures",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ]

  // Fictional Pricing
  const pricingPlans = [
    {
      name: "Core Alpha",
      price: "$2,400",
      period: "per seat / year",
      desc: "Essential predictive modeling and real-time data streams optimized for independent asset managers.",
      features: [
        "Real-time asset tracking streams",
        "Basic AI Strategy Signals (10 daily)",
        "Standard backtesting suite (10yr)",
        "Daily risk advisory email digest",
        "Standard API Integration limits"
      ],
      popular: false,
      btnClass: "bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-white"
    },
    {
      name: "Quantum Vector",
      price: "$6,500",
      period: "per seat / year",
      desc: "Our flagship cognitive model offering deep automated rebalancing, real-time stress testing, and premium APIs.",
      features: [
        "Sub-second tick ingestion engine",
        "Unlimited AI Strategy Signals",
        "Advanced neural forecast modeling",
        "Dynamic automated rebalancing",
        "Custom compliance & audit reporting",
        "Priority 24/7 dedicated support"
      ],
      popular: true,
      btnClass: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25 border-none"
    },
    {
      name: "Enterprise Core",
      price: "Custom",
      period: "tailored pricing structure",
      desc: "Full dedicated cluster model with custom data ingestion pipelines and direct quant integration options.",
      features: [
        "SLA guaranteed dedicated instance",
        "Custom local LLM training options",
        "Colocated high-frequency feed latency",
        "Unlimited team Seats & sub-wallets",
        "Quarterly quantitative analysis reviews",
        "On-premise deployment available"
      ],
      popular: false,
      btnClass: "bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-white"
    }
  ]

  return (
    <div 
      ref={appContainerRef} 
      className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden relative"
    >
      
      {/* Absolute Decorative Glow Mesh */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[700px] bg-purple-500/5 rounded-full filter blur-[180px] pointer-events-none" />

      {/* Glassmorphic Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/10">
                <Sparkles size={18} className="animate-pulse" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
                NEXORA
              </span>
              <span className="text-[9px] font-black text-blue-400 tracking-wider bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                AI FUND
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
              <a href="#features-section" className="hover:text-white transition-colors py-2">Features</a>
              <a href="#dashboard-section" className="hover:text-white transition-colors py-2">Platform</a>
              <a href="#testimonial-section" className="hover:text-white transition-colors py-2">Trust</a>
              <a href="#pricing-section" className="hover:text-white transition-colors py-2">Pricing</a>
            </nav>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#pricing-section" 
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Sign In
              </a>
              <a 
                href="#pricing-section" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-all shadow-md shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-95 flex items-center gap-1.5"
              >
                <span>Request Investor Pitch</span>
                <ChevronRight size={15} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-900 bg-slate-950/95 backdrop-blur-xl">
            <div className="px-4 py-5 space-y-3.5">
              <a 
                href="#features-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-300 hover:text-white"
              >
                Features
              </a>
              <a 
                href="#dashboard-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-300 hover:text-white"
              >
                Platform Preview
              </a>
              <a 
                href="#testimonial-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-300 hover:text-white"
              >
                Investor Reviews
              </a>
              <a 
                href="#pricing-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-300 hover:text-white"
              >
                Pricing Plans
              </a>
              <div className="pt-4 border-t border-slate-900">
                <a 
                  href="#pricing-section" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg"
                >
                  <span>Request Pitch Access</span>
                  <ChevronRight size={15} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Cinematic Hero Section */}
      <section id="home-section" className="relative pt-32 pb-24 md:pt-48 md:pb-40 flex items-center min-h-[90vh] overflow-hidden">
        
        {/* Three.js 3D Background */}
        <ThreeHero />

        {/* Shadow Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
              
              {/* Badge */}
              <div className="hero-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-bold shadow-md shadow-blue-500/5">
                <Sparkles size={14} className="text-purple-400 animate-pulse" />
                <span>Next-Gen Financial Intelligence Engine</span>
              </div>

              {/* Headline */}
              <h1 className="hero-reveal text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-none text-white max-w-4xl">
                AI-Powered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Financial Analytics
                </span> <br />
                for Enterprise Alpha.
              </h1>

              {/* Subheadline */}
              <p className="hero-reveal text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Nexora synthesizes global market datasets, sentiment streams, and macro metrics into real-time strategy models, providing investor-pitch-ready predictive accuracy.
              </p>

              {/* CTA and stats group */}
              <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4.5 w-full sm:w-auto pt-2">
                <a 
                  href="#pricing-section"
                  className="w-full sm:w-auto text-center flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:scale-95 group/btn cursor-pointer"
                >
                  <span>Request Investor Deck</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#dashboard-section"
                  className="w-full sm:w-auto text-center flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Interactive Preview</span>
                  <BarChart3 size={16} className="text-purple-400" />
                </a>
              </div>

              {/* Small Key Stats row */}
              <div className="hero-reveal grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-slate-900/80 w-full sm:w-auto">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">$4.2B+</span>
                  <span className="text-[11px] text-slate-500 font-bold tracking-widest uppercase mt-1">Assets Scanned</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">0.12s</span>
                  <span className="text-[11px] text-slate-500 font-bold tracking-widest uppercase mt-1">Tick Latency</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">22.4%</span>
                  <span className="text-[11px] text-slate-500 font-bold tracking-widest uppercase mt-1">Target Yield</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (fictional client companies) */}
      <section id="trust-bar" className="py-12 border-y border-slate-900/60 bg-slate-950/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
            Trusted by Elite Quantitative Funds & Asset Managers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {clientCompanies.map((client, idx) => (
              <div 
                key={idx} 
                className="trust-bar-item flex items-center gap-2 hover:scale-105 transition-transform duration-300 opacity-60 hover:opacity-100 cursor-default"
              >
                <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-slate-600 to-slate-400 flex items-center justify-center text-slate-950 font-black text-xs">
                  α
                </div>
                <span className="text-sm font-black font-mono tracking-widest text-slate-300">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section id="features-section" className="py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-black text-blue-500 uppercase tracking-widest block">
              Unrivaled Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
              Supercharged with Nexora AI Intelligence.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Explore how Nexora delivers an edge, combining high-velocity parsing with cognitive strategy models.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card p-6 rounded-2xl border border-slate-900/80 bg-slate-950/40 hover:bg-slate-950/80 hover:border-slate-800 transition-all duration-300 group flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/5 relative overflow-hidden"
              >
                {/* Glow Overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Icon Wrapper */}
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-blue-400 group-hover:text-purple-400 group-hover:scale-105 transition-all duration-300 shadow-md shadow-blue-500/5 mb-5">
                  <feature.icon size={20} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Hover indicator link */}
                <div className="flex items-center gap-1.5 mt-6 text-xs font-bold text-slate-500 group-hover:text-white transition-all pt-4 border-t border-slate-900/60 w-full">
                  <span>Learn more</span>
                  <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Flagship Dashboard Preview Section */}
      <section id="dashboard-section" className="py-24 sm:py-32 bg-slate-950/40 relative border-y border-slate-900/40 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black text-purple-500 uppercase tracking-widest block">
              Institutional Terminal
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
              Real-Time Portfolio Orchestration.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Synthesize risk factors, backtest model parameters, and orchestrate trade decisions from an investor-ready visual terminal.
            </p>
          </div>

          {/* Interactive Mockup Component Wrapper with scroll reveal class */}
          <div className="dashboard-reveal">
            <DashboardPreview />
          </div>

        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial-section" className="py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-black text-cyan-500 uppercase tracking-widest block">
              Quant & Partner Reviews
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
              What Pioneers Say About Nexora.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Tested and approved by fund managers and capital partners seeking mathematical edges.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="testimonial-card p-6 sm:p-8 rounded-2xl border border-slate-900 bg-slate-950/50 backdrop-blur-xl relative flex flex-col justify-between group hover:border-slate-800 transition-all duration-300"
              >
                {/* Visual quote mark */}
                <span className="absolute top-4 right-6 text-7xl font-serif text-slate-900 font-extrabold select-none pointer-events-none group-hover:text-slate-800/50 transition-colors">
                  “
                </span>

                <p className="text-sm text-slate-300 leading-relaxed relative z-10 mb-6 italic">
                  "{test.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-900">
                  <img 
                    src={test.image} 
                    alt={test.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-800"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white tracking-wide">{test.author}</span>
                    <span className="text-[11px] text-slate-500 font-semibold">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing-section" className="py-24 sm:py-32 bg-slate-950/40 relative border-t border-slate-900/60 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-black text-blue-500 uppercase tracking-widest block">
              Investment plans
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
              Transparent Seat Subscriptions.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Equip your capital management team with the quantitative edge required for sustained alpha production.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-slate-950/80 border-2 border-purple-500 shadow-xl shadow-purple-500/10'
                    : 'bg-slate-950/40 border border-slate-900/80 hover:border-slate-800'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-black uppercase px-3.5 py-1 rounded-full tracking-widest shadow">
                    MOST POPULAR MODEL
                  </span>
                )}

                {/* Plan Header */}
                <div>
                  <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 pt-6 border-t border-slate-900 w-full mb-8">
                    {plan.features.map((feat, fI) => (
                      <div key={fI} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <button
                  className={`w-full font-bold py-3 px-6 rounded-xl text-sm transition-all duration-300 cursor-pointer ${plan.btnClass}`}
                >
                  {plan.price === 'Custom' ? 'Contact Quant Team' : 'Request Seat License'}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cinematic Call to Action and Footer */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-900 z-10">
        
        {/* Background Mesh Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <span className="text-xs font-black text-purple-400 uppercase tracking-widest block animate-pulse">
              Limited Availability Pitches
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              Deploy Nexora. Secure Your Alpha Advantage.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Schedule a dedicated pitch with our founding team and quantitative architects. Experience bespoke neural models tailored for your assets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="#pricing-section"
                className="w-full sm:w-auto text-center flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25 cursor-pointer hover:-translate-y-0.5 active:scale-95"
              >
                <span>Book Founding Pitch</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href="mailto:ventures@nexora.ai"
                className="w-full sm:w-auto text-center flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Contact Founding Team</span>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Glowing Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent my-16 sm:my-20" />

          {/* Real footer details */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs sm:text-sm font-semibold">
            
            {/* Left Brand Details */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                <Sparkles size={15} />
              </div>
              <span className="text-white font-black tracking-widest text-sm">NEXORA</span>
              <span className="text-[10px] text-slate-600 border border-slate-900 bg-slate-950 px-2 py-0.5 rounded">
                © 2026 NEXORA SYSTEMS
              </span>
            </div>

            {/* Middle Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <a href="#features-section" className="hover:text-white transition-colors">Platform</a>
              <a href="#dashboard-section" className="hover:text-white transition-colors">Quantitative Model</a>
              <a href="#testimonial-section" className="hover:text-white transition-colors">Client Reviews</a>
              <a href="#pricing-section" className="hover:text-white transition-colors">Licensing Plans</a>
              <a href="#" className="hover:text-white transition-colors">Sec Safe Harbor</a>
            </div>

            {/* Right Social/Safety */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg border border-slate-900 bg-slate-950 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub Link"
              >
                <Github size={15} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg border border-slate-900 bg-slate-950 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Linkedin Link"
              >
                <Linkedin size={15} />
              </a>
            </div>

          </div>

          {/* SEC Disclaimer Notice */}
          <p className="text-slate-600 text-[10px] text-left leading-relaxed mt-12 pt-6 border-t border-slate-900/60 font-mono">
            SEC SAFE HARBOR DISCLAIMER: Nexora is a fictional AI-powered financial analytics SaaS product built solely for demonstration purposes as an investor-pitch mockup. All metrics, yields, strategies, and portfolio gains visualized on this page are backtested simulations, models, or speculative hypotheses, and do not constitute real investments, registered financial advisory services, or guarantees of yield under sovereign security acts. Past simulation performance does not guarantee actual market outcomes. Live integrations with order books are subject to execution risks and exchange latency.
          </p>

        </div>
      </section>

    </div>
  )
}
