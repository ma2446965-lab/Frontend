import React, { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Sparkles, 
  DollarSign, 
  Percent, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Shield, 
  Cpu, 
  Layers, 
  Compass, 
  CheckCircle,
  Play,
  RotateCw
} from 'lucide-react'

export default function DashboardPreview() {
  const [portfolioType, setPortfolioType] = useState('aggressive')
  const [currency, setCurrency] = useState('USD')
  const [isSimulating, setIsSubmitting] = useState(true)
  const [liveNav, setLiveNav] = useState(148290450)

  // Live NAV simulator
  useEffect(() => {
    if (!isSimulating) return
    const interval = setInterval(() => {
      setLiveNav(prev => prev + (Math.random() > 0.45 ? 1 : -1) * Math.floor(Math.random() * 450))
    }, 3000)
    return () => clearInterval(interval)
  }, [isSimulating])

  // Chart data based on portfolio selection
  const chartData = {
    aggressive: {
      path: "M 0 160 Q 50 110, 100 130 T 200 60 T 300 90 T 400 20 T 500 40 T 600 5",
      points: [
        { x: 0, y: 160, val: "$124.5M" },
        { x: 100, y: 130, val: "$128.1M" },
        { x: 200, y: 60, val: "$139.4M" },
        { x: 300, y: 90, val: "$134.8M" },
        { x: 400, y: 20, val: "$146.2M" },
        { x: 500, y: 40, val: "$143.9M" },
        { x: 600, y: 5, val: "$152.0M" }
      ],
      alphaScore: 98.4,
      yield: "22.4%",
      mcap: "$1.4B",
      status: "OPTIMAL",
      transactions: [
        { asset: 'BTC', action: 'BUY', amount: '2.54 BTC', price: '$64,231', time: '1 min ago', status: 'completed' },
        { asset: 'ETH', action: 'SELL', amount: '18.40 ETH', price: '$3,420', time: '5 mins ago', status: 'completed' },
        { asset: 'SOL', action: 'BUY', amount: '142.5 SOL', price: '$148.5', time: '12 mins ago', status: 'completed' },
      ]
    },
    moderate: {
      path: "M 0 150 Q 50 130, 100 110 T 200 95 T 300 85 T 400 60 T 500 50 T 600 35",
      points: [
        { x: 0, y: 150, val: "$124.5M" },
        { x: 100, y: 110, val: "$126.9M" },
        { x: 200, y: 95, val: "$129.2M" },
        { x: 300, y: 85, val: "$131.0M" },
        { x: 400, y: 60, val: "$135.5M" },
        { x: 500, y: 50, val: "$137.2M" },
        { x: 600, y: 35, val: "$140.8M" }
      ],
      alphaScore: 89.1,
      yield: "14.8%",
      mcap: "$2.1B",
      status: "STABLE",
      transactions: [
        { asset: 'USDC', action: 'MINT', amount: '10,000 USDC', price: '$1.00', time: '4 mins ago', status: 'completed' },
        { asset: 'LINK', action: 'BUY', amount: '250.0 LINK', price: '$15.2', time: '18 mins ago', status: 'completed' },
        { asset: 'BTC', action: 'BUY', amount: '0.45 BTC', price: '$64,195', time: '1 hr ago', status: 'completed' },
      ]
    },
    conservative: {
      path: "M 0 140 Q 50 135, 100 125 T 200 120 T 300 110 T 400 100 T 500 95 T 600 90",
      points: [
        { x: 0, y: 140, val: "$124.5M" },
        { x: 100, y: 125, val: "$125.8M" },
        { x: 200, y: 120, val: "$126.4M" },
        { x: 300, y: 110, val: "$127.9M" },
        { x: 400, y: 100, val: "$129.1M" },
        { x: 500, y: 95, val: "$130.0M" },
        { x: 600, y: 90, val: "$131.2M" }
      ],
      alphaScore: 78.5,
      yield: "8.1%",
      mcap: "$3.5B",
      status: "SECURE",
      transactions: [
        { asset: 'USDT', action: 'STAKE', amount: '25,000 USDT', price: '$1.00', time: '10 mins ago', status: 'completed' },
        { asset: 'BTC', action: 'BUY', amount: '0.12 BTC', price: '$64,150', time: '2 hrs ago', status: 'completed' },
        { asset: 'ETH', action: 'BUY', amount: '1.20 ETH', price: '$3,415', time: '3 hrs ago', status: 'completed' },
      ]
    }
  }

  const currentData = chartData[portfolioType]

  return (
    <div className="w-full relative rounded-3xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-xl shadow-2xl shadow-blue-500/5 overflow-hidden group">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none group-hover:bg-blue-500/15 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Dashboard Top Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-b border-slate-800/60 bg-slate-950/40">
        
        {/* Left Status */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow shadow-emerald-500/50" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nexora AI Engine</span>
              <Sparkles size={12} className="text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <span className="text-sm font-bold text-white tracking-wide">Live Alpha Feed</span>
          </div>
        </div>

        {/* Center Toggle: Portfolio Model */}
        <div className="flex items-center bg-slate-900/60 p-1 rounded-xl border border-slate-800/80 text-xs font-bold">
          {[
            { id: 'aggressive', name: 'Aggressive' },
            { id: 'moderate', name: 'Moderate' },
            { id: 'conservative', name: 'Conservative' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setPortfolioType(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                portfolioType === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Right Toggle: Currency */}
        <div className="flex items-center gap-2 text-xs font-semibold">
          <button 
            onClick={() => setCurrency(prev => prev === 'USD' ? 'BTC' : 'USD')}
            className="p-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-white flex items-center gap-1 transition-all"
          >
            <RotateCw size={12} />
            <span>{currency}</span>
          </button>
          <span className="text-[10px] text-emerald-400 font-bold font-mono tracking-widest bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
            ONLINE
          </span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Key metrics (Col-4) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Live NAV Card */}
          <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 flex flex-col relative overflow-hidden group/card hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full filter blur-xl" />
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold tracking-widest uppercase">Net Asset Value (NAV)</span>
              <DollarSign size={15} className="text-blue-400" />
            </div>
            <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
              {currency === 'USD' 
                ? `$${(liveNav / 1000000).toFixed(6)}M` 
                : `${(liveNav / 6423100).toFixed(4)} BTC`
              }
            </span>
            <div className="flex items-center gap-1 mt-2 text-emerald-400 text-xs font-bold">
              <ArrowUpRight size={14} />
              <span>+18.42% (30d)</span>
            </div>
          </div>

          {/* AI Alpha Score Card */}
          <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 flex flex-col relative overflow-hidden group/card hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full filter blur-xl" />
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold tracking-widest uppercase">AI Alpha Score</span>
              <Cpu size={15} className="text-purple-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                {currentData.alphaScore}
              </span>
              <span className="text-slate-500 text-xs font-bold">/ 100</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] font-extrabold tracking-widest bg-purple-500/15 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
                {currentData.status}
              </span>
              <span className="text-[11px] text-slate-500 font-bold">Risk Adj. Ratio: 3.42</span>
            </div>
          </div>

          {/* Projected Yield Card */}
          <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 flex flex-col relative overflow-hidden group/card hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full filter blur-xl" />
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold tracking-widest uppercase">Projected Annual Yield</span>
              <Percent size={15} className="text-cyan-400" />
            </div>
            <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
              {currentData.yield}
            </span>
            <div className="flex items-center gap-1.5 mt-2 text-slate-400 text-xs">
              <Activity size={12} className="text-cyan-400" />
              <span>Backtested historical confidence</span>
            </div>
          </div>

        </div>

        {/* Center & Right Column: Interactive Chart + Execution Logs (Col-8) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Glowing SVG Chart Card */}
          <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 flex flex-col relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Predictive Trend Modeling</span>
                <span className="text-sm font-bold text-white">Backtested Portfolio Vector</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow shadow-blue-500/50" />
                <span className="text-xs text-slate-300 font-bold">Model Path</span>
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow shadow-purple-500/50 ml-2" />
                <span className="text-xs text-slate-300 font-bold">Confidence Band</span>
              </div>
            </div>

            {/* Glowing Chart Visual */}
            <div className="h-44 sm:h-56 w-full bg-slate-950/80 rounded-xl relative border border-slate-900 overflow-hidden flex items-end">
              <svg className="w-full h-full absolute inset-0 p-4" viewBox="0 0 600 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Confidence Interval Shadow Band */}
                <path 
                  d={`${currentData.path} L 600 200 L 0 200 Z`} 
                  fill="url(#chartGlow)"
                  className="transition-all duration-700 ease-in-out"
                />

                {/* Main line path */}
                <path 
                  d={currentData.path}
                  fill="none" 
                  stroke="url(#lineGrad)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-in-out drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                />

                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                {/* Grid guidelines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="#1e293b" strokeOpacity="0.2" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="600" y2="100" stroke="#1e293b" strokeOpacity="0.2" strokeDasharray="4 4" />
                <line x1="0" y1="160" x2="600" y2="160" stroke="#1e293b" strokeOpacity="0.2" strokeDasharray="4 4" />
              </svg>

              {/* Dynamic point tags on chart */}
              <div className="absolute inset-0 p-4 pointer-events-none">
                <div className="absolute top-[35px] left-[35%] bg-slate-900 border border-purple-500/50 text-[10px] font-bold text-white px-2 py-0.5 rounded shadow">
                  Peak Forecast: +12%
                </div>
                <div className="absolute bottom-[20px] left-[10%] bg-slate-900 border border-blue-500/50 text-[10px] font-bold text-white px-2 py-0.5 rounded shadow">
                  Launch Baseline
                </div>
                <div className="absolute bottom-[50px] right-[5%] bg-slate-900 border border-cyan-500/50 text-[10px] font-bold text-white px-2 py-0.5 rounded shadow">
                  Current Target
                </div>
              </div>
            </div>
          </div>

          {/* AI Execution logs */}
          <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3.5">AI Algorithmic Execution Logs</span>
            
            <div className="flex flex-col gap-3 font-mono text-xs">
              {currentData.transactions.map((tx, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-800/40 hover:border-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-12 text-center text-[10px] font-black px-2 py-0.5 rounded border ${
                      tx.action === 'BUY' 
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' 
                        : tx.action === 'SELL'
                        ? 'bg-rose-500/15 text-rose-300 border-rose-500/20'
                        : 'bg-blue-500/15 text-blue-300 border-blue-500/20'
                    }`}>
                      {tx.action}
                    </span>
                    <span className="font-bold text-white">{tx.asset}</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-300">{tx.amount}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400">{tx.price}</span>
                    <span className="text-slate-600 text-[11px]">{tx.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
