import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex p-4 rounded-full bg-white/10 mb-6">
            <GraduationCap className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-lg opacity-90 mb-8">
            Join thousands of students who've found clarity in their career path. Your alumni mentors are waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-base bg-white text-primary hover:bg-white/90"
            >
              <Link to="/register?role=student">
                Join as Student
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base border-white/30 text-white hover:bg-white/10"
            >
              <Link to="/register?role=alumni">
                Become a Mentor
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
