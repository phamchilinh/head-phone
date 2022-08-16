import React from 'react';

import { Footer } from '../../navigation/Footer';
import { Header } from '../../navigation/Header';
import { Navbar } from '../../navigation/Navbar';
import { Effortless } from './Effortless';
import { Feature } from './Feature';
import { Hero } from './Hero';
import { Marketer } from './Marketer';
import { MarketingStrategies } from './MarketingStrategies';
import { ProductManager } from './ProductManager';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Effortless />
      <ProductManager />
      <Marketer />
      <Hero />
      <MarketingStrategies />
      <Footer />
    </>
  );
};
