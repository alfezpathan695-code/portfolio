import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 Second Initializer screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          // Preloader Smooth Overlay fading animation
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
          // Main Website Structure
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            
            {/* Fade In Up Motion Wrapper for Sections */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Home />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <About />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Skills />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Projects />
            </motion.div>
             <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;