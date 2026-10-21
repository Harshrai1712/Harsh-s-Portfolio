import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      title: "Software Engineer Intern",
      company: "Bosch Global Software Technologies",
      location: "Bengaluru, India",
      duration: "May 2026 - Jul 2026",
      description: "Gained foundational knowledge of ERP systems, SAP BTP, and SAP Fiori, along with Supply Chain Management and enterprise IT workflows, before spearheading the full-stack and Generative AI development of Helix AI—an enterprise AI Knowledge Agent built with React.js, Python FastAPI, SQLite, and Groq-accelerated LLMs featuring conversational text and voice interfaces.",
      achievements: [
        "Built an AI-powered Knowledge Agent with text and voice interfaces across 6 knowledge domains, applying Generative AI and LLM integration to capture and structure employee expertise",
        "Worked full-stack across React.js, Python FastAPI, and SQLite, building RESTful APIs across a 4-table database schema connecting frontend, backend, and database layers",
        "Worked with 2 LLMs (via Groq) to balance speed and accuracy across each stage of the extraction pipeline",
        "Strengthened full-stack development and AI engineering capabilities through hands-on enterprise experience"
      ],
      tech: ["React.js", "Python FastAPI", "SQLite", "Groq LLM", "GenAI", "ERP Systems", "SAP BTP", "SAP Fiori", "REST APIs"]
    },
    {
      type: "education",
      title: "Bachelor of Technology - Computer Science and Engineering (Final Year)",
      company: "Indian Institute of Information Technology Jabalpur",
      location: "Jabalpur, India",
      duration: "Aug 2023 - Aug 2027",
      description: "Currently in final year of BTech CSE with a strong focus on data structures, algorithms, full-stack web development, and artificial intelligence.",
      achievements: [
        "Final Year BTech CSE (Graduating Aug 2027)",
        "Coursework: DSA, OOP, DBMS, Operating Systems, Computer Networks, Computer Architecture, Software Engineering, AI",
        "Active in competitive programming with 300+ problems solved across platforms"
      ],
      tech: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Artificial Intelligence", "OOP"]
    },
    {
      type: "work",
      title: "Full Stack & AI Developer",
      company: "Independent & Open Source Projects",
      location: "Remote",
      duration: "Jan 2024 - Present",
      description: "Engineered scalable web applications and AI-driven tools including real-time video conferencing (Apna-VideoCall), travel booking (WanderStay), and CP analytics (Rank-Sphere).",
      achievements: [
        "Built 4 full-stack applications with MERN and FastAPI stacks",
        "Integrated WebRTC peer-to-peer audio/video streaming & Socket.IO live signaling",
        "Implemented JWT authentication, Cloudinary media handling, and cloud deployments on Render"
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "FastAPI", "WebRTC", "Socket.IO", "Redux"]
    },
    {
      type: "work",
      title: "Competitive Programmer",
      company: "CodeChef, Codeforces, LeetCode",
      location: "Online",
      duration: "Sep 2023 - Present",
      description: "Regular contest participant and problem solver tackling algorithmic challenges to hone data structure and algorithmic complexity mastery.",
      achievements: [
        "300+ Coding Problems Solved (CodeChef, Codeforces, LeetCode)",
        "Proficiency in Graph Theory, Dynamic Programming, and Greedy Algorithms",
        "Strong analytical and time-efficient problem-solving mindset"
      ],
      tech: ["C++", "Python", "Algorithms", "Data Structures", "Problem Solving"]
    }
  ];

  const getIcon = (type) => {
    return type === "education" ? GraduationCap : Building2;
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through education and professional experience in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="tech-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <Badge 
                            variant={exp.type === "education" ? "secondary" : "default"}
                            className="capitalize"
                          >
                            {exp.type}
                          </Badge>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-foreground/90 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline" 
                              className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
