import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const slides = [
  {
    image: '/washingsolution.webp',
    title: 'Washing Machine Repair Service',
    subtitle: 'Professional technicians ready to fix all brands and models across Singapore'
  },
  {
    image: '/washingsolution1.webp',
    title: 'Expert Service Available',
    subtitle: 'Quick response time with emergency repair service - We come to you!'
  },
  {
    image: '/washingsolution5.webp',
    title: 'Affordable & Transparent Pricing',
    subtitle: 'No hidden charges. Free diagnosis with upfront quotation before any work'
  },
  {
    image: '/washingsolution3.webp',
    title: 'Satisfaction Guaranteed',
    subtitle: 'Quality repairs with warranty. Trusted by thousands of happy customers'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Auto slide (optimized)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* ✅ ONLY ONE IMAGE RENDER (BIG PERFORMANCE BOOST) */}
      <img
        src={slides[currentSlide].image}
        alt="Washing machine repair service Singapore"
        className="absolute inset-0 w-full h-full object-cover"
        loading={currentSlide === 0 ? "eager" : "lazy"}
        fetchpriority={currentSlide === 0 ? "high" : "auto"}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white z-10">
        <div className="container mx-auto px-4">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="tel:+6585301773"
              aria-label="Call WashingSolution SG"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              +65 8530 1773
            </a>

            <a
              href="https://wa.me/6585301773"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>

          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;