import { Award, Trophy, Brain, Cpu, ShieldCheck, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AchievementsSection = () => {
  const certifications = [
    {
      title: "Oracle OCI AI Foundations Certification",
      issuer: "Oracle",
      category: "Cloud AI & ML",
      icon: Cpu,
      description: "Validated expertise in Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI workloads on Oracle Cloud Infrastructure.",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
      skills: ["AI / ML", "Deep Learning", "Generative AI", "OCI Cloud"]
    },
    {
      title: "Oracle Agentic AI Foundations Certification",
      issuer: "Oracle",
      category: "Agentic Systems",
      icon: Brain,
      description: "Mastered core concepts of Autonomous Agentic AI systems, decision-making agent loops, tool integration, and agent architecture.",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      skills: ["Agentic AI", "Autonomous Agents", "Tool Calling", "System Architecture"]
    },
    {
      title: "Google AI Professional Certificate",
      issuer: "Google",
      category: "Applied AI",
      icon: ShieldCheck,
      description: "Practical mastery of applying cutting-edge AI tools, models, and architectures to solve real-world industry and enterprise business challenges.",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      skills: ["Applied AI", "Enterprise ML", "Business Problem Solving", "Cloud AI"]
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      category: "Foundations",
      icon: Sparkles,
      description: "Comprehensive foundation of Generative AI principles, neural models, ethical AI considerations, and real-world deployment applications.",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      skills: ["Generative AI", "AI Ethics", "Productivity AI", "Model Concepts"]
    },
    {
      title: "Google Prompting Essentials",
      issuer: "Google",
      category: "Prompt Engineering",
      icon: Award,
      description: "Hands-on engineering techniques for structured prompt design, few-shot prompting, chain-of-thought elicitation, and LLM output tuning.",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      skills: ["Prompt Engineering", "Few-Shot Prompting", "LLM Reasoning", "Context Framing"]
    },
    {
      title: "300+ Coding Problems Solved",
      issuer: "LeetCode • CodeChef • Codeforces",
      category: "Algorithms",
      icon: Trophy,
      description: "Demonstrated strong computational problem-solving and algorithmic dexterity across dynamic programming, graph theory, trees, and system design.",
      badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      skills: ["DSA", "Graph Theory", "Dynamic Programming", "Optimization"]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background/50 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Trophy className="h-4 w-4" />
            Credentials &amp; Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Achievements &amp; Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized credentials in Artificial Intelligence, Agentic systems, and competitive problem solving
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="tech-card-enhanced hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40 group flex flex-col justify-between"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className={`text-xs ${item.badgeColor}`}>
                      {item.issuer}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                    {item.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/50 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
