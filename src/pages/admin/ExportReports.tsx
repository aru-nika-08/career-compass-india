import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, FileText, Users, Briefcase, TrendingUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const reports = [
  {
    id: 1,
    title: "Student Readiness Report",
    description: "Breakdown of students by readiness level with skill analysis",
    icon: Users,
    lastGenerated: "Jan 25, 2025",
    format: "PDF / Excel",
  },
  {
    id: 2,
    title: "Alumni Engagement Report",
    description: "Mentorship activity, Q&A contributions, and internship postings",
    icon: TrendingUp,
    lastGenerated: "Jan 24, 2025",
    format: "PDF / Excel",
  },
  {
    id: 3,
    title: "Internship Conversion Report",
    description: "Application-to-selection ratios, placement statistics",
    icon: Briefcase,
    lastGenerated: "Jan 20, 2025",
    format: "PDF / Excel",
  },
  {
    id: 4,
    title: "Event Attendance Report",
    description: "Event participation and engagement metrics",
    icon: Calendar,
    lastGenerated: "Jan 22, 2025",
    format: "PDF / Excel",
  },
  {
    id: 5,
    title: "Platform Usage Report",
    description: "Daily active users, feature usage, and engagement trends",
    icon: FileText,
    lastGenerated: "Jan 25, 2025",
    format: "PDF / Excel",
  },
];

export default function ExportReports() {
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Export Reports</h1>
          <p className="text-muted-foreground">
            Generate and download platform analytics reports
          </p>
        </div>

        {/* Date Range */}
        <Card className="mb-6 animate-slide-up opacity-0">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="space-y-2 flex-1">
                <Label>Report Period</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select period" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Last 7 days</SelectItem>
                    <SelectItem value="month">Last 30 days</SelectItem>
                    <SelectItem value="quarter">Last 3 months</SelectItem>
                    <SelectItem value="semester">Last 6 months</SelectItem>
                    <SelectItem value="year">Last 1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 flex-1">
                <Label>Format</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select format" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports */}
        <div className="grid md:grid-cols-2 gap-4 animate-slide-up opacity-0 stagger-2">
          {reports.map((report) => (
            <Card key={report.id} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <report.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{report.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Last: {report.lastGenerated}
                      </span>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
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
