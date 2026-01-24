import { cn } from "@/lib/utils";
import { ReadinessLevel } from "./ReadinessBadge";

interface ReadinessProgressProps {
  currentLevel: ReadinessLevel;
  progress: number; // 0-100 within current level
  className?: string;
}

const levels: { key: ReadinessLevel; label: string; position: number }[] = [
  { key: "foundation", label: "Foundation", position: 0 },
  { key: "internship-ready", label: "Internship Ready", position: 50 },
  { key: "interview-ready", label: "Interview Ready", position: 100 },
];

export function ReadinessProgress({ currentLevel, progress, className }: ReadinessProgressProps) {
  const currentIndex = levels.findIndex((l) => l.key === currentLevel);
  const basePosition = levels[currentIndex].position;
  const nextPosition = levels[currentIndex + 1]?.position ?? 100;
  const range = nextPosition - basePosition;
  const actualProgress = basePosition + (progress / 100) * (range === 0 ? 0 : range / 2);

  return (
    <div className={cn("w-full", className)}>
      {/* Progress bar */}
      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 progress-gradient rounded-full transition-all duration-500"
          style={{ width: `${actualProgress}%` }}
        />
      </div>

      {/* Level markers */}
      <div className="relative mt-2">
        <div className="flex justify-between">
          {levels.map((level, index) => (
            <div
              key={level.key}
              className={cn(
                "flex flex-col items-center",
                index === 0 && "items-start",
                index === levels.length - 1 && "items-end"
              )}
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full border-2 transition-colors",
                  currentIndex >= index
                    ? level.key === "foundation"
                      ? "bg-foundation border-foundation"
                      : level.key === "internship-ready"
                      ? "bg-internship-ready border-internship-ready"
                      : "bg-interview-ready border-interview-ready"
                    : "bg-muted border-muted-foreground/30"
                )}
              />
              <span
                className={cn(
                  "text-xs mt-1 font-medium",
                  currentIndex >= index ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {level.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
