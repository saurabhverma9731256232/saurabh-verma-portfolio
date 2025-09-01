import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, FileDown } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
        <div className="absolute top-32 right-32 w-1 h-1 bg-tech rounded-full animate-float" />
        <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-success rounded-full animate-pulse-slow" />
        <div className="absolute bottom-32 right-20 w-1 h-1 bg-primary rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  BTech ECE • NIT Mizoram
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Saurabh
                  <span className="block bg-gradient-hero bg-clip-text text-transparent">
                    Verma
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Full Stack Developer & Electronics Engineer crafting innovative web solutions 
                  and conducting cutting-edge research in VLSI design.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">MERN Stack</Badge>
                <Badge variant="outline" className="px-3 py-1">Next.js</Badge>
                <Badge variant="outline" className="px-3 py-1">VLSI Design</Badge>
                <Badge variant="outline" className="px-3 py-1">Research</Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-glow">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg">
                  <FileDown className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex gap-6">
                <a 
                  href="https://github.com/saurabhverma9731256232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/saurabh-verma-2b87a9290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://leetcode.com/u/SaurabhVerma_6232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-30 animate-pulse-slow" />
                <div className="relative bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Saurabh Verma"
                    className="w-80 h-80 rounded-xl object-cover shadow-elevated"
                  />
                  <div className="absolute -top-4 -right-4 bg-success rounded-full p-3 shadow-card animate-float">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;