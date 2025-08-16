import { Heart, Code, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alex.johnson@email.com", label: "Email" },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold font-mono text-primary">
                &lt; Harsh Rai /&gt;
              </div>
              <Code className="h-6 w-6 text-primary" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science Engineering student at IIIT Jabalpur specializing in MERN stack development 
              and competitive programming. Building innovative solutions with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 harshrai1217@gmail.com</p>
              <p>📱 +91 8435546284</p>
              <p>📍 Jabalpur, India</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("#contact")}
              className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              Start a Project
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Harsh Rai</span>
            <span className="mx-2">•</span>
            <span>© 2025 All rights reserved</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:bg-primary/10 transition-all duration-300"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
