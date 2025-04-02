
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  skills,
}) => {
  return (
    <Card className="p-6 mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-lg text-muted-foreground">{company}</p>
        </div>
        <p className="text-sm text-muted-foreground mt-1 md:mt-0">{period}</p>
      </div>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "Jan 2021 - Present",
      description:
        "Leading the frontend development team, architecting scalable solutions, and mentoring junior developers. Implemented new features that increased user engagement by 45%.",
      skills: ["React", "TypeScript", "Node.js", "AWS", "Redux"],
    },
    {
      title: "Software Engineer",
      company: "WebSolutions Co.",
      period: "Mar 2019 - Dec 2020",
      description:
        "Developed and maintained responsive web applications for clients across various industries. Collaborated with designers to ensure pixel-perfect implementations.",
      skills: ["JavaScript", "React", "CSS", "MongoDB", "Express"],
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      period: "Jun 2017 - Feb 2019",
      description:
        "Built and integrated RESTful APIs, implemented UI components, and participated in agile development processes. Improved site performance by 35%.",
      skills: ["HTML", "CSS", "JavaScript", "Git", "PHP"],
    },
  ];

  return (
    <section id="experience" className="container mx-auto">
      <h2 className="section-title">Work Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
