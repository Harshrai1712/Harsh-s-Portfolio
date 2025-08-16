import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 80 },
        { name: "C", level: 85 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Redux", level: 80 },
        { name: "NoSQL", level: 75 },
        { name: "Cloud Deployment", level: 70 },
        { name: "Version Control", level: 90 }
      ]
    },
    {
      title: "Core CS Concepts",
      icon: "🎓",
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Operating Systems", level: 80 },
        { name: "Database Management", level: 85 },
        { name: "Computer Networks", level: 75 },
        { name: "OOP Concepts", level: 88 },
        { name: "Computer Architecture", level: 75 }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="tech-card-enhanced border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 group slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3 group-hover:scale-125 transition-transform duration-300">{category.icon}</span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2 slide-in-left" style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="text-xs hover:scale-110 transition-transform duration-300">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden relative">
                        <div 
                          className={`h-full rounded-full transition-all duration-1500 ease-out ${getSkillColor(skill.level)} hover:brightness-110 relative overflow-hidden`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center slide-up">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "MERN Stack", "C++", "Python", "Java", "JavaScript", "React.js", "Node.js", 
              "Express.js", "MongoDB", "Git", "GitHub", "Redux", "Tailwind CSS", "Bootstrap",
              "Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks",
              "OOP", "Web Development", "Cloud Deployment", "Problem Solving", "Teamwork"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
