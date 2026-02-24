import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Lock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { AlumniProfile } from "@/data/alumniJourneys";
import type { ReadinessLevel } from "@/hooks/useCareerProgress";
import { getLevelIndex } from "@/hooks/useCareerProgress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const levelLabels: Record<ReadinessLevel, string> = {
  foundation: "Foundation",
  "skill-building": "Skill Building",
  "internship-ready": "Internship Ready",
  "interview-ready": "Interview Ready",
};

const levelColorClasses: Record<ReadinessLevel, string> = {
  foundation: "bg-foundation/10 text-foundation border-foundation/30",
  "skill-building": "bg-accent/10 text-accent border-accent/30",
  "internship-ready": "bg-internship-ready/10 text-internship-ready border-internship-ready/30",
  "interview-ready": "bg-interview-ready/10 text-interview-ready border-interview-ready/30",
};

interface TaskChecklistProps {
  alumni: AlumniProfile;
  currentLevel: ReadinessLevel;
  completedTasks: string[];
  onToggleTask: (taskId: string) => void;
}

export function TaskChecklist({ alumni, currentLevel, completedTasks, onToggleTask }: TaskChecklistProps) {
  const currentIdx = getLevelIndex(currentLevel);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    alumni.journey.forEach((stage) => {
      initial[stage.level] = getLevelIndex(stage.level) === currentIdx;
    });
    return initial;
  });

  const toggleSection = (level: string) => {
    setOpenSections((prev) => ({ ...prev, [level]: !prev[level] }));
  };

  return (
    <div className="space-y-4">
      {alumni.journey.map((stage) => {
        const stageIdx = getLevelIndex(stage.level);
        const isUnlocked = stageIdx <= currentIdx;
        const isCurrent = stageIdx === currentIdx;
        const isCompleted = stageIdx < currentIdx;
        const completedInStage = stage.tasks.filter((t) => completedTasks.includes(t.id)).length;
        const totalInStage = stage.tasks.length;
        const stageProgress = Math.round((completedInStage / totalInStage) * 100);

        return (
          <Collapsible
            key={stage.level}
            open={openSections[stage.level]}
            onOpenChange={() => isUnlocked && toggleSection(stage.level)}
          >
            <Card className={`transition-all ${isCurrent ? "ring-2 ring-primary shadow-md" : ""} ${!isUnlocked ? "opacity-60" : ""}`}>
              <CollapsibleTrigger asChild disabled={!isUnlocked}>
                <CardHeader className={`cursor-pointer select-none ${!isUnlocked ? "cursor-not-allowed" : ""}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={levelColorClasses[stage.level]}>
                        {levelLabels[stage.level]}
                      </Badge>
                      <CardTitle className="text-base">
                        {isCompleted && "✅ "}
                        {stage.label}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      {isUnlocked && (
                        <span className="text-xs text-muted-foreground">
                          {completedInStage}/{totalInStage}
                        </span>
                      )}
                      {!isUnlocked ? (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      ) : openSections[stage.level] ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                  {isUnlocked && (
                    <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500 progress-gradient"
                        style={{ width: `${stageProgress}%` }}
                      />
                    </div>
                  )}
                </CardHeader>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {stage.tasks.map((task) => {
                      const isChecked = completedTasks.includes(task.id);
                      return (
                        <li
                          key={task.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                            isChecked ? "bg-muted/50 border-muted" : "bg-card border-border hover:border-primary/30"
                          }`}
                        >
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={() => onToggleTask(task.id)}
                            className="mt-0.5"
                            disabled={!isCurrent && !isCompleted}
                          />
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${isChecked ? "line-through text-muted-foreground" : ""}`}>
                              {task.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">{task.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        );
      })}
    </div>
  );
}
