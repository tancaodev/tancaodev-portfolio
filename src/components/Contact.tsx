
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container mx-auto">
      <h2 className="section-title">Get In Touch</h2>
      <div className="max-w-2xl mx-auto">
        <Card className="p-6 text-center">
          <p className="text-lg mb-6">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
          <div className="flex justify-center mb-8">
            <Button className="rounded-full px-6 flex items-center gap-2">
              <Mail className="h-4 w-4" /> 
              <a href="mailto:contact@example.com">contact@example.com</a>
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
            >
              <Send className="h-6 w-6" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
