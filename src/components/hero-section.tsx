import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full pulse-glow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-primary-glow/40 rounded-lg rotate-45 float"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/20 rounded-full float rotate-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary/20 rounded-lg rotate-12 pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-full float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-primary/40 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
            HARSH RAI
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light slide-in-left">
            Computer Science Engineering Student
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed slide-in-right">
            3rd year BTech CSE student at IIIT Jabalpur, passionate about MERN stack development and competitive programming. 
            Building innovative web applications and solving complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-up">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="text-lg px-8 py-6 rounded-xl scale-hover hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="text-lg px-8 py-6 rounded-xl scale-hover hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              asChild
            >
              <a href="/Harsh-Resume.pdf" download>
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 slide-up">
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-125 hover:rotate-12 transition-all duration-300 stagger-1" asChild>
              <a href="https://github.com/Harshrai1712" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-125 hover:rotate-12 transition-all duration-300 stagger-2" asChild>
              <a href="https://www.linkedin.com/in/harshrai1712/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-125 hover:rotate-12 transition-all duration-300 stagger-3" asChild>
              <a href="mailto:harshrai1217@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
        >
          <span className="text-sm mb-2 font-medium group-hover:animate-pulse">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:animate-ping" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;