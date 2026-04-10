import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Stethoscope } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 py-3'
        : 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-[#1E88E5]/20 group-hover:ring-[#1E88E5]/50 transition-all duration-300 shadow-md">
              <img src="Chougule_logo.jpg" alt="Chougule Dental Clinic" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Chougule Dental</p>
              <p className="text-[11px] text-[#1E88E5] font-semibold tracking-wide uppercase">Multispeciality Clinic</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#1E88E5] dark:hover:text-[#42A5F5] rounded-lg hover:bg-[#1E88E5]/8 dark:hover:bg-[#1E88E5]/10 transition-all duration-200">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#1E88E5] dark:hover:text-[#42A5F5] transition-all duration-200">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#appointment"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#1E88E5]/30 hover:scale-105 transition-all duration-300">
              <Stethoscope size={15} />Book Now
            </a>
            <button className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}
                  className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#1E88E5] dark:hover:text-[#42A5F5] hover:bg-[#1E88E5]/8 dark:hover:bg-[#1E88E5]/10 rounded-xl transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#appointment" onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 mx-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white text-sm font-semibold">
                <Stethoscope size={15} />Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
