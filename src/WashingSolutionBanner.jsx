import React from "react";

const ServiceChip = ({ label, dotColor }) => (
  <div className="flex items-center gap-1.5 text-white font-bold text-[10px] sm:text-xs bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm tracking-wide">
    <span className={`w-1.5 h-1.5 rounded-full shrink-0`} style={{ backgroundColor: dotColor }} />
    {label}
  </div>
);

export default function WashingSolutionBanner() {
  const chips = [
    { label: "All Brands", dotColor: "#ff6b6b" },
    { label: "Same Day Fix", dotColor: "#69f0ae" },
    { label: "Warranty", dotColor: "#ffeb3b" },
    { label: "24/7 Support", dotColor: "#f48fb1" },
  ];

  return (
    <div className="relative overflow-hidden w-full min-h-[500px] sm:min-h-[550px] bg-gradient-to-br from-[#0a1628] via-[#0d2b5c] to-[#0e6eb8] flex flex-col items-center justify-center font-sans">
      
      {/* --- BACKGROUND ANIMATED ELEMENTS (Performance Optimized) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Static Sparkles */}
        <span className="absolute top-20 left-1/4 text-yellow-300 animate-ping opacity-30 text-xl">✦</span>
        <span className="absolute bottom-40 right-1/3 text-yellow-200 animate-ping opacity-20 text-lg delay-300">✦</span>
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12 py-12">
        
        {/* --- LEFT CONTENT: TEXT --- */}
        <div className="text-center md:text-left flex flex-col gap-4 max-w-xl">
          <div className="flex items-center justify-center md:justify-start gap-3">
             <div className="h-0.5 w-8 bg-cyan-400" />
             <span className="text-cyan-400 font-black uppercase text-[11px] tracking-[0.3em]">
               Professional Repair Service
             </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-none">
            <span className="text-white drop-shadow-md">Washing</span>
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Solution</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-lg font-medium tracking-wide">
            Fast · Reliable · Affordable Washing Machine Repair
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 py-2">
            {chips.map((c) => (
              <ServiceChip key={c.label} {...c} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="https://wa.me/6585301773"
              className="w-full sm:w-auto bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-white font-black uppercase px-8 py-3.5 rounded-full text-sm tracking-widest shadow-lg shadow-red-500/30 hover:scale-105 transition-transform text-center"
            >
              Book a Repair
            </a>
            <div className="text-white/80 font-bold text-sm tracking-widest">
              CALL: <span className="text-cyan-400">65 8530 1773</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT CONTENT: THE MACHINE (Pure Tailwind CSS) --- */}
        <div className="relative group animate-bounce [animation-duration:5s]">
          {/* Machine Body */}
          <div className="w-52 h-60 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-[2.5rem] border-[4px] border-white/50 shadow-2xl relative overflow-hidden">
            
            {/* Top Control Panel */}
            <div className="h-10 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-end gap-1.5 px-4">
              <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]" />
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-blink" />
              <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]" />
            </div>

            {/* Drum / Door */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[6px] border-slate-400 bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-100 shadow-inner flex items-center justify-center">
              {/* Spinning Drum Effect */}
              <div className="w-full h-full rounded-full animate-spin [animation-duration:3s] opacity-20 relative">
                <div className="absolute top-0 left-1/2 w-1 h-full bg-white/40" />
                <div className="absolute left-0 top-1/2 w-full h-1 bg-white/40" />
              </div>
            </div>

            {/* Bottom Knobs */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 border-2 border-white/30 shadow-md" />
              ))}
            </div>
          </div>

          {/* Legs */}
          <div className="flex justify-between px-10">
            <div className="w-3 h-4 bg-slate-700 rounded-b-md" />
            <div className="w-3 h-4 bg-slate-700 rounded-b-md" />
          </div>

          {/* Drip Effect (Performance Optimized) */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.1s]" />
            <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-bounce [animation-delay:0.3s]" />
            <div className="w-1.5 h-3 bg-cyan-300 rounded-full animate-bounce [animation-delay:0.5s]" />
          </div>
        </div>
      </div>

      {/* Background Soap Bubbles */}
      <div className="absolute bottom-10 left-20 w-4 h-4 rounded-full border border-white/20 animate-pulse" />
      <div className="absolute top-20 right-40 w-6 h-6 rounded-full border border-white/10 animate-ping delay-500" />
    </div>
  );
}