import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, User, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get("role") || "student";
  const [selectedRole, setSelectedRole] = useState(defaultRole);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const { toast } = useToast();

  // Student fields
  const [sFirstName, setSFirstName] = useState("");
  const [sLastName, setSLastName] = useState("");
  const [sEmail, setSEmail] = useState("");
  const [sYear, setSYear] = useState("");
  const [sBranch, setSBranch] = useState("");
  const [sPassword, setSPassword] = useState("");

  // Alumni fields
  const [aFirstName, setAFirstName] = useState("");
  const [aLastName, setALastName] = useState("");
  const [aEmail, setAEmail] = useState("");
  const [aBatchYear, setABatchYear] = useState("");
  const [aCompany, setACompany] = useState("");
  const [aJobTitle, setAJobTitle] = useState("");
  const [aPassword, setAPassword] = useState("");

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await signUp(sEmail, sPassword, {
      first_name: sFirstName,
      last_name: sLastName,
      role: "student",
      current_year: sYear,
      branch: sBranch,
    });
    setIsLoading(false);
    if (error) {
      toast({ title: "Registration failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Account created!", description: "Please check your email to verify your account." });
    }
  };

  const handleAlumniSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await signUp(aEmail, aPassword, {
      first_name: aFirstName,
      last_name: aLastName,
      role: "alumni",
      batch_year: aBatchYear,
      company_name: aCompany,
      job_title: aJobTitle,
    });
    setIsLoading(false);
    if (error) {
      toast({ title: "Registration failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Account created!", description: "Please check your email to verify your account. Alumni accounts also require admin verification." });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Join CareerPath</h1>
            <p className="text-muted-foreground">
              Start your journey towards career clarity
            </p>
          </div>

          <Card className="animate-slide-up opacity-0">
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Choose your role to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedRole} onValueChange={setSelectedRole}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="student" className="gap-2">
                    <User className="h-4 w-4" />
                    Student
                  </TabsTrigger>
                  <TabsTrigger value="alumni" className="gap-2">
                    <Users className="h-4 w-4" />
                    Alumni
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="student">
                  <form className="space-y-4" onSubmit={handleStudentSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sFirstName">First Name</Label>
                        <Input id="sFirstName" placeholder="Rahul" value={sFirstName} onChange={e => setSFirstName(e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sLastName">Last Name</Label>
                        <Input id="sLastName" placeholder="Kumar" value={sLastName} onChange={e => setSLastName(e.target.value)} required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sEmail">College Email</Label>
                      <Input id="sEmail" type="email" placeholder="rahul@college.edu" value={sEmail} onChange={e => setSEmail(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sYear">Current Year</Label>
                      <Input id="sYear" placeholder="3rd Year B.Tech" value={sYear} onChange={e => setSYear(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sBranch">Branch/Department</Label>
                      <Input id="sBranch" placeholder="Computer Science" value={sBranch} onChange={e => setSBranch(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sPassword">Password</Label>
                      <Input id="sPassword" type="password" placeholder="••••••••" value={sPassword} onChange={e => setSPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Student Account"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="alumni">
                  <form className="space-y-4" onSubmit={handleAlumniSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="aFirstName">First Name</Label>
                        <Input id="aFirstName" placeholder="Priya" value={aFirstName} onChange={e => setAFirstName(e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="aLastName">Last Name</Label>
                        <Input id="aLastName" placeholder="Sharma" value={aLastName} onChange={e => setALastName(e.target.value)} required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aEmail">Email</Label>
                      <Input id="aEmail" type="email" placeholder="priya@company.com" value={aEmail} onChange={e => setAEmail(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aBatchYear">Batch Year</Label>
                      <Input id="aBatchYear" placeholder="2019" value={aBatchYear} onChange={e => setABatchYear(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aCompany">Current Company</Label>
                      <Input id="aCompany" placeholder="Microsoft" value={aCompany} onChange={e => setACompany(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aJobTitle">Current Role</Label>
                      <Input id="aJobTitle" placeholder="Senior Software Engineer" value={aJobTitle} onChange={e => setAJobTitle(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aPassword">Password</Label>
                      <Input id="aPassword" type="password" placeholder="••••••••" value={aPassword} onChange={e => setAPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Alumni Account"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Alumni accounts require verification by admin
                    </p>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
