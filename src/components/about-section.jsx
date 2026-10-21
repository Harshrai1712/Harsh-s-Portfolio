import { GraduationCap, Code, Heart, Target, Building2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Final Year BTech CSE",
      description: "Indian Institute of Information Technology Jabalpur (2023 – 2027) with strong foundation in core CS and software engineering"
    },
    {
      icon: Building2,
      title: "Bosch SE Intern",
      description: "Engineered an AI-powered Knowledge Agent across 6 domains with FastAPI, React, SQLite, and Groq LLMs"
    },
    {
      icon: Code,
      title: "Full Stack & GenAI",
      description: "Specialized in MERN stack, Python FastAPI, LLM integration, prompt engineering, and Agentic AI workflows"
    },
    {
      icon: Award,
      title: "Certified & Problem Solver",
      description: "Oracle & Google AI certified, 300+ algorithmic coding problems solved across CodeChef, Codeforces, and LeetCode"
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
            A software engineer building scalable full-stack applications and intelligent agentic AI systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 slide-up">
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Hello! I'm a Computer Science and Engineering student currently in my <span className="text-primary font-semibold">final year</span> at the 
                <span className="font-semibold text-foreground"> Indian Institute of Information Technology Jabalpur</span>.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                During my internship as a <span className="text-primary font-semibold">Software Engineer Intern at Bosch Global Software Technologies</span> in Bengaluru, 
                I built <span className="font-semibold text-foreground">Helix AI</span>—an enterprise-grade AI knowledge agent featuring text and voice interfaces across 6 knowledge domains, 
                leveraging React.js, Python FastAPI, SQLite, and Groq LLMs, while gaining foundational knowledge in enterprise ERP, SAP BTP, and SAP Fiori workflows.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I combine strong full-stack skills (React.js, Node.js, Express.js, FastAPI, MongoDB, SQLite) with modern Generative AI engineering, prompt engineering, 
                and RAG retrieval pipelines. I am also an active problem solver with over 300+ algorithmic challenges solved across LeetCode, CodeChef, and Codeforces.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-card/60 border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary">Bosch</div>
                <div className="text-xs text-muted-foreground mt-1">SE Internship</div>
              </div>
              <div className="p-4 rounded-xl bg-card/60 border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary">300+</div>
                <div className="text-xs text-muted-foreground mt-1">Problems Solved</div>
              </div>
              <div className="p-4 rounded-xl bg-card/60 border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground mt-1">AI Certifications</div>
              </div>
              <div className="p-4 rounded-xl bg-card/60 border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary">2027</div>
                <div className="text-xs text-muted-foreground mt-1">Graduation Year</div>
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
