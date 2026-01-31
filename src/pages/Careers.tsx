import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, ArrowRight, Shield, Users, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const openPositions = [
  {
    title: "Senior Penetration Tester",
    department: "Security Operations",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead complex penetration testing engagements for enterprise clients.",
  },
  {
    title: "Cloud Security Engineer",
    department: "Cloud Security",
    location: "Remote",
    type: "Full-time",
    description: "Design and implement security solutions for cloud infrastructure.",
  },
  {
    title: "Security Researcher",
    department: "R&D",
    location: "New York, NY",
    type: "Full-time",
    description: "Discover and analyze new vulnerabilities in modern applications.",
  },
  {
    title: "Red Team Operator",
    department: "Offensive Security",
    location: "Remote",
    type: "Full-time",
    description: "Conduct adversarial simulations to test client defenses.",
  },
  {
    title: "Security Analyst",
    department: "Security Operations",
    location: "Austin, TX",
    type: "Full-time",
    description: "Monitor, analyze, and respond to security incidents.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Cutting-Edge Work",
    description: "Work on the latest security challenges facing modern organizations.",
  },
  {
    icon: Users,
    title: "Elite Team",
    description: "Collaborate with industry-leading security professionals.",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning with certifications and conference attendance.",
  },
  {
    icon: Heart,
    title: "Great Benefits",
    description: "Competitive salary, equity, health insurance, and flexible PTO.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Join Our Team
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build the Future of{" "}
            <span className="text-primary">Cybersecurity</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join ParameterX and work alongside elite security professionals protecting organizations worldwide.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-background/50 border-border/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Open Positions</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We're always looking for talented security professionals to join our team.
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-background/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always interested in meeting talented security professionals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button variant="cyber" size="lg" asChild>
            <Link to="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
