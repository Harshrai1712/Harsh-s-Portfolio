import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Technology - Computer Science and Engineering",
      company: "Indian Institute of Information Technology Jabalpur",
      location: "Jabalpur, India",
      duration: "Aug 2023 - Aug 2027",
      description: "Pursuing BTech in Computer Science and Engineering with focus on data structures, algorithms, web development, and system design. Strong foundation in programming and software engineering principles.",
      achievements: [
        "Coursework: DSA, OS, DBMS, Computer Networks",
        "Active in competitive programming",
        "MERN stack development projects"
      ],
      tech: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Web Development"]
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Personal Projects",
      location: "Remote",
      duration: "Jan 2024 - Present",
      description: "Developed multiple full-stack applications using MERN stack including video calling platform, travel booking system, and competitive programming analytics tool.",
      achievements: [
        "Built 3 major full-stack projects",
        "Implemented real-time features with WebRTC",
        "Deployed applications on cloud platforms"
      ],
      tech: ["MongoDB", "Express.js", "React", "Node.js", "WebRTC", "Socket.IO"]
    },
    {
      type: "work",
      title: "Competitive Programming",
      company: "Various Platforms",
      location: "Online",
      duration: "Sep 2023 - Present",
      description: "Active participant in competitive programming contests on CodeChef, Codeforces, and LeetCode. Solved 200+ problems and participated in regular contests.",
      achievements: [
        "Solved 200+ coding problems",
        "Regular contest participation",
        "Strong problem-solving skills"
      ],
      tech: ["C++", "Python", "Algorithms", "Data Structures", "Problem Solving"]
    },
    {
      type: "work",
      title: "Open Source Contributor",
      company: "GitHub",
      location: "Remote",
      duration: "Dec 2023 - Present",
      description: "Contributing to open source projects and maintaining personal repositories. Focus on web development tools and educational resources.",
      achievements: [
        "10+ GitHub repositories",
        "Active open source contributor",
        "Collaborative development experience"
      ],
      tech: ["Git", "GitHub", "React", "Node.js", "Documentation"]
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
