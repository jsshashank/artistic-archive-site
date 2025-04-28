
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Front-end Development", level: 85 },
    { name: "Branding", level: 80 },
    { name: "Illustration", level: 75 },
    { name: "Mobile Design", level: 85 },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate designer and developer with over 5 years of experience creating 
              digital products that solve real problems. I believe in the power of thoughtful 
              design and clean code to create exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines strategic thinking, user empathy, and technical expertise to 
              create solutions that are both beautiful and functional. I'm constantly learning 
              and evolving my skills to stay at the forefront of design and development trends.
            </p>
            <p className="text-muted-foreground">
              When I'm not designing or coding, you'll find me exploring new places, reading about 
              emerging technologies, or experimenting with new creative techniques.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-serif font-semibold mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
