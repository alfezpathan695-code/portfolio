import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Shocking Scroll Animation Configuration
const sectionVariant = {
  hidden: { 
    opacity: 0, 
    y: 80, 
    scale: 0.9,
    rotateX: 10 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1] 
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
    <div className="App" style={{ perspective: "1000px" }}>
      <AnimatePresence mode="wait">
        {loading ? (
          /* Preloader Overlay */
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              height: '100vh', width: '100vw', backgroundColor: '#030712',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'center', position: 'fixed', zIndex: 9999
            }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
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
            transition={{ duration: 0.8 }}
          >
            <Navbar />

            {/* Home Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionVariant}
            >
              <Home />
            </motion.section>

            {/* About Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionVariant}
            >
              <About />
            </motion.section>

            {/* Skills Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionVariant}
            >
              <Skills />
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
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