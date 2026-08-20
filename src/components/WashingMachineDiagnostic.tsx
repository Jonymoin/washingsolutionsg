import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { trackConversion } from "@/lib/tracking";

interface ProblemItem {
  id: string;
  name: string;
  severity: Severity;
  emoji: string;
  image: string;
  imgAlt: string;
  description: string;
  symptoms: string[];
  fix: string;
}

interface ProblemCategory {
  accent: string;
  accentSoft: string;
  icon: string;
  items: ProblemItem[];
}

type Severity = "low" | "medium" | "high" | "critical";

type ProblemsRecord = Record<string, ProblemCategory>;

const problems: ProblemsRecord = {
  "Motor Issues": {
    accent: "#f59e0b",
    accentSoft: "rgba(245,158,11,0.14)",
    icon: "⚙️",
    items: [
      {
        id: "drive-belt",
        name: "Drive Belt Broken",
        severity: "high",
        emoji: "🔄",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Washing machine drive belt",
        description:
          "The drive belt connects the motor to the drum, enabling spin cycles. When broken, the motor runs but the drum stays completely still — you'll hear the motor humming while clothes sit in soapy water. A burning rubber smell or loud squealing before failure are early warning signs. Caused by age, overloading, or a small item trapped between drum and housing.",
        symptoms: ["Drum won't spin", "Burning rubber smell", "Motor hums but no action", "Wet clothes after cycle"],
        fix: "Replace the drive belt — a DIY-friendly repair under 1 hour.",
      },
      {
        id: "motor-coupling",
        name: "Motor Coupling Broken",
        severity: "high",
        emoji: "🔩",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Washing machine motor coupling",
        description:
          "The motor coupling is a plastic and rubber connector between the motor and transmission. It acts as a safety sacrificial part — designed to break before the motor burns out under heavy loads. When it fails, the washer fills with water and agitates weakly or not at all. Common in top-load washers that are frequently overloaded.",
        symptoms: ["Washer fills but won't agitate", "No spin cycle", "Clunking noise during operation", "Overloaded wash loads"],
        fix: "Replace the motor coupling — inexpensive part, moderate DIY difficulty.",
      },
      {
        id: "drive-motor",
        name: "Drive Motor Faulty",
        severity: "critical",
        emoji: "⚡",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Electric motor repair",
        description:
          "The drive motor is the heart of your washing machine — powering both the agitation and spin functions. A faulty motor may cause the washer to stop mid-cycle, make a loud humming or buzzing sound, emit a burning electrical smell, or fail to start altogether. Motor failure can result from worn carbon brushes, winding failures, or thermal overload from years of use.",
        symptoms: ["Machine stops mid-cycle", "Loud humming or buzzing", "Won't start at all", "Burning electrical smell"],
        fix: "Requires professional diagnosis — motor replacement or brush replacement needed.",
      },
      {
        id: "drive-pulley",
        name: "Drive Pulley Damaged",
        severity: "medium",
        emoji: "🎯",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Pulley mechanism",
        description:
          "The drive pulley is a wheel that the drive belt wraps around to transfer motor power to the drum. A cracked, stripped, or wobbling pulley causes the belt to slip or snap repeatedly, vibration during spin cycles, and inconsistent drum speed. Often caused by metal fatigue, improper installation of a previous belt, or physical impact.",
        symptoms: ["Belt keeps slipping off", "Excessive vibration during spin", "Inconsistent drum speed", "Squeaking or grinding noise"],
        fix: "Replace the damaged pulley — requires accessing the rear or bottom panel.",
      },
      {
        id: "tub-bearings",
        name: "Tub Bearings Faulty",
        severity: "high",
        emoji: "🔘",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Bearing replacement",
        description:
          "Tub bearings allow the inner drum to spin smoothly within the outer tub. When they wear out or rust (often from water leaking through the drum seal), you'll hear a very loud rumbling or grinding noise during the spin cycle that gets progressively worse. The drum may also wobble noticeably. Ignoring failed bearings can eventually damage the drum shaft.",
        symptoms: ["Loud rumbling during spin", "Drum wobbles when turned by hand", "Gradually worsening noise", "Water leaking into bearing area"],
        fix: "Major repair — bearings and drum seal replacement, best done by a technician.",
      },
    ],
  },
  "Electronic Issues": {
    accent: "#a78bfa",
    accentSoft: "rgba(167,139,250,0.14)",
    icon: "🔌",
    items: [
      {
        id: "pcb-faulty",
        name: "PCB Faulty",
        severity: "critical",
        emoji: "🖥️",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=260&fit=crop&auto=format",
        imgAlt: "PCB circuit board",
        description:
          "The PCB (Printed Circuit Board) is the brain of a modern washing machine — it controls every function including water fill, wash cycle timing, spin speed, temperature, and door locking. A faulty PCB causes erratic, unpredictable behavior: cycles starting or stopping randomly, buttons not responding, error codes appearing without apparent cause, or the machine being completely dead despite having power.",
        symptoms: ["Random error codes", "Buttons unresponsive", "Cycle stops mid-wash", "Machine dead with power"],
        fix: "PCB replacement or professional re-soldering. Always check for blown fuses first.",
      },
      {
        id: "starter-switch",
        name: "Starter Switch Faulty",
        severity: "medium",
        emoji: "🔘",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Electrical switch",
        description:
          "The starter switch (or start capacitor relay) initiates the motor's rotation at the beginning of a cycle. When faulty, the machine may appear to power on normally but the motor makes a loud humming noise without turning, then trips a thermal protector. This is because the motor draws full current without the starting assistance the switch provides.",
        symptoms: ["Motor hums but doesn't start", "Trips circuit breaker", "Powers on but won't run", "Starts intermittently"],
        fix: "Replace the starter switch or start capacitor — relatively simple electrical repair.",
      },
      {
        id: "door-switch",
        name: "Door Switch Faulty",
        severity: "medium",
        emoji: "🚪",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Washing machine door",
        description:
          "The door switch (or lid switch on top-loaders) is a critical safety component that tells the machine the door is properly closed before allowing any operation. A faulty switch means the machine thinks the door is always open — it will refuse to start, fill, or spin. In some cases it fails intermittently, causing the machine to pause or stop randomly mid-cycle.",
        symptoms: ["Machine won't start at all", "Stops mid-cycle randomly", "Door closed but machine disagrees", "No spin when cycle runs"],
        fix: "Replace the door switch — usually a straightforward DIY repair.",
      },
      {
        id: "capacitor",
        name: "Capacitor Issues",
        severity: "medium",
        emoji: "🔋",
        image: "https://images.unsplash.com/photo-1621905252472-943afaa20e20?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Capacitor components",
        description:
          "Capacitors store and release electrical charge to help the motor start and run at correct speed. A faulty run capacitor causes the motor to operate inefficiently — you'll notice slow drum spin speed, overheating motor, higher energy consumption, and a weak or incomplete spin cycle. Start capacitors cause the motor to fail to begin rotation entirely. Capacitors degrade naturally over 5–10 years.",
        symptoms: ["Slow spin speed", "Motor runs hot to touch", "Weak agitation", "Won't complete spin cycle"],
        fix: "Capacitor replacement — cheap part, must be discharged safely before handling.",
      },
      {
        id: "fuse",
        name: "Fuse Faulty",
        severity: "low",
        emoji: "💡",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Electrical fuse",
        description:
          "Washing machines contain thermal fuses and inline fuses to protect against electrical surges and overheating. A blown fuse leaves the machine completely dead — no display, no response to buttons. Fuses blow due to power surges, short circuits, or motor overload. While replacing the fuse is simple, always investigate why it blew to prevent the replacement from blowing immediately too.",
        symptoms: ["Completely dead — no power", "No display or lights", "Suddenly stopped working", "Tripped after power surge"],
        fix: "Replace the blown fuse. Always find and fix the root cause first.",
      },
    ],
  },
  "Water Related Issues": {
    accent: "#38bdf8",
    accentSoft: "rgba(56,189,248,0.14)",
    icon: "💧",
    items: [
      {
        id: "drain-pump",
        name: "Drain Pump Faulty",
        severity: "high",
        emoji: "🚿",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Drain pump",
        description:
          "The drain pump forces water out of the drum after each wash and rinse cycle. A faulty pump means water remains in the drum, leaving clothes soaking wet. You may hear loud humming or grinding from the pump as it struggles, or notice an unpleasant smell from standing water. Common causes include blockages from coins, hair, or lint, as well as worn impeller blades or motor failure.",
        symptoms: ["Water won't drain from drum", "Clothes soaking wet", "Grinding noise during drain", "Standing water smell"],
        fix: "Clear blockages first, then replace pump if motor has failed.",
      },
      {
        id: "drainage-hose",
        name: "Drainage Hose Blocked",
        severity: "low",
        emoji: "🪠",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Drainage hose",
        description:
          "The drainage hose carries water from the pump to your home's drain pipe. Blockages from accumulated lint, debris, or a kinked hose prevent proper drainage, causing the machine to stop mid-cycle with standing water. If the hose is positioned too high (above 100cm from floor), it can create a siphoning problem. A damaged hose can also cause water leaks under or behind the machine.",
        symptoms: ["Slow or no drainage", "Water pools behind machine", "Cycle pauses during drain", "Hose kinked or crushed"],
        fix: "Straighten kinks, clear blockages, or replace the hose — simple DIY fix.",
      },
      {
        id: "water-inlet-valve",
        name: "Water Inlet Valve Faulty",
        severity: "medium",
        emoji: "🚰",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Water inlet valve",
        description:
          "The water inlet valve is an electrically controlled valve that opens to let water into the drum during filling cycles. A faulty valve may fail to open (no water enters), fail to close (machine overfills or leaks when off), or partially clog causing very slow filling. A failed valve that doesn't close is a serious issue — the machine will drip water even when completely switched off.",
        symptoms: ["Machine won't fill with water", "Leaking when switched off", "Very slow water fill", "Overfilling the drum"],
        fix: "Replace the water inlet valve — check inlet filter screens for debris first.",
      },
      {
        id: "filter-blocked",
        name: "Filter Catch Area Blocked",
        severity: "low",
        emoji: "🔍",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Washing machine filter",
        description:
          "The filter catch (or coin trap/pump filter) collects lint, hair, coins, buttons, and small debris that would otherwise clog the drain pump. When blocked, drainage becomes slow or stops entirely, you may notice unpleasant odours, and the machine may display drainage error codes. Most manufacturers recommend cleaning this filter every 1–3 months for optimal performance.",
        symptoms: ["Slow drainage", "Unpleasant odour from machine", "Error codes during drain", "Pump making struggling sounds"],
        fix: "Clean the filter — locate it behind a small panel at the machine's front base.",
      },
      {
        id: "hose-fittings",
        name: "Hose Fittings Damaged",
        severity: "medium",
        emoji: "🔧",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Hose fittings plumbing",
        description:
          "Hose fittings are the connectors between the inlet/drain hoses and the machine or water supply. Damaged, loose, or corroded fittings cause water leaks that may be small drips or significant flooding. The rubber washers inside the fittings deteriorate over time and are a common source of leaks. Improperly tightened fittings or overtightening can crack plastic connectors.",
        symptoms: ["Water dripping from rear connections", "Wet floor around machine", "Reduced water pressure into machine", "Cracks or corrosion on fittings"],
        fix: "Replace rubber washers or damaged fittings — always use correct hose sizes.",
      },
      {
        id: "seals",
        name: "Seals Damaged",
        severity: "high",
        emoji: "🔵",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=260&fit=crop&auto=format",
        imgAlt: "Door seal rubber gasket",
        description:
          "Drum seals and door gaskets (especially the rubber door seal on front-loaders) prevent water from leaking out of the wash drum. A damaged seal allows water to leak during wash or spin cycles — typically appearing as puddles under the machine or water running down the inside of the door glass. Seals crack due to age, harsh detergents, or small sharp objects in the drum.",
        symptoms: ["Water leaking from door area", "Puddles under machine during wash", "Visible tears on door rubber", "Musty smell from door gasket"],
        fix: "Replace the door seal/drum seal — front-loader seals require partial disassembly.",
      },
    ],
  },
};

const severityConfig: Record<Severity, { color: string; label: string }> = {
  low: { color: "#34d399", label: "Minor" },
  medium: { color: "#fbbf24", label: "Moderate" },
  high: { color: "#fb7185", label: "Serious" },
  critical: { color: "#e879f9", label: "Critical" },
};

function SeverityLED({ severity }: { severity: Severity }) {
  const sv = severityConfig[severity];
  return (
    <span className="relative inline-flex h-2.5 w-2.5 items-center">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
        style={{ backgroundColor: sv.color }}
      />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: sv.color }} />
      {severity === "critical" && (
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-60"
          style={{
            backgroundColor: sv.color,
            animation: "ledPulse 1.5s ease-in-out infinite",
          }}
        />
      )}
    </span>
  );
}

interface ModalProps {
  problem: ProblemItem;
  onClose: () => void;
}

function Modal({ problem, onClose }: ModalProps) {
  const sv = severityConfig[problem.severity];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${problem.name} diagnosis`}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-900 text-white shadow-2xl"
        style={{ animation: "popIn 0.25s ease-out" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden md:h-60">
          <img
            src={problem.image}
            alt={problem.imgAlt}
            className="h-full w-full object-cover"
            onError={(e) => ((e.currentTarget.style.display = "none"))}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
            aria-label="Close diagnosis"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-5 md:left-6">
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <span className="text-xl">{problem.emoji}</span>
              <span className="font-semibold">{problem.name}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-7">
          {/* Severity badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: `${sv.color}20`, color: sv.color }}
          >
            <SeverityLED severity={problem.severity} />
            {sv.label} Issue
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-neutral-300">{problem.description}</p>

          {/* Symptoms */}
          <div className="mt-5">
            <h4 className="text-sm font-semibold text-white">Common Symptoms</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {problem.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Fix */}
          <div className="mt-5 rounded-2xl bg-white/5 p-4">
            <div className="flex items-start gap-2 text-sm font-medium text-white">
              <span>🔧</span>
              {problem.fix}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+6585301773"
              onClick={() => trackConversion()}
              className="btn-yellow flex-1 text-center text-sm"
            >
              <Phone className="h-4 w-4" />
              Call +65 8530 1773
            </a>
            <a
              href="https://wa.me/6585301773"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackConversion()}
              className="btn-glass flex-1 text-center text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { transform: scale(0.94) translateY(8px); opacity: 0; }
          to   { transform: scale(1) translateY(0);    opacity: 1; }
        }
        @keyframes ledPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(2.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function WashingMachineDiagnostic() {
  const [selected, setSelected] = useState<ProblemItem | null>(null);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-black text-white shadow-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 90% 10%, rgba(245,238,0,0.15) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(56,189,248,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative p-5 md:p-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow text-2xl text-black">
              🫧
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow">Appliance Service Panel</p>
              <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">Washing Machine Diagnostics</h2>
              <p className="mt-1 max-w-md text-sm text-neutral-400">
                Tap any fault to see the diagnosis, symptoms & recommended fix.
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3">
            {Object.entries(severityConfig).map(([key, sv]) => (
              <div key={key} className="flex items-center gap-2 text-xs text-neutral-300">
                <SeverityLED severity={key as Severity} />
                {sv.label}
              </div>
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(problems).map(([category, data]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/[0.03]"
              style={{ boxShadow: `0 0 0 1px ${data.accentSoft} inset` }}
            >
              {/* Category header */}
              <div
                className="flex items-center gap-3 rounded-t-2xl px-4 py-3"
                style={{ backgroundColor: data.accentSoft }}
              >
                <span className="text-xl">{data.icon}</span>
                <span className="text-sm font-bold" style={{ color: data.accent }}>
                  {category}
                </span>
              </div>

              {/* Problem rows */}
              <div>
                {data.items.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="group flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-150"
                    style={{
                      borderBottom: idx < data.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.045)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <SeverityLED severity={item.severity} />
                    <span className="text-sm text-neutral-200">
                      <span className="mr-1.5">{item.emoji}</span>
                      {item.name}
                    </span>
                    <span className="ml-auto text-neutral-500 transition group-hover:text-yellow">›</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-6 flex items-center gap-2 text-xs text-neutral-500">
          <span>⚠️</span>
          Always unplug your machine before attempting any repair
        </div>
      </div>

      {/* Modal */}
      {selected && <Modal problem={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
