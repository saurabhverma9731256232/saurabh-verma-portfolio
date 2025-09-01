import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Java", "JavaScript"],
      color: "text-primary"
    },
    {
      category: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "Tailwind", "JavaScript", "Node.js", "Next.js", "React.js", "Express.js", "EJS"],
      color: "text-tech"
    },
    {
      category: "Database Management",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB"],
      color: "text-success"
    },
    {
      category: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "VS Code", "Postman", "Cloudinary"],
      color: "text-primary"
    },
    {
      category: "Cloud Platform",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS"],
      color: "text-tech"
    },
    {
      category: "Core Concepts",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Verilog HDL", "UVM", "Digital VLSI"],
      color: "text-success"
    }
  ];

  const proficiencyLevels = [
    { name: "Full Stack Development", level: 90, color: "bg-gradient-to-r from-primary to-tech" },
    { name: "Frontend Technologies", level: 95, color: "bg-gradient-to-r from-tech to-success" },
    { name: "Backend Development", level: 85, color: "bg-gradient-to-r from-success to-primary" },
    { name: "VLSI Design", level: 80, color: "bg-gradient-to-r from-primary to-success" },
    { name: "Database Management", level: 75, color: "bg-gradient-to-r from-tech to-primary" },
    { name: "Cloud Platforms", level: 70, color: "bg-gradient-to-r from-success to-tech" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Technical Skills</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-hero bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning web development, electronics engineering, 
              and cutting-edge technologies acquired through academic study and hands-on experience.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.category}</h3>
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
          <div className="bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {proficiencyLevels.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out animate-slide-up`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 text-center">Certifications & Training</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow flex-shrink-0">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Be10X AI Tools Workshop</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Comprehensive training on AI tools and their practical applications in development.
                      </p>
                      <Badge variant="outline" className="bg-glass">Certified</Badge>
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
                      <h4 className="font-semibold mb-2">Research Internship - Amity University</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Hands-on research experience in VLSI design and verification methodologies.
                      </p>
                      <Badge variant="outline" className="bg-glass">Completed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="mt-16 bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-center">Leadership & Community</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Core Member - GDG NIT Mizoram</h4>
                <p className="text-muted-foreground text-sm">
                  Active participant in Google Developer Groups, contributing to tech community events and workshops.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Website & Media Coordinator</h4>
                <p className="text-muted-foreground text-sm">
                  Managed website content and media for campus tech events, ensuring effective communication and engagement.
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