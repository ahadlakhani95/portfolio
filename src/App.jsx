import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Skills from './components/myskills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Splash from './components/splash/Splash';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // hide splash after 2 seconds
    }, 4000);

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          <Cursor />
          <Navbar />
          <Hero />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
