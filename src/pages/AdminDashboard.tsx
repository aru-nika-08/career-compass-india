import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  UserCheck,
  Briefcase,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Bell,
  Plus,
  GraduationCap,
} from "lucide-react";

// Mock data
const adminStats = {
  totalStudents: 2134,
  totalAlumni: 523,
  pendingVerifications: 12,
  activeInternships: 47,
  totalMentorships: 89,
  conversionRate: 34,
};

const readinessDistribution = [
  { level: "Foundation", count: 1245, percentage: 58, color: "bg-foundation" },
  { level: "Internship Ready", count: 654, percentage: 31, color: "bg-internship-ready" },
  { level: "Interview Ready", count: 235, percentage: 11, color: "bg-interview-ready" },
];

const pendingAlumni = [
  {
    id: 1,
    name: "Vikram Singh",
    company: "Google",
    batch: "2018",
    requestedAt: "2 hours ago",
  },
  {
    id: 2,
    name: "Ananya Reddy",
    company: "Amazon",
    batch: "2020",
    requestedAt: "5 hours ago",
  },
  {
    id: 3,
    name: "Karthik Iyer",
    company: "Flipkart",
    batch: "2019",
    requestedAt: "1 day ago",
  },
];

const recentActivity = [
  { id: 1, action: "New internship posted by Priya S.", time: "10 min ago", type: "internship" },
  { id: 2, action: "5 students reached Internship Ready", time: "1 hour ago", type: "milestone" },
  { id: 3, action: "Alumni verification approved: Amit K.", time: "2 hours ago", type: "verification" },
  { id: 4, action: "New mentorship connection formed", time: "3 hours ago", type: "mentorship" },
];

// Mock alumni directory data
const alumniDirectory = [
  { id: "1", name: "Vikram Singh", batch: "2018", company: "Google", jobTitle: "Senior SDE", branch: "CSE", verified: true, email: "vikram@gmail.com" },
  { id: "2", name: "Ananya Reddy", batch: "2020", company: "Amazon", jobTitle: "SDE-II", branch: "CSE", verified: true, email: "ananya@gmail.com" },
  { id: "3", name: "Karthik Iyer", batch: "2019", company: "Flipkart", jobTitle: "Data Scientist", branch: "IT", verified: false, email: "karthik@gmail.com" },
  { id: "4", name: "Priya Sharma", batch: "2017", company: "Microsoft", jobTitle: "Product Manager", branch: "CSE", verified: true, email: "priya@gmail.com" },
  { id: "5", name: "Rohit Mehta", batch: "2021", company: "Razorpay", jobTitle: "Frontend Engineer", branch: "ECE", verified: true, email: "rohit@gmail.com" },
  { id: "6", name: "Sneha Patil", batch: "2016", company: "Infosys", jobTitle: "Tech Lead", branch: "CSE", verified: true, email: "sneha@gmail.com" },
  { id: "7", name: "Amit Kumar", batch: "2019", company: "Swiggy", jobTitle: "Backend Engineer", branch: "IT", verified: false, email: "amit@gmail.com" },
  { id: "8", name: "Neha Gupta", batch: "2020", company: "PhonePe", jobTitle: "ML Engineer", branch: "CSE", verified: true, email: "neha@gmail.com" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="admin" />

      <main className="container py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Overview of platform activity and pending actions
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link to="/admin/announcements">
                  <Bell className="mr-2 h-4 w-4" />
                  Announcements
                </Link>
              </Button>
              <Button asChild>
                <Link to="/admin/events">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Event
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Students", value: adminStats.totalStudents.toLocaleString() },
            { icon: UserCheck, label: "Verified Alumni", value: adminStats.totalAlumni },
            { icon: Clock, label: "Pending Verifications", value: adminStats.pendingVerifications, highlight: true },
            { icon: Briefcase, label: "Active Internships", value: adminStats.activeInternships },
            { icon: Users, label: "Mentorships", value: adminStats.totalMentorships },
            { icon: TrendingUp, label: "Conversion Rate", value: `${adminStats.conversionRate}%` },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className={`animate-slide-up opacity-0 ${stat.highlight ? "border-foundation" : ""}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="pt-4 pb-4">
                <div className="flex flex-col">
                  <stat.icon className="h-4 w-4 text-muted-foreground mb-2" />
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Readiness Distribution */}
            <Card className="animate-slide-up opacity-0 stagger-2">
              <CardHeader>
                <CardTitle className="text-lg">Student Readiness Distribution</CardTitle>
                <CardDescription>
                  Breakdown of students by career readiness level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {readinessDistribution.map((level) => (
                    <div key={level.level}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{level.level}</span>
                        <span className="text-muted-foreground">
                          {level.count.toLocaleString()} ({level.percentage}%)
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${level.color} rounded-full transition-all duration-500`}
                          style={{ width: `${level.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Weekly Level-Ups</p>
                      <p className="text-2xl font-bold text-internship-ready">+47</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Monthly Placements</p>
                      <p className="text-2xl font-bold text-interview-ready">23</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Avg. Time to Ready</p>
                      <p className="text-2xl font-bold">4.2 mo</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pending Alumni Verifications */}
            <Card className="animate-slide-up opacity-0 stagger-3">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Pending Alumni Verifications</CardTitle>
                  <CardDescription>
                    Review and verify alumni profiles
                  </CardDescription>
                </div>
                <Badge variant="secondary">{pendingAlumni.length} pending</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {pendingAlumni.map((alumni) => (
                    <li
                      key={alumni.id}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {alumni.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{alumni.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {alumni.company} • Batch {alumni.batch}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground mr-2">
                          {alumni.requestedAt}
                        </span>
                        <Button size="sm" variant="outline" className="text-destructive">
                          <XCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full mt-4">
                  View All Requests
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Alumni Directory Table */}
            <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.35s" }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Alumni Directory
                  </CardTitle>
                  <CardDescription>
                    Complete list of all alumni registered on the platform
                  </CardDescription>
                </div>
                <Badge variant="secondary">{alumniDirectory.length} alumni</Badge>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Batch</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {alumniDirectory.map((alumni) => (
                      <TableRow key={alumni.id}>
                        <TableCell className="font-medium">{alumni.name}</TableCell>
                        <TableCell>{alumni.batch}</TableCell>
                        <TableCell>{alumni.branch}</TableCell>
                        <TableCell>{alumni.company}</TableCell>
                        <TableCell>{alumni.jobTitle}</TableCell>
                        <TableCell className="text-muted-foreground text-xs">{alumni.email}</TableCell>
                        <TableCell>
                          {alumni.verified ? (
                            <Badge className="bg-success text-success-foreground text-xs">Verified</Badge>
                          ) : (
                            <Badge variant="outline" className="text-foundation text-xs">Pending</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="animate-slide-up opacity-0 stagger-4">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recentActivity.map((activity) => (
                    <li key={activity.id} className="flex items-start gap-3">
                      <div
                        className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                          activity.type === "internship"
                            ? "bg-internship-ready"
                            : activity.type === "milestone"
                            ? "bg-foundation"
                            : activity.type === "verification"
                            ? "bg-success"
                            : "bg-interview-ready"
                        }`}
                      />
                      <div>
                        <p className="text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Platform Health */}
            <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Platform Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Alumni Engagement</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Student Activity</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mentorship Satisfaction</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.55s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/admin/announcements">
                    <Bell className="mr-2 h-4 w-4" />
                    Send Announcement
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/admin/reports">
                    <Users className="mr-2 h-4 w-4" />
                    Export Reports
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/admin/internships">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Manage Internships
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
