import { Github, Linkedin, ExternalLink, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/saurabhverma9731256232",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/saurabh-verma-2b87a9290",
      label: "LinkedIn"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      href: "https://leetcode.com/u/SaurabhVerma_6232/",
      label: "LeetCode"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:saurabhverma9731256232@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gradient-section border-t border-glass-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Saurabh Verma
              </h3>
              <p className="text-muted-foreground">
                Full Stack Developer & Electronics Engineer passionate about creating 
                innovative solutions and conducting meaningful research.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-foreground transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#research" className="hover:text-foreground transition-colors duration-300">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>NIT Mizoram, India</p>
                <p>+91-9721256232</p>
                <p>saurabhverma9731256232@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-glass-border">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-glass border border-glass-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-glow transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <p className="text-muted-foreground text-sm text-center md:text-right">
              © {currentYear} Saurabh Verma. All rights reserved.
              <br />
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;