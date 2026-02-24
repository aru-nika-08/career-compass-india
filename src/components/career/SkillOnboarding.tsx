import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ReadinessBadge } from "@/components/ui/ReadinessBadge";
import { Plus, X, Sparkles } from "lucide-react";
import { assessLevel, type ReadinessLevel } from "@/hooks/useCareerProgress";

const suggestedSkills = [
  "C/C++", "Python", "Java", "JavaScript", "React", "Node.js",
  "SQL", "Data Structures", "HTML/CSS", "Git", "MongoDB", "Docker",
  "Machine Learning", "Linux", "TypeScript", "AWS",
];

const suggestedProjects = [
  "Personal Portfolio Website", "To-Do App", "E-commerce Store",
  "Blog Platform", "Chat Application", "Weather Dashboard",
  "REST API", "ML Model Deployment",
];

interface SkillOnboardingProps {
  onComplete: (skills: string[], projects: string[], level: ReadinessLevel) => void;
}

export function SkillOnboarding({ onComplete }: SkillOnboardingProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [skills, setSkills] = useState<string[]>([]);
  const [projects, setProjects] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState("");
  const [customProject, setCustomProject] = useState("");

  const toggleItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    setList((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  const addCustom = (value: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, clear: () => void) => {
    const trimmed = value.trim();
    if (trimmed && !list.includes(trimmed)) {
      setList((prev) => [...prev, trimmed]);
      clear();
    }
  };

  const assessedLevel = assessLevel(skills, projects);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              s === step ? "bg-primary text-primary-foreground" : s < step ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>What skills do you have?</CardTitle>
            <CardDescription>Select the technologies and skills you're familiar with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {suggestedSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={skills.includes(skill) ? "default" : "outline"}
                  className="cursor-pointer text-sm py-1.5 px-3 transition-all hover:scale-105"
                  onClick={() => toggleItem(skill, skills, setSkills)}
                >
                  {skill}
                  {skills.includes(skill) && <X className="ml-1 h-3 w-3" />}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Add a custom skill..."
                value={customSkill}
                onChange={(e) => setCustomSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCustom(customSkill, skills, setSkills, () => setCustomSkill(""))}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => addCustom(customSkill, skills, setSkills, () => setCustomSkill(""))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {/* Show custom skills */}
            {skills.filter((s) => !suggestedSkills.includes(s)).length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.filter((s) => !suggestedSkills.includes(s)).map((skill) => (
                  <Badge key={skill} className="cursor-pointer" onClick={() => toggleItem(skill, skills, setSkills)}>
                    {skill} <X className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            )}
            <p className="text-sm text-muted-foreground mb-4">{skills.length} skills selected</p>
            <Button onClick={() => setStep(2)} disabled={skills.length === 0} className="w-full">
              Next: Your Projects →
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>What projects have you built?</CardTitle>
            <CardDescription>Select or add projects you've completed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {suggestedProjects.map((project) => (
                <Badge
                  key={project}
                  variant={projects.includes(project) ? "default" : "outline"}
                  className="cursor-pointer text-sm py-1.5 px-3 transition-all hover:scale-105"
                  onClick={() => toggleItem(project, projects, setProjects)}
                >
                  {project}
                  {projects.includes(project) && <X className="ml-1 h-3 w-3" />}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Add a custom project..."
                value={customProject}
                onChange={(e) => setCustomProject(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCustom(customProject, projects, setProjects, () => setCustomProject(""))}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => addCustom(customProject, projects, setProjects, () => setCustomProject(""))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {projects.filter((p) => !suggestedProjects.includes(p)).length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {projects.filter((p) => !suggestedProjects.includes(p)).map((project) => (
                  <Badge key={project} className="cursor-pointer" onClick={() => toggleItem(project, projects, setProjects)}>
                    {project} <X className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            )}
            <p className="text-sm text-muted-foreground mb-4">{projects.length} projects selected</p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                ← Back
              </Button>
              <Button onClick={() => setStep(3)} className="flex-1">
                See My Level →
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="animate-scale-in text-center">
          <CardContent className="pt-8 pb-8">
            <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your Readiness Level</h2>
            <p className="text-muted-foreground mb-6">
              Based on {skills.length} skills and {projects.length} projects
            </p>
            <div className="flex justify-center mb-6">
              <ReadinessBadge
                level={assessedLevel === "skill-building" ? "foundation" : assessedLevel}
                size="lg"
              />
            </div>
            <p className="text-lg font-semibold capitalize mb-2">
              {assessedLevel.replace("-", " ")}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              {assessedLevel === "foundation" && "You're building the basics — great start! Let's find an alumni path to guide you."}
              {assessedLevel === "skill-building" && "You have solid foundations. Time to level up with focused practice!"}
              {assessedLevel === "internship-ready" && "Impressive! You're ready for real-world internship challenges."}
              {assessedLevel === "interview-ready" && "You're well-prepared. Let's fine-tune for interviews!"}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                ← Adjust
              </Button>
              <Button onClick={() => onComplete(skills, projects, assessedLevel)} className="flex-1">
                Find My Alumni Match →
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
