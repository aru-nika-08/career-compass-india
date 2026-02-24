import { Header } from "@/components/layout/Header";
import { ReadinessBadge } from "@/components/ui/ReadinessBadge";
import { Link } from "react-router-dom";
import { ReadinessProgress } from "@/components/ui/ReadinessProgress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Briefcase,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Circle,
  Bell,
  Calendar,
} from "lucide-react";

// Mock data
const studentData = {
  name: "Rahul Kumar",
  currentLevel: "internship-ready" as const,
  levelProgress: 65,
  skills: [
    { name: "JavaScript", level: 75 },
    { name: "React", level: 60 },
    { name: "Data Structures", level: 45 },
    { name: "System Design", level: 20 },
  ],
  pathwayTasks: [
    { id: 1, title: "Complete React fundamentals course", completed: true },
    { id: 2, title: "Build a full-stack project with Node.js", completed: true },
    { id: 3, title: "Practice 50 DSA problems on arrays", completed: false },
    { id: 4, title: "Complete system design basics module", completed: false },
    { id: 5, title: "Mock interview with alumni mentor", completed: false },
  ],
  availableInternships: 12,
  questionsAsked: 3,
  mentorshipSessions: 2,
};

const announcements = [
  { id: 1, title: "Resume Workshop", date: "Jan 28", type: "event" },
  { id: 2, title: "TCS hiring drive - Apply by Jan 30", date: "Jan 30", type: "opportunity" },
];

export default function StudentDashboard() {
  const completedTasks = studentData.pathwayTasks.filter((t) => t.completed).length;
  const totalTasks = studentData.pathwayTasks.length;

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="student" />

      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Welcome back, {studentData.name.split(" ")[0]}! 👋
              </h1>
              <p className="text-muted-foreground">
                You're making great progress. Keep going!
              </p>
            </div>
            <ReadinessBadge level={studentData.currentLevel} size="lg" />
          </div>
        </div>

        {/* Readiness Progress */}
        <Card className="mb-8 animate-slide-up opacity-0">
          <CardHeader>
            <CardTitle className="text-lg">Your Career Readiness</CardTitle>
            <CardDescription>
              Based on your skills and projects compared to successful alumni journeys
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReadinessProgress
              currentLevel={studentData.currentLevel}
              progress={studentData.levelProgress}
            />
            <p className="text-sm text-muted-foreground mt-4">
              Complete 2 more milestones to reach <strong>Interview Ready</strong> status
            </p>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: Briefcase,
              label: "Available Internships",
              value: studentData.availableInternships,
              color: "text-internship-ready",
              bgColor: "bg-internship-ready/10",
            },
            {
              icon: MessageCircle,
              label: "Questions Asked",
              value: studentData.questionsAsked,
              color: "text-primary",
              bgColor: "bg-primary/10",
            },
            {
              icon: TrendingUp,
              label: "Pathway Progress",
              value: `${completedTasks}/${totalTasks}`,
              color: "text-foundation",
              bgColor: "bg-foundation/10",
            },
            {
              icon: BookOpen,
              label: "Mentorship Sessions",
              value: studentData.mentorshipSessions,
              color: "text-interview-ready",
              bgColor: "bg-interview-ready/10",
            },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pathway Tasks */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-up opacity-0 stagger-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Your Career Pathway</CardTitle>
                  <CardDescription>
                    Complete these tasks to level up your readiness
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/student/career-pathway">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {studentData.pathwayTasks.map((task) => (
                    <li
                      key={task.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border ${
                        task.completed ? "bg-muted/50" : "bg-card"
                      }`}
                    >
                      {task.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={task.completed ? "text-muted-foreground line-through" : ""}
                      >
                        {task.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="mt-6 animate-slide-up opacity-0 stagger-3">
              <CardHeader>
                <CardTitle className="text-lg">Your Skills</CardTitle>
                <CardDescription>
                  How you compare to internship-ready alumni profiles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Announcements */}
            <Card className="animate-slide-up opacity-0 stagger-4">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {announcements.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start gap-3 p-3 rounded-lg border"
                    >
                      <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/student/ask-alumni">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Ask Alumni a Question
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/student/internships">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Browse Internships
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/student/mentorship">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Request Mentorship
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
