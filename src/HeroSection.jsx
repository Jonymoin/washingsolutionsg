import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* LCP IMAGE AS IMG FOR FASTER LOAD */}
      <img
        src={slides[0].image}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}
        fetchpriority="high"
      />

      {/* OTHER SLIDES AS BACKGROUND IMAGES (LAZY) */}
      {slides.slice(1).map((slide, index) => (
        <div
          key={index + 1}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index + 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          loading="lazy"
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
  <a
    href="tel:+6585301773"
    className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
  >
    <Phone className="h-5 w-5" />
    <span>+65 8530 1773</span>
  </a>

  <a
    href="https://wa.me/6585301773"
    target="_blank"
    className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
  >
    <MessageCircle className="h-5 w-5" />
    <span>WhatsApp Us</span>
  </a>
</div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
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