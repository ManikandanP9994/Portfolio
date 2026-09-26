export const profile = {
  name: "Manikandan P",
  shortName: "Mani",
  role: "AI Developer | Gen AI | Agentic AI | Full Stack",
  headline: "AI Developer | Full Stack | GenAI",
  email: "p.mani9485@gmail.com",
  location: "Bangalore / Hyderabad, India",
  github: "https://github.com/ManikandanP9994",
  linkedin: "https://linkedin.com/in/mani-kandan-434250221",
  twitter: "https://x.com/LovelyManiEdit1",
  resumePath: "/resume",
  bio: "I build AI-powered applications, autonomous agents and modern web solutions to solve real-world problems. Passionate about LLMs, RAG, Agentic AI and building impactful products.",
  about:
    "I'm an AI Developer and Full Stack Engineer with a strong interest in LLMs, RAG, and Agentic AI. I love building real-world applications that combine AI with modern web technologies.",
  traits: [
    "Problem Solver",
    "Passionate about AI",
    "Continuous Learner",
    "Open to Opportunities",
  ],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export const stackCards = [
  { title: "LLMs", subtitle: "LangChain", icon: "brain" },
  { title: "Agentic AI", subtitle: "LangGraph", icon: "nodes" },
  { title: "RAG", subtitle: "Vector DB", icon: "database" },
  { title: "Full Stack", subtitle: "React + FastAPI", icon: "layers" },
];

export const stats = [
  { value: "3+", label: "Projects Completed", icon: "briefcase" },
  { value: "Real-World", label: "AI Applications", icon: "users" },
  { value: "5+", label: "Technologies", icon: "code" },
  { value: "MCA", label: "Bharathiar University", icon: "grad" },
  { value: "100%", label: "Passion for Learning", icon: "flame" },
];

export const projects = [
  {
    slug: "asea-2-0",
    featured: true,
    title: "ASEA 2.0",
    subtitle: "Autonomous Software Engineering Agent",
    description:
      "Multi-agent system for autonomous software development with human-in-the-loop approvals, Git integration and sandbox execution.",
    tags: ["LangGraph", "FastAPI", "Claude API", "Docker"],
    image: "/images/project-asea.png",
    href: "https://github.com/ManikandanP9994",
  },
  {
    slug: "hospital-rag-chatbot",
    featured: true,
    title: "Hospital RAG Chatbot",
    subtitle: "RAG-based Healthcare Assistant",
    description:
      "Domain-specific chatbot for hospital information using RAG vector database and LLM with a modern React frontend.",
    tags: ["RAG", "OpenAI / Gemini", "FastAPI", "React"],
    image: "/images/project-hospital.png",
    href: "https://github.com/ManikandanP9994",
  },
  {
    slug: "ecommerce-sentiment",
    featured: true,
    title: "E-commerce Sentiment Analysis",
    subtitle: "Customer Review Analysis",
    description:
      "NLP pipeline to analyze customer reviews and predict sentiment with 0.70 accuracy and 0.697 F1 score.",
    tags: ["Python", "Transformers", "Machine Learning"],
    image: "/images/project-sentiment.png",
    href: "https://github.com/ManikandanP9994",
  },
];

export const skills = [
  { name: "Python", color: "#3776AB" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "FastAPI", color: "#009688" },
  { name: "LangChain", color: "#1C3C3C" },
  { name: "LangGraph", color: "#1a73e8" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "Hugging Face", color: "#FFD21E" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MySQL", color: "#00758F" },
  { name: "Git", color: "#F05032" },
];

export const experience = [
  {
    role: "React Developer",
    period: "Oct 2025 – May 2026",
    current: true,
    bullets: [
      "Developed responsive web applications using React.js",
      "Integrated APIs and built reusable components",
      "Improved performance and user experience",
    ],
  },
];

export const education = [
  {
    school: "MCA — Bharathiar University",
    period: "2020 – 2022",
    detail: "Master of Computer Applications (GPA: 8.3)",
  },
];

export const posts = [
  {
    title: "Building Agentic Workflows with LangGraph",
    date: "Sep 2026",
    excerpt:
      "How I structured multi-agent loops, human-in-the-loop gates, and sandbox tools in ASEA 2.0.",
  },
  {
    title: "RAG that actually cites hospital policies",
    date: "Aug 2026",
    excerpt:
      "Chunking, metadata filters, and evaluation tricks that made the hospital assistant trustworthy.",
  },
];

export const chatSystemPrompt = `You are Mani's AI assistant on Manikandan P's personal portfolio.
Speak in a friendly, concise, professional tone. Keep answers short unless asked for detail.
You help visitors learn about Mani's skills, projects, and experience.

Facts you must use:
- Name: Manikandan P (goes by Mani)
- Role: AI Developer | Gen AI | Agentic AI | Full Stack
- Location: Bangalore / Hyderabad, India
- Email: p.mani9485@gmail.com
- GitHub: https://github.com/ManikandanP9994
- LinkedIn: https://linkedin.com/in/mani-kandan-434250221
- Education: MCA, Bharathiar University, 2020-2022, GPA 8.3
- Experience: React Developer, Oct 2025 – Mar 2026 (current). Built responsive React apps, integrated APIs, improved UX.
- Skills: Python, React, Next.js, FastAPI, LangChain, LangGraph, OpenAI, Hugging Face, Docker, PostgreSQL, MySQL, Git. Also LLMs, RAG, vector DBs.
- Projects:
  1) ASEA 2.0 — Autonomous Software Engineering Agent. Multi-agent system with HITL approvals, Git integration, sandbox execution. Stack: LangGraph, FastAPI, Claude API, Docker.
  2) Hospital RAG Chatbot — Domain-specific hospital assistant using RAG + LLM + React. Stack: RAG, OpenAI/Gemini, FastAPI, React.
  3) E-commerce Sentiment Analysis — NLP pipeline, 0.70 accuracy, 0.697 F1. Stack: Python, Transformers, ML.
- He is open to opportunities, internships, collaborations, and freelance projects.

If asked something unknown, say you don't have that detail and suggest emailing him.
Never invent employers, publications, or metrics that are not listed above.`;
