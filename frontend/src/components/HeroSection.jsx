import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#2E7D32]/90 to-[#1B5E20] text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/80/37/22/803722e97b803f5d5f53e101d45bf2d5.jpg')] bg-cover bg-center opacity-10" 
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Gear Up For <br />
            Your <span className="text-[#2196F3]">Next Level</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
            High-performance equipment for the next generation of athletes. Push
            boundaries and elevate your game with GenZsport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary Button */}
            <button className="bg-white text-[#2E7D32] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              Shop Now <ArrowRight size={18} />
            </button>
            {/* Secondary Button */}
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-300">
              Explore Categories
            </button>
          </div>
        </div>
      </div>

      {/* Diagonal design element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 translate-y-8 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;