
import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "Brand Identity Design",
      description: "A comprehensive brand identity design for a luxury skincare brand, including logo, packaging, and digital presence.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Branding", "Design", "Identity"],
    },
    {
      title: "E-commerce Website Redesign",
      description: "Complete UX/UI redesign for an e-commerce platform, focusing on improving user experience and conversion rates.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["UI/UX", "Web Design", "E-commerce"],
      reversed: true,
    },
    {
      title: "Mobile App Development",
      description: "Designed and developed a productivity app that helps users track their daily habits and achieve their goals.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Mobile", "Development", "UI Design"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="portfolio-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected projects showcasing my expertise in design, development and branding.
            Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              reversed={project.reversed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
