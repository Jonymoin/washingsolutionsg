import { useState } from "react";

const problems = {
  "Motor Issues": {
    color: "#ef4444",
    icon: "⚙️",
    items: [
      {
        id: "drive-belt",
        name: "Drive Belt Broken",
        severity: "high",
        emoji: "🔄",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Washing machine drive belt",
        description:
          "The drive belt connects the motor to the drum, enabling spin cycles. When broken, the motor runs but the drum stays completely still — you'll hear the motor humming while clothes sit in soapy water. A burning rubber smell or loud squealing before failure are early warning signs. Caused by age, overloading, or a small item trapped between drum and housing.",
        symptoms: [
          "Drum won't spin",
          "Burning rubber smell",
          "Motor hums but no action",
          "Wet clothes after cycle",
        ],
        fix: "Replace the drive belt — a DIY-friendly repair under 1 hour.",
      },
      {
        id: "motor-coupling",
        name: "Motor Coupling Broken",
        severity: "high",
        emoji: "🔩",
        image:
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Washing machine motor coupling",
        description:
          "The motor coupling is a plastic and rubber connector between the motor and transmission. It acts as a safety sacrificial part — designed to break before the motor burns out under heavy loads. When it fails, the washer fills with water and agitates weakly or not at all. Common in top-load washers that are frequently overloaded.",
        symptoms: [
          "Washer fills but won't agitate",
          "No spin cycle",
          "Clunking noise during operation",
          "Overloaded wash loads",
        ],
        fix: "Replace the motor coupling — inexpensive part, moderate DIY difficulty.",
      },
      {
        id: "drive-motor",
        name: "Drive Motor Faulty",
        severity: "critical",
        emoji: "⚡",
        image:
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Electric motor repair",
        description:
          "The drive motor is the heart of your washing machine — powering both the agitation and spin functions. A faulty motor may cause the washer to stop mid-cycle, make a loud humming or buzzing sound, emit a burning electrical smell, or fail to start altogether. Motor failure can result from worn carbon brushes, winding failures, or thermal overload from years of use.",
        symptoms: [
          "Machine stops mid-cycle",
          "Loud humming or buzzing",
          "Won't start at all",
          "Burning electrical smell",
        ],
        fix: "Requires professional diagnosis — motor replacement or brush replacement needed.",
      },
      {
        id: "drive-pulley",
        name: "Drive Pulley Damaged",
        severity: "medium",
        emoji: "🎯",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Pulley mechanism",
        description:
          "The drive pulley is a wheel that the drive belt wraps around to transfer motor power to the drum. A cracked, stripped, or wobbling pulley causes the belt to slip or snap repeatedly, vibration during spin cycles, and inconsistent drum speed. Often caused by metal fatigue, improper installation of a previous belt, or physical impact.",
        symptoms: [
          "Belt keeps slipping off",
          "Excessive vibration during spin",
          "Inconsistent drum speed",
          "Squeaking or grinding noise",
        ],
        fix: "Replace the damaged pulley — requires accessing the rear or bottom panel.",
      },
      {
        id: "tub-bearings",
        name: "Tub Bearings Faulty",
        severity: "high",
        emoji: "🔘",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Bearing replacement",
        description:
          "Tub bearings allow the inner drum to spin smoothly within the outer tub. When they wear out or rust (often from water leaking through the drum seal), you'll hear a very loud rumbling or grinding noise during the spin cycle that gets progressively worse. The drum may also wobble noticeably. Ignoring failed bearings can eventually damage the drum shaft.",
        symptoms: [
          "Loud rumbling during spin",
          "Drum wobbles when turned by hand",
          "Gradually worsening noise",
          "Water leaking into bearing area",
        ],
        fix: "Major repair — bearings and drum seal replacement, best done by a technician.",
      },
    ],
  },
  "Electronic Issues": {
    color: "#8b5cf6",
    icon: "🔌",
    items: [
      {
        id: "pcb-faulty",
        name: "PCB Faulty",
        severity: "critical",
        emoji: "🖥️",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=220&fit=crop&auto=format",
        imgAlt: "PCB circuit board",
        description:
          "The PCB (Printed Circuit Board) is the brain of a modern washing machine — it controls every function including water fill, wash cycle timing, spin speed, temperature, and door locking. A faulty PCB causes erratic, unpredictable behavior: cycles starting or stopping randomly, buttons not responding, error codes appearing without apparent cause, or the machine being completely dead despite having power.",
        symptoms: [
          "Random error codes",
          "Buttons unresponsive",
          "Cycle stops mid-wash",
          "Machine dead with power",
        ],
        fix: "PCB replacement or professional re-soldering. Always check for blown fuses first.",
      },
      {
        id: "starter-switch",
        name: "Starter Switch Faulty",
        severity: "medium",
        emoji: "🔘",
        image:
          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Electrical switch",
        description:
          "The starter switch (or start capacitor relay) initiates the motor's rotation at the beginning of a cycle. When faulty, the machine may appear to power on normally but the motor makes a loud humming noise without turning, then trips a thermal protector. This is because the motor draws full current without the starting assistance the switch provides.",
        symptoms: [
          "Motor hums but doesn't start",
          "Trips circuit breaker",
          "Powers on but won't run",
          "Starts intermittently",
        ],
        fix: "Replace the starter switch or start capacitor — relatively simple electrical repair.",
      },
      {
        id: "door-switch",
        name: "Door Switch Faulty",
        severity: "medium",
        emoji: "🚪",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Washing machine door",
        description:
          "The door switch (or lid switch on top-loaders) is a critical safety component that tells the machine the door is properly closed before allowing any operation. A faulty switch means the machine thinks the door is always open — it will refuse to start, fill, or spin. In some cases it fails intermittently, causing the machine to pause or stop randomly mid-cycle.",
        symptoms: [
          "Machine won't start at all",
          "Stops mid-cycle randomly",
          "Door closed but machine disagrees",
          "No spin when cycle runs",
        ],
        fix: "Replace the door switch — usually a straightforward DIY repair.",
      },
      {
        id: "capacitor",
        name: "Capacitor Issues",
        severity: "medium",
        emoji: "🔋",
        image:
          "https://images.unsplash.com/photo-1621905252472-943afaa20e20?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Capacitor components",
        description:
          "Capacitors store and release electrical charge to help the motor start and run at correct speed. A faulty run capacitor causes the motor to operate inefficiently — you'll notice slow drum spin speed, overheating motor, higher energy consumption, and a weak or incomplete spin cycle. Start capacitors cause the motor to fail to begin rotation entirely. Capacitors degrade naturally over 5–10 years.",
        symptoms: [
          "Slow spin speed",
          "Motor runs hot to touch",
          "Weak agitation",
          "Won't complete spin cycle",
        ],
        fix: "Capacitor replacement — cheap part, must be discharged safely before handling.",
      },
      {
        id: "fuse",
        name: "Fuse Faulty",
        severity: "low",
        emoji: "💡",
        image:
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Electrical fuse",
        description:
          "Washing machines contain thermal fuses and inline fuses to protect against electrical surges and overheating. A blown fuse leaves the machine completely dead — no display, no response to buttons. Fuses blow due to power surges, short circuits, or motor overload. While replacing the fuse is simple, always investigate why it blew to prevent the replacement from blowing immediately too.",
        symptoms: [
          "Completely dead — no power",
          "No display or lights",
          "Suddenly stopped working",
          "Tripped after power surge",
        ],
        fix: "Replace the blown fuse. Always find and fix the root cause first.",
      },
    ],
  },
  "Water Related Issues": {
    color: "#0ea5e9",
    icon: "💧",
    items: [
      {
        id: "drain-pump",
        name: "Drain Pump Faulty",
        severity: "high",
        emoji: "🚿",
        image:
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Drain pump",
        description:
          "The drain pump forces water out of the drum after each wash and rinse cycle. A faulty pump means water remains in the drum, leaving clothes soaking wet. You may hear loud humming or grinding from the pump as it struggles, or notice an unpleasant smell from standing water. Common causes include blockages from coins, hair, or lint, as well as worn impeller blades or motor failure.",
        symptoms: [
          "Water won't drain from drum",
          "Clothes soaking wet",
          "Grinding noise during drain",
          "Standing water smell",
        ],
        fix: "Clear blockages first, then replace pump if motor has failed.",
      },
      {
        id: "drainage-hose",
        name: "Drainage Hose Blocked",
        severity: "low",
        emoji: "🪠",
        image:
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Drainage hose",
        description:
          "The drainage hose carries water from the pump to your home's drain pipe. Blockages from accumulated lint, debris, or a kinked hose prevent proper drainage, causing the machine to stop mid-cycle with standing water. If the hose is positioned too high (above 100cm from floor), it can create a siphoning problem. A damaged hose can also cause water leaks under or behind the machine.",
        symptoms: [
          "Slow or no drainage",
          "Water pools behind machine",
          "Cycle pauses during drain",
          "Hose kinked or crushed",
        ],
        fix: "Straighten kinks, clear blockages, or replace the hose — simple DIY fix.",
      },
      {
        id: "water-inlet-valve",
        name: "Water Inlet Valve Faulty",
        severity: "medium",
        emoji: "🚰",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Water inlet valve",
        description:
          "The water inlet valve is an electrically controlled valve that opens to let water into the drum during filling cycles. A faulty valve may fail to open (no water enters), fail to close (machine overfills or leaks when off), or partially clog causing very slow filling. A failed valve that doesn't close is a serious issue — the machine will drip water even when completely switched off.",
        symptoms: [
          "Machine won't fill with water",
          "Leaking when switched off",
          "Very slow water fill",
          "Overfilling the drum",
        ],
        fix: "Replace the water inlet valve — check inlet filter screens for debris first.",
      },
      {
        id: "filter-blocked",
        name: "Filter Catch Area Blocked",
        severity: "low",
        emoji: "🔍",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Washing machine filter",
        description:
          "The filter catch (or coin trap/pump filter) collects lint, hair, coins, buttons, and small debris that would otherwise clog the drain pump. When blocked, drainage becomes slow or stops entirely, you may notice unpleasant odours, and the machine may display drainage error codes. Most manufacturers recommend cleaning this filter every 1–3 months for optimal performance.",
        symptoms: [
          "Slow drainage",
          "Unpleasant odour from machine",
          "Error codes during drain",
          "Pump making struggling sounds",
        ],
        fix: "Clean the filter — locate it behind a small panel at the machine's front base.",
      },
      {
        id: "hose-fittings",
        name: "Hose Fittings Damaged",
        severity: "medium",
        emoji: "🔧",
        image:
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Hose fittings plumbing",
        description:
          "Hose fittings are the connectors between the inlet/drain hoses and the machine or water supply. Damaged, loose, or corroded fittings cause water leaks that may be small drips or significant flooding. The rubber washers inside the fittings deteriorate over time and are a common source of leaks. Improperly tightened fittings or overtightening can crack plastic connectors.",
        symptoms: [
          "Water dripping from rear connections",
          "Wet floor around machine",
          "Reduced water pressure into machine",
          "Cracks or corrosion on fittings",
        ],
        fix: "Replace rubber washers or damaged fittings — always use correct hose sizes.",
      },
      {
        id: "seals",
        name: "Seals Damaged",
        severity: "high",
        emoji: "🔵",
        image:
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=220&fit=crop&auto=format",
        imgAlt: "Door seal rubber gasket",
        description:
          "Drum seals and door gaskets (especially the rubber door seal on front-loaders) prevent water from leaking out of the wash drum. A damaged seal allows water to leak during wash or spin cycles — typically appearing as puddles under the machine or water running down the inside of the door glass. Seals crack due to age, harsh detergents, or small sharp objects in the drum.",
        symptoms: [
          "Water leaking from door area",
          "Puddles under machine during wash",
          "Visible tears on door rubber",
          "Musty smell from door gasket",
        ],
        fix: "Replace the door seal/drum seal — front-loader seals require partial disassembly.",
      },
    ],
  },
};

const severityConfig = {
  low: { color: "#22c55e", bg: "#f0fdf4", label: "Minor" },
  medium: { color: "#f59e0b", bg: "#fffbeb", label: "Moderate" },
  high: { color: "#ef4444", bg: "#fef2f2", label: "Serious" },
  critical: { color: "#7c3aed", bg: "#faf5ff", label: "Critical" },
};

function Modal({ problem, onClose }) {
  const sv = severityConfig[problem.severity];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden w-full max-w-sm shadow-2xl"
        style={{ animation: "popIn 0.22s cubic-bezier(.4,0,.2,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative">
          <img
            src={problem.image}
            alt={problem.imgAlt}
            className="w-full object-cover"
            style={{ height: 190 }}
            onError={(e) => (e.target.style.display = "none")}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 text-lg"
            style={{ background: "rgba(255,255,255,0.85)" }}
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6"
            style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }}
          >
            <p className="text-white font-bold text-lg m-0 leading-tight">
              {problem.emoji} {problem.name}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Severity badge */}
          <span
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{ background: sv.bg, color: sv.color }}
          >
            ⚠️ {sv.label} Issue
          </span>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {problem.description}
          </p>

          {/* Symptoms */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Common Symptoms
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {problem.symptoms.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: "#f0f4ff", color: "#4056b5" }}
              >
                • {s}
              </span>
            ))}
          </div>

          {/* Fix */}
          <div
            className="p-3 rounded-xl border-l-4"
            style={{ background: "#f0fdf4", borderColor: "#22c55e" }}
          >
            <p className="text-sm font-medium m-0" style={{ color: "#166534" }}>
              🔧 {problem.fix}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { transform: scale(0.92); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function WashingMachineDiagnostic() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div
        className="rounded-b-3xl px-5 pt-10 pb-7 mb-4 text-white"
        style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            🫧
          </div>
          <div>
            <p className="m-0 text-lg font-bold leading-tight">Washing Machine</p>
            <p className="m-0 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              Problem Diagnostic Guide
            </p>
          </div>
        </div>
        <p className="m-0 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
          Tap any problem to see expert diagnosis, symptoms &amp; repair advice.
        </p>
      </div>

      {/* Category Sections */}
      <div className="px-4 space-y-4">
        {Object.entries(problems).map(([category, data]) => (
          <div
            key={category}
            className="bg-white rounded-2xl overflow-hidden"
            style={{ border: "1px solid #f0f0f5" }}
          >
            {/* Category header */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                background: data.color + "12",
                borderBottom: `2px solid ${data.color}22`,
              }}
            >
              <span className="text-base">{data.icon}</span>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: data.color }}
              >
                {category}
              </span>
            </div>

            {/* Problem rows */}
            {data.items.map((item, idx) => {
              const sv = severityConfig[item.severity];
              return (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 transition-colors"
                  style={{
                    borderBottom:
                      idx < data.items.length - 1 ? "1px solid #f5f5f8" : "none",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f7f9ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {/* Severity dot */}
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: sv.color }}
                  />

                  {/* Emoji icon */}
                  <span className="text-base flex-shrink-0">{item.emoji}</span>

                  {/* Name */}
                  <span className="flex-1 text-sm font-medium text-gray-800">
                    {item.name}
                  </span>

                  {/* Severity badge */}
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: sv.bg, color: sv.color }}
                  >
                    {sv.label}
                  </span>

                  {/* Chevron */}
                  <span className="text-gray-300 text-sm flex-shrink-0">›</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-gray-400 mt-5 px-4">
        ⚠️ Always unplug your machine before attempting any repair
      </p>

      {/* Modal */}
      {selected && (
        <Modal problem={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}