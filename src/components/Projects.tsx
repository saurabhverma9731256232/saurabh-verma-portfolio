import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Database, Shield, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Training and Placement (TNP) Website",
      description: "Collaborated with a senior to develop a full-stack web application for the college Training and Placement Cell with secure admin dashboard and multi-image management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Cloudinary"],
      features: [
        "JWT-based authentication with cookie session management",
        "Cloudinary integration for multi-image slider uploads",
        "Secure admin dashboard with protected routes",
        "Image deletion/editing capabilities",
        "Authentication middleware for route protection"
      ],
      github: "https://github.com/AdityacodeNIT/TnpBackend",
      icon: <Shield className="w-6 h-6" />,
      category: "Full Stack"
    },
    {
      title: "Finance Visualizer",
      description: "Personal finance visualizer app with category-based transactions and interactive pie chart visualization for better financial management.",
      tech: ["Next.js", "React", "shadcn/ui", "Recharts", "MongoDB"],
      features: [
        "Category-based transaction management",
        "Interactive pie chart visualization",
        "Modern UI with shadcn components",
        "Real-time data visualization",
        "Responsive design"
      ],
      github: "https://github.com/saurabhverma9731256232/Finance-Visualizer",
      icon: <Database className="w-6 h-6" />,
      category: "Frontend"
    },
    {
      title: "Food Delivery Frontend",
      description: "Designed a responsive frontend for a food delivery application with modern UI components and seamless user experience.",
      tech: ["React", "Tailwind CSS"],
      features: [
        "Responsive design for all devices",
        "Modern and intuitive user interface",
        "Component-based architecture",
        "Optimized performance",
        "Clean and maintainable code"
      ],
      github: "https://github.com/saurabhverma9731256232/Food-Delivery",
      icon: <Smartphone className="w-6 h-6" />,
      category: "Frontend"
    },
    {
      title: "YouTube Clone Backend",
      description: "Developed a comprehensive backend for a YouTube clone with video upload capabilities, user authentication, and comment system.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Video upload and management",
        "User authentication system",
        "Comment and interaction features",
        "RESTful API design",
        "Secure data handling"
      ],
      github: "https://github.com/saurabhverma9731256232/the-backend",
      icon: <Code className="w-6 h-6" />,
      category: "Backend"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Featured Projects</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Building <span className="bg-gradient-hero bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of projects demonstrating expertise in full-stack development, 
              modern web technologies, and innovative problem-solving approaches.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <CardTitle className="text-xl leading-tight truncate">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="bg-glass w-fit">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-glass-border">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="grid md:grid-cols-4 gap-6 animate-fade-in">
            <div className="bg-glass border border-glass-border rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <p className="text-muted-foreground text-sm">Projects Completed</p>
            </div>
            
            <div className="bg-glass border border-glass-border rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-tech mb-2">10+</div>
              <p className="text-muted-foreground text-sm">Technologies Used</p>
            </div>
            
            <div className="bg-glass border border-glass-border rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-success mb-2">3</div>
              <p className="text-muted-foreground text-sm">Tech Stacks</p>
            </div>
            
            <div className="bg-glass border border-glass-border rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground text-sm">Open Source</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm inline-block">
              <h3 className="text-2xl font-semibold mb-4">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                I'm always excited to work on new projects and explore innovative solutions. 
                Let's build something amazing together!
              </p>
              <Button size="lg" className="shadow-glow">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;