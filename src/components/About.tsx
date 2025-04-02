
import React from "react";
import { Card } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <Card className="p-6 h-full">
            <p className="text-lg mb-4">
              I'm a software engineer with 5+ years of experience in full-stack development,
              specializing in React, Node.js, and TypeScript. I'm passionate about building
              products that make a difference in people's lives.
            </p>
            <p className="text-lg mb-4">
              My journey in tech began during my university years, where I started building
              websites for local businesses. Since then, I've worked with startups and
              established companies to deliver scalable, user-friendly applications.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring hiking trails, reading science
              fiction, or experimenting with new cooking recipes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
