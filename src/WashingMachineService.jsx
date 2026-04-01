import { Phone, MessageCircle, Star } from "lucide-react";

const problems = [
  { icon: "🌊", title: "Water Filling/Draining", desc: "Blocked filters or faulty inlet valves." },
  { icon: "💡", title: "Error Code on Display", desc: "Motor errors, sensor failures, or load imbalance." },
  { icon: "🔄", title: "Machine Not Spinning", desc: "Broken drive belt or motor carbon brush issues." },
  { icon: "💧", title: "Water Leakage", desc: "Damaged door seals (gasket) or cracked hoses." },
  { icon: "🚪", title: "Door Latch Repair", desc: "Door won't lock or unlock due to faulty switch." },
  { icon: "🛠️", title: "Drainage Blockage", desc: "Internal pump failure or drain pipe obstruction." },
  { icon: "🌀", title: "Agitator Not Moving", desc: "Mechanical transmission or coupler failure." },
  { icon: "🔥", title: "Heating Problems", desc: "Faulty heating element or thermostat sensor." },
  { icon: "🧼", title: "Detergent Dispenser", desc: "Soap not flushing or leaking from drawer." },
  { icon: "🏗️", title: "Excessive Shaking", desc: "Damaged suspension springs or shock absorbers." },
];

export default function WashingSolutionPro() {
  return (
    <div className="bg-red-600 text-white min-h-screen">

      {/* SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "WashingSolution SG",
          "telephone": "+6585301773",
          "areaServed": "Singapore",
          "serviceType": "Washing Machine Repair"
        })
      }} />

      {/* NAV */}
      <nav className="sticky top-0 bg-red-700/95 backdrop-blur-sm px-4 py-3 flex justify-between items-center">
        <div className="font-bold flex items-center gap-2">
          🫧 WashingSolution SG
        </div>
        <a href="https://wa.me/6585301773" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2 font-semibold shadow-sm hover:scale-105 transition">
          <MessageCircle size={16}/> WhatsApp
        </a>
      </nav>

      {/* HERO (Conversion Focus) */}
      <section className="text-center px-4 py-16 max-w-4xl mx-auto">
        <div className="flex justify-center mb-3 text-yellow-300">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
          Fast Washing Machine Repair in Singapore
        </h1>

        <p className="text-sm opacity-80 mb-6 max-w-md mx-auto">
          Same-day service. Affordable pricing. Trusted by 1000+ customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+6585301773" className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition">
            Call Now
          </a>
          <a href="https://wa.me/6585301773" className="border border-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition">
            <MessageCircle size={16}/> WhatsApp
          </a>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-4 max-w-4xl mx-auto pb-10 text-center text-xs">
        <div className="bg-white/10 p-3 rounded-lg">✔ Same Day</div>
        <div className="bg-white/10 p-3 rounded-lg">✔ No Hidden Fees</div>
        <div className="bg-white/10 p-3 rounded-lg">✔ Warranty</div>
        <div className="bg-white/10 p-3 rounded-lg">✔ Expert Techs</div>
      </section>

      {/* PROBLEMS */}
      <section className="px-4 max-w-4xl mx-auto py-10">
        <h2 className="text-xl font-bold mb-6">Common Problems We Fix</h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {problems.map((p) => (
            <div key={p.title} className="bg-white/10 p-4 rounded-lg flex gap-3 hover:bg-white/20 transition">
              <span className="text-xl">{p.icon}</span>
              <div>
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="text-xs opacity-70">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="text-center px-4 py-14">
        <h2 className="text-2xl font-bold mb-3">Need Urgent Repair?</h2>
        <p className="text-sm opacity-80 mb-6">Call now & get same-day service</p>

        <a href="tel:+6585301773" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:scale-105 transition inline-block">
          📞 Call +65 8530 1773
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs opacity-60 pb-6">
        WashingSolution SG · 7 Days Service · Singapore
      </footer>
    </div>
  );
}
