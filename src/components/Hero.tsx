import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Zap, Globe, Server, Database, Wifi } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Radial Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm animate-float">
          <Shield className="h-6 w-6 text-primary/60" />
        </div>
        <div className="absolute top-[25%] right-[15%] p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm animate-float" style={{ animationDelay: "1s" }}>
          <Lock className="h-5 w-5 text-primary/60" />
        </div>
        <div className="absolute bottom-[30%] left-[8%] p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm animate-float" style={{ animationDelay: "2s" }}>
          <Server className="h-5 w-5 text-primary/60" />
        </div>
        <div className="absolute top-[40%] right-[8%] p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm animate-float" style={{ animationDelay: "0.5s" }}>
          <Database className="h-6 w-6 text-primary/60" />
        </div>
        <div className="absolute bottom-[25%] right-[20%] p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm animate-float" style={{ animationDelay: "1.5s" }}>
          <Globe className="h-5 w-5 text-primary/60" />
        </div>
        <div className="absolute top-[60%] left-[20%] p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm animate-float" style={{ animationDelay: "2.5s" }}>
          <Wifi className="h-5 w-5 text-primary/60" />
        </div>
        <div className="absolute bottom-[45%] left-[30%] p-2 rounded-lg border border-primary/10 bg-card/20 backdrop-blur-sm animate-float" style={{ animationDelay: "3s" }}>
          <Zap className="h-4 w-4 text-primary/40" />
        </div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line x1="10%" y1="20%" x2="15%" y2="35%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="85%" y1="25%" x2="92%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="8%" y1="70%" x2="20%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 animate-pulse-glow">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Defining the Next Edge of Defense</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Secure Your </span>
            <br className="hidden sm:block" />
            <span className="text-primary text-glow relative">
              Digital Perimeter
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 300 12" preserveAspectRatio="none">
                <path d="M0,6 Q75,0 150,6 T300,6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert-driven penetration testing, vulnerability assessments, and red-team security solutions for startups, enterprises, and financial institutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="xl" className="group">
              Get Your Free Security Audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="cyberOutline" size="xl">
              View Our Services
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Audits Completed" },
              { value: "99.9%", label: "Client Satisfaction" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "24/7", label: "Security Monitoring" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary text-glow">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Aligned with Industry Standards</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {["OWASP", "NIST", "SANS", "ISO 27001", "PCI DSS"].map((standard) => (
                <div 
                  key={standard}
                  className="px-4 py-2 rounded-lg border border-border/30 bg-card/20 hover:border-primary/50 hover:bg-card/40 transition-all duration-300"
                >
                  <span className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-primary transition-colors">
                    {standard}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
