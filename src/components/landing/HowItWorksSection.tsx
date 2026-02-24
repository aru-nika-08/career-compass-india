import { CheckCircle2, MapPin, Rocket } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Enter Your Current Reality",
    description: "Tell us about your skills, projects, and experience. No judgement – just an honest starting point.",
    color: "text-foundation",
    bgColor: "bg-foundation/10",
  },
  {
    icon: CheckCircle2,
    title: "Get Your Readiness Level",
    description: "Our system compares your profile with alumni journeys to classify you as Foundation, Internship-Ready, or Interview-Ready.",
    color: "text-internship-ready",
    bgColor: "bg-internship-ready/10",
  },
  {
    icon: Rocket,
    title: "Follow Your Pathway",
    description: "Receive a personalized roadmap with skills to learn, projects to build, and milestones to hit – based on real alumni paths.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple 3-step journey from where you are to where you want to be
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-xl p-6 shadow-card card-hover">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                <div className={`inline-flex p-3 rounded-lg ${step.bgColor} mb-4`}>
                  <step.icon className={`h-6 w-6 ${step.color}`} />
                </div>

                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
