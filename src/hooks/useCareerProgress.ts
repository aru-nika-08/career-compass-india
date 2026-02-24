import { useState, useEffect, useCallback } from "react";

export type ReadinessLevel = "foundation" | "skill-building" | "internship-ready" | "interview-ready";

export interface UserProgress {
  currentLevel: ReadinessLevel;
  completedTasks: string[]; // task IDs
  selectedAlumniId: string | null;
  targetRole: string;
  skills: string[];
  projects: string[];
  onboardingComplete: boolean;
}

const STORAGE_KEY = "career-path-progress";

const defaultProgress: UserProgress = {
  currentLevel: "foundation",
  completedTasks: [],
  selectedAlumniId: null,
  targetRole: "",
  skills: [],
  projects: [],
  onboardingComplete: false,
};

const LEVEL_ORDER: ReadinessLevel[] = [
  "foundation",
  "skill-building",
  "internship-ready",
  "interview-ready",
];

export function getNextLevel(current: ReadinessLevel): ReadinessLevel | null {
  const idx = LEVEL_ORDER.indexOf(current);
  return idx < LEVEL_ORDER.length - 1 ? LEVEL_ORDER[idx + 1] : null;
}

export function getLevelIndex(level: ReadinessLevel): number {
  return LEVEL_ORDER.indexOf(level);
}

export function assessLevel(skills: string[], projects: string[]): ReadinessLevel {
  const score = skills.length * 2 + projects.length * 3;
  if (score >= 20) return "internship-ready";
  if (score >= 10) return "skill-building";
  return "foundation";
}

export function useCareerProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const updateProgress = useCallback((updates: Partial<UserProgress>) => {
    setProgress((prev) => ({ ...prev, ...updates }));
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setProgress((prev) => {
      const exists = prev.completedTasks.includes(taskId);
      return {
        ...prev,
        completedTasks: exists
          ? prev.completedTasks.filter((id) => id !== taskId)
          : [...prev.completedTasks, taskId],
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { progress, updateProgress, toggleTask, resetProgress };
}
