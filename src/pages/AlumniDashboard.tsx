import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Users,
  MessageCircle,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Plus,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { ReadinessBadge, ReadinessLevel } from "@/components/ui/ReadinessBadge";

// Mock data
const alumniData = {
  name: "Priya Sharma",
  currentRole: "Senior Software Engineer",
  company: "Microsoft",
  batch: "2019",
  verified: true,
  mentees: 8,
  questionsAnswered: 24,
  internshipsPosted: 3,
  impactScore: 156,
};

const pendingQuestions = [
  {
    id: 1,
    question: "How important is competitive programming for product companies?",
    studentLevel: "foundation" as ReadinessLevel,
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    question: "What projects helped you the most during internship interviews?",
    studentLevel: "internship-ready" as ReadinessLevel,
    timeAgo: "5 hours ago",
  },
];

const recentMentees = [
  { id: 1, name: "Rahul K.", level: "internship-ready" as ReadinessLevel, progress: "On track" },
  { id: 2, name: "Sneha M.", level: "foundation" as ReadinessLevel, progress: "Needs guidance" },
  { id: 3, name: "Amit P.", level: "interview-ready" as ReadinessLevel, progress: "Excellent" },
];

const careerJourney = [
  { stage: "College", skills: ["C++", "Java", "Basic DSA"], projects: 2 },
  { stage: "Internship @ Flipkart", skills: ["JavaScript", "React", "Node.js"], projects: 3 },
  { stage: "First Job @ Amazon", skills: ["System Design", "AWS", "Leadership"], projects: 5 },
  { stage: "Current @ Microsoft", skills: ["Architecture", "Mentoring", "Strategy"], projects: 8 },
];

export default function AlumniDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="alumni" />

      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  PS
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold">{alumniData.name}</h1>
                  {alumniData.verified && (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  )}
                </div>
                <p className="text-muted-foreground">
                  {alumniData.currentRole} at {alumniData.company} • Batch of{" "}
                  {alumniData.batch}
                </p>
              </div>
            </div>
            <Button asChild>
              <Link to="/alumni/post-internship">
                <Plus className="mr-2 h-4 w-4" />
                Post Internship
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: Users,
              label: "Active Mentees",
              value: alumniData.mentees,
              color: "text-primary",
              bgColor: "bg-primary/10",
            },
            {
              icon: MessageCircle,
              label: "Questions Answered",
              value: alumniData.questionsAnswered,
              color: "text-internship-ready",
              bgColor: "bg-internship-ready/10",
            },
            {
              icon: Briefcase,
              label: "Internships Posted",
              value: alumniData.internshipsPosted,
              color: "text-foundation",
              bgColor: "bg-foundation/10",
            },
            {
              icon: TrendingUp,
              label: "Impact Score",
              value: alumniData.impactScore,
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
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pending Questions */}
            <Card className="animate-slide-up opacity-0 stagger-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Anonymous Questions</CardTitle>
                  <CardDescription>
                    Help students by answering their questions
                  </CardDescription>
                </div>
                <Badge variant="secondary">{pendingQuestions.length} pending</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {pendingQuestions.map((q) => (
                    <li key={q.id} className="p-4 rounded-lg border">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="font-medium mb-2">{q.question}</p>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <ReadinessBadge level={q.studentLevel} size="sm" />
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {q.timeAgo}
                            </span>
                          </div>
                        </div>
                        <Button size="sm">Answer</Button>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full mt-4" asChild>
                  <Link to="/alumni/answer-questions">
                    View All Questions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Career Journey */}
            <Card className="animate-slide-up opacity-0 stagger-3">
              <CardHeader>
                <CardTitle className="text-lg">Your Career Journey</CardTitle>
                <CardDescription>
                  This is how students see your career path
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {careerJourney.map((stage, index) => (
                    <div key={stage.stage} className="relative pl-8 pb-8 last:pb-0">
                      {/* Timeline line */}
                      {index < careerJourney.length - 1 && (
                        <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-border" />
                      )}
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-xs text-primary-foreground font-bold">
                          {index + 1}
                        </span>
                      </div>
                      {/* Content */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">{stage.stage}</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {stage.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {stage.projects} projects completed
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/alumni/edit-journey">Edit Journey</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Mentees */}
            <Card className="animate-slide-up opacity-0 stagger-4">
              <CardHeader>
                <CardTitle className="text-lg">Your Mentees</CardTitle>
                <CardDescription>Students you're currently guiding</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recentMentees.map((mentee) => (
                    <li
                      key={mentee.id}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {mentee.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{mentee.name}</p>
                          <ReadinessBadge level={mentee.level} size="sm" />
                        </div>
                      </div>
                      <Badge
                        variant={
                          mentee.progress === "Excellent"
                            ? "default"
                            : mentee.progress === "On track"
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {mentee.progress}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full mt-4">
                  Manage Mentees
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/alumni/post-internship">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Post New Internship
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/alumni/find-students">
                    <Users className="mr-2 h-4 w-4" />
                    Find Students to Mentor
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/alumni/schedule-session">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Schedule Session
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
