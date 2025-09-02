"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Java", "JavaScript"],
      color: "text-primary",
    },
    {
      category: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "Node.js",
        "Next.js",
        "React.js",
        "Express.js",
        "EJS",
      ],
      color: "text-tech",
    },
    {
      category: "Database Management",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB"],
      color: "text-success",
    },
    {
      category: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "VS Code", "Postman", "Cloudinary"],
      color: "text-primary",
    },
    {
      category: "Cloud Platform",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS"],
      color: "text-tech",
    },
    {
      category: "Core Concepts",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Verilog HDL", "UVM", "Digital VLSI"],
      color: "text-success",
    },
  ];

  const proficiencyLevels = [
    {
      name: "Full Stack Development",
      level: 90,
      color: "stroke-primary",
    },
    {
      name: "Frontend Technologies",
      level: 95,
      color: "stroke-tech",
    },
    {
      name: "Backend Development",
      level: 85,
      color: "stroke-success",
    },
    {
      name: "VLSI Design",
      level: 80,
      color: "stroke-primary",
    },
    {
      name: "Database Management",
      level: 75,
      color: "stroke-tech",
    },
    {
      name: "Cloud Platforms",
      level: 70,
      color: "stroke-success",
    },
  ];

  const proficiencyRef = useRef(null);
  const inView = useInView(proficiencyRef, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              Technical Skills
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning web development, electronics
              engineering, and cutting-edge technologies acquired through
              academic study and hands-on experience.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${category.color}`}>{category.icon}</div>
                    <h3 className="font-semibold text-lg">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-glass hover:bg-card transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div
            ref={proficiencyRef}
            className="bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm animate-fade-in"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
              {proficiencyLevels.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-3"
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Circular Progress */}
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 -rotate-90">
                      {/* Background */}
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        className="stroke-muted"
                        strokeWidth="12"
                        fill="none"
                      />
                      {/* Animated Foreground */}
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        className={`${skill.color}`}
                        strokeWidth="12"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 56}
                        strokeDashoffset={2 * Math.PI * 56}
                        animate={
                          inView
                            ? {
                                strokeDashoffset:
                                  2 * Math.PI * 56 * (1 - skill.level / 100),
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <span className="font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow flex-shrink-0">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Be10X AI Tools Workshop
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Comprehensive training on AI tools and their practical
                        applications in development.
                      </p>
                      <Badge variant="outline" className="bg-glass">
                        Certified
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow flex-shrink-0">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Research Internship - Amity University
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Hands-on research experience in VLSI design and
                        verification methodologies.
                      </p>
                      <Badge variant="outline" className="bg-glass">
                        Completed
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="mt-16 bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Leadership & Community
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">
                  Core Member - GDG NIT Mizoram
                </h4>
                <p className="text-muted-foreground text-sm">
                  Active participant in Google Developer Groups, contributing to
                  tech community events and workshops.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">
                  Website & Media Coordinator
                </h4>
                <p className="text-muted-foreground text-sm">
                  Managed website content and media for campus tech events,
                  ensuring effective communication and engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
