import { useEffect, useState } from "react";

// Inject keyframe animations into <head> once
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Nunito:wght@400;700;900&display=swap');

  @keyframes float {
    0%, 100% { transform: translateY(0px) scale(1); }
    50%       { transform: translateY(-15px) scale(1.05); }
  }
  @keyframes floatUp {
    0%   { transform: translateY(0) scale(1); opacity: 0.8; }
    100% { transform: translateY(-120px) scale(0.5); opacity: 0; }
  }
  @keyframes wiggle {
    0%, 100% { transform: translateY(-50%) rotate(-1deg); }
    50%       { transform: translateY(-52%) rotate(1deg); }
  }
  @keyframes wiggleMobile {
    0%, 100% { transform: rotate(-1deg); }
    50%       { transform: rotate(1deg); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }
  @keyframes drip {
    0%   { transform: translateY(-20px); opacity: 0; }
    20%  { opacity: 0.8; }
    100% { transform: translateY(40px); opacity: 0; }
  }
  @keyframes twinkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.3; transform: scale(0.7); }
  }

  .ws-float  { animation: float   6s ease-in-out infinite; }
  .ws-floatUp { animation: floatUp 4s ease-in-out infinite; }
  .ws-wiggle { animation: wiggle  3s ease-in-out infinite; }
  .ws-wiggle-mobile { animation: wiggleMobile 3s ease-in-out infinite; }
  .ws-spin   { animation: spin    2s linear     infinite; }
  .ws-blink  { animation: blink   1.5s ease-in-out infinite; }
  .ws-drip   { animation: drip    2s ease-in    infinite; }
  .ws-twinkle{ animation: twinkle 2s ease-in-out infinite; }

  .ws-brand-text {
    font-family: 'Righteous', cursive;
    font-size: 58px;
    line-height: 1;
    background: linear-gradient(135deg, #ffffff 0%, #81d4fa 40%, #4fc3f7 70%, #a5f3fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 2px 8px rgba(79,195,247,0.4));
  }
  .ws-brand-accent {
    background: linear-gradient(135deg, #ff6b6b 0%, #ffa07a 40%, #ffcc02 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .ws-machine-shine::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(180deg, rgba(255,255,255,0.15), transparent);
    border-radius: 20px 20px 0 0;
    pointer-events: none;
  }
  .ws-drum::before, .ws-drum::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.15);
    border-radius: 2px;
  }
  .ws-drum::before { width: 3px; height: 60%; top: 20%; left: 50%; }
  .ws-drum::after  { width: 60%; height: 3px; top: 50%; left: 20%; }

  .ws-knob::after {
    content: '';
    width: 3px; height: 8px;
    background: white;
    position: absolute;
    top: 3px; left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
  .ws-tagline::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: #81d4fa;
    margin-right: 8px;
    flex-shrink: 0;
  }
`;

// ── sub-components ──────────────────────────────────────────────

function BackgroundBubbles() {
  const bubbles = [
    { size: 180, bg: "radial-gradient(circle, #00e5ff, #00b4d8)",   style: { top: -40, left: -40 },            delay: "0s",   opacity: 0.15 },
    { size: 120, bg: "radial-gradient(circle, #ff6b6b, #ff8e53)",   style: { top: 30,  right: 80 },            delay: "1s",   opacity: 0.15 },
    { size: 80,  bg: "radial-gradient(circle, #a8ff78, #78ffd6)",   style: { bottom: 60, left: 100 },          delay: "2s",   opacity: 0.15 },
    { size: 200, bg: "radial-gradient(circle, #667eea, #764ba2)",   style: { bottom: -60, right: -40 },        delay: "0.5s", opacity: 0.15 },
    { size: 60,  bg: "radial-gradient(circle, #ffecd2, #fcb69f)",   style: { top: 200, left: 50 },             delay: "3s",   opacity: 0.15 },
    { size: 90,  bg: "radial-gradient(circle, #84fab0, #8fd3f4)",   style: { top: 100, left: 300 },            delay: "1.5s", opacity: 0.10 },
  ];
  return (
    <>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="ws-float absolute rounded-full"
          style={{
            width: b.size, height: b.size,
            background: b.bg,
            opacity: b.opacity,
            animationDelay: b.delay,
            ...b.style,
          }}
        />
      ))}
    </>
  );
}

function SoapBubbles() {
  const sbs = [
    { size: 30, style: { bottom: 20, left: 200 }, delay: "0s"   },
    { size: 20, style: { bottom: 40, left: 230 }, delay: "0.8s" },
    { size: 15, style: { bottom: 30, left: 170 }, delay: "1.6s" },
    { size: 25, style: { bottom: 10, left: 260 }, delay: "2.4s" },
    { size: 35, style: { bottom: 60, left: 190 }, delay: "3.2s" },
  ];
  return (
    <>
      {sbs.map((sb, i) => (
        <div
          key={i}
          className="ws-floatUp absolute rounded-full"
          style={{
            width: sb.size, height: sb.size,
            border: "2px solid rgba(255,255,255,0.3)",
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(255,255,255,0.05))",
            animationDelay: sb.delay,
            ...sb.style,
          }}
        />
      ))}
    </>
  );
}

function Sparkles() {
  const sparks = [
    { style: { top: 60,  left: 460 },  size: 16, delay: "0s"   },
    { style: { top: 120, right: 280 }, size: 12, delay: "0.7s" },
    { style: { top: 40,  right: 340 }, size: 10, delay: "1.4s" },
  ];
  return (
    <>
      {sparks.map((sp, i) => (
        <div
          key={i}
          className="ws-twinkle absolute"
          style={{ color: "#ffeb3b", fontSize: sp.size, animationDelay: sp.delay, ...sp.style }}
        >
          ✦
        </div>
      ))}
    </>
  );
}

function WashingMachine({ isMobile }) {
  return (
    <div
      className={isMobile ? "ws-wiggle-mobile" : "ws-wiggle absolute"}
      style={isMobile
        ? { display: "flex", flexDirection: "column", alignItems: "center" }
        : { right: 60, top: "50%", transform: "translateY(-50%)" }
      }
    >
      {/* Body */}
      <div
        className="ws-machine-shine relative"
        style={{
          width: 200, height: 220,
          background: "linear-gradient(160deg, #ffffff 0%, #e8f4ff 50%, #c8e6ff 100%)",
          borderRadius: "20px 20px 16px 16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.8)",
          border: "3px solid rgba(255,255,255,0.5)",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-end gap-1.5 pr-3.5"
          style={{
            height: 35,
            background: "linear-gradient(90deg, #1565c0, #1976d2, #42a5f5)",
            borderRadius: "17px 17px 0 0",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5252", boxShadow: "0 0 8px #ff5252" }} />
          <div className="ws-blink" style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffeb3b", boxShadow: "0 0 8px #ffeb3b" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#69f0ae", boxShadow: "0 0 8px #69f0ae" }} />
        </div>

        {/* Door */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: 130, height: 130,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #e3f2fd, #90caf9 50%, #42a5f5 80%, #1565c0)",
            border: "6px solid #90a4ae",
            top: 50, left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "inset 0 4px 10px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <div className="ws-spin ws-drum relative w-full h-full rounded-full" />
        </div>

        {/* Door handle */}
        <div
          className="absolute"
          style={{
            width: 16, height: 16,
            background: "#90a4ae",
            borderRadius: "50%",
            right: 12, top: "50%",
            transform: "translateY(-50%)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />

        {/* Knobs */}
        <div className="absolute flex justify-center gap-3" style={{ bottom: 14, left: 0, right: 0 }}>
          {[0, 1, 2].map((k) => (
            <div
              key={k}
              className="ws-knob relative"
              style={{
                width: 28, height: 28,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #42a5f5, #1565c0)",
                border: "2px solid rgba(255,255,255,0.4)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Legs */}
      <div className="flex justify-between px-5 mt-1">
        {[0, 1].map((l) => (
          <div key={l} style={{ width: 12, height: 16, background: "#546e7a", borderRadius: "0 0 4px 4px" }} />
        ))}
      </div>
    </div>
  );
}

function WaterDrops({ isMobile }) {
  const drops = [
    { left: 20,  delay: "0s"   },
    { left: 50,  delay: "0.4s" },
    { left: 80,  delay: "0.8s" },
    { left: 110, delay: "1.2s" },
  ];
  const posStyle = isMobile
    ? { position: "relative", margin: "0 auto", bottom: "auto", right: "auto" }
    : { position: "absolute", bottom: 120, right: 55 };
  return (
    <div className="overflow-visible" style={{ width: 220, height: 30, ...posStyle }}>
      {drops.map((d, i) => (
        <div
          key={i}
          className="ws-drip absolute"
          style={{
            width: 8, height: 12,
            background: "linear-gradient(180deg, #81d4fa, #0288d1)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            opacity: 0.8,
            left: d.left,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

function ServiceChip({ label, dotColor }) {
  return (
    <div
      className="flex items-center gap-1.5 text-white font-bold text-xs"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.2)",
        padding: "5px 14px",
        borderRadius: 20,
        letterSpacing: "0.5px",
        backdropFilter: "blur(4px)",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: dotColor, flexShrink: 0, display: "inline-block" }} />
      {label}
    </div>
  );
}

// ── main component ───────────────────────────────────────────────

export default function WashingSolutionBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!document.getElementById("ws-styles")) {
      const tag = document.createElement("style");
      tag.id = "ws-styles";
      tag.textContent = STYLES;
      document.head.appendChild(tag);
    }
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const chips = [
    { label: "All Brands",   dotColor: "#ff6b6b" },
    { label: "Same Day Fix", dotColor: "#69f0ae" },
    { label: "Warranty",     dotColor: "#ffeb3b" },
    { label: "24/7 Support", dotColor: "#f48fb1" },
  ];

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        minHeight: isMobile ? "auto" : 500,
        background: "linear-gradient(135deg, #0a1628 0%, #0d2b5c 40%, #0a4a8a 70%, #0e6eb8 100%)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* Background decorations */}
      <BackgroundBubbles />
      <Sparkles />

      {isMobile ? (
        /* ── MOBILE: stacked layout ── */
        <div className="relative z-10 flex flex-col items-center px-6 py-10 gap-8">
          {/* Text content */}
          <div className="w-full text-center">
            <div
              className="ws-tagline justify-center flex items-center font-black uppercase mb-2.5"
              style={{ fontSize: 11, letterSpacing: 3, color: "#81d4fa" }}
            >
              Professional Repair Service
            </div>
            <div className="ws-brand-text mb-1.5" style={{ fontSize: 40 }}>
              Washing<span className="ws-brand-accent">Solution</span>
            </div>
            <div
              className="font-semibold mb-4"
              style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", letterSpacing: "0.5px" }}
            >
              Fast · Reliable · Affordable Washing Machine Repair
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {chips.map((c) => (
                <ServiceChip key={c.label} label={c.label} dotColor={c.dotColor} />
              ))}
            </div>
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://wa.me/6585301773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-black uppercase"
                style={{
                  background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
                  fontSize: 14, padding: "12px 28px",
                  borderRadius: 30, letterSpacing: 1,
                  boxShadow: "0 6px 20px rgba(255,107,107,0.5)",
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Book a Repair
              </a>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: 1 }}>
                Call: <span style={{ color: "#81d4fa" }}>65 8530 1773</span>
              </div>
            </div>
          </div>

          {/* Machine below text on mobile */}
          <div className="flex flex-col items-center">
            <WashingMachine isMobile={true} />
            <WaterDrops isMobile={true} />
          </div>
        </div>
      ) : (
        /* ── DESKTOP: absolute layout ── */
        <div style={{ height: 500 }}>
          {/* Text content */}
          <div className="absolute" style={{ left: 55, top: "50%", transform: "translateY(-50%)", maxWidth: 460 }}>
            <div
              className="ws-tagline flex items-center font-black uppercase mb-2.5"
              style={{ fontSize: 13, letterSpacing: 4, color: "#81d4fa" }}
            >
              Professional Repair Service
            </div>
            <div className="ws-brand-text mb-1.5">
              Washing<span className="ws-brand-accent">Solution</span>
            </div>
            <div
              className="font-semibold mb-5"
              style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", letterSpacing: "0.5px" }}
            >
              Fast · Reliable · Affordable Washing Machine Repair
            </div>
            <div className="flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <ServiceChip key={c.label} label={c.label} dotColor={c.dotColor} />
              ))}
            </div>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://wa.me/6585301773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-black uppercase"
                style={{
                  background: "linear-gradient(135deg, #ff6b6b, #ff8e53)",
                  fontSize: 14, padding: "12px 28px",
                  borderRadius: 30, letterSpacing: 1,
                  boxShadow: "0 6px 20px rgba(255,107,107,0.5)",
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Book a Repair
              </a>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: 1 }}>
                Call: <span style={{ color: "#81d4fa" }}>65 8530 1773</span>
              </div>
            </div>
          </div>

          {/* Washing machine illustration */}
          <WashingMachine isMobile={false} />

          {/* Water drops */}
          <WaterDrops isMobile={false} />
        </div>
      )}

      {/* Soap bubbles */}
      <SoapBubbles />

      {/* Bottom wave overlay */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 80, background: "linear-gradient(180deg, transparent, rgba(0,150,255,0.08))" }}
      />
    </div>
  );
}