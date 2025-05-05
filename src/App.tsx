import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;