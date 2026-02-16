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
    oneLiner: "AI-assisted healthcare workflows with measurable UX and reliability gains.",
    problem:
      "Care teams had fragmented tools and slow handoffs across clinical workflows.",
    build:
      "Built a unified Next.js platform with AI-assisted triage flows, secure APIs, and resilient cloud deployment patterns.",
    impact:
      "Cut workflow latency by 38% and improved platform stability to 99.9% uptime in production-like load tests.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/ts.svg", "/ml-icon.svg", "/database-icon.svg", "/security-icon.svg"],
    impactTags: ["38% lower latency", "99.9% uptime", "Secure APIs"],
    liveLink: "https://github.com/Jayanth-stack?tab=repositories",
    repoLink: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 2,
    title: "Real-Time Trading Platform",
    oneLiner: "Low-latency market streaming with telemetry-first operations.",
    problem:
      "Traders needed real-time market updates without dropped events or jitter.",
    build:
      "Designed a streaming event pipeline and low-latency UI with observability baked into ingestion and delivery.",
    impact:
      "Reduced event-to-screen latency under burst traffic and sustained stable throughput with clear telemetry for incidents.",
    img: "/p5.svg",
    iconLists: ["/stream.svg", "/api-icon.svg", "/edge-computing-icon.svg", "/database-icon.svg"],
    impactTags: ["Sub-second updates", "Stable throughput", "Realtime telemetry"],
    liveLink: "https://github.com/Jayanth-stack?tab=repositories",
    repoLink: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 3,
    title: "CodeForge: Intelligent Code Search",
    oneLiner: "Developer search that returns relevant code fast and reliably.",
    problem:
      "Engineering teams were wasting time hunting through large repositories for implementation details.",
    build:
      "Implemented semantic retrieval and efficient query pipelines with guardrails for result quality and response consistency.",
    impact:
      "Improved code discovery speed and reduced context-switch cost for onboarding and debugging workflows.",
    img: "/p7.svg",
    iconLists: ["/ts.svg", "/api-icon.svg", "/host.svg", "/security-icon.svg"],
    impactTags: ["Faster discovery", "High relevance", "Cloud-ready"],
    liveLink: "https://github.com/Jayanth-stack?tab=repositories",
    repoLink: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 4,
    title: "3D Product Experience with Three.js + GSAP",
    oneLiner: "Interactive 3D product storytelling without sacrificing responsiveness.",
    problem:
      "Product pages needed higher engagement while keeping load and interaction performance acceptable.",
    build:
      "Created an immersive Three.js + GSAP experience with controlled motion budgets and optimized rendering paths.",
    impact:
      "Increased interactive session depth while maintaining smooth transitions across modern desktop and mobile devices.",
    img: "/p4.svg",
    iconLists: ["/three.svg", "/gsap.svg", "/next.svg", "/tail.svg", "/ts.svg"],
    impactTags: ["High engagement", "Smooth transitions", "Responsive 3D"],
    liveLink: "https://github.com/Jayanth-stack?tab=repositories",
    repoLink: "https://github.com/Jayanth-stack?tab=repositories",
  },
  {
    id: 5,
    title: "Enterprise Workflow Automation Dashboard",
    oneLiner: "Secure workflow orchestration dashboard for enterprise operations.",
    problem:
      "Ops teams relied on fragmented manual processes that caused delays and inconsistent audit trails.",
    build:
      "Developed a full-stack dashboard with robust auth, workflow orchestration APIs, and deployment-ready cloud architecture.",
    impact:
      "Reduced manual handoff overhead and improved operational visibility for recurring enterprise workflows.",
    img: "/p8.svg",
    iconLists: ["/auth-icon.svg", "/database-icon.svg", "/api-icon.svg", "/dock.svg"],
    impactTags: ["Secure by default", "Lower ops overhead", "Audit visibility"],
    liveLink: "https://github.com/Jayanth-stack?tab=repositories",
    repoLink: "https://github.com/Jayanth-stack?tab=repositories",
  },
];

export const heroProofItems = [
  { id: 1, value: "99.9%", label: "Uptime delivered" },
  { id: 2, value: "38%", label: "Latency reduction" },
  { id: 3, value: "AWS x3", label: "Active certifications" },
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
