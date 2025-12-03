
import './App.css'
import React from 'react';
import Navbar from './navbar/navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Connect from './components/Connect';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Connect/>
    </>
  );
}

export default App;

