import { useState } from "react";
import { ExternalLink, Github, Eye, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Helix AI — Enterprise Knowledge Agent",
      categories: ["all", "ai", "fullstack"],
      date: "Jul 2026",
      tagline: "Bosch Global Software Technologies Internship Project",
      description: "AI-powered enterprise knowledge agent with conversational text and voice interfaces across 6 knowledge domains to capture and structure employee expertise.",
      highlights: [
        "Conversational interviews via text & voice interfaces to capture domain expertise",
        "LLM-driven pipeline transforming free-form answers into confidence-scored chunks",
        "Normalized SQLite schema and high-performance FastAPI RESTful endpoints",
        "'Ask Alex' RAG retrieval system querying knowledge chunks and citing LLM answers",
        "Engineered with 2 Groq LLMs balancing speed and accuracy across extraction"
      ],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=450&fit=crop",
      tech: ["React.js", "Python FastAPI", "SQLite", "Groq LLM", "GenAI", "Voice AI", "RAG Pipeline"],
      github: "https://github.com/Harshrai1712",
      live: "#",
      featured: true,
      badge: "Bosch Enterprise AI"
    },
    {
      title: "Apna-VideoCall",
      categories: ["all", "fullstack", "realtime"],
      date: "Aug 2025",
      tagline: "Real-Time Video Conferencing & Collaboration",
      description: "Full-stack real-time video conferencing platform built with the MERN stack, WebRTC for peer-to-peer streaming, and Socket.IO for live signaling.",
      highlights: [
        "Peer-to-peer WebRTC audio/video streaming with Socket.IO signaling",
        "Adaptive responsive video grid layouts with participant controls & Redux state",
        "Instant meeting chat, dynamic room management, screen sharing, & notifications",
        "RESTful APIs on Node.js/Express with MongoDB storage, deployed on Render"
      ],
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=450&fit=crop",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "WebRTC", "Socket.IO", "Redux"],
      github: "https://github.com/Harshrai1712/Apna-VideoCall",
      live: "https://apna-videocall-frontend-xjxu.onrender.com/",
      featured: true,
      badge: "Production Live"
    },
    {
      title: "WanderStay",
      categories: ["all", "fullstack"],
      date: "Mar 2025",
      tagline: "End-to-End Travel Booking & Accommodation Platform",
      description: "Full-featured travel booking application enabling users to explore listings, reserve accommodations, and manage reservations seamlessly.",
      highlights: [
        "Modular MERN architecture with React Router and Context API client state",
        "Secure user authentication and authorization using JWT and bcrypt password hashing",
        "Dynamic accommodation listings with Multer and Cloudinary image management",
        "RESTful backend on Node.js/Express with MongoDB Atlas, hosted on Render"
      ],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=450&fit=crop",
      tech: ["MongoDB Atlas", "Express.js", "React.js", "Node.js", "JWT", "Cloudinary", "Multer"],
      github: "https://github.com/Harshrai1712/WanderStay",
      live: "#",
      featured: true,
      badge: "MERN Stack"
    },
    {
      title: "Rank-Sphere",
      categories: ["all", "fullstack"],
      date: "2024",
      tagline: "Competitive Programming Analytics Platform",
      description: "Analytics dashboard that aggregates real-time coding contest statistics from CodeChef, Codeforces, and LeetCode with interactive visual insights.",
      highlights: [
        "Automated data extraction from leading competitive programming platforms",
        "Interactive dashboard displaying submission trends, ratings, and topic mastery",
        "Full-stack architecture with MySQL, Node.js, Express, and Tailwind CSS"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
      tech: ["MySQL", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/Harshrai1712/Rank-Sphere",
      live: "#",
      featured: false,
      badge: "Analytics"
    }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "ai", label: "AI & GenAI" },
    { value: "fullstack", label: "Full Stack" },
    { value: "realtime", label: "Real-Time / WebRTC" }
  ];

  const filteredProjects = projects.filter(
    project => project.categories.includes(filter)
  );

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Enterprise &amp; Open Source Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From enterprise GenAI knowledge agents at Bosch to real-time WebRTC and MERN applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 slide-up">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              onClick={() => setFilter(category.value)}
              className="px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group tech-card-enhanced hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden border-primary/20 hover:border-primary/40 flex flex-col slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <Badge variant="default" className="bg-primary/90 text-primary-foreground backdrop-blur-md">
                      {project.badge}
                    </Badge>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-black/60 text-white/90 backdrop-blur-md border border-white/10">
                      {project.date}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.live !== "#" ? (
                      <Button size="sm" variant="glass" className="flex-1 scale-hover" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <span className="text-xs text-white/70 italic flex items-center px-2">
                        {project.badge.includes("Bosch") ? "Internal Enterprise Project" : "Local / Demo Deployment"}
                      </span>
                    )}
                    <Button size="sm" variant="glass" className="flex-1 scale-hover" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code / GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                      {project.tagline}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-4 bg-muted/40 p-3 rounded-lg border border-border/50">
                    <p className="text-xs font-semibold text-foreground mb-2">Key Highlights:</p>
                    <ul className="space-y-1.5">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-xs text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2 border-t border-border/50">
                    {project.live !== "#" && (
                      <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/20 scale-hover transition-all duration-300" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/20 scale-hover transition-all duration-300" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 slide-up">
          <Button variant="hero" size="lg" className="px-8 py-6 rounded-xl" asChild>
            <a href="https://github.com/Harshrai1712/" target="_blank" rel="noopener noreferrer">
              View All Repositories on GitHub
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

