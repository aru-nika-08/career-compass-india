import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Calendar, Clock, Video, Users } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingSessions = [
  {
    id: 1,
    title: "React Best Practices",
    mentee: "Rahul K.",
    date: "Jan 28, 2025",
    time: "4:00 PM",
    type: "1-on-1",
    status: "confirmed",
  },
  {
    id: 2,
    title: "Career Guidance Session",
    mentee: "Sneha M.",
    date: "Jan 30, 2025",
    time: "5:30 PM",
    type: "1-on-1",
    status: "pending",
  },
  {
    id: 3,
    title: "Mock Interview Practice",
    mentee: "Amit P.",
    date: "Feb 2, 2025",
    time: "3:00 PM",
    type: "1-on-1",
    status: "confirmed",
  },
];

export default function ScheduleSession() {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="alumni" />
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Schedule a Session</h1>
          <p className="text-muted-foreground">
            Set up mentorship sessions with your mentees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* New Session Form */}
          <Card className="animate-slide-up opacity-0">
            <CardHeader>
              <CardTitle className="text-lg">New Session</CardTitle>
              <CardDescription>Schedule a mentorship session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Session Topic</Label>
                <Input id="title" placeholder="e.g., Resume Review, Mock Interview" />
              </div>
              <div className="space-y-2">
                <Label>Session Type</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1on1">1-on-1 Mentoring</SelectItem>
                    <SelectItem value="group">Group Session</SelectItem>
                    <SelectItem value="mock">Mock Interview</SelectItem>
                    <SelectItem value="review">Resume/Project Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select duration" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes for Student</Label>
                <Textarea id="notes" placeholder="Any preparation or materials needed..." rows={3} />
              </div>
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Session
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Sessions */}
          <div className="animate-slide-up opacity-0 stagger-2">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Upcoming Sessions
            </h2>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Video className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{session.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            with {session.mentee}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {session.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {session.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>
                        {session.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
