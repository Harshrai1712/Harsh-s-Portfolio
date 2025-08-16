import { GraduationCap, Code, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BTech CSE student at IIIT Jabalpur with focus on MERN stack and competitive programming"
    },
    {
      icon: Code,
      title: "Passion",
      description: "Love building full-stack applications and solving algorithmic challenges"
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Committed to writing clean, efficient code and best practices"
    },
    {
      icon: Target,
      title: "Goal",
      description: "Aspiring to become a skilled full-stack developer and contribute to innovative tech solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate software engineering student on a journey to master the art of code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 slide-up">
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Hello! I'm a dedicated Computer Science Engineering student currently in my 3rd year at 
                Indian Institute of Information Technology Jabalpur. My journey in technology began with 
                curiosity and has evolved into a deep passion for creating innovative web solutions.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have hands-on 
                experience building full-stack applications. I'm proficient in multiple programming languages 
                including C++, Python, Java, and JavaScript, with a strong foundation in data structures and algorithms.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                When I'm not coding, you'll find me participating in competitive programming contests, 
                building real-world projects, or exploring new technologies in web development and cloud deployment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 slide-up">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass-morphism border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;