import React from "react";
import { Phone, Shield, Clock, Star, MessageCircle, CheckCircle2 } from "lucide-react";

const commonProblems = [
  { icon: "🌊", title: "Water Not Filling/Draining", description: "Blocked filters or faulty valves." },
  { icon: "💡", title: "Error Code on Display", description: "Motor errors or sensor failures." },
  { icon: "🔄", title: "Machine Not Spinning", description: "Belt issues or motor problems." },
  { icon: "🔊", title: "Excessive Noise", description: "Worn bearings or loose parts." },
  { icon: "⚡", title: "Electrical Issues", description: "Control panel or wiring failures." },
  { icon: "🚪", title: "Door / Lid Problems", description: "Faulty latches or broken hinges." },
  { icon: "🧼", title: "Detergent Issues", description: "Clogged dispensers." },
  { icon: "💧", title: "Water Leakage", description: "Damaged hoses or worn seals." },
  { icon: "❄️", title: "Temperature Issues", description: "Faulty heating elements." },
];

const pricingFeatures = [
  "Transparent pricing before work",
  "No hidden fees or surprise charges",
  "Free diagnostic assessment",
  "Parts replacement included",
  "Service warranty included",
  "Same-day service available",
];

const benefits = [
  { icon: <Clock size={22} />, title: "Same Day Service", desc: "Quick response across SG.", accent: "border-[#FFD700]" },
  { icon: <Shield size={22} />, title: "No Hidden Fees", desc: "Zero surprises, guaranteed.", accent: "border-white" },
  { icon: <Star size={22} />, title: "Expert Techs", desc: "Certified pros for all brands.", accent: "border-[#FFD700]" },
];

export default function WashingMachineService() {
  const handleCall = () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", { send_to: "AW-17526097727/fFJECJmJ_JYbELOfsKhB", value: 1.0, currency: "SGD" });
    }
  };

  const whatsappLink = "https://wa.me/6585301773";

  return (
    <div className="bg-[#cc0000] min-h-screen text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* --- BACKGROUND DECOR (Static for Performance) --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-red-800 rounded-full blur-3xl" />
      </div>

      {/* --- NAV --- */}
      <nav className="sticky top-0 z-50 bg-red-700/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-lg shadow-inner">🫧</div>
            <span className="font-bold text-lg tracking-tight">WashingSolution <span className="text-[#FFD700]">SG</span></span>
          </div>
          <a href="tel:+6585301773" onClick={handleCall} className="bg-white text-red-700 font-bold px-4 py-2 rounded-lg text-sm hover:bg-yellow-50 transition-colors flex items-center gap-2 shadow-lg">
            <Phone size={14} /> <span className="hidden sm:inline">+65 8530 1773</span><span className="sm:hidden">Call</span>
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-16 pb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-black/20 border border-white/20 text-[10px] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
            Singapore's Trusted Repair Service
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tighter leading-tight">
            Washing Machine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">Repair Experts</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 font-light">
            Professional and reliable repair service across all Singapore districts. Same day service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+6585301773" onClick={handleCall} className="w-full sm:w-auto bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2">
              <Phone size={20} /> Call Now
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        </section>

        {/* --- STATS --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12">
          {[
            { num: "1,000+", label: "Happy Customers", icon: "😊" },
            { num: "Same Day", label: "Service Speed", icon: "⚡" },
            { num: "7 Days", label: "Availability", icon: "📅" },
          ].map((stat, i) => (
            <div key={i} className="bg-black/10 border border-white/10 p-6 rounded-2xl text-center hover:bg-black/20 transition-colors">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-[#FFD700]">{stat.num}</div>
              <div className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="py-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <p className="text-[#FFD700] font-bold text-xs uppercase tracking-widest mb-2">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold">Transparent <span className="text-[#FFD700]">Rates</span></h2>
            </div>
            <p className="text-white/60 max-w-xs text-sm">Most repairs are completed within this range. No obligation diagnosis.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/20 border-2 border-[#FFD700]/30 p-8 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-xs font-bold text-white/50 mb-2 uppercase">Common Repair Cost</p>
                <div className="text-6xl font-black mb-4">$65<span className="text-[#FFD700]">-</span>160</div>
                <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 p-4 rounded-xl text-[#FFD700] text-sm">
                  <strong>Fair Price:</strong> All costs are discussed upfront. No hidden charges.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {pricingFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-black/10 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 size={18} className="text-[#FFD700]" />
                  <span className="text-sm text-white/90 font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROBLEMS GRID --- */}
        <section className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Common <span className="text-[#FFD700]">Fixes</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonProblems.map((p, i) => (
              <div key={i} className="group bg-black/10 border border-white/10 p-5 rounded-2xl hover:border-[#FFD700]/40 transition-all">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-base mb-1 group-hover:text-[#FFD700] transition-colors">{p.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-black/20 py-10 px-4 mt-12 border-t border-white/10 text-center">
        <div className="font-bold text-lg mb-2">WashingSolution <span className="text-[#FFD700]">SG</span></div>
        <p className="text-white/40 text-xs max-w-md mx-auto leading-loose">
          Singapore's #1 Washing Machine Repair Service. <br /> Available 7 days a week including public holidays.
        </p>
      </footer>
    </div>
  );
}