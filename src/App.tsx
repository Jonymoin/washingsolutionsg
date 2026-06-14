import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, Clock, ShieldCheck, Star, MessageCircle, Wrench, AlertCircle, Droplets, Zap, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const easeOut = [0.22, 1, 0.36, 1];
const easeInOut = [0.42, 0, 0.58, 1];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Brands", href: "#brands" },
    { name: "Why Us", href: "#why-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-primary text-white p-2 rounded-lg">
            <Wrench size={24} />
          </div>
          <span className="font-bold text-xl text-foreground tracking-tight">WashingSolution<span className="text-primary">SG</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://wa.me/6585301773" target="_blank" rel="noreferrer">
            <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
              <MessageCircle size={16} /> WhatsApp
            </Button>
          </a>
          <a href="tel:+6585301773">
            <Button className="gap-2">
              <Phone size={16} /> 8530 1773
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <a href="tel:+6585301773" className="w-full">
              <Button className="w-full gap-2 justify-center">
                <Phone size={16} /> Call 8530 1773
              </Button>
            </a>
            <a href="https://wa.me/6585301773" target="_blank" rel="noreferrer" className="w-full">
              <Button variant="outline" className="w-full gap-2 justify-center border-primary text-primary">
                <MessageCircle size={16} /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6585301773"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}      />
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-foreground text-sm font-medium px-3 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/hero-bg.png" 
          alt="Professional washing machine repair" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl text-white"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-3 py-1.5 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium">Available across Singapore today</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Fast, Certified <br/><span className="text-primary-foreground">Washing Machine</span> Repair
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Don't let a broken washing machine disrupt your day. Trusted by 2,000+ homes in Singapore with a 30-day warranty on all repairs.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+6585301773">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone size={20} /> Call Now: 8530 1773
              </Button>
            </a>
            <a href="https://wa.me/6585301773" target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 gap-2 bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm">
                <MessageCircle size={20} /> WhatsApp Us
              </Button>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-accent" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              <span>30-Day Warranty</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const problems = [
    { icon: <Zap className="text-primary" size={24} />, title: "Not Spinning / Slow Spin", desc: "Motor issues, broken belts, or worn carbon brushes." },
    { icon: <Droplets className="text-primary" size={24} />, title: "Water Not Draining", desc: "Clogged pumps, blocked hoses, or faulty drain pumps." },
    { icon: <AlertCircle className="text-primary" size={24} />, title: "Unusual Noise", desc: "Worn bearings, loose objects in drum, or suspension issues." },
    { icon: <ShieldCheck className="text-primary" size={24} />, title: "Door Won't Lock", desc: "Faulty door interlocks, broken handles, or control board errors." },
    { icon: <Wrench className="text-primary" size={24} />, title: "Error Codes", desc: "Diagnostics and reset for all major brand error codes." },
    { icon: <Wrench className="text-primary" size={24} />, title: "And Everything Else", desc: "Leaking water, power issues, stopping mid-cycle, bad smells, etc." },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Problems We Fix</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Expert Solutions for Every Issue</h3>
          <p className="text-muted-foreground text-lg">
            Whether your machine is noisy, leaking, or completely dead, our certified technicians can diagnose and fix it efficiently. We handle ALL washing machine problems.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {prob.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{prob.title}</h4>
              <p className="text-muted-foreground">{prob.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Brands() {
  const brands = [
    "Samsung", "LG", "Panasonic", "Bosch", "Electrolux", 
    "Whirlpool", "Mitsubishi", "Sharp", "Toshiba", "Hitachi", 
    "Haier", "Midea", "Fisher & Paykel", "Candy", "Beko"
  ];

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Brands We Service</h2>
            <h3 className="text-3xl font-bold text-foreground mb-4">We Fix All Major Brands</h3>
            <p className="text-muted-foreground mb-6">
              Our technicians are highly trained and carry spare parts for all major washing machine brands in Singapore, ensuring a fast fix.
            </p>
            <a href="#contact">
              <Button className="gap-2">
                Book a Repair <ChevronRight size={16} />
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {brands.map((brand, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex items-center justify-center p-4 bg-card rounded-xl border border-border/50 font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors text-center text-sm"
              >
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "2000+", label: "Successful Repairs" },
    { value: "30", label: "Days Warranty" },
    { value: "100%", label: "Islandwide Coverage" }
  ];

  return (
    <section id="why-us" className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Singapore's Trusted Repair Experts</h3>
          <p className="text-gray-300 text-lg">
            We don't just fix machines; we restore your peace of mind. Honest pricing, transparent communication, and guaranteed workmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Reach Out", desc: "Call or WhatsApp us describing your washing machine issue and brand." },
    { num: "02", title: "We Visit", desc: "Our technician arrives at your location anywhere in Singapore to diagnose the problem." },
    { num: "03", title: "Problem Fixed", desc: "We provide an upfront quote and fix it on the spot, backed by our 30-day warranty." }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src="/tech-tools.png" alt="Technician with tools" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Guaranteed</div>
                  <div className="text-muted-foreground text-sm">30-Day Warranty</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Simple Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">How to get your machine fixed</h3>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold text-xl">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Mrs. Tan", location: "Tampines", text: "My Samsung washer completely died right before the weekend. Called them up, they came within hours, replaced the control board, and saved my weekend. Very professional and tidy." },
    { name: "David L.", location: "Jurong East", text: "Honest pricing. Another company quoted me double to replace the motor, but the technician from WashingSolution found it was just a worn out belt. Fixed in 30 mins." },
    { name: "Sarah W.", location: "Sengkang", text: "The technician arrived on time, was very polite, and explained the issue clearly. The washing machine is running quietly again like it's brand new. Highly recommended!" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What Singaporeans Say</h3>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 relative"
            >
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-muted-foreground italic mb-6">"{review.text}"</p>
              <div className="font-bold text-foreground">{review.name}</div>
              <div className="text-sm text-muted-foreground">{review.location}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 bg-card rounded-3xl overflow-hidden shadow-sm border border-border/50">
          <motion.div 
            className="lg:w-1/2 p-10 md:p-16 bg-foreground text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to fix your machine?</h3>
            <p className="text-gray-300 mb-10">
              Get in touch with us for a fast quote and arrange a visit from our expert technicians.
            </p>

            <div className="space-y-8">
              <a href="tel:+6585301773" className="flex items-center gap-4 hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={24} className="text-white group-hover:text-accent" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Call or WhatsApp</div>
                  <div className="text-xl font-bold">+65 8530 1773</div>
                </div>
              </a>

              <a href="mailto:washingsolutionsg@gmail.com" className="flex items-center gap-4 hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={24} className="text-white group-hover:text-accent" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email Us</div>
                  <div className="text-lg font-bold">washingsolutionsg@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Service Area</div>
                  <div className="text-lg font-bold">All Over Singapore</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Operating Hours</div>
                  <div className="text-lg font-bold">Mon - Sun: 8am - 10pm</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 p-10 md:p-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" className="w-full h-12 px-4 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Your phone number" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Machine Brand & Issue</label>
                <textarea rows={4} className="w-full p-4 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="E.g. Samsung washer not spinning..." />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-base">
                Send Request
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                We'll get back to you as soon as possible. For urgent inquiries, please call us directly.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Wrench size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight">WashingSolution<span className="text-primary">SG</span></span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Professional, fast, and reliable washing machine repair services across Singapore. Your trusted local experts with 7 years of experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">Brands Supported</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" /> +65 8530 1773
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" /> washingsolutionsg@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" /> Serving all areas in Singapore
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} WashingSolution SG. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="font-sans antialiased text-foreground bg-background selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Brands />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;