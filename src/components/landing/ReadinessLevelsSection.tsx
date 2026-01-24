import { ReadinessBadge } from "@/components/ui/ReadinessBadge";
import { BookOpen, Briefcase, Trophy } from "lucide-react";

const levels = [
  {
    key: "foundation" as const,
    icon: BookOpen,
    title: "Foundation",
    description: "You're building your base. Focus on core concepts, basic projects, and fundamental skills.",
    features: [
      "Core subject knowledge",
      "1-2 basic projects",
      "Learning programming fundamentals",
      "Exploring career options",
    ],
    unlocks: "Access to learning resources and peer groups",
  },
  {
    key: "internship-ready" as const,
    icon: Briefcase,
    title: "Internship Ready",
    description: "You have the basics down. Time to apply your skills and gain real-world experience.",
    features: [
      "3-4 solid projects",
      "Good grasp of 1-2 tech stacks",
      "Basic problem-solving skills",
      "Communication readiness",
    ],
    unlocks: "View and apply to internship opportunities",
  },
  {
    key: "interview-ready" as const,
    icon: Trophy,
    title: "Interview Ready",
    description: "You're prepared to crack placements. Polish your skills and ace those interviews.",
    features: [
      "5+ quality projects",
      "Strong DSA fundamentals",
      "Internship experience",
      "Mock interview practice",
    ],
    unlocks: "Placement prep resources and priority mentorship",
  },
];

export function ReadinessLevelsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Readiness Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every student starts somewhere. We help you understand where you are and what it takes to level up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div
              key={level.key}
              className="relative bg-card rounded-xl border overflow-hidden card-hover animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      level.key === "foundation"
                        ? "bg-foundation/10"
                        : level.key === "internship-ready"
                        ? "bg-internship-ready/10"
                        : "bg-interview-ready/10"
                    }`}
                  >
                    <level.icon
                      className={`h-6 w-6 ${
                        level.key === "foundation"
                          ? "text-foundation"
                          : level.key === "internship-ready"
                          ? "text-internship-ready"
                          : "text-interview-ready"
                      }`}
                    />
                  </div>
                  <ReadinessBadge level={level.key} size="sm" />
                </div>

                <h3 className="font-semibold text-xl mb-2">{level.title}</h3>
                <p className="text-muted-foreground text-sm">{level.description}</p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  What You Have
                </h4>
                <ul className="space-y-2">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <div
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          level.key === "foundation"
                            ? "bg-foundation"
                            : level.key === "internship-ready"
                            ? "bg-internship-ready"
                            : "bg-interview-ready"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unlocks */}
              <div className="px-6 py-4 bg-muted/50 border-t">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Unlocks:</span> {level.unlocks}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
