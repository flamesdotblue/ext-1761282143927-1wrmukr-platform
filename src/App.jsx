import React from 'react';
import Hero from './components/Hero';
import Article from './components/Article';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Hero />
      <main className="relative z-10">
        <Highlights />
        <Article />
      </main>
      <Footer />
    </div>
  );
}
