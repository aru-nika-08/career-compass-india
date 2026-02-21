import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Student routes */}
            <Route path="/student/dashboard" element={<ProtectedRoute allowedRoles={["student"]}><StudentDashboard /></ProtectedRoute>} />
            <Route path="/student/ask-alumni" element={<ProtectedRoute allowedRoles={["student"]}><AskAlumni /></ProtectedRoute>} />
            <Route path="/student/internships" element={<ProtectedRoute allowedRoles={["student"]}><BrowseInternships /></ProtectedRoute>} />
            <Route path="/student/mentorship" element={<ProtectedRoute allowedRoles={["student"]}><RequestMentorship /></ProtectedRoute>} />
            <Route path="/student/career-pathway" element={<ProtectedRoute allowedRoles={["student"]}><CareerPathway /></ProtectedRoute>} />
            
            {/* Alumni routes */}
            <Route path="/alumni/dashboard" element={<ProtectedRoute allowedRoles={["alumni"]}><AlumniDashboard /></ProtectedRoute>} />
            <Route path="/alumni/post-internship" element={<ProtectedRoute allowedRoles={["alumni"]}><PostInternship /></ProtectedRoute>} />
            <Route path="/alumni/answer-questions" element={<ProtectedRoute allowedRoles={["alumni"]}><AnswerQuestions /></ProtectedRoute>} />
            <Route path="/alumni/edit-journey" element={<ProtectedRoute allowedRoles={["alumni"]}><EditJourney /></ProtectedRoute>} />
            <Route path="/alumni/find-students" element={<ProtectedRoute allowedRoles={["alumni"]}><FindStudents /></ProtectedRoute>} />
            <Route path="/alumni/schedule-session" element={<ProtectedRoute allowedRoles={["alumni"]}><ScheduleSession /></ProtectedRoute>} />
            
            {/* Admin routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/events" element={<ProtectedRoute allowedRoles={["admin"]}><ManageEvents /></ProtectedRoute>} />
            <Route path="/admin/announcements" element={<ProtectedRoute allowedRoles={["admin"]}><SendAnnouncements /></ProtectedRoute>} />
            <Route path="/admin/internships" element={<ProtectedRoute allowedRoles={["admin"]}><ManageInternships /></ProtectedRoute>} />
            <Route path="/admin/reports" element={<ProtectedRoute allowedRoles={["admin"]}><ExportReports /></ProtectedRoute>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
