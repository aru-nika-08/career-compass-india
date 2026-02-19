import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Send, MessageCircle, Clock, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const previousQuestions = [
  {
    id: 1,
    question: "How important is competitive programming for product companies?",
    answer: "It's helpful but not mandatory. Focus more on problem-solving skills and understanding data structures well. Many top companies value project experience equally.",
    answeredBy: "Priya S. (Microsoft)",
    timeAgo: "2 days ago",
    likes: 12,
    category: "Career",
  },
  {
    id: 2,
    question: "What's the best way to prepare for system design interviews?",
    answer: "Start with basics — understand load balancers, databases, caching. Then practice designing systems like URL shortener, chat apps. Watch system design videos on YouTube.",
    answeredBy: "Amit K. (Google)",
    timeAgo: "3 days ago",
    likes: 24,
    category: "Interview Prep",
  },
  {
    id: 3,
    question: "Should I do an internship in a startup or a big company?",
    answer: "Both have benefits. Startups give you breadth — you'll learn many things. Big companies give depth and brand value. Choose based on where you are in your journey.",
    answeredBy: "Sneha M. (Flipkart)",
    timeAgo: "5 days ago",
    likes: 18,
    category: "Internship",
  },
];

const categories = ["Career", "Interview Prep", "Internship", "Skills", "Projects", "General"];

export default function AskAlumni() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="student" />
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Ask Alumni a Question</h1>
          <p className="text-muted-foreground">
            Your questions are anonymous. Alumni only see your readiness level, not your name.
          </p>
        </div>

        {/* Ask Question Form */}
        <Card className="mb-8 animate-slide-up opacity-0">
          <CardHeader>
            <CardTitle className="text-lg">Post a New Question</CardTitle>
            <CardDescription>
              Be specific to get better answers. Your identity stays hidden.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Type your question here... e.g., 'What skills should I focus on for a backend developer role?'"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={4}
            />
            <Button disabled={!question.trim() || !category}>
              <Send className="mr-2 h-4 w-4" />
              Submit Question
            </Button>
          </CardContent>
        </Card>

        {/* Previous Q&A */}
        <div className="animate-slide-up opacity-0 stagger-2">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Recent Q&A
          </h2>
          <div className="space-y-4">
            {previousQuestions.map((q) => (
              <Card key={q.id}>
                <CardContent className="pt-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="mb-2">{q.category}</Badge>
                    <p className="font-medium text-lg">{q.question}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 mt-3">
                    <p className="text-sm mb-3">{q.answer}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="text-[10px]">
                            {q.answeredBy.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{q.answeredBy}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {q.timeAgo}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {q.likes}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
