import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to continue your career journey
            </p>
          </div>

          <Card className="animate-slide-up opacity-0">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@college.edu"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:underline">
                  Create one
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Demo links */}
          <div className="mt-8 p-4 rounded-lg bg-muted/50 animate-slide-up opacity-0 stagger-2">
            <p className="text-sm text-muted-foreground mb-3 text-center">
              Quick demo access:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link to="/student/dashboard">Student Dashboard</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/alumni/dashboard">Alumni Dashboard</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
