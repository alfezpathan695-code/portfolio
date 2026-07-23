import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [<Home />, <About />, <Skills />, <Projects />, <Footer />];

function App() {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Preloader Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Full Page Wheel Scroll Handler
  useEffect(() => {
    if (loading) return;

    const handleWheel = (e) => {
      if (isScrolling) return;

      setIsScrolling(true);

      if (e.deltaY > 0) {
        // Scroll Down
        setCurrentIndex((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
      } else {
        // Scroll Up
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      // Cooldown to avoid fast multiple scrolls
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // 1 second animation lock
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [loading, isScrolling]);

  return (
    <div className="App" style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="wait">
        {loading ? (
          // Preloader
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              height: '100vh', width: '100vw', backgroundColor: '#0b0f19',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'center', position: 'fixed', zIndex: 9999
            }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              style={{
                width: '50px', height: '50px',
                border: '3px solid rgba(6, 182, 212, 0.1)',
                borderTop: '3px solid #06b6d4', borderRadius: '50%',
                marginBottom: '1rem'
              }}
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ color: '#06b6d4', fontFamily: 'monospace', letterSpacing: '2px', fontSize: '0.9rem' }}
            >
              INITIALIZING_PORTFOLIO...
            </motion.p>
          </motion.div>
        ) : (
          // Main Website Full-Screen Slider
          <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <Navbar />

            <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    height: 'calc(100vh - 70px)', // Navbar height minus karke
                    width: '100%',
                    position: 'absolute',
                    top: '70px',
                    overflowY: 'auto'
                  }}
                >
                  {sections[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;