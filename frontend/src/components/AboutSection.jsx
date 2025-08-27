import React from 'react';
import { Check } from 'lucide-react';

export const AboutSection = () => {
  const benefits = [
    'Premium quality sports equipment',
    'Designed for the next generation of athletes',
    'Performance-tested by professionals',
    'Sustainable manufacturing practices',
    '30-day satisfaction guarantee',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About <span className="text-[#2E7D32]">GenZsport</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Founded with a mission to revolutionize sports equipment for the
              next generation, GenZsport combines cutting-edge design with
              premium materials to create gear that helps you perform at your
              best. We believe in pushing boundaries, breaking records, and
              creating products that inspire active lifestyles.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2E7D32] flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#2E7D32] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1B5E20] transition-colors">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Athletes using GenZsport equipment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#2196F3]/10 rounded-lg z-[-1]"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#2E7D32]/10 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;