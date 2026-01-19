import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  CheckCircle, 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  Clock, 
  Users, 
  Award, 
  Target,
  AlertTriangle,
  FileText,
  Headphones,
  Bug,
  Globe,
  Zap,
  Search,
  BarChart3,
  Wrench,
  RefreshCw,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Custom hook for individual step animation
const useStepAnimation = (index: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isBugKilled, setIsBugKilled] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay the bug kill animation
          setTimeout(() => {
            setIsBugKilled(true);
          }, 300 + index * 150);
        }
      },
      { threshold: 0.3, rootMargin: "0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [index]);

  return { ref, isVisible, isBugKilled };
};

const trustIndicators = [
  { icon: Shield, label: "OWASP Compliant" },
  { icon: Lock, label: "NIST Framework" },
  { icon: Award, label: "SANS Certified" },
  { icon: FileCheck, label: "ISO 27001" },
];

const coreTestingAreas = [
  "OWASP Top 10 vulnerability assessment",
  "Business logic and workflow abuse testing",
  "Authentication and session management analysis",
  "Authorization and access control validation",
  "Input validation and injection testing",
  "API security testing (REST, GraphQL, SOAP)",
  "Client-side and browser-based security assessment",
  "Secure code review and static analysis",
];

const processSteps = [
  { 
    icon: Search, 
    title: "Threat Intelligence & Attack Surface Mapping",
    description: "We begin by understanding your application exactly as an attacker would.",
    details: [
      "Asset discovery and exposed endpoint mapping",
      "API enumeration and hidden attack surface identification",
      "Role-based access and trust boundary analysis",
      "Industry-specific threat modeling"
    ],
    result: "A complete map of where your application is most vulnerable."
  },
  { 
    icon: Target, 
    title: "Adversarial Simulation & Exploit Testing",
    description: "We actively attempt to compromise your application.",
    details: [
      "Real-world attack simulations",
      "Chained vulnerability exploitation",
      "Authentication bypass and session abuse testing",
      "Privilege escalation and authorization failures",
      "API abuse, data exposure, and logic manipulation"
    ],
    result: "Verified, exploitable vulnerabilities with real impact."
  },
  { 
    icon: BarChart3, 
    title: "Business Risk & Impact Analysis",
    description: "We focus on what can actually harm your business.",
    details: [
      "Financial, legal, and reputational risk evaluation",
      "Attack path analysis leading to data breaches or account takeover",
      "Prioritization based on exploitability and impact—not volume"
    ],
    result: "A clear risk hierarchy that decision-makers can act on."
  },
  { 
    icon: FileText, 
    title: "Precision Reporting & Remediation Guidance",
    description: "Our reports are designed to be used—not archived.",
    details: [
      "Executive summary for leadership",
      "Technical findings with proof-of-concept evidence",
      "Clear, step-by-step remediation guidance",
      "Mapping to OWASP, NIST, SANS, and ISO 27001 controls"
    ],
    result: "Faster fixes and minimal friction between security and development teams."
  },
  { 
    icon: Wrench, 
    title: "Fix Validation & Security Hardening",
    description: "Security isn't complete until fixes are proven.",
    details: [
      "Retesting of remediated vulnerabilities",
      "Validation of security controls",
      "Hardening recommendations to prevent recurrence"
    ],
    result: "Confidence that issues are fully resolved."
  },
  { 
    icon: RefreshCw, 
    title: "Continuous Advisory & Security Readiness",
    description: "We don't disappear after delivery.",
    details: [
      "On-demand security support",
      "Guidance during feature releases and updates",
      "Strategic recommendations to strengthen long-term security posture"
    ],
    result: "Applications that remain secure as your business scales."
  },
];

const deliverables = [
  "Comprehensive vulnerability assessment report",
  "Exploitable proof-of-concept findings",
  "Risk-based prioritization",
  "Developer-ready remediation guidance",
  "Executive-level security insights",
  "Optional retesting and validation"
];

const whyTrustUs = [
  "Built around real attacker techniques, not automated tools",
  "Focused on business impact, not checkbox compliance",
  "Proven across startups, enterprises, and high-risk industries",
  "Designed to prevent breaches, not just detect vulnerabilities"
];

// Bug killing animation component for each step
const ProcessStep = ({ step, index }: { step: typeof processSteps[0]; index: number }) => {
  const { ref, isVisible, isBugKilled } = useStepAnimation(index);

  return (
    <div 
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Bug killing animation */}
      <div className={`absolute -top-4 -right-4 z-20 transition-all duration-500 ${
        isVisible && !isBugKilled ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}>
        <Bug className="h-8 w-8 text-[hsl(var(--color-red-team))] animate-pulse" />
      </div>
      
      {/* Squash effect */}
      <div className={`absolute -top-2 -right-2 z-30 transition-all duration-300 ${
        isBugKilled ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}>
        <div className="relative">
          <div className="absolute inset-0 bg-[hsl(var(--color-green-secure))] rounded-full animate-ping opacity-75 h-6 w-6" />
          <CheckCircle className="h-6 w-6 text-[hsl(var(--color-green-secure))] relative z-10" />
        </div>
      </div>

      <Card className={`bg-card/50 backdrop-blur-sm border transition-all duration-500 ${
        isBugKilled 
          ? "border-[hsl(var(--color-green-secure)/0.5)] shadow-[0_0_20px_hsl(var(--color-green-secure)/0.2)]" 
          : "border-border/50"
      }`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Step number with animation */}
            <div className={`flex-shrink-0 relative transition-all duration-500 ${
              isBugKilled ? "scale-110" : ""
            }`}>
              <div className={`h-14 w-14 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                isBugKilled 
                  ? "bg-[hsl(var(--color-green-secure)/0.2)]" 
                  : "bg-primary/10"
              }`}>
                <span className={`text-2xl font-bold transition-colors duration-500 ${
                  isBugKilled ? "text-[hsl(var(--color-green-secure))]" : "text-primary"
                }`}>
                  {index + 1}
                </span>
              </div>
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 transition-colors duration-500 ${
                  isBugKilled 
                    ? "bg-gradient-to-b from-[hsl(var(--color-green-secure))] to-transparent" 
                    : "bg-gradient-to-b from-border to-transparent"
                }`} />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <step.icon className={`h-5 w-5 transition-colors duration-500 ${
                  isBugKilled ? "text-[hsl(var(--color-green-secure))]" : "text-primary"
                }`} />
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              
              <ul className="space-y-2 mb-4">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 transition-colors duration-500 ${
                      isBugKilled ? "text-[hsl(var(--color-green-secure))]" : "text-primary/70"
                    }`} />
                    {detail}
                  </li>
                ))}
              </ul>
              
              <div className={`border-l-2 pl-4 py-2 transition-colors duration-500 ${
                isBugKilled 
                  ? "border-[hsl(var(--color-green-secure))]" 
                  : "border-primary/30"
              }`}>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Result</span>
                <p className={`font-medium transition-colors duration-500 ${
                  isBugKilled ? "text-[hsl(var(--color-green-secure))]" : "text-foreground"
                }`}>{step.result}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const WebApplicationSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-radial opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/#services">
              <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 animate-pulse-glow shadow-[0_0_30px_hsl(var(--color-blue-ai)/0.3)]">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase mb-4 block text-primary">
                Application Security Testing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Break Your Application <span className="text-primary">Before Attackers Do</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Every modern business runs on web applications—and every vulnerable application is a liability. Attackers don't wait for audits or compliance deadlines. They exploit weaknesses the moment they find them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our Application Security Testing service is designed to identify, validate, and eliminate real-world security risks across web applications and APIs before they lead to breaches, fraud, or reputational damage.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                {trustIndicators.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 relative border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                We Go <span className="text-primary">Beyond Automated Scans</span>
              </h2>
              <p className="text-muted-foreground">
                Our security experts think and operate like real attackers—targeting business logic flaws, authentication weaknesses, authorization gaps, and API abuse paths that traditional testing often overlooks.
              </p>
            </div>
          </div>
        </section>

        {/* What We Test Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  What We <span className="text-primary">Test</span>
                </h2>
                <p className="text-muted-foreground">
                  We conduct deep, hands-on security testing across the full application stack, aligned with OWASP, NIST, SANS, and ISO 27001 security frameworks.
                </p>
              </div>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    Core Testing Areas
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {coreTestingAreas.map((area, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <p className="text-muted-foreground">{area}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border/50 italic">
                    Every vulnerability is manually validated, risk-rated, and mapped to real attack scenarios.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section with Bug Killing Animation */}
        <section className="py-16 relative border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Attack-Driven <span className="text-primary">Security Testing Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We don't follow checklists. We follow the attacker's path.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Bug className="h-4 w-4 text-[hsl(var(--color-red-team))]" />
                <span>Scroll to eliminate vulnerabilities</span>
                <CheckCircle className="h-4 w-4 text-[hsl(var(--color-green-secure))]" />
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* What You Receive Section */}
        <section className="py-16 relative border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  What You <span className="text-primary">Receive</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {deliverables.map((item, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground font-medium">
                No noise. No false positives. Only actionable security intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Why Organizations <span className="text-primary">Trust Us</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {whyTrustUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">
                Measurable <span className="text-primary">Results</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">700+</div>
                <p className="text-sm text-muted-foreground">Security Assessments Completed</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">200+</div>
                <p className="text-sm text-muted-foreground">Organizations Protected</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Expert Security Support</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">99%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 text-center">
              <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Secure Your Application <span className="text-primary">Before It's Exploited</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every untested application is an open invitation to attackers. Whether you are launching a new platform, scaling your product, or meeting compliance requirements, we provide the expertise to protect what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-security-audit">
                  <Button size="lg" className="w-full sm:w-auto">
                    Secure Your Application
                  </Button>
                </Link>
                <Link to="/#services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View All Security Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebApplicationSecurity;
