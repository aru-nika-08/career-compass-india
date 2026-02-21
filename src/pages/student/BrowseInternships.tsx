import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ReadinessBadge } from "@/components/ui/ReadinessBadge";
import { ArrowLeft, Briefcase, MapPin, Clock, Building2, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TCS Digital",
    location: "Bangalore",
    type: "On-site",
    duration: "3 months",
    stipend: "₹15,000/month",
    requiredLevel: "internship-ready" as const,
    skills: ["React", "JavaScript", "CSS"],
    postedBy: "Priya S.",
    postedAgo: "2 days ago",
    applicants: 23,
  },
  {
    id: 2,
    title: "Backend Engineering Intern",
    company: "Flipkart",
    location: "Bangalore",
    type: "Hybrid",
    duration: "6 months",
    stipend: "₹25,000/month",
    requiredLevel: "internship-ready" as const,
    skills: ["Node.js", "Python", "SQL"],
    postedBy: "Amit K.",
    postedAgo: "3 days ago",
    applicants: 45,
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "Infosys",
    location: "Pune",
    type: "Remote",
    duration: "4 months",
    stipend: "₹12,000/month",
    requiredLevel: "foundation" as const,
    skills: ["Excel", "SQL", "Python"],
    postedBy: "Vikram R.",
    postedAgo: "1 day ago",
    applicants: 67,
  },
  {
    id: 4,
    title: "Full Stack Developer Intern",
    company: "Razorpay",
    location: "Bangalore",
    type: "On-site",
    duration: "6 months",
    stipend: "₹30,000/month",
    requiredLevel: "interview-ready" as const,
    skills: ["React", "Node.js", "MongoDB", "System Design"],
    postedBy: "Sneha M.",
    postedAgo: "5 days ago",
    applicants: 12,
  },
];

export default function BrowseInternships() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Browse Internships</h1>
          <p className="text-muted-foreground">
            Opportunities matched to your readiness level. Higher levels unlock more internships.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6 animate-slide-up opacity-0">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search internships..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Internship Listings */}
        <div className="space-y-4 animate-slide-up opacity-0 stagger-2">
          {internships.map((internship) => (
            <Card key={internship.id} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{internship.title}</h3>
                        <p className="text-muted-foreground">{internship.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {internship.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {internship.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" /> {internship.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {internship.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Posted by {internship.postedBy}</span>
                      <span>{internship.postedAgo}</span>
                      <span>{internship.applicants} applicants</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <ReadinessBadge level={internship.requiredLevel} size="sm" />
                    <p className="text-lg font-bold">{internship.stipend}</p>
                    <Button>Apply Now</Button>
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
