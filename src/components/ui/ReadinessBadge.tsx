import { cn } from "@/lib/utils";

export type ReadinessLevel = "foundation" | "internship-ready" | "interview-ready";

interface ReadinessBadgeProps {
  level: ReadinessLevel;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const levelConfig = {
  foundation: {
    label: "Foundation",
    className: "bg-foundation text-foundation-foreground",
    description: "Building core skills",
  },
  "internship-ready": {
    label: "Internship Ready",
    className: "bg-internship-ready text-internship-ready-foreground",
    description: "Ready for internships",
  },
  "interview-ready": {
    label: "Interview Ready",
    className: "bg-interview-ready text-interview-ready-foreground",
    description: "Prepared for placements",
  },
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export function ReadinessBadge({ level, size = "md", className }: ReadinessBadgeProps) {
  const config = levelConfig[level];

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        config.className,
        sizeClasses[size],
        className
      )}
    >
      {config.label}
    </span>
  );
}

export function getReadinessConfig(level: ReadinessLevel) {
  return levelConfig[level];
}
