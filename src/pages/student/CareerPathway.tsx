import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ReadinessBadge } from "@/components/ui/ReadinessBadge";
import { ReadinessProgress } from "@/components/ui/ReadinessProgress";
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Lock,
  Target,
  TrendingUp,
  BookOpen,
  Code,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const milestones = [
  {
    id: 1,
    stage: "Foundation",
    level: "foundation" as const,
    completed: true,
    tasks: [
      { title: "Complete C/C++ basics", done: true },
      { title: "Learn HTML, CSS, JavaScript fundamentals", done: true },
      { title: "Build 2 small projects", done: true },
      { title: "Complete 20 easy DSA problems", done: true },
    ],
  },
  {
    id: 2,
    stage: "Skill Building",
    level: "foundation" as const,
    completed: false,
    tasks: [
      { title: "Complete React fundamentals course", done: true },
      { title: "Build a full-stack project with Node.js", done: true },
      { title: "Practice 50 DSA problems on arrays & strings", done: false },
      { title: "Learn Git & GitHub workflow", done: true },
      { title: "Complete SQL basics course", done: false },
    ],
  },
  {
    id: 3,
    stage: "Internship Ready",
    level: "internship-ready" as const,
    completed: false,
    tasks: [
      { title: "Build 2 full-stack portfolio projects", done: false },
      { title: "Complete system design basics module", done: false },
      { title: "Practice 100+ DSA problems (medium)", done: false },
      { title: "Get resume reviewed by alumni", done: false },
      { title: "Complete mock interview with mentor", done: false },
    ],
  },
  {
    id: 4,
    stage: "Interview Ready",
    level: "interview-ready" as const,
    completed: false,
    tasks: [
      { title: "Practice 50+ hard DSA problems", done: false },
      { title: "Complete 3 system design case studies", done: false },
      { title: "Do 5 mock interviews with alumni", done: false },
      { title: "Prepare behavioral interview answers", done: false },
      { title: "Apply to target companies", done: false },
    ],
  },
];

const alumniJourneyReference = {
  name: "Priya Sharma",
  journey: "B.Tech CSE → Intern at Flipkart → SDE at Amazon → Sr. SDE at Microsoft",
  matchScore: 82,
};

export default function CareerPathway() {
  const totalTasks = milestones.flatMap((m) => m.tasks).length;
  const completedTasks = milestones.flatMap((m) => m.tasks).filter((t) => t.done).length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="student" />
      <main className="container py-8">
        <div className="mb-6 animate-fade-in">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/student/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Your Career Pathway</h1>
          <p className="text-muted-foreground">
            Personalized roadmap based on successful alumni journeys
          </p>
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="animate-slide-up opacity-0">
            <CardContent className="pt-6 text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">{progressPercent}%</p>
              <p className="text-sm text-muted-foreground">Overall Progress</p>
            </CardContent>
          </Card>
          <Card className="animate-slide-up opacity-0 stagger-1">
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-8 w-8 text-internship-ready mx-auto mb-2" />
              <p className="text-3xl font-bold">{completedTasks}/{totalTasks}</p>
              <p className="text-sm text-muted-foreground">Tasks Completed</p>
            </CardContent>
          </Card>
          <Card className="animate-slide-up opacity-0 stagger-2">
            <CardContent className="pt-6 text-center">
              <BookOpen className="h-8 w-8 text-foundation mx-auto mb-2" />
              <p className="text-3xl font-bold">{alumniJourneyReference.matchScore}%</p>
              <p className="text-sm text-muted-foreground">Alumni Path Match</p>
            </CardContent>
          </Card>
        </div>

        {/* Alumni Reference */}
        <Card className="mb-8 animate-slide-up opacity-0 stagger-2">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Your pathway is based on:</p>
            <p className="font-semibold">{alumniJourneyReference.name}'s Journey</p>
            <p className="text-sm text-muted-foreground">{alumniJourneyReference.journey}</p>
          </CardContent>
        </Card>

        {/* Milestones */}
        <div className="space-y-6 animate-slide-up opacity-0 stagger-3">
          {milestones.map((milestone, index) => {
            const milestoneDone = milestone.tasks.filter((t) => t.done).length;
            const milestoneTotal = milestone.tasks.length;
            const milestoneProgress = Math.round((milestoneDone / milestoneTotal) * 100);

            return (
              <Card key={milestone.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        milestone.completed ? "bg-success" : "bg-primary"
                      }`}>
                        {milestone.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-success-foreground" />
                        ) : (
                          <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{milestone.stage}</CardTitle>
                        <CardDescription>{milestoneDone}/{milestoneTotal} tasks completed</CardDescription>
                      </div>
                    </div>
                    <ReadinessBadge level={milestone.level} size="sm" />
                  </div>
                  <Progress value={milestoneProgress} className="h-2 mt-3" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {milestone.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center gap-3 p-2 rounded-lg">
                        {task.done ? (
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={task.done ? "text-muted-foreground line-through" : ""}>
                          {task.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
