
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 container mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-sm font-medium text-muted-foreground mb-2">
          Hi, my name is
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-6">
          Suraj.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
          I build things for the web.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          I'm a software engineer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products at a software company.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex items-center gap-2 rounded-full px-6">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2 rounded-full px-6">
            Resume
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
