import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 👉 No backend – just simulate success
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for your message. (This demo form doesn’t actually send emails.)",
        duration: 5000,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToContactForm = () => {
    const form = document.querySelector("#contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCallMe = () => {
    scrollToContactForm();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "saurabhverma9731256232@gmail.com",
      href: "mailto:saurabhverma9731256232@gmail.com",
      color: "text-primary",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-9721256232",
      href: "tel:+919721256232",
      color: "text-tech",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "NIT Mizoram, India",
      href: "#",
      color: "text-success",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/saurabhverma9731256232",
      color: "hover:text-primary",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saurabh-verma-2b87a9290",
      color: "hover:text-tech",
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/SaurabhVerma_6232/",
      color: "hover:text-success",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaboration on
              projects, or simply connecting with fellow developers and
              researchers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-glass border border-glass-border rounded-xl backdrop-blur-sm hover:shadow-glow transition-all duration-300 group"
                    >
                      <div
                        className={`${info.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-glass border border-glass-border rounded-xl flex items-center justify-center backdrop-blur-sm hover:shadow-glow transition-all duration-300 ${link.color}`}
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-glass border border-glass-border rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8.98</div>
                    <p className="text-sm text-muted-foreground">CGPA</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-tech">4+</div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">2</div>
                    <p className="text-sm text-muted-foreground">
                      Research Papers
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1+</div>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card
              id="contact-form"
              className="bg-glass border-glass-border backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="bg-card border-glass-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="bg-card border-glass-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-card border-glass-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Let's discuss a project"
                      className="bg-card border-glass-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      rows={5}
                      className="bg-card border-glass-border resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full shadow-glow"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-sm inline-block">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Whether you have a project in mind, want to discuss research
                opportunities, or just want to say hello, I'd love to hear from
                you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="shadow-glow">
                  <a href="mailto:saurabhverma9731256232@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+919721256232">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
