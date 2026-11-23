import { useState, useEffect } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-gray-100 text-gray-800'} flex justify-center items-center p-4`}>
      <div className={`w-full max-w-4xl ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl shadow-2xl overflow-hidden border`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <Education />
          <Experience />
          <Reviews />
        </main>
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;