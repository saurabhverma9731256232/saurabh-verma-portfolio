import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Passionate About <span className="bg-gradient-hero bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Electronics and Communication Engineering student at NIT Mizoram with a strong foundation 
              in web development and research. Currently working on cutting-edge projects in both 
              software development and VLSI design.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Education Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Maintaining an outstanding CGPA of 8.98/10 at NIT Mizoram, demonstrating consistent academic excellence.
                </p>
                <Badge variant="outline">NIT Mizoram</Badge>
              </CardContent>
            </Card>

            <Card className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Research Impact</h3>
                <p className="text-muted-foreground mb-4">
                  Published research on SRAM architectures and smart parking systems, contributing to academic innovation.
                </p>
                <Badge variant="outline">2 Publications</Badge>
              </CardContent>
            </Card>

            <Card className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Career Vision</h3>
                <p className="text-muted-foreground mb-4">
                  Seeking dynamic roles to apply technical knowledge and contribute meaningfully to innovative organizations.
                </p>
                <Badge variant="outline">Growth Mindset</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-hero rounded-full mr-4" />
                  Academic Journey
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <div>
                      <p className="font-semibold">B.Tech ECE</p>
                      <p className="text-sm text-muted-foreground">NIT Mizoram</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-semibold">8.98/10</p>
                      <p className="text-sm text-muted-foreground">2023-2027</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <div>
                      <p className="font-semibold">Senior Secondary</p>
                      <p className="text-sm text-muted-foreground">Saraswati Shishu Mandir</p>
                    </div>
                    <div className="text-right">
                      <p className="text-success font-semibold">83.2%</p>
                      <p className="text-sm text-muted-foreground">2022</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <div>
                      <p className="font-semibold">Secondary</p>
                      <p className="text-sm text-muted-foreground">Saraswati Shishu Mandir</p>
                    </div>
                    <div className="text-right">
                      <p className="text-success font-semibold">86.17%</p>
                      <p className="text-sm text-muted-foreground">2020</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-hero rounded-full mr-4" />
                  Career Objective
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a motivated and detail-oriented Electronics and Communication Engineering student, 
                  I aim to associate myself with a professionally driven and well-respected organization. 
                  I seek a dynamic and challenging role where I can apply my technical knowledge, 
                  development skills, and enthusiasm to contribute meaningfully while continuously 
                  learning and growing in my career.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Innovation</Badge>
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">Continuous Learning</Badge>
                  <Badge variant="secondary">Technical Excellence</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;