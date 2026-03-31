import { useState } from "react";
import { Phone, CheckCircle, Droplets, Zap, Shield, Clock, Star, ChevronRight, MessageCircle } from "lucide-react";

const commonProblems = [
  { icon: "🌊", title: "Water Not Filling or Draining", description: "Blocked filters, faulty valves, or drainage issues preventing proper water flow." },
  { icon: "💡", title: "Error Code on Display", description: "Motor errors, sensor failures, or unbalanced loads — we decode and fix them all." },
  { icon: "🔄", title: "Machine Not Spinning", description: "Motor problems, belt issues, or lid switch malfunctions affecting spin cycle." },
  { icon: "🔊", title: "Excessive Noise & Vibration", description: "Unbalanced loads, worn bearings, or loose parts causing loud operation." },
  { icon: "⚡", title: "Electrical Issues", description: "Power problems, control panel failures, or wiring issues diagnosed and fixed." },
  { icon: "🚪", title: "Door / Lid Problems", description: "Faulty latches, broken hinges, or door seal issues affecting machine safety." },
  { icon: "🧼", title: "Detergent Dispenser Issues", description: "Clogged dispensers or improper soap distribution during wash cycles." },
  { icon: "💧", title: "Water Leakage", description: "Damaged hoses, worn seals, or loose connections causing water leaks." },
  { icon: "❄️", title: "Temperature Control Problems", description: "Faulty heating elements or thermostat issues affecting water temperature." },
  { icon: "⏱️", title: "Timer & Control Issues", description: "Malfunctioning timers or electronic control board problems repaired." },
  { icon: "🧽", title: "Poor Cleaning Performance", description: "Inadequate washing due to mechanical or water pressure issues." },
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
  { icon: <Clock size={22} />, title: "Same Day Service", desc: "Quick response to get your machine running fast. We come to you.", accent: "#FFD700" },
  { icon: <Shield size={22} />, title: "No Hidden Fees", desc: "All costs approved before work begins. Zero surprises, guaranteed.", accent: "#FFFFFF" },
  { icon: <Star size={22} />, title: "Expert Technicians", desc: "Certified pros with hands-on experience across all major brands.", accent: "#FFD700" },
];

export default function WashingSolution() {
  const [hoveredProblem, setHoveredProblem] = useState(null);

  const handleCall = () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", { send_to: "AW-17526097727/fFJECJmJ_JYbELOfsKhB", value: 1.0, currency: "SGD" });
    }
  };

  const whatsappLink = "https://wa.me/6585301773";

  return (
    <div style={{ fontFamily: "'Ubuntu', sans-serif" }} className="bg-red-600 min-h-screen text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.7); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-22px) scale(1.03); }
        }
        @keyframes shimmer-text {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .anim-fadeup-1 { animation: fadeUp 0.7s 0.0s ease both; }
        .anim-fadeup-2 { animation: fadeUp 0.7s 0.12s ease both; }
        .anim-fadeup-3 { animation: fadeUp 0.7s 0.22s ease both; }
        .anim-fadeup-4 { animation: fadeUp 0.7s 0.32s ease both; }
        .anim-fadeup-5 { animation: fadeUp 0.7s 0.42s ease both; }

        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
        .float-blob { animation: float-slow 8s ease-in-out infinite; }
        .float-blob-2 { animation: float-slow 11s ease-in-out infinite reverse; }
        .spin-ring { animation: spin-slow 18s linear infinite; }

        .shimmer-gold {
          background: linear-gradient(90deg, #FFD700, #FFF8DC, #FFD700);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-text 3s linear infinite;
        }

        .card-white {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          transition: transform 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .card-white:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .card-dark {
          background: rgba(0,0,0,0.18);
          border: 1px solid rgba(255,255,255,0.12);
          transition: transform 0.22s, background 0.22s, border-color 0.22s;
        }
        .card-dark:hover {
          background: rgba(0,0,0,0.28);
          border-color: rgba(255,215,0,0.5);
          transform: translateY(-3px);
        }

        .btn-white {
          background: #ffffff;
          color: #CC0000;
          font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
        }
        .btn-white:hover {
          background: #FFF8DC;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .btn-outline-white {
          background: rgba(255,255,255,0.1);
          color: #ffffff;
          border: 2px solid rgba(255,255,255,0.4);
          font-weight: 500;
          transition: background 0.2s, transform 0.2s, border-color 0.2s;
        }
        .btn-outline-white:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
        }

        .feature-row {
          background: rgba(0,0,0,0.15);
          border: 1px solid rgba(255,255,255,0.1);
          transition: background 0.2s, border-color 0.2s;
        }
        .feature-row:hover {
          background: rgba(0,0,0,0.25);
          border-color: rgba(255,215,0,0.4);
        }

        .stat-pill {
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          transition: background 0.2s, transform 0.2s;
        }
        .stat-pill:hover {
          background: rgba(0,0,0,0.3);
          transform: scale(1.03);
        }

        .divider-gold {
          width: 40px; height: 3px;
          background: linear-gradient(90deg, #FFD700, #FFF8DC);
          border-radius: 2px;
        }
      `}</style>

      {/* ── BACKGROUND DECORATIONS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="float-blob absolute rounded-full" style={{ width: 560, height: 560, background: "radial-gradient(circle, rgba(204,0,0,0.6) 0%, transparent 65%)", top: -160, right: -120 }} />
        <div className="float-blob-2 absolute rounded-full" style={{ width: 420, height: 420, background: "radial-gradient(circle, rgba(180,0,0,0.5) 0%, transparent 65%)", bottom: "5%", left: -100 }} />
        <div className="spin-ring absolute rounded-full" style={{ width: 300, height: 300, border: "1px solid rgba(255,255,255,0.06)", top: "30%", right: "8%" }} />
        <div className="spin-ring absolute rounded-full" style={{ width: 180, height: 180, border: "1px solid rgba(255,215,0,0.08)", top: "32%", right: "11%", animationDirection: "reverse", animationDuration: "12s" }} />
      </div>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3" style={{ background: "rgba(180,0,0,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl font-bold shrink-0" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
            🫧
          </div>
          <span className="font-bold text-base sm:text-lg leading-tight">
            WashingSolution <span style={{ color: "#FFD700" }}>SG</span>
          </span>
        </div>
        <a href="tel:+6585301773" onClick={handleCall} className="btn-white flex items-center gap-2 px-3 sm:px-5 py-2 rounded-lg text-sm sm:text-base">
          <Phone size={15} />
          <span className="hidden sm:inline">+65 8530 1773</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </nav>

      <div className="relative" style={{ zIndex: 1 }}>

        {/* ── HERO ── */}
        <div className="anim-fadeup-1 text-center px-4 sm:px-6 pt-16 sm:pt-20 pb-12 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}>
            <span className="pulse-dot w-2 h-2 rounded-full shrink-0" style={{ background: "#FFD700" }} />
            Singapore's Trusted Repair Service
          </div>

          <h1 className="font-bold leading-tight tracking-tight mb-5" style={{ fontSize: "clamp(34px, 6.5vw, 76px)", letterSpacing: "-1px" }}>
            Washing Machine<br />
            <span className="shimmer-gold">Repair Experts</span>
          </h1>

          <p className="mb-10 mx-auto font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px,2.5vw,18px)", maxWidth: 500 }}>
            Professional, affordable and reliable washing machine repair across all Singapore districts — same day service available.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="tel:+6585301773" onClick={handleCall} className="btn-white flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl text-base">
              <Phone size={18} /> Call: +65 8530 1773
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleCall} className="btn-outline-white flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl text-base">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="anim-fadeup-2 px-4 sm:px-6 pb-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "1,000+", label: "Happy Customers", icon: "😊" },
              { num: "Same Day", label: "Service Available", icon: "⚡" },
              { num: "7 Days", label: "A Week", icon: "📅" },
            ].map(({ num, label, icon }) => (
              <div key={label} className="stat-pill rounded-2xl px-6 py-6 flex flex-col items-center text-center gap-1">
                <span className="text-3xl mb-1">{icon}</span>
                <div className="font-bold" style={{ fontSize: "clamp(24px,4vw,36px)", color: "#FFD700", letterSpacing: "-0.5px" }}>{num}</div>
                <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BENEFITS ── */}
        <div className="anim-fadeup-2 px-4 sm:px-6 py-12 max-w-5xl mx-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#FFD700" }}>Why Choose Us</p>
          <div className="divider-gold mb-5" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(24px,4vw,42px)", letterSpacing: "-0.5px" }}>
              Built Around <span style={{ color: "#FFD700" }}>You</span>
            </h2>
            <p className="text-sm leading-relaxed sm:max-w-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              Every repair comes with our promise of transparency, speed, and expert workmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="card-white rounded-2xl p-6" style={{ borderTop: `3px solid ${b.accent}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,0,0,0.2)", color: b.accent }}>
                  {b.icon}
                </div>
                <h3 className="font-bold text-base mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PRICING ── */}
        <div className="anim-fadeup-3 px-4 sm:px-6 py-12 max-w-5xl mx-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#FFD700" }}>Pricing</p>
          <div className="divider-gold mb-5" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(24px,4vw,42px)", letterSpacing: "-0.5px" }}>
              Affordable & <span style={{ color: "#FFD700" }}>Transparent</span>
            </h2>
            <p className="text-sm leading-relaxed sm:max-w-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              Most repairs done without breaking the bank. Free diagnosis, no obligation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Price card */}
            <div className="rounded-2xl p-7" style={{ background: "rgba(0,0,0,0.25)", border: "1.5px solid rgba(255,215,0,0.3)" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>Most Common Repairs</p>
              <div className="font-bold leading-none mb-2" style={{ fontSize: "clamp(42px,7vw,64px)", letterSpacing: "-2px" }}>
                $65<span style={{ color: "#FFD700" }}>–</span>$160
              </div>
              <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.65)" }}>Per Repair Service</p>
              <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>*Depends on issue complexity & machine condition</p>
              <div className="rounded-xl p-4" style={{ background: "rgba(255,215,0,0.12)", border: "1px solid rgba(255,215,0,0.25)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "#FFD700" }}>
                  <strong>100% Transparent:</strong> All costs discussed before any work begins. No surprises!
                </p>
              </div>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-1 gap-2.5 content-start">
              {pricingFeatures.map((f) => (
                <div key={f} className="feature-row flex items-center gap-3 px-4 py-3 rounded-xl">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: "#FFD700", color: "#CC0000" }}>✓</div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROBLEMS ── */}
        <div className="anim-fadeup-4 px-4 sm:px-6 py-12 max-w-5xl mx-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#FFD700" }}>Our Expertise</p>
          <div className="divider-gold mb-5" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(24px,4vw,42px)", letterSpacing: "-0.5px" }}>
              Problems We <span style={{ color: "#FFD700" }}>Fix</span>
            </h2>
            <p className="text-sm leading-relaxed sm:max-w-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              From minor glitches to major breakdowns — our technicians handle it all.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonProblems.map((p, i) => (
              <div
                key={i}
                className="card-dark flex gap-3 items-start p-4 rounded-xl cursor-default"
                onMouseEnter={() => setHoveredProblem(i)}
                onMouseLeave={() => setHoveredProblem(null)}
              >
                <span className="text-2xl shrink-0 mt-0.5">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1.5">{p.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="anim-fadeup-5 px-4 sm:px-6 pb-16 max-w-5xl mx-auto">
          <div className="rounded-2xl text-center relative overflow-hidden p-10 sm:p-14" style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.15)" }}>
            {/* decorative circles */}
            <div className="absolute pointer-events-none rounded-full" style={{ width: 220, height: 220, background: "radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)", top: -70, right: -50 }} />
            <div className="absolute pointer-events-none rounded-full" style={{ width: 180, height: 180, background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)", bottom: -50, left: -40 }} />
            <div className="relative">
              <div className="text-5xl mb-4">🛠️</div>
              <h2 className="font-bold mb-3" style={{ fontSize: "clamp(20px,4vw,38px)", letterSpacing: "-0.5px" }}>
                Don't See Your Problem? <span style={{ color: "#FFD700" }}>We Fix It.</span>
              </h2>
              <p className="text-sm leading-relaxed mx-auto mb-9" style={{ color: "rgba(255,255,255,0.65)", maxWidth: 420 }}>
                Our experienced technicians can diagnose and fix any washing machine issue!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a href="tel:+6585301773" onClick={handleCall} className="btn-white flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl text-base">
                  <Phone size={18} /> Call: +65 8530 1773
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleCall} className="btn-outline-white flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl text-base">
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="text-center px-4 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="font-bold text-base mb-1">
            WashingSolution <span style={{ color: "#FFD700" }}>SG</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Professional washing machine repair · All Singapore districts · 7 days a week
          </p>
        </div>

      </div>
    </div>
  );
}