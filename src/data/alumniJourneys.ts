import type { ReadinessLevel } from "@/hooks/useCareerProgress";

export interface JourneyTask {
  id: string;
  title: string;
  description: string;
}

export interface JourneyStage {
  level: ReadinessLevel;
  label: string;
  tasks: JourneyTask[];
}

export interface AlumniProfile {
  id: string;
  name: string;
  avatar: string;
  currentRole: string;
  company: string;
  batch: string;
  college: string;
  targetRoles: string[]; // roles this alumni's journey is relevant for
  journey: JourneyStage[];
  timelineSteps: string[]; // simplified journey summary
}

export const alumniData: AlumniProfile[] = [
  {
    id: "alumni-1",
    name: "Priya Sharma",
    avatar: "PS",
    currentRole: "Sr. Software Engineer",
    company: "Microsoft",
    batch: "2018",
    college: "NIT Trichy",
    targetRoles: ["Software Engineer", "Full Stack Developer", "Backend Developer"],
    timelineSteps: [
      "B.Tech CSE — NIT Trichy (2014–2018)",
      "Intern at Flipkart — Summer 2017",
      "SDE-1 at Amazon — 2018–2020",
      "SDE-2 at Amazon — 2020–2022",
      "Sr. SDE at Microsoft — 2022–Present",
    ],
    journey: [
      {
        level: "foundation",
        label: "Foundation",
        tasks: [
          { id: "a1-f1", title: "Master C/C++ fundamentals", description: "Complete a structured C/C++ course covering pointers, memory, and OOP." },
          { id: "a1-f2", title: "Learn HTML, CSS & JavaScript basics", description: "Build 3 static web pages to solidify fundamentals." },
          { id: "a1-f3", title: "Solve 30 easy DSA problems", description: "Focus on arrays, strings, and basic sorting on LeetCode/HackerRank." },
          { id: "a1-f4", title: "Build a personal portfolio website", description: "Create a responsive portfolio using HTML, CSS, and vanilla JS." },
        ],
      },
      {
        level: "skill-building",
        label: "Skill Building",
        tasks: [
          { id: "a1-s1", title: "Complete React.js fundamentals", description: "Build a to-do app and a weather dashboard using React." },
          { id: "a1-s2", title: "Learn Node.js & Express", description: "Create REST APIs with authentication and CRUD operations." },
          { id: "a1-s3", title: "Build a full-stack project", description: "E-commerce or blog app with React frontend and Node backend." },
          { id: "a1-s4", title: "Solve 60 medium DSA problems", description: "Focus on trees, graphs, and dynamic programming." },
          { id: "a1-s5", title: "Learn Git & GitHub workflows", description: "Contribute to an open-source project with proper PR etiquette." },
        ],
      },
      {
        level: "internship-ready",
        label: "Internship Ready",
        tasks: [
          { id: "a1-i1", title: "Build 2 portfolio-worthy projects", description: "Full-stack apps with real-world use cases deployed on the cloud." },
          { id: "a1-i2", title: "Learn system design basics", description: "Study load balancers, caching, databases, and microservices intro." },
          { id: "a1-i3", title: "Solve 100+ DSA problems (medium)", description: "Cover all major topics: DP, graphs, greedy, backtracking." },
          { id: "a1-i4", title: "Get resume reviewed by 2 professionals", description: "Use alumni network or career services for feedback." },
          { id: "a1-i5", title: "Complete 2 mock interviews", description: "Practice with peers or mentors simulating real interview conditions." },
        ],
      },
      {
        level: "interview-ready",
        label: "Interview Ready",
        tasks: [
          { id: "a1-iv1", title: "Solve 50+ hard DSA problems", description: "Focus on contest-level problems and optimize solutions." },
          { id: "a1-iv2", title: "Complete 3 system design case studies", description: "Design Twitter, URL shortener, and chat system." },
          { id: "a1-iv3", title: "Do 5 mock interviews with alumni", description: "Simulate FAANG-style interviews with feedback rounds." },
          { id: "a1-iv4", title: "Prepare STAR-format behavioral answers", description: "Draft 10 stories covering leadership, conflict, and teamwork." },
          { id: "a1-iv5", title: "Apply to 15+ target companies", description: "Customize resume and cover letter per company. Track applications." },
        ],
      },
    ],
  },
  {
    id: "alumni-2",
    name: "Rahul Verma",
    avatar: "RV",
    currentRole: "Data Scientist",
    company: "Google",
    batch: "2019",
    college: "IIT Bombay",
    targetRoles: ["Data Scientist", "ML Engineer", "Data Analyst"],
    timelineSteps: [
      "B.Tech EE — IIT Bombay (2015–2019)",
      "Research Intern at ISRO — Summer 2018",
      "Data Analyst at Mu Sigma — 2019–2020",
      "ML Engineer at Flipkart — 2020–2022",
      "Data Scientist at Google — 2022–Present",
    ],
    journey: [
      {
        level: "foundation",
        label: "Foundation",
        tasks: [
          { id: "a2-f1", title: "Learn Python programming", description: "Master Python basics, NumPy, and Pandas for data manipulation." },
          { id: "a2-f2", title: "Complete statistics & probability course", description: "Khan Academy or NPTEL course on descriptive & inferential stats." },
          { id: "a2-f3", title: "Learn SQL for data querying", description: "Practice joins, aggregations, window functions on StrataScratch." },
          { id: "a2-f4", title: "Build 2 data analysis projects", description: "EDA on Kaggle datasets with visualizations using Matplotlib/Seaborn." },
        ],
      },
      {
        level: "skill-building",
        label: "Skill Building",
        tasks: [
          { id: "a2-s1", title: "Complete ML fundamentals course", description: "Andrew Ng's ML course or NPTEL ML course. Implement from scratch." },
          { id: "a2-s2", title: "Learn scikit-learn & TensorFlow basics", description: "Build classification, regression, and clustering models." },
          { id: "a2-s3", title: "Complete 3 Kaggle competitions", description: "Participate and submit solutions. Aim for top 50% initially." },
          { id: "a2-s4", title: "Learn data visualization with Tableau/PowerBI", description: "Create interactive dashboards for business insights." },
          { id: "a2-s5", title: "Build an end-to-end ML project", description: "Data collection → EDA → model → deployment with Flask/Streamlit." },
        ],
      },
      {
        level: "internship-ready",
        label: "Internship Ready",
        tasks: [
          { id: "a2-i1", title: "Deep dive into deep learning", description: "Complete deep learning specialization. Implement CNNs and RNNs." },
          { id: "a2-i2", title: "Build 2 deployed ML applications", description: "Deploy models with real-time predictions using cloud services." },
          { id: "a2-i3", title: "Learn MLOps basics", description: "Docker, CI/CD for ML, model versioning with MLflow." },
          { id: "a2-i4", title: "Publish a research paper or blog series", description: "Document findings on Medium or submit to a conference." },
          { id: "a2-i5", title: "Complete 3 mock data science interviews", description: "Cover case studies, SQL, ML theory, and coding rounds." },
        ],
      },
      {
        level: "interview-ready",
        label: "Interview Ready",
        tasks: [
          { id: "a2-iv1", title: "Master A/B testing & experimentation", description: "Learn hypothesis testing, p-values, and experimental design." },
          { id: "a2-iv2", title: "Solve 50+ SQL interview problems", description: "Practice on LeetCode, StrataScratch, and DataLemur." },
          { id: "a2-iv3", title: "Complete 5 case study interviews", description: "Practice product sense and metric design questions." },
          { id: "a2-iv4", title: "Build a capstone portfolio project", description: "End-to-end project showcasing the full data science lifecycle." },
          { id: "a2-iv5", title: "Apply to 15+ data science roles", description: "Target FAANG, startups, and consulting firms. Network actively." },
        ],
      },
    ],
  },
  {
    id: "alumni-3",
    name: "Ananya Patel",
    avatar: "AP",
    currentRole: "Product Manager",
    company: "Razorpay",
    batch: "2017",
    college: "BITS Pilani",
    targetRoles: ["Product Manager", "Business Analyst", "Strategy Consultant"],
    timelineSteps: [
      "B.E. CS — BITS Pilani (2013–2017)",
      "Intern at Paytm — Summer 2016",
      "Associate PM at Ola — 2017–2019",
      "PM at PhonePe — 2019–2022",
      "Sr. PM at Razorpay — 2022–Present",
    ],
    journey: [
      {
        level: "foundation",
        label: "Foundation",
        tasks: [
          { id: "a3-f1", title: "Learn product thinking fundamentals", description: "Read 'Inspired' by Marty Cagan and 'The Lean Startup'." },
          { id: "a3-f2", title: "Understand basic coding & databases", description: "Learn enough to communicate with engineering teams effectively." },
          { id: "a3-f3", title: "Study 10 product case studies", description: "Analyze products like UPI, Swiggy, Zerodha, and their growth." },
          { id: "a3-f4", title: "Build wireframes for 2 app ideas", description: "Use Figma to create low-fidelity prototypes with user flows." },
        ],
      },
      {
        level: "skill-building",
        label: "Skill Building",
        tasks: [
          { id: "a3-s1", title: "Complete a product management course", description: "Coursera PM specialization or Upraised PM fellowship." },
          { id: "a3-s2", title: "Learn data analytics for PMs", description: "SQL, Excel, and basic Python for analyzing product metrics." },
          { id: "a3-s3", title: "Write 5 detailed PRDs", description: "Product requirement documents for real-world problem statements." },
          { id: "a3-s4", title: "Conduct 10 user interviews", description: "Practice qualitative research with real users for a problem area." },
          { id: "a3-s5", title: "Build and launch an MVP", description: "No-code or low-code tool to validate a product hypothesis." },
        ],
      },
      {
        level: "internship-ready",
        label: "Internship Ready",
        tasks: [
          { id: "a3-i1", title: "Complete 5 product strategy exercises", description: "Market sizing, GTM strategy, pricing, and competitive analysis." },
          { id: "a3-i2", title: "Master product metrics & analytics", description: "Learn AARRR, North Star metrics, cohort analysis, and funnels." },
          { id: "a3-i3", title: "Lead a cross-functional project", description: "Coordinate with design, engineering, and marketing on a real project." },
          { id: "a3-i4", title: "Get mentored by a working PM", description: "Shadow a PM for a week or get regular mentorship sessions." },
          { id: "a3-i5", title: "Practice 10 PM interview questions", description: "Cover product design, estimation, and improvement questions." },
        ],
      },
      {
        level: "interview-ready",
        label: "Interview Ready",
        tasks: [
          { id: "a3-iv1", title: "Complete 20 product case interviews", description: "Practice with peers simulating Google, Meta, and startup PM rounds." },
          { id: "a3-iv2", title: "Master execution & prioritization frameworks", description: "RICE, ICE, MoSCoW, and stakeholder management techniques." },
          { id: "a3-iv3", title: "Build a PM portfolio", description: "Document 3 case studies showing impact, process, and learnings." },
          { id: "a3-iv4", title: "Network with 10 PMs on LinkedIn", description: "Conduct informational interviews to understand different PM roles." },
          { id: "a3-iv5", title: "Apply to 15+ PM roles", description: "Target both startups and large companies. Customize each application." },
        ],
      },
    ],
  },
  {
    id: "alumni-4",
    name: "Vikram Singh",
    avatar: "VS",
    currentRole: "DevOps Engineer",
    company: "Atlassian",
    batch: "2020",
    college: "VIT Vellore",
    targetRoles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer"],
    timelineSteps: [
      "B.Tech IT — VIT Vellore (2016–2020)",
      "Intern at Infosys — Summer 2019",
      "Systems Engineer at TCS — 2020–2021",
      "Cloud Engineer at Freshworks — 2021–2023",
      "DevOps Engineer at Atlassian — 2023–Present",
    ],
    journey: [
      {
        level: "foundation",
        label: "Foundation",
        tasks: [
          { id: "a4-f1", title: "Learn Linux fundamentals", description: "Master the terminal, file system, permissions, and shell scripting." },
          { id: "a4-f2", title: "Understand networking basics", description: "TCP/IP, DNS, HTTP, load balancing, and firewalls." },
          { id: "a4-f3", title: "Learn Python or Bash scripting", description: "Automate 5 repetitive tasks using scripts." },
          { id: "a4-f4", title: "Set up a local development environment", description: "Install and configure VS Code, Git, Docker locally." },
        ],
      },
      {
        level: "skill-building",
        label: "Skill Building",
        tasks: [
          { id: "a4-s1", title: "Learn Docker & containerization", description: "Containerize 3 applications and understand Docker networking." },
          { id: "a4-s2", title: "Master Git & CI/CD pipelines", description: "Set up GitHub Actions or Jenkins for automated testing and deployment." },
          { id: "a4-s3", title: "Learn AWS/GCP fundamentals", description: "Get a cloud certification (AWS Cloud Practitioner or GCP Associate)." },
          { id: "a4-s4", title: "Learn Infrastructure as Code", description: "Use Terraform to provision cloud resources programmatically." },
          { id: "a4-s5", title: "Deploy a multi-service application", description: "Use Docker Compose to deploy a full-stack app with database." },
        ],
      },
      {
        level: "internship-ready",
        label: "Internship Ready",
        tasks: [
          { id: "a4-i1", title: "Learn Kubernetes basics", description: "Deploy and manage containerized apps on a K8s cluster." },
          { id: "a4-i2", title: "Set up monitoring & logging", description: "Implement Prometheus, Grafana, and ELK stack for observability." },
          { id: "a4-i3", title: "Build a complete CI/CD pipeline", description: "From code commit to production deployment with rollback capabilities." },
          { id: "a4-i4", title: "Learn security best practices", description: "Secret management, container scanning, and network policies." },
          { id: "a4-i5", title: "Complete an AWS Solutions Architect cert", description: "Study and pass the associate-level certification exam." },
        ],
      },
      {
        level: "interview-ready",
        label: "Interview Ready",
        tasks: [
          { id: "a4-iv1", title: "Design infrastructure for 3 case studies", description: "Scalable architectures for e-commerce, streaming, and SaaS apps." },
          { id: "a4-iv2", title: "Master incident response procedures", description: "Practice post-mortems, runbooks, and on-call simulations." },
          { id: "a4-iv3", title: "Contribute to DevOps open-source tools", description: "Submit meaningful PRs to Terraform providers, K8s operators, etc." },
          { id: "a4-iv4", title: "Complete 5 DevOps mock interviews", description: "Cover system design, troubleshooting, and scenario-based questions." },
          { id: "a4-iv5", title: "Apply to 15+ DevOps/SRE roles", description: "Target product companies and cloud-native startups." },
        ],
      },
    ],
  },
];
