export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I design resilient distributed systems with AI-ready architecture and clean engineering standards.",
    description: "Senior Software Engineer focused on scalable backend and platform systems.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Comfortable collaborating across US, India, and global teams",
    description: "Strong async communication and cross-functional execution",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Core engineering stack",
    description: "Python, Java, TypeScript, Cloud, Data, and AI",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI-first builder with production ownership mindset",
    description: "Reliability, observability, and performance are built in from day one",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building LLM-backed services and cloud-native data workflows",
    description: "What I am focused on right now",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have a role or project in mind?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MediViewAI: AI-Powered Healthcare Platform",
    des: "Built an accessible, responsive web platform with AI-assisted workflows, optimized rendering, and production-grade deployment patterns.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/ts.svg", "/ml-icon.svg", "/database-icon.svg", "/security-icon.svg"],
    link: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 2,
    title: "Real-Time Trading Platform",
    des: "Designed a low-latency interface and streaming pipeline for market events with telemetry-first monitoring and stable throughput.",
    img: "/p5.svg",
    iconLists: ["/stream.svg", "/api-icon.svg", "/edge-computing-icon.svg", "/database-icon.svg"],
    link: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 3,
    title: "CodeForge: Intelligent Code Search",
    des: "Implemented a developer-focused search interface with efficient querying patterns, quality checks, and cloud-ready architecture.",
    img: "/p7.svg",
    iconLists: ["/ts.svg", "/api-icon.svg", "/host.svg", "/security-icon.svg"],
    link: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 4,
    title: "3D Product Experience with Three.js + GSAP",
    des: "Created an immersive, animation-rich 3D product page using performant transitions, interactive camera movement, and modern frontend architecture.",
    img: "/p4.svg",
    iconLists: ["/three.svg", "/gsap.svg", "/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 5,
    title: "Enterprise Workflow Automation Dashboard",
    des: "Developed a secure full-stack dashboard for operational workflows with robust auth, API orchestration, and cloud deployment readiness.",
    img: "/p8.svg",
    iconLists: ["/auth-icon.svg", "/database-icon.svg", "/api-icon.svg", "/dock.svg"],
    link: "https://github.com/Jayanth-stack?tab=repositories",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Scube Innovations LLC",
    period: "Jul 2025 - Present",
    location: "USA",
    desc: "Architected AI-enabled backend services and distributed pipelines with Python, FastAPI, Spring Boot, Celery, Redis, and AWS SQS; improved latency by 38% and reliability to 99.9% uptime.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Graduate Assistant, Libraries IT",
    company: "Kent State University",
    period: "Oct 2023 - May 2025",
    location: "Kent, OH",
    desc: "Built secure data and API services with Spring Boot + Python, integrated cloud databases, and improved data retrieval by 25% while accelerating release cycles by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Senior Systems Engineer",
    company: "Infosys Ltd",
    period: "Jul 2021 - Jul 2023",
    location: "India",
    desc: "Refactored microservices for sub-30ms response times and automated cloud infrastructure with Terraform + CloudFormation to cut provisioning time by 35%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Certifications & Credentials",
    company: "AWS",
    period: "Developer Associate | ML Specialty | Cloud Practitioner",
    location: "Active",
    desc: "AWS Certified Developer Associate, AWS Certified Machine Learning Specialty, and AWS Cloud Practitioner with a strong focus on cloud-native engineering.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const impactStats = [
  { id: 1, label: "Latency Reduced", value: "38%" },
  { id: 2, label: "Infra Cost Saved", value: "27%" },
  { id: 3, label: "Code Coverage", value: "90%" },
  { id: 4, label: "System Uptime", value: "99.9%" },
];

export const skillGroups = [
  {
    id: 1,
    title: "Languages & Frameworks",
    items: ["Python", "Java", "TypeScript", "React", "Spring Boot", "FastAPI", "GraphQL"],
  },
  {
    id: 2,
    title: "AI, Data & Systems",
    items: ["LLMs", "NLP", "PyTorch", "TensorFlow", "Distributed Systems", "Microservices", "ETL"],
  },
  {
    id: 3,
    title: "Cloud & Platform",
    items: ["AWS", "Azure", "Google Cloud", "Oracle Cloud", "Kubernetes", "Docker", "Terraform"],
  },
  {
    id: 4,
    title: "Observability & Quality",
    items: ["Prometheus", "Grafana", "Jenkins", "CI/CD", "Testing", "Performance Profiling", "Debugging"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/AJayanth007",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jayanth-alapati-6b9123167/",
  },
];
