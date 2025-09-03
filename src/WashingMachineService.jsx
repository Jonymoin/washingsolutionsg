import React, { useState } from 'react';
import { CheckCircle, Wrench, Clock, Shield, Phone, Star, AlertCircle } from 'lucide-react';

const WashingMachineService = () => {
  const [activeTab, setActiveTab] = useState('problems');

  const commonProblems = [
    {
      icon: '🌊',
      title: 'Water Not Filling or Draining',
      description: 'Blocked filters, faulty valves, or drainage issues preventing proper water flow.'
    },
    {
      icon: '🔄',
      title: 'Machine Not Spinning',
      description: 'Motor problems, belt issues, or lid switch malfunctions affecting spin cycle.'
    },
    {
      icon: '🔊',
      title: 'Excessive Noise & Vibration',
      description: 'Unbalanced loads, worn bearings, or loose parts causing loud operation.'
    },
    {
      icon: '⚡',
      title: 'Electrical Issues',
      description: 'Power problems, control panel failures, or wiring issues.'
    },
    {
      icon: '🚪',
      title: 'Door/Lid Problems',
      description: 'Faulty latches, broken hinges, or door seal issues.'
    },
    {
      icon: '🧼',
      title: 'Detergent Dispenser Issues',
      description: 'Clogged dispensers or improper soap distribution.'
    },
    {
      icon: '💧',
      title: 'Water Leakage',
      description: 'Damaged hoses, worn seals, or loose connections causing water leaks.'
    },
    {
      icon: '❄️',
      title: 'Temperature Control Problems',
      description: 'Faulty heating elements or thermostat issues affecting water temperature.'
    },
    {
      icon: '⏱️',
      title: 'Timer & Control Issues',
      description: 'Malfunctioning timers or electronic control board problems.'
    },
    {
      icon: '🧽',
      title: 'Poor Cleaning Performance',
      description: 'Inadequate washing due to mechanical or water pressure issues.'
    }
  ];

  const pricingFeatures = [
    'Transparent pricing discussed before work begins',
    'No hidden fees or surprise charges',
    'Free diagnostic assessment',
    'Parts replacement quoted separately',
    'Service warranty included',
    'Same-day service available'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Wrench className="w-12 h-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800"> WashingRepair SG</h1>
          </div>
          <p className="text-xl text-gray-600 mb-6">Professional • Affordable • Reliable Service</p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
              <Clock className="w-8 h-8 text-green-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Same Day Service</h3>
              <p className="text-gray-600 text-sm">Quick response to get your machine running</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <Shield className="w-8 h-8 text-blue-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">No Hidden Fees</h3>
              <p className="text-gray-600 text-sm">All costs discussed upfront</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
              <Star className="w-8 h-8 text-purple-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Expert Technicians</h3>
              <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Affordable Pricing</h2>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-6 mb-6">
              <div className="text-4xl font-bold mb-2">$65 - $160</div>
              <p className="text-lg">Most Common Repairs</p>
              <p className="text-sm opacity-90 mt-2">*Exact pricing depends on issue complexity and machine condition</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Included:</h3>
              <div className="space-y-3">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pricing Factors:</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Complexity of Issue:</strong> Simple fixes vs. major repairs
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Machine Condition:</strong> Age and overall state of appliance
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Parts Replacement:</strong> If genuine parts are needed (quoted separately)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-center text-gray-700">
              <strong>100% Transparent:</strong> All costs are discussed and approved before any work begins. No surprises, no hidden fees!
            </p>
          </div>
        </div>

        {/* Problems Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Common Washing Machine Problems We Fix</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((problem, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{problem.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{problem.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      problem.severity === 'High' ? 'bg-red-100 text-red-700' :
                      problem.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {problem.severity} Priority
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Problem Listed?</h3>
            <p className="mb-6">Our experienced technicians can diagnose and fix any washing machine issue!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
  href="tel:+6585301773"
  onClick={() => {
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", {
        send_to: "AW-17526097727/0fozCKCe0JIbEL-OjKVB",
        value: 1.0,
        currency: "SGD",
      });
    }
  }}
  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
>
  <Phone className="w-5 h-5 mr-2" />
  Call Now: +65 8530 1773
</a>

<a
  href="https://wa.me/6585301773"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
>
  WhatsApp Us
</a>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-6 bg-gray-800 text-white rounded-lg">
          <h3 className="text-xl font-bold mb-2">Ready to Fix Your Washing Machine?</h3>
          <p className="mb-4">Get professional service at unbeatable prices across Singapore</p>
          <p className="text-sm text-gray-300">Service areas: All Singapore districts • Available 7 days a week</p>
        </div>
      </div>
    </div>
  );
};

export default WashingMachineService;