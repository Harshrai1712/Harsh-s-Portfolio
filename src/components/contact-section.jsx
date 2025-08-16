import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "harshrai1217@gmail.com",
      link: "mailto:harshrai1217@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8435546284",
      link: "tel:+918435546284"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jabalpur, India",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Harshrai1712", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/harshrai1712/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:harshrai1217@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities, exciting projects, and 
                meaningful collaborations. Whether you have a question about my work, 
                want to discuss a potential project, or just want to say hello, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <info.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </p>
                        <a 
                          href={info.link}
                          className="text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="slide-in-left" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`h-12 w-12 rounded-full hover:bg-primary/20 hover:border-primary/50 hover:scale-125 hover:rotate-12 transition-all duration-300 stagger-${index + 1}`}
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="tech-card-enhanced border-primary/20 slide-in-right hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary/60"
                      placeholder="HARSH RAI"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary/60"
                      placeholder="harshrai1217@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary/60"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-primary/20 focus:border-primary/60 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg py-6 rounded-xl"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
