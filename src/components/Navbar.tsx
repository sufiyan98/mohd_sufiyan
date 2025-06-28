import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Sun, Moon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => (
  <Link
    to={to}
    smooth={true}
    spy={true}
    offset={-100}
    className="relative px-3 py-2 group cursor-pointer text-sm sm:text-base"
    onClick={onClick}
  >
    <span className="relative z-10 text-accent-light group-hover:text-accent transition-colors duration-300">
      {children}
    </span>
    <motion.span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [altTheme, setAltTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "alt";
    }
    return false;
  });

  useEffect(() => {
    if (altTheme) {
      document.body.classList.add("theme-alt");
      localStorage.setItem("theme", "alt");
    } else {
      document.body.classList.remove("theme-alt");
      localStorage.setItem("theme", "default");
    }
  }, [altTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-dark/80 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <Code size={24} className="text-accent" />
            </motion.div>
            <span className="font-bold text-lg sm:text-xl text-accent-light group-hover:text-accent transition-colors">
              Mohammed Sufiyan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <NavLink key={item} to={item.toLowerCase()}>
                {item}
              </NavLink>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={() => setAltTheme((v) => !v)}
              className="p-2 rounded-lg border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-primary-dark transition-colors flex items-center"
            >
              {altTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1hFSOdNH6T-ITv0JUURoANdLg4_-wCfrs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary-dark px-4 py-2 rounded-lg hover:bg-accent-light transition-colors border-2 border-accent text-sm sm:text-base"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              aria-label="Toggle theme"
              onClick={() => setAltTheme((v) => !v)}
              className="p-2 rounded-lg border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-primary-dark transition-colors flex items-center"
            >
              {altTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-accent-light hover:text-accent transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="absolute top-full left-0 w-full bg-primary-dark flex flex-col items-center gap-4 py-4 md:hidden z-[999]"
              >
                {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <NavLink
                    key={item}
                    to={item.toLowerCase()}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                ))}
                <a
                  href="https://drive.google.com/file/d/16rE1e334xByep3DJoF0Hd_RaDRcFKkJN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary-dark px-4 py-2 rounded-lg hover:bg-accent-light transition-colors border-2 border-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
