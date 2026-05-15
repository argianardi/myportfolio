import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'About', to: 'hero' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'portfolio' },
  { name: 'Contact', to: 'contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/90 backdrop-blur-md shadow-lg shadow-navy-900/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer group font-bold text-slate-light text-lg"
        >
          Home
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="!text-accent"
              className="nav-link cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1rywqIL3epOaElZtRfjvSdHuW1CXhYoW2/view"
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-4 !py-2 text-xs"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-accent text-2xl z-50"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 bg-navy-900/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 animate-fade-in">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsMobileOpen(false)}
              className="nav-link text-lg cursor-pointer"
            >
              <span className="text-accent mr-2 block text-center text-xs font-mono">
                0{i + 1}.
              </span>
              {item.name}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1rywqIL3epOaElZtRfjvSdHuW1CXhYoW2/view"
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-4"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
