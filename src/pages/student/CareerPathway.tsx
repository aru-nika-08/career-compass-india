import { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReadinessBadge } from "@/components/ui/ReadinessBadge";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { useCareerProgress, getNextLevel, getLevelIndex } from "@/hooks/useCareerProgress";
import type { ReadinessLevel } from "@/hooks/useCareerProgress";
import { alumniData, type AlumniProfile } from "@/data/alumniJourneys";
import { SkillOnboarding } from "@/components/career/SkillOnboarding";
import { AlumniMatchGrid } from "@/components/career/AlumniMatchGrid";
import { AlumniTimeline } from "@/components/career/AlumniTimeline";
import { TaskChecklist } from "@/components/career/TaskChecklist";
import { LevelUpCelebration } from "@/components/career/LevelUpCelebration";

type Phase = "onboarding" | "matching" | "journey";

export default function CareerPathway() {
  const { progress, updateProgress, toggleTask, resetProgress } = useCareerProgress();
  const [celebrationLevel, setCelebrationLevel] = useState<ReadinessLevel | null>(null);

  const phase: Phase = !progress.onboardingComplete
    ? "onboarding"
    : !progress.selectedAlumniId
    ? "matching"
    : "journey";

  const selectedAlumni = useMemo(
    () => alumniData.find((a) => a.id === progress.selectedAlumniId) || null,
    [progress.selectedAlumniId]
  );

  // Check for level-up
  useEffect(() => {
    if (!selectedAlumni) return;

    const currentIdx = getLevelIndex(progress.currentLevel);
    const currentStage = selectedAlumni.journey[currentIdx];
    if (!currentStage) return;

    const allCurrentDone = currentStage.tasks.every((t) =>
      progress.completedTasks.includes(t.id)
    );

    if (allCurrentDone) {
      const next = getNextLevel(progress.currentLevel);
      if (next) {
        setCelebrationLevel(next);
        updateProgress({ currentLevel: next });
      }
    }
  }, [progress.completedTasks, selectedAlumni]);

  const handleOnboardingComplete = (skills: string[], projects: string[], level: ReadinessLevel) => {
    updateProgress({
      skills,
      projects,
      currentLevel: level,
      onboardingComplete: true,
    });
  };

  const handleSelectAlumni = (alumni: AlumniProfile) => {
    updateProgress({ selectedAlumniId: alumni.id, targetRole: alumni.targetRoles[0] });
  };

  const handleReset = () => {
    resetProgress();
  };

  // Compute overall progress
  const overallProgress = useMemo(() => {
    if (!selectedAlumni) return 0;
    const totalTasks = selectedAlumni.journey.reduce((sum, s) => sum + s.tasks.length, 0);
    const completedCount = progress.completedTasks.length;
    return Math.round((completedCount / totalTasks) * 100);
  }, [selectedAlumni, progress.completedTasks]);

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="student" />
      <main className="container py-8">
        <div className="mb-6 flex items-center justify-between animate-fade-in">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/student/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          {progress.onboardingComplete && (
            <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground">
              <RotateCcw className="mr-2 h-4 w-4" />
              Start Over
            </Button>
          )}
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {phase === "onboarding" && "Let's Assess Your Skills"}
            {phase === "matching" && "Find Your Alumni Guide"}
            {phase === "journey" && "Your Career Journey"}
          </h1>
          <p className="text-muted-foreground">
            {phase === "onboarding" && "Tell us about your skills and projects to determine your readiness level"}
            {phase === "matching" && "Choose an alumnus whose career path matches your goals"}
            {phase === "journey" && "Complete tasks to level up your career readiness"}
          </p>
        </div>

        {/* Phase: Onboarding */}
        {phase === "onboarding" && (
          <SkillOnboarding onComplete={handleOnboardingComplete} />
        )}

        {/* Phase: Alumni Matching */}
        {phase === "matching" && (
          <AlumniMatchGrid onSelectAlumni={handleSelectAlumni} />
        )}

        {/* Phase: Journey */}
        {phase === "journey" && selectedAlumni && (
          <>
            {/* Progress Header */}
            <div className="mb-6 p-4 rounded-xl border bg-card animate-slide-up opacity-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <ReadinessBadge
                    level={
                      progress.currentLevel === "skill-building"
                        ? "foundation"
                        : progress.currentLevel
                    }
                    size="lg"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">Current Level</p>
                    <p className="font-semibold capitalize">
                      {progress.currentLevel.replace("-", " ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Overall Progress</p>
                    <p className="text-2xl font-bold">{overallProgress}%</p>
                  </div>
                  <div className="w-32 h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 progress-gradient"
                      style={{ width: `${overallProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Timeline Sidebar */}
              <div className="lg:col-span-1 animate-slide-up opacity-0 stagger-1">
                <AlumniTimeline alumni={selectedAlumni} currentLevel={progress.currentLevel} />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => updateProgress({ selectedAlumniId: null })}
                >
                  Change Alumni Guide
                </Button>
              </div>

              {/* Task Checklist */}
              <div className="lg:col-span-2 animate-slide-up opacity-0 stagger-2">
                <TaskChecklist
                  alumni={selectedAlumni}
                  currentLevel={progress.currentLevel}
                  completedTasks={progress.completedTasks}
                  onToggleTask={toggleTask}
                />
              </div>
            </div>
          </>
        )}

        {/* Level Up Celebration */}
        {celebrationLevel && (
          <LevelUpCelebration
            newLevel={celebrationLevel}
            open={!!celebrationLevel}
            onClose={() => setCelebrationLevel(null)}
          />
        )}
      </main>
    </div>
  );
}
