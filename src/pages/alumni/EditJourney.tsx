import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, X, Save, GripVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface JourneyStage {
  id: number;
  title: string;
  skills: string[];
  projects: number;
}

const initialStages: JourneyStage[] = [
  { id: 1, title: "College (B.Tech CSE)", skills: ["C++", "Java", "Basic DSA"], projects: 2 },
  { id: 2, title: "Internship @ Flipkart", skills: ["JavaScript", "React", "Node.js"], projects: 3 },
  { id: 3, title: "First Job @ Amazon", skills: ["System Design", "AWS", "Leadership"], projects: 5 },
  { id: 4, title: "Current @ Microsoft", skills: ["Architecture", "Mentoring", "Strategy"], projects: 8 },
];

export default function EditJourney() {
  const [stages, setStages] = useState<JourneyStage[]>(initialStages);
  const [skillInputs, setSkillInputs] = useState<Record<number, string>>({});

  const addSkill = (stageId: number) => {
    const input = skillInputs[stageId]?.trim();
    if (!input) return;
    setStages(stages.map((s) =>
      s.id === stageId && !s.skills.includes(input)
        ? { ...s, skills: [...s.skills, input] }
        : s
    ));
    setSkillInputs({ ...skillInputs, [stageId]: "" });
  };

  const removeSkill = (stageId: number, skill: string) => {
    setStages(stages.map((s) =>
      s.id === stageId ? { ...s, skills: s.skills.filter((sk) => sk !== skill) } : s
    ));
  };

  const updateStageTitle = (stageId: number, title: string) => {
    setStages(stages.map((s) => (s.id === stageId ? { ...s, title } : s)));
  };

  const updateProjects = (stageId: number, projects: number) => {
    setStages(stages.map((s) => (s.id === stageId ? { ...s, projects } : s)));
  };

  const addStage = () => {
    setStages([...stages, { id: Date.now(), title: "", skills: [], projects: 0 }]);
  };

  const removeStage = (stageId: number) => {
    setStages(stages.filter((s) => s.id !== stageId));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 max-w-2xl">
        <div className="mb-6 animate-fade-in">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/alumni/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Edit Your Career Journey</h1>
          <p className="text-muted-foreground">
            Students use your journey as a template for their career pathway. Keep it updated!
          </p>
        </div>

        <div className="space-y-4 animate-slide-up opacity-0">
          {stages.map((stage, index) => (
            <Card key={stage.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">{index + 1}</span>
                    </div>
                    <CardTitle className="text-base">Stage {index + 1}</CardTitle>
                  </div>
                  {stages.length > 1 && (
                    <Button variant="ghost" size="sm" onClick={() => removeStage(stage.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Stage Title</Label>
                  <Input
                    value={stage.title}
                    onChange={(e) => updateStageTitle(stage.id, e.target.value)}
                    placeholder="e.g., Internship @ Flipkart"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Skills Gained</Label>
                  <div className="flex gap-2">
                    <Input
                      value={skillInputs[stage.id] || ""}
                      onChange={(e) => setSkillInputs({ ...skillInputs, [stage.id]: e.target.value })}
                      placeholder="Add a skill"
                      onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill(stage.id))}
                    />
                    <Button variant="outline" type="button" onClick={() => addSkill(stage.id)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stage.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="gap-1">
                        {skill}
                        <button onClick={() => removeSkill(stage.id, skill)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Projects Completed</Label>
                  <Input
                    type="number"
                    value={stage.projects}
                    onChange={(e) => updateProjects(stage.id, parseInt(e.target.value) || 0)}
                    min={0}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <Button variant="outline" className="w-full" onClick={addStage}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Stage
          </Button>
          <Button className="w-full">
            <Save className="mr-2 h-4 w-4" />
            Save Journey
          </Button>
        </div>
      </main>
    </div>
  );
}
