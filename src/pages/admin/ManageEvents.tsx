import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, Calendar, MapPin, Users, Clock, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Resume Workshop",
    date: "Jan 28, 2025",
    time: "2:00 PM",
    location: "Seminar Hall A",
    type: "Workshop",
    attendees: 78,
    status: "upcoming",
  },
  {
    id: 2,
    title: "TCS Campus Hiring Drive",
    date: "Feb 5, 2025",
    time: "9:00 AM",
    location: "Main Auditorium",
    type: "Hiring Drive",
    attendees: 234,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Alumni Talk: Life at Google",
    date: "Feb 12, 2025",
    time: "4:00 PM",
    location: "Online (Zoom)",
    type: "Webinar",
    attendees: 156,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Hackathon 2025",
    date: "Jan 15, 2025",
    time: "10:00 AM",
    location: "CS Lab Block",
    type: "Competition",
    attendees: 120,
    status: "completed",
  },
];

export default function ManageEvents() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-6 animate-fade-in">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Manage Events</h1>
            <p className="text-muted-foreground">Create, edit, and manage campus events</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>

        <div className="space-y-4 animate-slide-up opacity-0">
          {events.map((event) => (
            <Card key={event.id}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>
                          {event.status}
                        </Badge>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" /> {event.attendees} registered
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
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
