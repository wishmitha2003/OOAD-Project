import React from 'react';

// Components
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProductCategories } from '../components/ProductCategories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div >
     
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <AboutSection />
     
    </div>
  );
};

export default Home;