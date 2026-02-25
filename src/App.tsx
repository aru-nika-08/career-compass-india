import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Student pages
import AskAlumni from "./pages/student/AskAlumni";
import BrowseInternships from "./pages/student/BrowseInternships";
import RequestMentorship from "./pages/student/RequestMentorship";
import CareerPathway from "./pages/student/CareerPathway";

// Alumni pages
import PostInternship from "./pages/alumni/PostInternship";
import AnswerQuestions from "./pages/alumni/AnswerQuestions";
import EditJourney from "./pages/alumni/EditJourney";
import FindStudents from "./pages/alumni/FindStudents";
import ScheduleSession from "./pages/alumni/ScheduleSession";

// Admin pages
import ManageEvents from "./pages/admin/ManageEvents";
import SendAnnouncements from "./pages/admin/SendAnnouncements";
import ManageInternships from "./pages/admin/ManageInternships";
import ExportReports from "./pages/admin/ExportReports";
import AlumniDirectory from "./pages/admin/AlumniDirectory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Student routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/ask-alumni" element={<AskAlumni />} />
          <Route path="/student/internships" element={<BrowseInternships />} />
          <Route path="/student/mentorship" element={<RequestMentorship />} />
          <Route path="/student/career-pathway" element={<CareerPathway />} />
          
          {/* Alumni routes */}
          <Route path="/alumni/dashboard" element={<AlumniDashboard />} />
          <Route path="/alumni/post-internship" element={<PostInternship />} />
          <Route path="/alumni/answer-questions" element={<AnswerQuestions />} />
          <Route path="/alumni/edit-journey" element={<EditJourney />} />
          <Route path="/alumni/find-students" element={<FindStudents />} />
          <Route path="/alumni/schedule-session" element={<ScheduleSession />} />
          
          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/events" element={<ManageEvents />} />
          <Route path="/admin/announcements" element={<SendAnnouncements />} />
          <Route path="/admin/internships" element={<ManageInternships />} />
          <Route path="/admin/reports" element={<ExportReports />} />
          <Route path="/admin/alumni-directory" element={<AlumniDirectory />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
