import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/20 cursor-none">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
