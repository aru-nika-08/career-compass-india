import { Header } from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ReadinessBadge, ReadinessLevel } from "@/components/ui/ReadinessBadge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Search, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Rahul Kumar",
    branch: "CSE",
    year: "3rd Year",
    level: "internship-ready" as ReadinessLevel,
    progress: 65,
    skills: ["JavaScript", "React", "Node.js"],
    interests: "Frontend Development",
  },
  {
    id: 2,
    name: "Sneha Mishra",
    branch: "IT",
    year: "2nd Year",
    level: "foundation" as ReadinessLevel,
    progress: 30,
    skills: ["Python", "SQL", "HTML/CSS"],
    interests: "Data Science",
  },
  {
    id: 3,
    name: "Amit Patel",
    branch: "CSE",
    year: "4th Year",
    level: "interview-ready" as ReadinessLevel,
    progress: 88,
    skills: ["Java", "System Design", "AWS", "React"],
    interests: "Full Stack Development",
  },
  {
    id: 4,
    name: "Neha Gupta",
    branch: "ECE",
    year: "3rd Year",
    level: "foundation" as ReadinessLevel,
    progress: 40,
    skills: ["C++", "Embedded Systems", "IoT"],
    interests: "Embedded/IoT",
  },
  {
    id: 5,
    name: "Karan Singh",
    branch: "CSE",
    year: "3rd Year",
    level: "internship-ready" as ReadinessLevel,
    progress: 72,
    skills: ["Python", "Django", "PostgreSQL"],
    interests: "Backend Development",
  },
];

export default function FindStudents() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-6 animate-fade-in">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/alumni/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Find Students to Mentor</h1>
          <p className="text-muted-foreground">
            Browse student profiles and offer mentorship based on your expertise.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6 animate-slide-up opacity-0">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name or skill..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Readiness Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="foundation">Foundation</SelectItem>
                  <SelectItem value="internship-ready">Internship Ready</SelectItem>
                  <SelectItem value="interview-ready">Interview Ready</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[150px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2">2nd Year</SelectItem>
                  <SelectItem value="3">3rd Year</SelectItem>
                  <SelectItem value="4">4th Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Student List */}
        <div className="space-y-4 animate-slide-up opacity-0 stagger-2">
          {students.map((student) => (
            <Card key={student.id} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{student.name}</h3>
                        <ReadinessBadge level={student.level} size="sm" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {student.branch} • {student.year} • Interested in {student.interests}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {student.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 min-w-[140px]">
                    <div className="w-full">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="h-1.5" />
                    </div>
                    <Button size="sm">
                      <Users className="mr-2 h-4 w-4" />
                      Mentor
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
