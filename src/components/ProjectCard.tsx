
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  reversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  reversed = false,
}) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-16 first:mt-0 last:mb-0 reveal",
      reversed && "md:flex-row-reverse"
    )}>
      <div className={cn(
        "order-2",
        reversed ? "md:order-1" : "md:order-2"
      )}>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className={cn(
        "flex flex-col justify-center order-1",
        reversed ? "md:order-2" : "md:order-1"
      )}>
        <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-secondary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="self-start flex items-center gap-2 font-medium hover:text-muted-foreground transition-colors">
          View Project
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
