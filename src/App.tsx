import { useState, useEffect } from 'react';
import {
  Menu, X, PhoneCall, MessageCircle, Wrench, Clock, ShieldCheck, Banknote, MapPin,
  BadgeCheck, Phone, CheckCircle2, Star, AlertTriangle, Droplets, VolumeX, Lock, Power,
  FileWarning, Thermometer, Activity, Wind, Cpu, Drum, CheckCircle
} from 'lucide-react';

/* ─────────────── NAVBAR ─────────────── */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',        href: '#home' },
    { name: 'Why Us',      href: '#why-us' },
    { name: 'Services',    href: '#services' },
    { name: 'Brands',      href: '#brands' },
    { name: 'How It Works',href: '#process' },
    { name: 'Contact',     href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
  <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-cyan-500/25 transition-all">
    <img
      src="/logo.webp"
      alt="WashingSolutionsSG Logo"
      className="w-full h-full object-cover"
    />
  </div>

  <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
    Washing<span className="text-cyan-500">Solutions</span><span className="text-teal-400">SG</span>
  </span>
</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-cyan-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="tel:+6585301773"
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-cyan-500/20"
          >
            <PhoneCall className="w-4 h-4" />
            +65 8530 1773
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4 md:hidden">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+6585301773"
            className="flex items-center justify-center gap-2 bg-cyan-600 text-white px-5 py-3 rounded-xl font-semibold mt-2"
          >
            <PhoneCall className="w-4 h-4" />
            Call Now: +65 8530 1773
          </a>
        </div>
      )}
    </nav>
  );
};

/* ─────────────── ANIMATED BUBBLES ─────────────── */
const BUBBLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 5.3 + 2) % 100}%`,
  width: `${(i * 7 + 20) % 60 + 20}px`,
  height: `${(i * 7 + 20) % 60 + 20}px`,
  duration: `${(i * 1.1 + 10) % 10 + 10}s`,
  delay: `${(i * 0.7) % 10}s`,
}));

const Bubbles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {BUBBLES.map(b => (
      <div
        key={b.id}
        className="bubble"
        style={{ left: b.left, width: b.width, height: b.height, animationDuration: b.duration, animationDelay: b.delay }}
      />
    ))}
  </div>
);

/* ─────────────── HERO ─────────────── */
const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-blue-950 via-cyan-900 to-teal-900">
    <Bubbles />
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-sm font-semibold mb-6">
            <BadgeCheck className="w-4 h-4" />
            Singapore's Top Rated Repair Service
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Singapore's Trusted{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Washing Machine
            </span>{' '}
            Repair Specialists
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
            Fast, reliable, and affordable island-wide repairs for all major brands. Don't let a broken washer disrupt your day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+6585301773"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-950 hover:bg-cyan-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              <PhoneCall className="w-5 h-5" />
              Call +65 8530 1773
            </a>
            <a
              href="https://wa.me/6585301773"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-cyan-100 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              Same-Day Service
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              No Hidden Fees
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-teal-400 rounded-3xl blur-3xl opacity-30 animate-pulse" />
          <img
            src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200&q=80"
            alt="Professional Washing Machine Repair Singapore"
            className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-2xl border border-white/10"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">4.9/5 Rating</div>
                <div className="text-gray-500 text-sm">Based on 500+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────── WHY CHOOSE US ─────────────── */
const WhyUs = () => {
  const features = [
    { icon: <Clock className="w-6 h-6" />,      title: 'Same-Day Service',       desc: 'We arrive quickly to fix your appliance on the same day you call.' },
    { icon: <Wrench className="w-6 h-6" />,      title: 'All Brands',             desc: 'Our technicians are trained to repair all major washing machine brands.' },
    { icon: <Banknote className="w-6 h-6" />,    title: 'Transparent Pricing',    desc: 'No hidden fees. We provide a clear quote before starting any work.' },
    { icon: <BadgeCheck className="w-6 h-6" />,  title: 'Experienced Technicians',desc: 'Years of experience handling all types of washing machine faults.' },
    { icon: <MapPin className="w-6 h-6" />,      title: 'Island-Wide Coverage',   desc: 'We service all areas in Singapore, from Jurong to Pasir Ris.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Warranty on Parts',      desc: 'Peace of mind with warranty coverage on all replaced parts.' },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-cyan-600 tracking-wider uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Smart Choice for Appliance Repair</h3>
          <p className="text-lg text-gray-600">We combine technical expertise with exceptional customer service to get your washing machine running perfectly again.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-cyan-200 transition-all group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h4>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── PROBLEMS WE SOLVE ─────────────── */
const Problems = () => {
  const problems = [
    { icon: <Activity className="w-5 h-5" />,     title: 'Not Spinning' },
    { icon: <Droplets className="w-5 h-5" />,     title: 'Not Draining' },
    { icon: <AlertTriangle className="w-5 h-5" />,title: 'Leaking Water' },
    { icon: <VolumeX className="w-5 h-5" />,      title: 'Noisy Operation' },
    { icon: <Lock className="w-5 h-5" />,         title: "Door Won't Open" },
    { icon: <Power className="w-5 h-5" />,        title: "Won't Power On" },
    { icon: <FileWarning className="w-5 h-5" />,  title: 'Error Codes' },
    { icon: <Thermometer className="w-5 h-5" />,  title: 'Not Heating Water' },
    { icon: <Wind className="w-5 h-5" />,         title: 'Vibrating Excessively' },
    { icon: <Wind className="w-5 h-5" />,         title: 'Bad Smell' },
    { icon: <Cpu className="w-5 h-5" />,          title: 'Control Panel Issues' },
    { icon: <Drum className="w-5 h-5" />,         title: 'Drum Damaged' },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-cyan-600 tracking-wider uppercase mb-3">Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Problems We Fix</h3>
            <p className="text-lg text-gray-600">If your washing machine is showing any of these symptoms, call us before the problem worsens.</p>
          </div>
          <a
            href="https://wa.me/6585301773"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Describe Your Problem
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-cyan-300 hover:shadow-md transition-all">
              <div className="text-cyan-500 bg-cyan-50 p-3 rounded-lg shrink-0">{p.icon}</div>
              <span className="font-semibold text-gray-800">{p.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── BRANDS ─────────────── */
const BRANDS = [
  'Samsung','LG','Bosch','Electrolux','Panasonic','Hitachi','Toshiba',
  'Sharp','Miele','Whirlpool','Ariston','Siemens','Haier','Midea',
  'Fisher & Paykel','Smeg','Candy','Hoover',
];

const Brands = () => (
  <section id="brands" className="py-16 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-10">
      <h3 className="text-2xl font-bold text-gray-900">We Service All Major Brands</h3>
    </div>
    <div className="relative flex w-full">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
          <div key={i} className="mx-4 md:mx-8 px-6 py-3 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center min-w-[8rem]">
            <span className="font-bold text-gray-500 tracking-wide">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────── HOW IT WORKS ─────────────── */
const Process = () => (
  <section id="process" className="py-24 bg-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-gray-900 to-gray-900 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-cyan-400 tracking-wider uppercase mb-3">How It Works</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Simple, Fast, and Hassle-Free</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />
        {[
          { icon: <Phone className="w-10 h-10 text-cyan-400" />, step: 1, title: 'Call or WhatsApp',    desc: 'Reach out with your washing machine issue. We provide a preliminary consultation and schedule a visit.' },
          { icon: <Wrench className="w-10 h-10 text-cyan-400" />, step: 2, title: 'Technician Visits',  desc: 'Our expert arrives at your location, diagnoses the exact problem, and provides a transparent quote.' },
          { icon: <CheckCircle className="w-10 h-10 text-cyan-400" />, step: 3, title: 'Fixed & Guaranteed', desc: 'We repair your appliance on the spot. All repairs come with a warranty on replaced parts.' },
        ].map((s) => (
          <div key={s.step} className="relative text-center">
            <div className="w-24 h-24 mx-auto bg-gray-800 border-2 border-cyan-500 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              {s.icon}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-white">{s.step}</div>
            </div>
            <h4 className="text-xl font-bold mb-3">{s.title}</h4>
            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────── GALLERY ─────────────── */
const Gallery = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-cyan-600 tracking-wider uppercase mb-3">Our Work</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Servicing</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { src: "/ws1.jpg", label: "Expert Diagnosis", offset: "" },
    { src: "/ws2.jpg", label: "Quality Components", offset: "md:-translate-y-8" },
    { src: "/ws3.jpg", label: "Precision Tools", offset: "" },
        ].map((img, i) => (
          <div key={i} className={`group rounded-2xl overflow-hidden relative aspect-[4/3] shadow-lg ${img.offset}`}>
            <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-medium">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────── TESTIMONIALS ─────────────── */
const REVIEWS = [
  { name: 'Mr. Tan',  location: 'Sengkang',     stars: 5, text: 'Outstanding service! My Samsung washer stopped spinning completely. The technician arrived within 2 hours of my WhatsApp message and had it fixed quickly. Fair pricing too.' },
  { name: 'Mrs. Lee', location: 'Bukit Timah',   stars: 5, text: 'Very professional. Explained exactly what was wrong with our Bosch machine before proceeding with the repair. It\'s been working perfectly ever since. Highly recommended.' },
  { name: 'Ahmad',    location: 'Tampines',       stars: 5, text: 'Called them on a Sunday morning when the washing machine leaked all over the kitchen. They didn\'t charge ridiculous weekend rates and solved the issue fast.' },
];

const Testimonials = () => (
  <section className="py-24 bg-cyan-50">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-cyan-600 tracking-wider uppercase mb-3">Testimonials</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {REVIEWS.map((r, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: r.stars }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-8 flex-grow">"{r.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center font-bold text-cyan-800 text-lg">
                {r.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-900">{r.name}</div>
                <div className="text-sm text-gray-500">{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────── CONTACT ─────────────── */
const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Ready to Get Your Washing Machine Fixed?
      </h2>
      <p className="text-xl text-gray-600 mb-12">Contact us now for a fast, free consultation and quote.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <a
          href="tel:+6585301773"
          className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white hover:bg-cyan-600 px-8 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-cyan-500/25"
        >
          <PhoneCall className="w-6 h-6" />
          Call +65 8530 1773
        </a>
        <a
          href="https://wa.me/6585301773"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white hover:bg-[#20bd5a] px-8 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-[#25D366]/25"
        >
          <MessageCircle className="w-6 h-6" />
          WhatsApp Now
        </a>
      </div>
      <p className="text-gray-500 font-medium">
        Email:{' '}
        <a href="mailto:washingsolutionsg@gmail.com" className="text-cyan-600 hover:underline">
          washingsolutionsg@gmail.com
        </a>
      </p>
    </div>
  </section>
);

/* ─────────────── FOOTER ─────────────── */
const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-teal-400 flex items-center justify-center text-white font-bold text-sm">
          W
        </div>
        <span className="text-lg font-bold text-white tracking-tight">
          Washing<span className="text-cyan-500">Solutions</span><span className="text-teal-400">SG</span>
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="tel:+6585301773" className="hover:text-white transition-colors flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4" /> +65 8530 1773
        </a>
        <a href="mailto:washingsolutionsg@gmail.com" className="hover:text-white transition-colors text-sm">
          washingsolutionsg@gmail.com
        </a>
      </div>
      <p className="text-sm">© 2025 WashingSolutionsSG. All rights reserved.</p>
    </div>
  </footer>
);

/* ─────────────── FLOATING WHATSAPP ─────────────── */
const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/6585301773"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full whatsapp-pulse hover:scale-110 transition-transform group"
    aria-label="Chat with us on WhatsApp"
  >
    {/* Tooltip */}
    <div className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
      Chat with us
      <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
    </div>
    {/* Official WhatsApp SVG logo */}
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  </a>
);

/* ─────────────── APP ROOT ─────────────── */
export default function App() {
  return (
    <div className="min-h-screen w-full bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Problems />
        <Brands />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
