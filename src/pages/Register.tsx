import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, User, Users } from "lucide-react";

export default function Register() {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get("role") || "student";
  const [selectedRole, setSelectedRole] = useState(defaultRole);

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
              <CardDescription>
                Choose your role to get started
              </CardDescription>
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
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Rahul" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Kumar" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">College Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="rahul@college.edu"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Current Year</Label>
                      <Input id="year" placeholder="3rd Year B.Tech" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="branch">Branch/Department</Label>
                      <Input id="branch" placeholder="Computer Science" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <Button type="submit" className="w-full">
                      Create Student Account
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="alumni">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Priya" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Sharma" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="priya@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="batch">Batch Year</Label>
                      <Input id="batch" placeholder="2019" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Current Company</Label>
                      <Input id="company" placeholder="Microsoft" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Current Role</Label>
                      <Input id="role" placeholder="Senior Software Engineer" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <Button type="submit" className="w-full">
                      Create Alumni Account
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
