import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Experience</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-hero bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gaining hands-on experience in web development while contributing to real-world projects.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-tech hidden md:block" />
            
            <div className="space-y-8">
              <Card className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-slide-up ml-0 md:ml-20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="hidden md:flex absolute -left-[4.5rem] w-4 h-4 bg-primary rounded-full border-4 border-background" />
                    <div className="flex-1">
                      <CardTitle className="text-2xl flex items-center gap-3 mb-2">
                        <Building className="w-6 h-6 text-primary" />
                        Web Development Intern
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          May 2025 – Present
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Young Theme (Remote)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Key Contributions</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Contributing to multiple live web development projects including <strong className="text-foreground">Ghumtrip</strong>, <strong className="text-foreground">Dostartup</strong>, and <strong className="text-foreground">YTPR</strong>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-tech rounded-full mt-2 flex-shrink-0" />
                        Developed responsive pages and UI components using <strong className="text-foreground">Next.js</strong> and <strong className="text-foreground">Tailwind CSS</strong>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                        Translated UI designs from Figma into modular code across dynamic frontend pages
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Coordinated with backend developers for API integration; backend implementation is in progress
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-glass">Next.js</Badge>
                      <Badge variant="outline" className="bg-glass">Tailwind CSS</Badge>
                      <Badge variant="outline" className="bg-glass">Figma</Badge>
                      <Badge variant="outline" className="bg-glass">API Integration</Badge>
                      <Badge variant="outline" className="bg-glass">Responsive Design</Badge>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Impact:</strong> Contributing to production-ready web applications 
                      while gaining valuable experience in modern frontend development practices and team collaboration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm inline-block">
              <h3 className="text-2xl font-semibold mb-4">Looking for New Opportunities</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Open to internships and full-time positions in web development, software engineering, 
                and research roles where I can contribute and continue growing.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Frontend Development</Badge>
                <Badge variant="secondary">Full Stack</Badge>
                <Badge variant="secondary">Research</Badge>
                <Badge variant="secondary">VLSI Design</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;