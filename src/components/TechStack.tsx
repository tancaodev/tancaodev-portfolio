
import React from "react";
import { Code, FileCode, Palette, Monitor, Layout } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const TechStack: React.FC = () => {
  const technologies: TechItem[] = [
    {
      name: "HTML",
      icon: <Monitor className="w-10 h-10 text-orange-500" />,
      description: "Semantic markup for modern web applications"
    },
    {
      name: "CSS",
      icon: <Palette className="w-10 h-10 text-blue-500" />,
      description: "Styling web pages with precision and creativity"
    },
    {
      name: "React",
      icon: <Code className="w-10 h-10 text-blue-400" />,
      description: "Building interactive user interfaces with components"
    },
    {
      name: "Next.js",
      icon: <FileCode className="w-10 h-10 text-black dark:text-white" />,
      description: "The React framework for production-ready applications"
    },
    {
      name: "Tailwind",
      icon: <Layout className="w-10 h-10 text-teal-500" />,
      description: "Utility-first CSS framework for rapid UI development"
    }
  ];

  return (
    <section id="tech-stack" className="container mx-auto py-20">
      <h2 className="section-title text-center mb-12">Tech Stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-6 bg-secondary/30 dark:bg-secondary/20 rounded-lg hover:shadow-md transition-all text-center"
          >
            <div className="mb-4 p-4 bg-background rounded-full">
              {tech.icon}
            </div>
            <h3 className="text-lg font-medium mb-2">{tech.name}</h3>
            <p className="text-sm text-muted-foreground">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
