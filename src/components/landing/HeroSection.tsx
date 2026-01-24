import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Briefcase } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container relative py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            For Engineering College Students & Alumni
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Your Career Path,{" "}
            <span className="text-primary">Guided by Those Who've Walked It</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Connect with alumni who've been in your shoes. Get a personalized roadmap from your current skills to internship and interview readiness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-base">
              <Link to="/register?role=student">
                I'm a Student
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link to="/register?role=alumni">
                I'm an Alumni
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center animate-slide-up stagger-1 opacity-0">
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-lg bg-foundation/10">
                  <Users className="h-5 w-5 text-foundation" />
                </div>
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-xs text-muted-foreground">Alumni Mentors</div>
            </div>
            <div className="text-center animate-slide-up stagger-2 opacity-0">
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-lg bg-internship-ready/10">
                  <Target className="h-5 w-5 text-internship-ready" />
                </div>
              </div>
              <div className="text-2xl font-bold">2,000+</div>
              <div className="text-xs text-muted-foreground">Students Guided</div>
            </div>
            <div className="text-center animate-slide-up stagger-3 opacity-0">
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-lg bg-interview-ready/10">
                  <Briefcase className="h-5 w-5 text-interview-ready" />
                </div>
              </div>
              <div className="text-2xl font-bold">150+</div>
              <div className="text-xs text-muted-foreground">Internships Posted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
