import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, GraduationCap, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const alumniDirectory = [
  { id: "1", name: "Vikram Singh", batch: "2018", company: "Google", jobTitle: "Senior SDE", branch: "CSE", verified: true, email: "vikram@gmail.com" },
  { id: "2", name: "Ananya Reddy", batch: "2020", company: "Amazon", jobTitle: "SDE-II", branch: "CSE", verified: true, email: "ananya@gmail.com" },
  { id: "3", name: "Karthik Iyer", batch: "2019", company: "Flipkart", jobTitle: "Data Scientist", branch: "IT", verified: false, email: "karthik@gmail.com" },
  { id: "4", name: "Priya Sharma", batch: "2017", company: "Microsoft", jobTitle: "Product Manager", branch: "CSE", verified: true, email: "priya@gmail.com" },
  { id: "5", name: "Rohit Mehta", batch: "2021", company: "Razorpay", jobTitle: "Frontend Engineer", branch: "ECE", verified: true, email: "rohit@gmail.com" },
  { id: "6", name: "Sneha Patil", batch: "2016", company: "Infosys", jobTitle: "Tech Lead", branch: "CSE", verified: true, email: "sneha@gmail.com" },
  { id: "7", name: "Amit Kumar", batch: "2019", company: "Swiggy", jobTitle: "Backend Engineer", branch: "IT", verified: false, email: "amit@gmail.com" },
  { id: "8", name: "Neha Gupta", batch: "2020", company: "PhonePe", jobTitle: "ML Engineer", branch: "CSE", verified: true, email: "neha@gmail.com" },
  { id: "9", name: "Rajesh Nair", batch: "2015", company: "TCS", jobTitle: "Architect", branch: "CSE", verified: true, email: "rajesh@gmail.com" },
  { id: "10", name: "Divya Menon", batch: "2022", company: "Zerodha", jobTitle: "Full Stack Dev", branch: "IT", verified: true, email: "divya@gmail.com" },
  { id: "11", name: "Suresh Yadav", batch: "2018", company: "Wipro", jobTitle: "DevOps Engineer", branch: "ECE", verified: false, email: "suresh@gmail.com" },
  { id: "12", name: "Meera Joshi", batch: "2021", company: "Atlassian", jobTitle: "SDE-I", branch: "CSE", verified: true, email: "meera@gmail.com" },
];

export default function AlumniDirectory() {
  const [search, setSearch] = useState("");

  const filtered = alumniDirectory.filter((a) =>
    [a.name, a.company, a.jobTitle, a.branch, a.batch]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="admin" />
      <main className="container py-8">
        <div className="mb-6 flex items-center justify-between animate-fade-in">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <GraduationCap className="h-7 w-7" />
            Alumni Directory
          </h1>
          <p className="text-muted-foreground">
            Complete list of all alumni registered on the platform
          </p>
        </div>

        <Card className="animate-slide-up opacity-0">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-lg">{filtered.length} Alumni</CardTitle>
              <CardDescription>Search and manage alumni profiles</CardDescription>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, company, branch..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
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
                {filtered.map((alumni) => (
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
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                      No alumni found matching "{search}"
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
