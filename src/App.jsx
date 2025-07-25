
import './App.css'
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-white">
      <Navbar />
      <hr className="my-0 border-gray-700 opacity-50" />
      <About />
      <hr className="my-12 border-gray-700 opacity-50" />
      <Projects />
      <hr className="my-12 border-gray-700 opacity-50" />
      <Skills />
      <hr className="my-12 border-gray-700 opacity-50" />
      <Contact />
    </div>
  )
}

export default App
