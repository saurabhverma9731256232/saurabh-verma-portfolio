import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, FileText, University } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "Design, Analysis and Verification using UVM of SRAM Architectures",
      institution: "NIT Mizoram & Amity University",
      status: "Submitted",
      description: "Compared 6T, 7T, and 8T SRAM architectures using Verilog HDL and verified functionality with UVM while analyzing power metrics including static, dynamic, and total power consumption.",
      keywords: ["SRAM", "Verilog HDL", "UVM", "Power Analysis", "VLSI"],
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Design and Verification of an Automatic Car Parking System with Emergency Control",
      institution: "NIT Mizoram & Amity University", 
      status: "Submitted",
      description: "Designed an 8-slot smart parking system using Verilog HDL with SRAM integration, implementing emergency override, billing system, and real-time verification capabilities.",
      keywords: ["Smart Parking", "Verilog HDL", "SRAM Integration", "Emergency Systems", "Real-time Systems"],
      icon: <University className="w-6 h-6" />
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Research Publications</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Academic <span className="bg-gradient-hero bg-clip-text text-transparent">Contributions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contributing to the advancement of VLSI design and smart systems through innovative research 
              in collaboration with leading academic institutions.
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {publications.map((pub, index) => (
              <Card 
                key={index}
                className="bg-glass border-glass-border backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow">
                      {pub.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                        <CardTitle className="text-xl lg:text-2xl leading-tight">
                          {pub.title}
                        </CardTitle>
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 w-fit"
                        >
                          {pub.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {pub.institution}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">Research Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, i) => (
                        <Badge key={i} variant="outline" className="bg-glass">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" disabled>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Under Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Statistics */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="bg-glass border border-glass-border rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <p className="text-muted-foreground">Research Papers</p>
              <p className="text-sm text-muted-foreground mt-1">Submitted for Publication</p>
            </div>
            
            <div className="bg-glass border border-glass-border rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-4xl font-bold text-tech mb-2">2</div>
              <p className="text-muted-foreground">Institutions</p>
              <p className="text-sm text-muted-foreground mt-1">Collaborative Research</p>
            </div>
            
            <div className="bg-glass border border-glass-border rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-4xl font-bold text-success mb-2">5+</div>
              <p className="text-muted-foreground">Technologies</p>
              <p className="text-sm text-muted-foreground mt-1">VLSI & System Design</p>
            </div>
          </div>

          {/* Research Areas */}
          <div className="mt-16 bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-center">Research Interests</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center">
                  <div className="w-2 h-6 bg-gradient-hero rounded-full mr-3" />
                  VLSI Design & Verification
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SRAM Architecture Analysis</li>
                  <li>• Universal Verification Methodology (UVM)</li>
                  <li>• Power Consumption Optimization</li>
                  <li>• Digital Circuit Design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center">
                  <div className="w-2 h-6 bg-gradient-hero rounded-full mr-3" />
                  Smart Systems & IoT
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automated Parking Systems</li>
                  <li>• Emergency Control Systems</li>
                  <li>• Real-time System Verification</li>
                  <li>• Intelligent Infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;