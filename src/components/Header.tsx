
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="portfolio-container flex justify-between items-center">
        <a href="#" className="text-xl font-serif font-semibold tracking-tight">
          Portfolio
        </a>
        
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-muted-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Contact
          </button>
        </div>
        
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background absolute top-full left-0 right-0 border-t animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-muted-foreground transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-muted-foreground transition-colors py-2">
              Projects
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-muted-foreground transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-muted-foreground transition-colors py-2">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
