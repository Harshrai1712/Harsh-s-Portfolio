import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [badgesVisible, setBadgesVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);
  const badgesRef = useRef(null);

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animatePercentages();
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    // Observer for badges section
    const badgesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBadgesVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (badgesRef.current) {
      badgesObserver.observe(badgesRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (badgesRef.current) {
        badgesObserver.unobserve(badgesRef.current);
      }
    };
  }, [isVisible]);

  // Animate percentage counting
  const animatePercentages = () => {
    skillCategories.forEach((category, categoryIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        const key = `${categoryIndex}-${skillIndex}`;
        const delay = (categoryIndex * 300) + (skillIndex * 200);
        
        setTimeout(() => {
          animateValue(key, 0, skill.level, 1500);
        }, delay);
      });
    });
  };

  const animateValue = (key, start, end, duration) => {
    const startTime = performance.now();
    
    const updateValue = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(start + (end - start) * easeOutQuart);
      
      setAnimatedValues(prev => ({
        ...prev,
        [key]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  };
  // Animated skill icons with names
  const animatedSkills = [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#A8B9CC" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ED8B00" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
    { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", color: "#06B6D4" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 70 },
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
        { name: "Data Structures & Algorithms", level: 70 },
        { name: "Operating Systems", level: 80 },
        { name: "Database Management", level: 85 },
        { name: "Computer Networks", level: 75 },
        { name: "OOP Concepts", level: 80 },
        { name: "Computer Architecture", level: 88 }
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
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Animated Skills Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Technologies I Work With
          </h3>
          <div className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/10 to-secondary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-primary/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {animatedSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
                    style={{
                      animation: `skillFloat 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Skill Icon */}
                    <div className="relative mb-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-background/80 group-hover:bg-primary/10 transition-all duration-300">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                          style={{
                            filter: `drop-shadow(0 0 8px ${skill.color}40)`
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback icon */}
                        <div 
                          className="w-8 h-8 hidden items-center justify-center rounded-lg text-xs font-bold text-white"
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.name.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"
                        style={{ backgroundColor: skill.color }}
                      ></div>
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-xs font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                  {category.skills.map((skill, skillIndex) => {
                    const key = `${index}-${skillIndex}`;
                    const animatedValue = animatedValues[key] || 0;
                    
                    return (
                      <div key={skillIndex} className="space-y-2 slide-in-left" style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                          <Badge variant="secondary" className="text-xs hover:scale-110 transition-transform duration-300">
                            <span className="font-mono">
                              {animatedValue}%
                            </span>
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden relative">
                          <div 
                            className={`h-full rounded-full transition-all duration-2000 ease-out ${getSkillColor(skill.level)} hover:brightness-110 relative overflow-hidden`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(index * 0.3) + (skillIndex * 0.2)}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                            {/* Progress line shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/3 animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center slide-up" ref={badgesRef}>
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Additional Expertise
          </h3>
          <div className="relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-2xl blur-2xl"></div>
            <div className="relative flex flex-wrap justify-center gap-4 max-w-4xl mx-auto p-6">
              {[
                "MERN Stack", "Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks",
                "OOP", "Web Development", "Cloud Deployment", "Problem Solving", "Teamwork", "Redux"
              ].map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className={`px-6 py-3 text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 cursor-pointer floating-badge group ${
                    badgesVisible ? 'animate-badge-appear' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    animation: badgesVisible ? `floatWave 4s ease-in-out infinite` : 'none',
                    animationDelay: `${index * 0.15}s`,
                    transformOrigin: 'center',
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    {tech}
                  </span>
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
