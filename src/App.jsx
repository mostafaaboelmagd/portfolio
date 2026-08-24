import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="bg-[#141414] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;