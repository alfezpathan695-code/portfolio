import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Ultra-Smooth Physics Spring Motion Variant
const sectionVariant = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    scale: 0.94,
    filter: "blur(8px)" // Smooth entrance ke liye subtle blur
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 1.1, 
      ease: [0.22, 1, 0.36, 1] // Luxury Bezier Curve (Ultra-smooth deceleration)
    }
  }
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          /* Preloader Overlay */
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: '100vh', width: '100vw', backgroundColor: '#030712',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'center', position: 'fixed', zIndex: 9999
            }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              style={{
                width: '60px', height: '60px',
                border: '3px solid rgba(6, 182, 212, 0.1)',
                borderTop: '3px solid #06b6d4', borderRadius: '50%',
                marginBottom: '1.5rem'
              }}
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              style={{ color: '#06b6d4', fontFamily: 'monospace', letterSpacing: '3px', fontSize: '0.85rem' }}
            >
              PORTFOLIO_SYSTEM_LOADING...
            </motion.p>
          </motion.div>
        ) : (
          /* Main Interactive Sections */
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />

            {/* Home Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={sectionVariant}
            >
              <Home />
            </motion.section>

            {/* About Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={sectionVariant}
            >
              <About />
            </motion.section>

            {/* Skills Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={sectionVariant}
            >
              <Skills />
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={sectionVariant}
            >
              <Projects />
            </motion.section>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;