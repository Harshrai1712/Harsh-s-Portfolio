import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "WanderStay",
      category: "fullstack",
      description: "A full-featured travel booking platform using the MERN stack, allowing users to explore, book, and manage travel accommodations seamlessly. Features secure authentication, responsive UI, and image upload capabilities.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Cloudinary", "Multer"],
      github: "https://github.com/Harshrai1712/WanderStay",
      live: "#",
      featured: true
    },
    {
      title: "APNA VIDEO CALL",
      category: "fullstack",
      description: "Real-time video conferencing platform enabling secure, high-quality virtual meetings with peer-to-peer streaming, real-time chat, and dynamic room management using WebRTC and Socket.IO.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=300&fit=crop",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "WebRTC", "Socket.IO", "Redux"],
      github: "https://github.com/Harshrai1712/Apna-VideoCall",
      live: "https://apna-videocall-frontend-xjxu.onrender.com/",
      featured: true
    },
    {
      title: "Rank-Sphere",
      category: "fullstack",
      description: "Full-stack competitive programming analytics platform that fetches real-time data from coding platforms (CodeChef, Codeforces, LeetCode) and provides performance insights with interactive dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["MySQL", "Express.js", "React", "Node.js", "Tailwind CSS", "APIs"],
      github: "https://github.com/Harshrai1712/Rank-Sphere",
      live: "#",
      featured: true
    },
    
    {
      title: "Personal Portfolio",
      category: "frontend",
      description: "Modern, responsive portfolio website showcasing projects and skills. Features dark/light mode toggle, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      github: "#",
      live: "#",
      featured: false
    },
    
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" }
  ];

  const filteredProjects = projects.filter(
    project => filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`group tech-card-enhanced hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden border-primary/20 hover:border-primary/40 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              } slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button size="sm" variant="glass" className="flex-1 scale-hover" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </a>
                    </Button>
                    <Button size="sm" variant="glass" className="flex-1 scale-hover" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className={`text-xs hover:bg-primary/20 hover:border-primary/60 hover:scale-110 transition-all duration-300 cursor-default stagger-${(techIndex % 6) + 1}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 scale-hover transition-all duration-300" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 scale-hover transition-all duration-300" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 slide-up">
          <Button variant="hero" size="lg" className="px-8 py-6 rounded-xl" asChild>
            <a href="https://github.com/Harshrai1712/" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
