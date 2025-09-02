import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Wrench, Clock, Shield, Star, CheckCircle, Menu, X, MapPin, Mail } from 'lucide-react';

const WashingRepairSG = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "Excellent service! Fixed my Samsung washing machine in under 2 hours. Very professional and reasonably priced.",
      author: "Mrs. Lim",
      location: "Tampines",
      rating: 5
    },
    {
      text: "Quick response and honest pricing. My LG washer was leaking badly and they fixed it the same day. Highly recommend!",
      author: "Mr. Chen",
      location: "Jurong West",
      rating: 5
    },
    {
      text: "Professional technician who explained everything clearly. My Bosch washing machine is working like new again. Great service!",
      author: "Sarah T.",
      location: "Orchard",
      rating: 5
    },
    {
      text: "Called them for emergency repair on Sunday. They came within 3 hours and fixed my Electrolux washer perfectly. Worth every dollar!",
      author: "David Wong",
      location: "Punggol",
      rating: 5
    },
    {
      text: "Transparent pricing and quality work. No hidden charges. Fixed my Panasonic washing machine and provided 90-day warranty.",
      author: "Mrs. Rahman",
      location: "Bedok",
      rating: 5
    }
  ];

  // Auto-rotate reviews every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const brands = [
    'Samsung', 'LG', 'Panasonic', 'Electrolux', 'Bosch', 'Whirlpool', 
    'Haier', 'Midea', 'Sharp', 'Toshiba', 'Hitachi', 'Fisher & Paykel'
  ];

  const faqs = [
    {
      question: "How quickly can you service my washing machine?",
      answer: "We offer same-day service for most areas in Singapore. Our technicians can usually arrive within 1-2 hours of your call during business hours."
    },
    
    {
      question: "What are your service charges?",
      answer: "Repair costs vary depending on the issue and parts needed. We provide transparent pricing before starting any work. Most of the work fall in range on $60 to $160"
    },
    {
      question: "Do you service all washing machine brands?",
      answer: "Yes, our experienced technicians can service all major washing machine brands including Samsung, LG, Bosch, Electrolux, and many others."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, PayNow, bank transfer, and all major credit cards for your convenience."
    }
  ];

  const whatsappLink = `https://wa.me/+6585301773?text=Hello%20WashingRepair%20SG,%20I%20need%20washing%20machine%20service.`;

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Top Action Bar */}
      <div className="md:hidden bg-blue-600 text-white py-2 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex space-x-2">
            <a 
              href={`tel:+6585301773`} 
              className="flex-1 bg-blue-700 hover:bg-blue-800 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Call Now</span>
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 md:top-0 z-40 md:z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-1 rounded-lg">
                <img src="/logo.webp" alt="" className='w-12'/>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-600">WashingRepair SG</h1>
                <p className="text-sm text-gray-600">Professional Washing Machine Service</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#brands" className="text-gray-700 hover:text-blue-600 transition-colors">Brands</a>
              <a href="#why-us" className="text-gray-700 hover:text-blue-600 transition-colors">Why Us</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            {/* Contact Buttons */}
            <div className="hidden md:flex space-x-3">
              <a href={`tel:+6585301773`} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
                <a href="#brands" className="text-gray-700 hover:text-blue-600">Brands</a>
                <a href="#why-us" className="text-gray-700 hover:text-blue-600">Why Us</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              </nav>
              <div className="flex space-x-3 mt-4">
                <a href={`tel:+6585301773`} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 flex-1 justify-center">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 flex-1 justify-center">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Singapore's #1 Washing Machine Repair Service</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Fast, reliable, and affordable washing machine repair service across Singapore. Same-day service available.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={`tel:+6585301773`} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+65 8530 1773</span>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Repair & Maintenance</h3>
              <p className="text-gray-600">Expert diagnosis and repair of all washing machine issues including motor problems, drainage issues, and electrical faults.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Same-Day Service</h3>
              <p className="text-gray-600">Quick response time with same-day service available. We understand the urgency of getting your washing machine working again.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Technician</h3>
              <p className="text-gray-600">All repairs done by our expert technicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Brands We Service</h2>
          <p className="text-center text-gray-600 mb-8">Our certified technicians are experienced with all major washing machine brands</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                <h3 className="font-bold text-gray-800">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose WashingRepair SG?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">5+ Years Experience</h3>
                    <p className="text-gray-600">Our team has over 5 years of combined experience in washing machine repair and maintenance across Singapore.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees or surprise charges. We provide upfront pricing and get your approval before starting any work.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Genuine Parts Only</h3>
                    <p className="text-gray-600">We use only original manufacturer parts to ensure the longevity and reliability of your washing machine.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Island-Wide Coverage</h3>
                    <p className="text-gray-600">We service all areas in Singapore with fast response times and professional service.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-3">
                    <svg className="h-8 w-8" viewBox="0 0 24 24">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">4.9/5 Google Rating</h3>
                <p className="text-gray-600 mb-6">Based on 500+ verified Google reviews</p>
                <div className="bg-blue-50 p-6 rounded-lg min-h-[120px] flex flex-col justify-center">
                  <div className="flex text-yellow-500 justify-center mb-3">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-700 mb-3">"{reviews[currentReview].text}"</p>
                  <p className="text-sm font-bold">- {reviews[currentReview].author}, {reviews[currentReview].location}</p>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Features */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Emergency Repair Service</h2>
          <p className="text-xl mb-8">Washing machine breakdown? We're here to help 24/7 for emergency repairs!</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Emergency</h3>
              <p>Available round the clock for urgent repairs</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Island-Wide</h3>
              <p>Serving all areas across Singapore</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick Response</h3>
              <p>Average response time: 1 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 focus:outline-none focus:border-blue-500"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg pr-8">{faq.question}</h3>
                    <span className="text-2xl text-gray-400">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="bg-gray-50 border-l border-r border-b border-gray-200 rounded-b-lg p-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p>+6585301773</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-green-400" />
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p>+6585301773</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-red-400" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p>WashingRepairsg@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="font-bold">Service Area</p>
                    <p>All areas in Singapore</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-yellow-400 font-bold">
                  <span>Emergency Service:</span>
                  <span>24/7 Available</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-blue-600 rounded-lg">
                <h4 className="font-bold text-lg mb-4">Ready to Fix Your Washing Machine?</h4>
                <p className="mb-4">Don't let a broken washing machine disrupt your daily routine. Contact us now for fast, professional service!</p>
                <div className="flex space-x-4">
                  <a href={`tel:+6585301773`} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">WashingRepair SG</h3>
          </div>
          <p className="text-gray-400 mb-4">Professional Washing Machine Repair Service in Singapore</p>
          <p className="text-sm text-gray-500">© 2025 WashingRepair SG. All rights reserved. | Licensed & Insured</p>
        </div>
      </footer>

      {/* Mobile Top Action Bar - Spacer for mobile */}
      <div className="md:hidden h-16"></div>

      {/* Fixed WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default WashingRepairSG;