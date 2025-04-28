
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-10 md:pb-20"
      ref={containerRef}
    >
      <div className="portfolio-container">
        <div className="max-w-3xl reveal">
          <p className="text-muted-foreground mb-3 font-medium">Hello, I'm</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Creative Designer & Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            I design and build digital experiences that are intuitive, elegant, and impactful. 
            With a focus on thoughtful interactions and clean aesthetics, I create work that 
            resonates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 transition-colors text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
