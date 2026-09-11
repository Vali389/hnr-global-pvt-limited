export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  compensation: string;
  postedDate: string;
  postedDaysAgo: number;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  offerings: string[];
}

export const openings: JobOpening[] = [
  {
    id: "sr-fullstack-eng",
    title: "Senior Full Stack Engineer",
    department: "Software Engineering",
    location: "Visakhapatnam / Hybrid",
    type: "Full-Time",
    experience: "4–7 years",
    compensation: "₹18,00,000 – ₹28,00,000 PA",
    postedDate: "2 days ago",
    postedDaysAgo: 2,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    description:
      "Lead end-to-end feature architecture and delivery on high-throughput enterprise SaaS platforms. You will design fault-tolerant microservices, mentor junior engineers, and partner directly with global enterprise stakeholders.",
    responsibilities: [
      "Architect and ship scalable web apps using React, Next.js, and Node.js microservices.",
      "Design normalized relational databases and optimize complex SQL queries on PostgreSQL.",
      "Collaborate with DevOps engineers on AWS container orchestration and CI/CD pipelines.",
      "Conduct code reviews, drive architectural RFCs, and establish testing standards.",
    ],
    requirements: [
      "4+ years of hands-on experience building production full-stack systems.",
      "Strong proficiency in TypeScript, modern React, state management, and Node.js.",
      "Experience with cloud services (AWS S3, ECS, RDS, Lambda) and Docker.",
      "Excellent problem-solving skills and clear verbal communication.",
    ],
    offerings: [
      "Competitive base salary with annual performance incentives.",
      "Flexible hybrid working model (2 days office / 3 days remote).",
      "Comprehensive family health insurance + wellness coverage.",
      "₹25,000 annual professional development stipend.",
    ],
  },
  {
    id: "flutter-dev",
    title: "Flutter Mobile Developer",
    department: "Mobile Engineering",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "2–5 years",
    compensation: "₹12,00,000 – ₹20,00,000 PA",
    postedDate: "Today",
    postedDaysAgo: 0,
    skills: ["Flutter", "Dart", "Firebase", "REST / GraphQL", "BLoC", "CI/CD"],
    description:
      "Build silky-smooth, 60fps cross-platform mobile applications for iOS & Android. You will work on mission-critical fintech, healthtech, and logistics consumer apps used by thousands of daily users.",
    responsibilities: [
      "Develop cross-platform native-feeling applications using Flutter and Dart.",
      "Implement robust state management using BLoC or Riverpod architecture.",
      "Integrate complex RESTful APIs, WebSockets, payment gateways, and push notifications.",
      "Manage release cycles, TestFlight builds, and Google Play Console deployments.",
    ],
    requirements: [
      "2+ years of dedicated commercial Flutter & Dart development.",
      "Demonstrated track record of live apps published to the App Store or Google Play.",
      "Experience with secure offline caching, SQLite, and biometric authentication.",
      "Strong aesthetic sensibility and adherence to Material Design & Apple HIG.",
    ],
    offerings: [
      "Top-of-market salary benchmarked to tech hub standards.",
      "Latest M-series MacBook Pro development machine.",
      "Flexible hours with a focus on outcome over seat time.",
      "Fast-track promotion path into Mobile Lead roles.",
    ],
  },
  {
    id: "ai-ml-eng",
    title: "AI & Machine Learning Engineer",
    department: "AI & Data Solutions",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "2–5 years",
    compensation: "₹16,00,000 – ₹26,00,000 PA",
    postedDate: "1 day ago",
    postedDaysAgo: 1,
    skills: ["Python", "PyTorch", "LLMs", "RAG", "Vector DBs", "FastAPI", "MLOps"],
    description:
      "Build intelligent enterprise automation pipelines, custom Retrieval-Augmented Generation (RAG) knowledge assistants, and predictive analytics models for Fortune 500 clients.",
    responsibilities: [
      "Develop and deploy enterprise RAG pipelines using LangChain, LlamaIndex, and vector databases.",
      "Fine-tune open-weight models (Llama 3, Mistral) for specific domain vocabularies.",
      "Expose high-throughput inference APIs using FastAPI, Docker, and vLLM / Triton.",
      "Build automated data ingestion, chunking, and continuous model evaluation pipelines.",
    ],
    requirements: [
      "Strong foundation in Python, linear algebra, statistics, and machine learning fundamentals.",
      "Experience implementing production GenAI / LLM applications and prompt engineering.",
      "Familiarity with vector databases (Pinecone, Qdrant, pgvector) and embedding models.",
      "Comfortable reading recent ML research papers and translating them into code.",
    ],
    offerings: [
      "Access to dedicated GPU compute clusters for experimentation.",
      "Mentorship from veteran AI researchers and senior architects.",
      "Attendance sponsorship at leading AI & tech conferences.",
      "High-visibility impact on strategic enterprise contracts.",
    ],
  },
  {
    id: "devops-cloud-eng",
    title: "DevOps & Cloud Infrastructure Engineer",
    department: "Infrastructure & Platform",
    location: "Visakhapatnam",
    type: "Full-Time",
    experience: "3–6 years",
    compensation: "₹15,00,000 – ₹24,00,000 PA",
    postedDate: "3 days ago",
    postedDaysAgo: 3,
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus"],
    description:
      "Design, deploy, and automate zero-downtime cloud infrastructure across AWS, Azure, and GCP environments. You will be the guardian of enterprise security, high availability, and automated deployments.",
    responsibilities: [
      "Define and provision cloud resources using Terraform and Infrastructure-as-Code.",
      "Architect and operate autoscaling Kubernetes clusters (EKS / GKE) for high resilience.",
      "Build and maintain secure GitHub Actions CI/CD pipelines with automated security scans.",
      "Setup centralized observability, distributed tracing, and automated alerting.",
    ],
    requirements: [
      "3+ years managing multi-tier Linux production environments in AWS or GCP.",
      "Hands-on production Kubernetes orchestration and Helm chart management.",
      "Experience with SOC 2 / ISO 27001 hardening and secrets management (HashiCorp Vault).",
      "Solid scripting skills in Bash or Python for automated operations.",
    ],
    offerings: [
      "Comprehensive compensation with on-call premium allowance.",
      "100% sponsored cloud certifications (AWS Solutions Architect, CKA, etc.).",
      "Premium health insurance for self and dependents.",
      "Collaborative engineering culture with zero red tape.",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "Senior UI/UX & Product Designer",
    department: "Design & Innovation",
    location: "Visakhapatnam / Remote",
    type: "Full-Time",
    experience: "3–6 years",
    compensation: "₹12,00,000 – ₹18,00,000 PA",
    postedDate: "4 days ago",
    postedDaysAgo: 4,
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing"],
    description:
      "Craft visually stunning, accessible, and intuitive digital interfaces for complex enterprise SaaS tools and consumer mobile apps. You will collaborate closely with product managers and engineers from napkin sketch to final pixel.",
    responsibilities: [
      "Create interactive high-fidelity prototypes, wireframes, and design flows in Figma.",
      "Maintain and expand comprehensive design systems with tokens, variants, and component states.",
      "Conduct usability tests and user interviews to turn qualitative feedback into product clarity.",
      "Work side-by-side with frontend engineers to ensure 100% design fidelity in production.",
    ],
    requirements: [
      "Portfolio showcasing end-to-end SaaS or mobile product design casework.",
      "Mastery of Figma (auto-layout, components, variables, interactive prototypes).",
      "Deep empathy for user workflows combined with sharp visual typography and layout skills.",
      "Basic knowledge of HTML/CSS constraints is a strong plus.",
    ],
    offerings: [
      "Direct creative ownership over high-profile client applications.",
      "Latest design hardware and premium Figma/Adobe Creative Cloud subscriptions.",
      "Hybrid/Remote flexibility with balanced work-life boundaries.",
      "Health coverage, learning allowances, and team offsites.",
    ],
  },
  {
    id: "it-recruiter",
    title: "Senior Technical Recruiter",
    department: "Talent Acquisition",
    location: "Visakhapatnam / Hyderabad",
    type: "Full-Time",
    experience: "2–5 years",
    compensation: "₹8,00,000 – ₹14,00,000 PA + Uncapped Incentives",
    postedDate: "5 days ago",
    postedDaysAgo: 5,
    skills: ["Tech Sourcing", "LinkedIn Recruiter", "Boolean Search", "Screening", "Offer Negotiation"],
    description:
      "Drive end-to-end technical recruitment for high-profile clients across India and global markets. You will source, assess, and place elite software engineers, architects, and technology leaders.",
    responsibilities: [
      "Manage full hiring lifecycle: sourcing, tech screening, interview scheduling, and closing.",
      "Build proactive candidate talent pipelines across Full Stack, DevOps, AI, and Cloud niches.",
      "Partner with client hiring managers to calibrate job descriptions and salary bands.",
      "Deliver an exceptional candidate experience with timely communication and feedback.",
    ],
    requirements: [
      "2+ years of technical recruitment experience within IT services or staffing agencies.",
      "Deep understanding of modern tech stacks, roles, and software engineering terminology.",
      "Proven capability to source passive candidates via LinkedIn, GitHub, and niche communities.",
      "High energy, articulate communication, and strong negotiation skills.",
    ],
    offerings: [
      "Uncapped monthly and quarterly placement incentive structure.",
      "Modern AI sourcing tools and LinkedIn Recruiter enterprise seats provided.",
      "Clear pathway to Talent Acquisition Lead and Client Partner roles.",
      "Friendly, energetic, and supportive team environment.",
    ],
  },
  {
    id: "qa-lead",
    title: "Lead QA Automation Engineer",
    department: "Software Engineering",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "4–7 years",
    compensation: "₹14,00,000 – ₹22,00,000 PA",
    postedDate: "6 days ago",
    postedDaysAgo: 6,
    skills: ["Playwright", "Cypress", "Selenium", "TypeScript", "CI/CD", "API Testing"],
    description:
      "Lead automated QA frameworks across distributed microservices. You will architect robust end-to-end regression suites, integrate automated security scanners, and ensure zero-defect deployments.",
    responsibilities: [
      "Design and maintain scalable test automation frameworks using Playwright and TypeScript.",
      "Integrate automated API, UI, and regression tests into GitHub Actions CI/CD workflows.",
      "Perform load, stress, and latency testing for distributed microservices.",
      "Collaborate with developers to ensure testability and rigorous test coverage.",
    ],
    requirements: [
      "4+ years of dedicated automated testing experience on modern web and API applications.",
      "Hands-on expertise in Playwright, Cypress, or Selenium with TypeScript.",
      "Experience with API testing (Postman, REST Assured) and database validation.",
    ],
    offerings: [
      "Leadership opportunity directing QA strategies across enterprise accounts.",
      "Performance bonus and top-tier healthcare coverage.",
      "Certification support for cloud and quality engineering.",
    ],
  },
  {
    id: "principal-architect",
    title: "Principal Enterprise Solutions Architect",
    department: "Software Engineering",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "7 to 15+ years",
    compensation: "₹35,00,000 – ₹55,00,000 PA",
    postedDate: "1 day ago",
    postedDaysAgo: 1,
    skills: ["Cloud Architecture", "Distributed Systems", "AWS/Azure", "Microservices", "Event-Driven", "Kubernetes"],
    description:
      "Drive high-level technical architecture and technical strategy for multi-tier global enterprise modernization contracts. You will mentor engineering squads, interface with C-level stakeholders, and architect resilient, high-concurrency systems.",
    responsibilities: [
      "Define enterprise architecture blueprints for complex legacy modernizations and cloud migrations.",
      "Lead cross-functional engineering teams in delivering zero-downtime, fault-tolerant solutions.",
      "Establish technical governance, security frameworks, and engineering standards across projects.",
      "Engage directly with global Fortune 500 technology leaders on architectural discovery and roadmaps.",
    ],
    requirements: [
      "7 to 15+ years of extensive software engineering and enterprise architecture experience.",
      "Proven track record designing large-scale distributed systems and cloud-native solutions.",
      "Deep expertise across modern cloud platforms (AWS/Azure/GCP), microservices, and event-driven architecture.",
      "Outstanding leadership, executive presence, and clear stakeholder communication.",
    ],
    offerings: [
      "Executive compensation package with performance equity incentives.",
      "Direct leadership impact shaping enterprise client digital strategies.",
      "Comprehensive family healthcare and executive wellness benefits.",
      "Flexible hybrid executive schedule with global team collaboration.",
    ],
  },
];

export const industryOptions = [
  "Software Engineering",
  "Mobile Engineering",
  "AI & Data Solutions",
  "Infrastructure & Platform",
  "Design & Innovation",
  "Talent Acquisition",
];

export const locationOptions = ["Visakhapatnam", "Hyderabad", "Hybrid", "Remote"];

export const jobTypeOptions = ["Full-Time", "Contract", "Hybrid", "Remote"];

export const experienceOptions = ["0–2 years", "2–5 years", "3–6 years", "4–7 years", "7 to 15+ years"];
