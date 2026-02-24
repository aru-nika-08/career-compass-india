import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Rocket, Star, Trophy, Zap } from "lucide-react";
import type { ReadinessLevel } from "@/hooks/useCareerProgress";

const levelConfig: Record<ReadinessLevel, { icon: typeof Star; title: string; subtitle: string; color: string }> = {
  foundation: {
    icon: Star,
    title: "Foundation Complete!",
    subtitle: "You've built a strong base. Time to level up!",
    color: "text-foundation",
  },
  "skill-building": {
    icon: Zap,
    title: "Skills Unlocked!",
    subtitle: "Your skills are shaping up. Internships await!",
    color: "text-accent",
  },
  "internship-ready": {
    icon: Trophy,
    title: "Internship Ready!",
    subtitle: "You're prepared for real-world experience. Go crush it!",
    color: "text-internship-ready",
  },
  "interview-ready": {
    icon: Rocket,
    title: "Interview Ready! 🎉",
    subtitle: "You've completed the full journey. Time to land your dream role!",
    color: "text-interview-ready",
  },
};

interface LevelUpCelebrationProps {
  newLevel: ReadinessLevel;
  open: boolean;
  onClose: () => void;
}

export function LevelUpCelebration({ newLevel, open, onClose }: LevelUpCelebrationProps) {
  const config = levelConfig[newLevel];
  const Icon = config.icon;
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    if (open) {
      setParticles(
        Array.from({ length: 20 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 0.5,
        }))
      );
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md text-center overflow-hidden">
        <div className="relative py-8">
          {/* Particles */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute w-2 h-2 rounded-full bg-accent animate-ping"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}

          <div className="relative z-10">
            <div className={`mx-auto mb-4 w-20 h-20 rounded-full flex items-center justify-center bg-primary/10 animate-scale-in`}>
              <Icon className={`h-10 w-10 ${config.color}`} />
            </div>
            <h2 className="text-2xl font-bold mb-2 animate-fade-in">{config.title}</h2>
            <p className="text-muted-foreground mb-6 animate-fade-in">{config.subtitle}</p>
            <Button onClick={onClose} className="animate-slide-up opacity-0 stagger-2">
              Continue Journey →
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
