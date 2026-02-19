import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Send, Bell, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const pastAnnouncements = [
  {
    id: 1,
    title: "TCS Hiring Drive - Apply by Jan 30",
    audience: "All Students",
    sentAt: "Jan 25, 2025",
    views: 1245,
  },
  {
    id: 2,
    title: "Resume Workshop Registration Open",
    audience: "Internship Ready",
    sentAt: "Jan 22, 2025",
    views: 654,
  },
  {
    id: 3,
    title: "New Alumni Mentors Available",
    audience: "All Students",
    sentAt: "Jan 20, 2025",
    views: 987,
  },
];

export default function SendAnnouncements() {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="admin" />
      <main className="container py-8">
        <div className="mb-6 animate-fade-in">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Send Announcements</h1>
          <p className="text-muted-foreground">Broadcast messages to students and alumni</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* New Announcement */}
          <Card className="animate-slide-up opacity-0">
            <CardHeader>
              <CardTitle className="text-lg">New Announcement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Announcement title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your announcement..." rows={5} />
              </div>
              <div className="space-y-2">
                <Label>Target Audience</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select audience" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="students">All Students</SelectItem>
                    <SelectItem value="alumni">All Alumni</SelectItem>
                    <SelectItem value="foundation">Foundation Students</SelectItem>
                    <SelectItem value="internship-ready">Internship Ready Students</SelectItem>
                    <SelectItem value="interview-ready">Interview Ready Students</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="urgent" />
                <Label htmlFor="urgent" className="text-sm">Mark as urgent</Label>
              </div>
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Announcement
              </Button>
            </CardContent>
          </Card>

          {/* Past Announcements */}
          <div className="animate-slide-up opacity-0 stagger-2">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Announcements
            </h2>
            <div className="space-y-4">
              {pastAnnouncements.map((a) => (
                <Card key={a.id}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{a.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">{a.audience}</Badge>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {a.sentAt}
                      </span>
                      <span>{a.views} views</span>
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
