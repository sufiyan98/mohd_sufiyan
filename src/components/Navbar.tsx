import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    smooth={true}
    spy={true}
    offset={-100}
    className="relative px-4 py-2 group cursor-pointer"
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
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
          ? 'bg-primary-dark/80 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Code size={24} className="text-accent" />
            </motion.div>
            <span className="font-bold text-xl text-accent-light group-hover:text-accent transition-colors">
              Mohammed Sufiyan
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <NavLink key={item} to={item.toLowerCase()}>
                {item}
              </NavLink>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1hFSOdNH6T-ITv0JUURoANdLg4_-wCfrs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-accent text-primary-dark px-4 py-2 rounded-lg hover:bg-accent-light transition-colors"
            >
              Resume
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-accent-light hover:text-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>

          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-primary-dark flex flex-col items-center gap-4 py-4 md:hidden z-[999]">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <NavLink key={item} to={item.toLowerCase()}>
                  {item}
                </NavLink>
              ))}
              <button className="bg-accent text-primary-dark px-4 py-2 rounded-lg hover:bg-accent-light transition-colors">
                Resume
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
