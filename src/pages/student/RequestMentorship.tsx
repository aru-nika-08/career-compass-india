import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, BookOpen, Star, Briefcase, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const mentors = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior Software Engineer",
    company: "Microsoft",
    batch: "2019",
    expertise: ["React", "System Design", "Career Growth"],
    rating: 4.8,
    mentees: 8,
    verified: true,
    bio: "I help students transition from college to their first tech role. Specializing in frontend development and interview prep.",
  },
  {
    id: 2,
    name: "Amit Kulkarni",
    role: "Product Manager",
    company: "Google",
    batch: "2017",
    expertise: ["Product Thinking", "DSA", "Interview Prep"],
    rating: 4.9,
    mentees: 5,
    verified: true,
    bio: "Former SDE turned PM. Can guide you on both technical and product career paths.",
  },
  {
    id: 3,
    name: "Sneha Mehta",
    role: "Data Scientist",
    company: "Flipkart",
    batch: "2020",
    expertise: ["Python", "Machine Learning", "Data Analysis"],
    rating: 4.7,
    mentees: 12,
    verified: true,
    bio: "Passionate about helping students break into data science. Focus on practical projects over theory.",
  },
  {
    id: 4,
    name: "Vikram Rathore",
    role: "DevOps Engineer",
    company: "Amazon",
    batch: "2018",
    expertise: ["AWS", "Docker", "CI/CD"],
    rating: 4.6,
    mentees: 3,
    verified: true,
    bio: "If you're interested in cloud and infrastructure, I can help you build a strong foundation.",
  },
];

export default function RequestMentorship() {
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Request Mentorship</h1>
          <p className="text-muted-foreground">
            Connect with verified alumni mentors who've walked the same path.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mentors.map((mentor, index) => (
            <Card
              key={mentor.id}
              className="card-hover animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {mentor.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{mentor.name}</h3>
                      {mentor.verified && (
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {mentor.role} at {mentor.company}
                    </p>
                    <p className="text-xs text-muted-foreground">Batch of {mentor.batch}</p>
                  </div>
                </div>

                <p className="text-sm mb-4">{mentor.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-foundation" />
                    {mentor.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {mentor.mentees} mentees
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Request Mentorship
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
