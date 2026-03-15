import React from 'react';
import { Phone } from 'lucide-react';

const WashingMachineService = () => {
  const commonProblems = [
    { icon: '🌊', title: 'Water Not Filling or Draining', description: 'Blocked filters, faulty valves, or drainage issues preventing proper water flow.' },
    { icon: '💡', title: 'Error Code on Display', description: 'Motor errors, sensor failures, or unbalanced loads — we decode and fix them all.' },
    { icon: '🔄', title: 'Machine Not Spinning', description: 'Motor problems, belt issues, or lid switch malfunctions affecting spin cycle.' },
    { icon: '🔊', title: 'Excessive Noise & Vibration', description: 'Unbalanced loads, worn bearings, or loose parts causing loud operation.' },
    { icon: '⚡', title: 'Electrical Issues', description: 'Power problems, control panel failures, or wiring issues diagnosed and fixed.' },
    { icon: '🚪', title: 'Door / Lid Problems', description: 'Faulty latches, broken hinges, or door seal issues affecting machine safety.' },
    { icon: '🧼', title: 'Detergent Dispenser Issues', description: 'Clogged dispensers or improper soap distribution during wash cycles.' },
    { icon: '💧', title: 'Water Leakage', description: 'Damaged hoses, worn seals, or loose connections causing water leaks.' },
    { icon: '❄️', title: 'Temperature Control Problems', description: 'Faulty heating elements or thermostat issues affecting water temperature.' },
    { icon: '⏱️', title: 'Timer & Control Issues', description: 'Malfunctioning timers or electronic control board problems repaired.' },
    { icon: '🧽', title: 'Poor Cleaning Performance', description: 'Inadequate washing due to mechanical or water pressure issues.' },
  ];

  const pricingFeatures = [
    'Transparent pricing before work',
    'No hidden fees or surprise charges',
    'Free diagnostic assessment',
    'Parts replacement included',
    'Service warranty included',
    'Same-day service available',
  ];

  const benefits = [
    { icon: '⚡', title: 'Same Day Service', desc: 'Quick response to get your machine back running. We come to you at your convenience.', accent: 'rgba(0,212,255,0.6)', iconBg: 'rgba(0,212,255,0.1)' },
    { icon: '🔍', title: 'No Hidden Fees', desc: 'All costs are discussed and approved before any work begins. Zero surprises, guaranteed.', accent: 'rgba(255,107,43,0.6)', iconBg: 'rgba(255,107,43,0.1)' },
    { icon: '🏅', title: 'Expert Technicians', desc: 'Certified professionals with years of hands-on experience across all major brands.', accent: 'rgba(168,85,247,0.6)', iconBg: 'rgba(168,85,247,0.1)' },
  ];

  const handleCall = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', { send_to: 'AW-17526097727/fFJECJmJ_JYbELOfsKhB', value: 1.0, currency: 'SGD' });
    }
  };

  const whatsappLink = 'https://wa.me/6585301773';

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: '#0a0a0f', minHeight: '100vh', color: '#f0f0f8', overflowX: 'hidden', position: 'relative' }}>

      {/* Animated BG Orbs */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes floatOrb { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-40px) scale(1.05)} 66%{transform:translate(-20px,30px) scale(0.95)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
        .ws-orb { position:fixed; border-radius:50%; filter:blur(80px); opacity:0.18; animation:floatOrb 12s ease-in-out infinite; pointer-events:none; z-index:0; }
        .ws-fadeup { animation: fadeUp 0.8s ease both; }
        .ws-fadeup-1 { animation: fadeUp 0.8s 0.1s ease both; }
        .ws-fadeup-2 { animation: fadeUp 0.8s 0.2s ease both; }
        .ws-fadeup-3 { animation: fadeUp 0.8s 0.3s ease both; }
        .ws-fadeup-4 { animation: fadeUp 0.8s 0.4s ease both; }
        .ws-fadeup-5 { animation: fadeUp 0.8s 0.5s ease both; }
        .ws-pulsedot { animation: pulse 1.5s ease infinite; }
        .benefit-hover:hover { transform:translateY(-4px); border-color:rgba(255,107,43,0.4)!important; box-shadow:0 20px 40px rgba(0,0,0,0.3)!important; }
        .problem-hover:hover { background:rgba(255,255,255,0.07)!important; border-color:rgba(168,85,247,0.35)!important; transform:translateY(-2px); box-shadow:0 12px 30px rgba(0,0,0,0.25)!important; }
        .feature-hover:hover { background:rgba(0,212,255,0.06)!important; border-color:rgba(0,212,255,0.2)!important; }
        .btn-primary-ws:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(255,107,43,0.5)!important; }
        .btn-secondary-ws:hover { background:rgba(255,255,255,0.12)!important; border-color:rgba(255,255,255,0.3)!important; }
        .stat-hover:hover { background:rgba(255,255,255,0.08)!important; }
      `}</style>

      <div className="ws-orb" style={{ width: 500, height: 500, background: '#ff6b2b', top: -100, left: -100, animationDelay: '0s' }} />
      <div className="ws-orb" style={{ width: 400, height: 400, background: '#00d4ff', top: '30%', right: -80, animationDelay: '-4s' }} />
      <div className="ws-orb" style={{ width: 350, height: 350, background: '#a855f7', bottom: '10%', left: '20%', animationDelay: '-8s' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 20px 60px' }}>

        {/* ── HERO ── */}
        <div className="ws-fadeup" style={{ textAlign: 'center', padding: '70px 20px 50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,107,43,0.15)', border: '1px solid rgba(255,107,43,0.4)', color: '#ff8c57', padding: '6px 18px', borderRadius: 100, fontSize: 12, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 24 }}>
            <span className="ws-pulsedot" style={{ width: 6, height: 6, background: '#ff6b2b', borderRadius: '50%', display: 'inline-block' }} />
            Singapore's Trusted Repair Service
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 20, letterSpacing: -1 }}>
            <span style={{ color: '#f0f0f8', display: 'block' }}>Washing Machine</span>
            <span style={{ display: 'block', background: 'linear-gradient(90deg, #ff6b2b, #ff9a5c, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Repair Experts</span>
          </h1>

          <p style={{ color: '#8888a8', fontSize: 17, maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Professional, affordable and reliable washing machine repair across all Singapore districts — same day service available.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+6585301773" onClick={handleCall} className="btn-primary-ws"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, #ff6b2b, #ff4500)', color: 'white', padding: '14px 30px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 30px rgba(255,107,43,0.35)', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              <Phone size={18} /> Call: +65 8530 1773
            </a>
            <a href={whatsappLink} onClick={handleCall} target="_blank" rel="noopener noreferrer" className="btn-secondary-ws"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#f0f0f8', padding: '14px 30px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'background 0.2s, border 0.2s' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="ws-fadeup-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, margin: '50px 0', borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
          {[['1000+', 'Happy Customers'], ['Same Day', 'Service Available'], ['7 Days', 'A Week']].map(([num, label]) => (
            <div key={label} className="stat-hover" style={{ background: 'rgba(255,255,255,0.04)', padding: '28px 20px', textAlign: 'center', backdropFilter: 'blur(10px)', transition: 'background 0.2s' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 36, fontWeight: 800, background: 'linear-gradient(90deg,#ff6b2b,#00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{num}</div>
              <div style={{ color: '#6666a0', fontSize: 13, marginTop: 4, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* ── BENEFITS ── */}
        <div className="ws-fadeup-2" style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#ff6b2b', marginBottom: 12 }}>Why Choose Us</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, marginBottom: 8 }}>Built Around You</div>
          <p style={{ color: '#6666a0', fontSize: 15, marginBottom: 36, lineHeight: 1.6 }}>Every repair comes with our promise of transparency, speed, and expert workmanship.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 16 }}>
            {benefits.map((b) => (
              <div key={b.title} className="benefit-hover" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden', transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s', borderTop: `2px solid ${b.accent}` }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 16, background: b.iconBg }}>{b.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: '#f0f0f8' }}>{b.title}</h3>
                <p style={{ color: '#6666a0', fontSize: 14, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PRICING ── */}
        <div className="ws-fadeup-3" style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#ff6b2b', marginBottom: 12 }}>Pricing</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, marginBottom: 8 }}>Affordable & Transparent</div>
          <p style={{ color: '#6666a0', fontSize: 15, marginBottom: 36, lineHeight: 1.6 }}>Most repairs done without breaking the bank. Free diagnosis, no obligation.</p>

          <div style={{ background: 'linear-gradient(135deg,rgba(255,107,43,0.15),rgba(0,212,255,0.1))', border: '1px solid rgba(255,107,43,0.25)', borderRadius: 20, padding: 40, textAlign: 'center', marginBottom: 24 }}>
            <div style={{ color: '#8888a8', fontSize: 14, marginBottom: 8, fontWeight: 500 }}>Most Common Repairs</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(48px,8vw,80px)', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(90deg,#ff6b2b,#ff9a5c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$65 – $160</div>
            <div style={{ color: '#8888a8', fontSize: 16, marginTop: 8 }}>Per Repair Service</div>
            <div style={{ fontSize: 12, color: '#555580', marginTop: 6 }}>*Exact pricing depends on issue complexity and machine condition</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, marginBottom: 20 }}>
            {pricingFeatures.map((f) => (
              <div key={f} className="feature-hover" style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '14px 16px', transition: 'background 0.2s' }}>
                <div style={{ width: 22, height: 22, background: 'rgba(0,212,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#00d4ff', fontSize: 12 }}>✓</div>
                <span style={{ fontSize: 14, color: '#c0c0d8', fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,200,0,0.08)', border: '1px solid rgba(255,200,0,0.2)', borderRadius: 12, padding: '16px 20px', textAlign: 'center' }}>
            <p style={{ color: '#ffd060', fontSize: 14 }}><strong style={{ color: '#ffea00' }}>100% Transparent:</strong> All costs discussed and approved before any work begins. No surprises, no hidden fees!</p>
          </div>
        </div>

        {/* ── PROBLEMS ── */}
        <div className="ws-fadeup-4" style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#ff6b2b', marginBottom: 12 }}>Our Expertise</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, marginBottom: 8 }}>Problems We Fix</div>
          <p style={{ color: '#6666a0', fontSize: 15, marginBottom: 36, lineHeight: 1.6 }}>From minor glitches to major breakdowns — our technicians handle it all.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
            {commonProblems.map((p, i) => (
              <div key={i} className="problem-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 22, display: 'flex', gap: 16, alignItems: 'flex-start', transition: 'all 0.25s', cursor: 'default' }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: '#e0e0f0', marginBottom: 5 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: '#5c5c80', lineHeight: 1.55 }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="ws-fadeup-5" style={{ background: 'linear-gradient(135deg,#1a0533,#0d1f3c,#0a2a1a)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 24, padding: '56px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%,rgba(168,85,247,0.15),transparent 70%)', pointerEvents: 'none' }} />
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, marginBottom: 12, position: 'relative' }}>Don't See Your Problem Listed?</h2>
          <p style={{ color: '#7070a0', fontSize: 16, marginBottom: 32, position: 'relative' }}>Our experienced technicians can diagnose and fix any washing machine issue!</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <a href="tel:+6585301773" onClick={handleCall} className="btn-primary-ws"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#ff6b2b,#ff4500)', color: 'white', padding: '14px 30px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', boxShadow: '0 8px 30px rgba(255,107,43,0.35)', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              <Phone size={18} /> Call: +65 8530 1773
            </a>
            <a href={whatsappLink} onClick={handleCall} target="_blank" rel="noopener noreferrer" className="btn-secondary-ws"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#f0f0f8', padding: '14px 30px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'background 0.2s, border 0.2s' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── BOTTOM ── */}
        <div style={{ textAlign: 'center', padding: '32px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16 }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Ready to Fix Your Washing Machine?</h3>
          <p style={{ color: '#5c5c80', fontSize: 14 }}>Professional service at unbeatable prices across Singapore</p>
          <p style={{ color: '#4444a0', fontSize: 13, marginTop: 6 }}>Service areas: All Singapore districts • Available 7 days a week</p>
        </div>

      </div>
    </div>
  );
};

export default WashingMachineService;