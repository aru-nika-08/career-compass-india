import { Header } from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ReadinessBadge, ReadinessLevel } from "@/components/ui/ReadinessBadge";
import { ArrowLeft, Search, Briefcase, Building2, MapPin, Users, Eye, Ban } from "lucide-react";
import { Link } from "react-router-dom";

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TCS Digital",
    postedBy: "Priya S.",
    location: "Bangalore",
    requiredLevel: "internship-ready" as ReadinessLevel,
    applicants: 23,
    status: "active",
    postedDate: "Jan 24, 2025",
  },
  {
    id: 2,
    title: "Backend Engineering Intern",
    company: "Flipkart",
    postedBy: "Amit K.",
    location: "Bangalore",
    requiredLevel: "internship-ready" as ReadinessLevel,
    applicants: 45,
    status: "active",
    postedDate: "Jan 22, 2025",
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "Infosys",
    postedBy: "Vikram R.",
    location: "Pune",
    requiredLevel: "foundation" as ReadinessLevel,
    applicants: 67,
    status: "active",
    postedDate: "Jan 25, 2025",
  },
  {
    id: 4,
    title: "ML Engineer Intern",
    company: "Wipro",
    postedBy: "Sneha M.",
    location: "Hyderabad",
    requiredLevel: "interview-ready" as ReadinessLevel,
    applicants: 12,
    status: "closed",
    postedDate: "Jan 10, 2025",
  },
];

export default function ManageInternships() {
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Manage Internships</h1>
          <p className="text-muted-foreground">
            Monitor and manage all alumni-posted internship opportunities
          </p>
        </div>

        {/* Search */}
        <Card className="mb-6 animate-slide-up opacity-0">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search internships..." className="pl-10" />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 animate-slide-up opacity-0 stagger-1">
          <Card>
            <CardContent className="pt-4 pb-4 text-center">
              <p className="text-2xl font-bold">{internships.filter(i => i.status === "active").length}</p>
              <p className="text-xs text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4 text-center">
              <p className="text-2xl font-bold">{internships.reduce((a, i) => a + i.applicants, 0)}</p>
              <p className="text-xs text-muted-foreground">Total Applicants</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4 text-center">
              <p className="text-2xl font-bold">{internships.filter(i => i.status === "closed").length}</p>
              <p className="text-xs text-muted-foreground">Closed</p>
            </CardContent>
          </Card>
        </div>

        {/* Internship List */}
        <div className="space-y-4 animate-slide-up opacity-0 stagger-2">
          {internships.map((internship) => (
            <Card key={internship.id}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{internship.title}</h3>
                        <Badge variant={internship.status === "active" ? "default" : "secondary"}>
                          {internship.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {internship.company} • Posted by {internship.postedBy} • {internship.postedDate}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {internship.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" /> {internship.applicants} applicants
                        </span>
                        <ReadinessBadge level={internship.requiredLevel} size="sm" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" /> View
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Ban className="h-4 w-4 mr-1" /> Remove
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
