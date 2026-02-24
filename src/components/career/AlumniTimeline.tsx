import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import type { AlumniProfile } from "@/data/alumniJourneys";
import type { ReadinessLevel } from "@/hooks/useCareerProgress";
import { getLevelIndex } from "@/hooks/useCareerProgress";

const levelColors: Record<ReadinessLevel, string> = {
  foundation: "bg-foundation",
  "skill-building": "bg-accent",
  "internship-ready": "bg-internship-ready",
  "interview-ready": "bg-interview-ready",
};

const levelBorderColors: Record<ReadinessLevel, string> = {
  foundation: "border-foundation",
  "skill-building": "border-accent",
  "internship-ready": "border-internship-ready",
  "interview-ready": "border-interview-ready",
};

interface AlumniTimelineProps {
  alumni: AlumniProfile;
  currentLevel: ReadinessLevel;
}

export function AlumniTimeline({ alumni, currentLevel }: AlumniTimelineProps) {
  const currentIdx = getLevelIndex(currentLevel);

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-1">{alumni.name}'s Journey</h3>
        <p className="text-sm text-muted-foreground mb-6">
          {alumni.currentRole} at {alumni.company}
        </p>

        {/* Vertical timeline */}
        <div className="relative ml-4">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />

          {alumni.timelineSteps.map((step, i) => (
            <div key={i} className="relative pl-8 pb-6 last:pb-0">
              <div className={`absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-[5px] ${
                i <= currentIdx + 1 ? levelColors[alumni.journey[Math.min(i, alumni.journey.length - 1)]?.level || "foundation"] : "bg-muted"
              }`} />
              <p className={`text-sm ${i <= currentIdx + 1 ? "text-foreground" : "text-muted-foreground"}`}>
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Stage badges */}
        <div className="mt-6 space-y-2">
          {alumni.journey.map((stage) => {
            const stageIdx = getLevelIndex(stage.level);
            const isUnlocked = stageIdx <= currentIdx;
            const isCurrent = stageIdx === currentIdx;

            return (
              <div
                key={stage.level}
                className={`flex items-center gap-2 p-2 rounded-lg text-sm ${
                  isCurrent ? `border-2 ${levelBorderColors[stage.level]} bg-card` : ""
                }`}
              >
                {stageIdx < currentIdx ? (
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                ) : isCurrent ? (
                  <Circle className="h-4 w-4 text-primary flex-shrink-0" />
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                )}
                <span className={!isUnlocked ? "text-muted-foreground" : ""}>{stage.label}</span>
                {isCurrent && (
                  <Badge variant="secondary" className="ml-auto text-xs">
                    Current
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
