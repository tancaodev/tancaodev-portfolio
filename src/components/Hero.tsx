
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 container mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium mb-6">
          <div className="typing-container">
            <span className="typing-text">Hi, I'm Suraj</span>
          </div>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          Software Engineer with a passion for building products that solve real-world problems.
          I specialize in building web applications using modern technologies like React, Node.js, and TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex items-center gap-2 rounded-full px-6">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full px-6">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
