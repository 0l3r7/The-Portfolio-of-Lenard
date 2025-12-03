
import './App.css'
import React from 'react';
import Navbar from './navbar/navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

