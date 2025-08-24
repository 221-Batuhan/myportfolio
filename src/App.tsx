import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';


export const LanguageContext = React.createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                </main>
                <Footer />
              </>
            } />
            <Route path="/project/:slug" element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <ProjectDetail />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
