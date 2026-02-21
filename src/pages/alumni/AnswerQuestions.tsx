import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReadinessBadge, ReadinessLevel } from "@/components/ui/ReadinessBadge";
import { ArrowLeft, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const pendingQuestions = [
  {
    id: 1,
    question: "How important is competitive programming for product companies?",
    studentLevel: "foundation" as ReadinessLevel,
    category: "Career",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    question: "What projects helped you the most during internship interviews?",
    studentLevel: "internship-ready" as ReadinessLevel,
    category: "Interview Prep",
    timeAgo: "5 hours ago",
  },
  {
    id: 3,
    question: "Is it worth learning DevOps as a fresher?",
    studentLevel: "foundation" as ReadinessLevel,
    category: "Skills",
    timeAgo: "1 day ago",
  },
  {
    id: 4,
    question: "How do I negotiate my first salary offer?",
    studentLevel: "interview-ready" as ReadinessLevel,
    category: "Career",
    timeAgo: "1 day ago",
  },
];

const answeredQuestions = [
  {
    id: 5,
    question: "What's the best way to prepare for system design interviews?",
    answer: "Start with basics — understand load balancers, databases, caching. Then practice designing systems.",
    studentLevel: "internship-ready" as ReadinessLevel,
    category: "Interview Prep",
    answeredAt: "2 days ago",
    likes: 24,
  },
  {
    id: 6,
    question: "Should I do an internship in a startup or a big company?",
    answer: "Both have benefits. Startups give you breadth. Big companies give depth and brand value.",
    studentLevel: "foundation" as ReadinessLevel,
    category: "Internship",
    answeredAt: "3 days ago",
    likes: 18,
  },
];

export default function AnswerQuestions() {
  const [answerText, setAnswerText] = useState<Record<number, string>>({});

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-6 animate-fade-in">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/alumni/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Answer Student Questions</h1>
          <p className="text-muted-foreground">
            Help students by sharing your experience. Questions are anonymous.
          </p>
        </div>

        <Tabs defaultValue="pending" className="animate-slide-up opacity-0">
          <TabsList className="mb-6">
            <TabsTrigger value="pending">
              Pending ({pendingQuestions.length})
            </TabsTrigger>
            <TabsTrigger value="answered">
              Answered ({answeredQuestions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingQuestions.map((q) => (
              <Card key={q.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <Badge variant="secondary">{q.category}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ReadinessBadge level={q.studentLevel} size="sm" />
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {q.timeAgo}
                      </span>
                    </div>
                  </div>
                  <p className="font-medium text-lg mb-4">{q.question}</p>
                  <Textarea
                    placeholder="Write your answer here..."
                    value={answerText[q.id] || ""}
                    onChange={(e) => setAnswerText({ ...answerText, [q.id]: e.target.value })}
                    rows={3}
                    className="mb-3"
                  />
                  <Button disabled={!answerText[q.id]?.trim()}>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Answer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="answered" className="space-y-4">
            {answeredQuestions.map((q) => (
              <Card key={q.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <Badge variant="secondary">{q.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-success" />
                      Answered {q.answeredAt}
                    </span>
                  </div>
                  <p className="font-medium mb-3">{q.question}</p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">{q.answer}</p>
                    <p className="text-xs text-muted-foreground mt-2">👍 {q.likes} students found this helpful</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
