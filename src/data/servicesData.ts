import heroClean from "@/assets/hero-clean.jpg";
import servicesHero from "@/assets/services-hero-pro.jpg";
import heroMesh from "@/assets/hero-mesh.jpg";
import svcAi from "@/assets/svc-ai.jpg";
import bgAbout from "@/assets/bg-about.jpg";
import aboutImg from "@/assets/about.jpg";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  tagline: string;
  heroImage: string;
  overview: string;
  coreOfferings: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  techStack: {
    category: string;
    skills: string[];
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    eyebrow: "ENTERPRISE SOFTWARE & CRM",
    tagline: "Tailor-made software built to modernise legacy workflows and power mission-critical operations.",
    heroImage: heroClean,
    overview:
      "We design, build, and deploy resilient, high-performance bespoke software that solves complex operational bottlenecks. From enterprise resource planning (ERP) and custom CRM systems to real-time analytics engines, our solutions are engineered for scalability, security, and effortless third-party integrations.",
    coreOfferings: [
      {
        title: "Enterprise ERP & CRM Systems",
        description: "Centralize business data, automate supply chains, and deliver personalized customer journeys with scalable software.",
        bullets: [
          "Custom ERP architecture for multi-branch operations",
          "Automated lead routing and omnichannel CRM engines",
          "Role-based security, audit trails, and data sovereignty",
          "Seamless sync with legacy mainframe systems",
        ],
      },
      {
        title: "Legacy Modernisation & Migration",
        description: "Transform obsolete monolithic software into flexible, containerized microservices without operational downtime.",
        bullets: [
          "Zero-downtime database and schema migration",
          "Monolith to microservices decomposition",
          "RESTful API & GraphQL wrapper layers",
          "Cloud-native hosting on AWS, Azure, and GCP",
        ],
      },
      {
        title: "Workflow Automation & Portals",
        description: "Eliminate manual friction with automated document management, digital approvals, and unified partner portals.",
        bullets: [
          "Intelligent document parsing and digital signatures",
          "Cross-department approval workflows and SLA tracking",
          "Self-service vendor and client management portals",
          "Real-time event webhooks and messaging queues",
        ],
      },
      {
        title: "BI & Data Visualization Dashboards",
        description: "Convert raw operational data into actionable executive insights with sub-second responsive reporting dashboards.",
        bullets: [
          "Custom KPIs, heatmaps, and trend analytics",
          "Automated scheduled reports & PDF exports",
          "Real-time streaming telemetry with WebSockets",
          "Embedded analytics for client-facing software",
        ],
      },
    ],
    techStack: [
      { category: "Backend Languages", skills: ["Java (Spring Boot)", "Python (FastAPI, Django)", "C# (.NET 8)", "Node.js (NestJS)", "Go"] },
      { category: "Frontend Frameworks", skills: ["React 19", "Next.js 15", "Angular 18", "Vue.js 3", "TypeScript", "Tailwind CSS"] },
      { category: "Databases & Storage", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "ClickHouse"] },
      { category: "DevOps & Cloud", skills: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", description: "Deep-dive into business requirements, existing data schemas, and non-functional requirements to draft the technical blueprint." },
      { step: "02", title: "Sprint-Based Engineering", description: "Agile 2-week development sprints with continuous CI/CD deployments and clickable staging environments for continuous review." },
      { step: "03", title: "Automated QA & Security", description: "Rigorous end-to-end testing, load testing, penetration audits, and SOC2/HIPAA compliance validation before launch." },
      { step: "04", title: "Deployment & SLA Support", description: "Seamless production rollout with automated rollbacks, 24/7 observability, and dedicated post-launch maintenance SLAs." },
    ],
    benefits: [
      { title: "100% IP Ownership", description: "You own all code repositories, documentation, and architectural designs outright." },
      { title: "Predictable Delivery", description: "Transparent sprint velocity with weekly burndown metrics and clear sprint milestone tracking." },
      { title: "Enterprise Grade Security", description: "Built from day one with OWASP Top 10 guidelines, TLS encryption, and RBAC compliance." },
      { title: "Scalable Architecture", description: "Engineered to effortlessly handle 10x transaction bursts without infrastructure bottlenecks." },
    ],
    faqs: [
      { question: "How long does a typical custom software project take?", answer: "Initial MVPs and phase 1 deliverables are typically ready in 6 to 12 weeks, followed by iterative feature rollouts every 2 weeks." },
      { question: "Can you integrate with our existing ERP or database?", answer: "Yes, our team has extensive experience building custom middleware, event queues, and REST/SOAP wrappers for legacy systems like SAP, Oracle, and proprietary mainframes." },
      { question: "What is your engagement and pricing model?", answer: "We offer Time & Material (T&M), Dedicated Engineering Squads, and Fixed-Price milestones depending on your scope clarity." },
    ],
  },

  "product-engineering": {
    slug: "product-engineering",
    title: "Product Engineering & SaaS Development",
    shortTitle: "Product Engineering",
    eyebrow: "SaaS & CLOUD ARCHITECTURE",
    tagline: "Build scalable SaaS products from concept to multi-tenant market leader in record time.",
    heroImage: servicesHero,
    overview:
      "We partner with ambitious startups and scaleups to engineer high-retention SaaS platforms. From multi-tenant data partitioning and Stripe billing integration to AI feature rollouts, we take your product from whiteboard napkin to venture-scale reality.",
    coreOfferings: [
      {
        title: "Rapid MVP Prototyping",
        description: "Turn your visionary idea into a production-ready, investor-ready MVP in 4 to 8 weeks.",
        bullets: [
          "Interactive Figma UI/UX prototyping & user testing",
          "Full authentication, RBAC, and multi-tenant setup",
          "Stripe / LemonSqueezy subscription integration",
          "Automated analytics tracking (Mixpanel, PostHog)",
        ],
      },
      {
        title: "Multi-Tenant SaaS Architecture",
        description: "Scalable database isolation models (schema-per-tenant or row-level security) designed for high enterprise compliance.",
        bullets: [
          "Cross-tenant data isolation & encryption at rest",
          "Elastic Kubernetes scaling per tenant workload",
          "Per-tenant analytics and custom domain routing",
          "Automated tenant provisioning workflows",
        ],
      },
      {
        title: "Cloud-Native Infrastructure & DevOps",
        description: "Production-grade automated CI/CD and immutable infrastructure on AWS, Azure, or GCP.",
        bullets: [
          "Terraform & Pulumi Infrastructure-as-Code (IaC)",
          "Automated blue-green and canary deployments",
          "Centralized OpenTelemetry logging and tracing",
          "SOC 2 Type II audit readiness from sprint one",
        ],
      },
      {
        title: "Embedded AI & LLM Integrations",
        description: "Supercharge your existing product with autonomous agents, semantic search, and predictive workflows.",
        bullets: [
          "Custom RAG pipelines with pgvector and Pinecone",
          "Fine-tuned open-source LLMs (Llama 3, Mistral)",
          "Real-time streaming chat & document synthesis",
          "Guardrails to eliminate prompt injections & hallucination",
        ],
      },
    ],
    techStack: [
      { category: "Frontend & Web", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
      { category: "Backend & APIs", skills: ["Node.js", "NestJS", "Go", "Python (FastAPI)", "GraphQL", "gRPC"] },
      { category: "Databases & Cache", skills: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "Prisma"] },
      { category: "Cloud & Ops", skills: ["AWS (EKS, Lambda)", "GCP", "Kubernetes", "Docker", "Terraform", "GitHub Actions"] },
    ],
    process: [
      { step: "01", title: "Product Blueprint", description: "Figma wireframing, architecture design, and database schema mapping." },
      { step: "02", title: "Sprint Zero", description: "Repo setup, CI/CD pipeline, staging environment, and auth boilerplate." },
      { step: "03", title: "Iterative Sprints", description: "Bi-weekly demo releases with continuous QA regression testing." },
      { step: "04", title: "Scale & Launch", description: "Load testing, penetration tests, production cutover, and telemetry setup." },
    ],
    benefits: [
      { title: "2x Faster Time-to-Market", description: "Pre-built SaaS components eliminate 6+ weeks of commodity plumbing." },
      { title: "Enterprise Compliance Ready", description: "SOC 2, GDPR, and ISO 27001 data isolation built-in from day one." },
      { title: "Low Maintenance Overhead", description: "Clean microservices patterns make scaling painless as user base grows." },
      { title: "Complete IP Ownership", description: "100% of code, repos, and cloud assets are transferred directly to you." },
    ],
    faqs: [
      { question: "Can you take over an existing half-built product?", answer: "Yes! We conduct a comprehensive code and architectural audit, rectify technical debt, and accelerate the development roadmap." },
      { question: "How do you handle IP and code ownership?", answer: "You retain 100% intellectual property ownership of all source code, assets, and infrastructure configurations." },
      { question: "Do you offer post-launch maintenance?", answer: "Yes, we provide fractional maintenance pods and 24/7 on-call incident response support." },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    eyebrow: "iOS, ANDROID & FLUTTER",
    tagline: "High-performance native and cross-platform mobile apps that users love and trust.",
    heroImage: heroMesh,
    overview:
      "We engineer award-winning mobile applications for iOS and Android. Whether you need a native Swift/Kotlin app with high hardware access or a rapid cross-platform Flutter/React Native build, we craft smooth 60fps animations, rock-solid offline sync, and secure biometric authentication.",
    coreOfferings: [
      {
        title: "Cross-Platform Apps (Flutter & React Native)",
        description: "One single codebase delivering pixel-perfect native performance on both iOS and Android platforms.",
        bullets: [
          "Up to 40% reduction in development cost and time",
          "Consistent design system and fluid 60fps gestures",
          "Native module bridges for hardware and Bluetooth access",
          "Over-the-air (OTA) updates and rapid bug patches",
        ],
      },
      {
        title: "Native iOS & Android Engineering",
        description: "Uncompromised performance, deep OS integration, and cutting-edge platform capabilities.",
        bullets: [
          "Swift & SwiftUI for iOS, iPadOS, and Apple Watch",
          "Kotlin & Jetpack Compose for modern Android apps",
          "ARKit / ARCore augmented reality integration",
          "On-device AI processing with CoreML and ML Kit",
        ],
      },
      {
        title: "Offline-First & Realtime Sync",
        description: "Flawless app experience regardless of network connectivity with automatic conflict resolution.",
        bullets: [
          "Local SQLite / WatermelonDB / Realm data caching",
          "Background sync and automatic retry queues",
          "Push notifications via APNs and Firebase Cloud Messaging",
          "Real-time chat and live tracking over WebSockets",
        ],
      },
      {
        title: "App Store Publishing & Compliance",
        description: "Full end-to-end release management ensuring 100% approval on Apple App Store and Google Play.",
        bullets: [
          "App store asset generation and ASO optimization",
          "In-App Purchases (IAP) & RevenueCat subscription setup",
          "Biometric FaceID / Fingerprint security authentication",
          "Automated Fastlane deployment pipelines",
        ],
      },
    ],
    techStack: [
      { category: "Frameworks & Languages", skills: ["Flutter", "Dart", "React Native", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose"] },
      { category: "State Management", skills: ["Bloc", "Provider", "Riverpod", "Redux Toolkit", "Zustand"] },
      { category: "Backend & Sync", skills: ["Firebase", "Supabase", "Node.js", "GraphQL", "WebSockets"] },
      { category: "Tools & Testing", skills: ["Fastlane", "Bitrise", "Appium", "Sentry", "RevenueCat", "Mixpanel"] },
    ],
    process: [
      { step: "01", title: "Mobile UI/UX Design", description: "iOS Human Interface & Material Design 3 guidelines applied to high-fidelity wireframes." },
      { step: "02", title: "App Architecture & Code", description: "Modular clean architecture with strict unit and integration testing." },
      { step: "03", title: "Beta Testing & QA", description: "TestFlight and Google Play Internal testing with real hardware devices." },
      { step: "04", title: "Launch & Growth", description: "App Store approval management, crash monitoring, and version iteration." },
    ],
    benefits: [
      { title: "Fluid 60 FPS UI", description: "Silky smooth transitions, gestures, and zero frame drops." },
      { title: "Bank-Grade Security", description: "Keychain/Keystore token storage, certificate pinning, and biometric locks." },
      { title: "Fast App Store Approval", description: "Compliant with Apple and Google developer guidelines from day one." },
      { title: "Real-time Telemetry", description: "Live crash logging, user event analytics, and performance tracing." },
    ],
    faqs: [
      { question: "Should I choose Flutter or Native iOS/Android?", answer: "For 90% of business applications, Flutter provides 99% identical native performance at almost half the development time. We help evaluate your specific hardware or AR needs to choose the optimal path." },
      { question: "Do you handle App Store submission and approval?", answer: "Yes! We manage the entire submission lifecycle, privacy declarations, and review communications until live in stores." },
      { question: "Can the app work completely offline?", answer: "Yes, our offline-first architecture caches all critical operations locally and syncs automatically when a connection is restored." },
    ],
  },

  "ai-intelligent-solutions": {
    slug: "ai-intelligent-solutions",
    title: "AI, Data & Intelligent Automation",
    shortTitle: "AI & Automation",
    eyebrow: "GENERATIVE AI & INTELLIGENT WORKFLOWS",
    tagline: "Harness modern LLMs, predictive models, and autonomous AI agents for real business ROI.",
    heroImage: svcAi,
    overview:
      "We build practical, high-ROI AI solutions that transform enterprise productivity. From custom Retrieval-Augmented Generation (RAG) knowledge assistants and autonomous workflow agents to computer vision and predictive analytics, we turn complex AI models into scalable production applications.",
    coreOfferings: [
      {
        title: "Enterprise RAG & Knowledge Assistants",
        description: "Chat with enterprise documentation, SOPs, and proprietary databases with zero hallucination and strict access control.",
        bullets: [
          "Hybrid semantic and keyword search across PDFs, docs, and tables",
          "Vector databases (Pinecone, pgvector, Qdrant, Milvus)",
          "Role-based permission filtering on retrieved context",
          "Source citations and auditable verifiable answers",
        ],
      },
      {
        title: "Autonomous AI Agents & Workflows",
        description: "Deploy multi-agent systems that autonomously triage emails, draft complex proposals, and execute ERP transactions.",
        bullets: [
          "LangGraph & CrewAI orchestrated agent squads",
          "Function calling and tool-use integrations with Jira, SAP, Slack",
          "Human-in-the-loop validation checkpoints",
          "Structured output validation with Pydantic and Zod",
        ],
      },
      {
        title: "Predictive Analytics & Machine Learning",
        description: "Uncover hidden patterns, forecast demand, and predict equipment failure with tailored machine learning pipelines.",
        bullets: [
          "Time-series demand forecasting & inventory optimization",
          "Customer churn and lifetime value (LTV) prediction",
          "Anomaly detection for fraud and payment systems",
          "Continuous model training and drift monitoring (MLOps)",
        ],
      },
      {
        title: "Computer Vision & Document OCR",
        description: "Automate invoice verification, ID verification, and quality inspection with sub-second accuracy.",
        bullets: [
          "Custom OCR extraction for unstructured invoices and receipts",
          "Defect identification on manufacturing assembly lines",
          "Facial recognition and liveness verification",
          "Edge AI inference for mobile and IoT devices",
        ],
      },
    ],
    techStack: [
      { category: "LLM & AI Frameworks", skills: ["OpenAI API", "Anthropic Claude", "LangChain", "LangGraph", "LlamaIndex", "CrewAI"] },
      { category: "Vector DBs & Embeddings", skills: ["Pinecone", "pgvector (PostgreSQL)", "Qdrant", "ChromaDB", "Weaviate"] },
      { category: "ML & Data Science", skills: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "Hugging Face"] },
      { category: "MLOps & Deployment", skills: ["vLLM", "Ollama", "Triton Server", "AWS SageMaker", "Docker", "MLflow"] },
    ],
    process: [
      { step: "01", title: "Data Audit & Use Case Alignment", description: "Identify the highest-ROI workflow bottleneck and evaluate data readiness." },
      { step: "02", title: "Proof of Concept (PoC)", description: "Build a functioning prototype within 10 days to measure accuracy and latency." },
      { step: "03", title: "Enterprise Integration", description: "Connect the AI pipeline with security guards, vector storage, and existing APIs." },
      { step: "04", title: "Guardrails & MLOps", description: "Implement prompt injection defense, latency monitoring, and automated retraining." },
    ],
    benefits: [
      { title: "Zero Hallucination RAG", description: "Strict grounding in your verified company data with source citations." },
      { title: "Data Privacy & Security", description: "Private LLM hosting and enterprise zero-data-retention compliance." },
      { title: "Massive Efficiency Gains", description: "Reduce repetitive knowledge lookup time by up to 80%." },
      { title: "Autonomous Operations", description: "Deploy 24/7 AI agents that execute complex multi-step tasks without fatigue." },
    ],
    faqs: [
      { question: "Is our private data safe with AI models?", answer: "Yes! We deploy either dedicated on-premise open-source LLMs (like Llama 3 / Mistral) or private enterprise cloud endpoints with strict Zero Data Retention (ZDR) guarantees." },
      { question: "How do you prevent the AI from hallucinating?", answer: "We enforce strict Retrieval-Augmented Generation (RAG) constraints where the model is mathematically penalized from answering without direct citations from retrieved documents." },
      { question: "How long does it take to deploy an enterprise AI assistant?", answer: "A working Proof of Concept takes 1 to 2 weeks, with full production rollout in 4 to 6 weeks." },
    ],
  },

  "it-recruitment-staffing": {
    slug: "it-recruitment-staffing",
    title: "IT Recruitment & Staffing Solutions",
    shortTitle: "IT Staffing",
    eyebrow: "TALENT & STAFF AUGMENTATION",
    tagline: "Hire rigorously vetted top 3% technology talent across full-stack, cloud, AI, and leadership.",
    heroImage: aboutImg,
    overview:
      "Scaling technical capacity should not take months of endless interviews. With our dual delivery hubs in Visakhapatnam and Hyderabad, we provide pre-vetted engineers, architects, and technical leaders ready to integrate directly into your sprint teams within 48 to 72 hours.",
    coreOfferings: [
      {
        title: "Staff Augmentation (Dedicated Engineers)",
        description: "Plug elite individual contributors directly into your existing engineering squads.",
        bullets: [
          "Senior full-stack, mobile, DevOps, and AI engineers",
          "Dedicated 40 hrs/week aligned with your time zone",
          "Direct Slack/Jira integration with your management",
          "Risk-free 2-week trial period with zero lock-in",
        ],
      },
      {
        title: "Dedicated Managed Engineering Squads",
        description: "Complete turnkey squads (Tech Lead + Senior Devs + QA + Scrum Master) ready to ship product roadmaps.",
        bullets: [
          "Pre-aligned squads with established working chemistry",
          "Autonomous sprint delivery with weekly executive reporting",
          "Full QA automation and CI/CD maintenance included",
          "Seamless handover and knowledge transfer at milestone completion",
        ],
      },
      {
        title: "Permanent & Executive Search",
        description: "Find high-impact permanent leaders (VP Engineering, CTO, Principal Architects, Product Directors).",
        bullets: [
          "Comprehensive technical screening by veteran architects",
          "Cultural and leadership alignment vetting",
          "Background verification and reference validation",
          "90-day placement guarantee with replacement protection",
        ],
      },
      {
        title: "Contract-to-Hire & RPO",
        description: "Evaluate candidates on real projects before extending permanent employment offers.",
        bullets: [
          "Flexible 3 to 6-month contract-to-hire trial arrangements",
          "Full Recruitment Process Outsourcing (RPO) management",
          "Payroll, benefits, and compliance handled seamlessly",
          "Predictable fixed placement or monthly fee models",
        ],
      },
    ],
    techStack: [
      { category: "Engineering Roles", skills: ["Full-Stack Developers", "Backend Architects (Java, .NET, Python, Go)", "Frontend Engineers (React, Next.js, Vue)", "Mobile Engineers (Flutter, Swift, Kotlin)"] },
      { category: "Cloud & DevOps", skills: ["DevOps / SRE Engineers", "AWS / Azure Cloud Architects", "Kubernetes Specialists", "Security & InfoSec Leads"] },
      { category: "Data & AI", skills: ["AI / ML Engineers", "Data Engineers (Spark, Snowflake, dbt)", "BI & Analytics Developers", "Data Scientists"] },
      { category: "Leadership & QA", skills: ["CTOs & VP of Engineering", "Technical Product Managers", "Scrum Masters", "QA Automation Engineers (Playwright, Selenium)"] },
    ],
    process: [
      { step: "01", title: "Requirement Blueprint", description: "Define exact tech stack, seniority, domain familiarity, and team communication style." },
      { step: "02", title: "Pre-Screened Shortlist", description: "Receive 2-3 vetted candidate profiles with recorded coding interview scorecards within 48 hours." },
      { step: "03", title: "Client Interview", description: "Conduct a direct 1-round technical or cultural interview with shortlisted talent." },
      { step: "04", title: "Onboarding & Sprint Zero", description: "Talent is onboarded onto your tools, repos, and communication channels within 3 business days." },
    ],
    benefits: [
      { title: "Top 3% Vetted Talent", description: "Every engineer passes our rigorous live algorithmic and real-world system design tests." },
      { title: "Fast 48-Hour Turnaround", description: "Skip the 3-month hiring grind with immediately available pre-vetted talent." },
      { title: "Zero Overhead", description: "We handle payroll, compliance, taxes, hardware, and office infrastructure." },
      { title: "Risk-Free Trial", description: "2-week initial trial period to ensure complete satisfaction." },
    ],
    faqs: [
      { question: "How quickly can an engineer join our project?", answer: "We can provide pre-vetted candidate profiles within 24-48 hours, and onboarding can occur within 3 to 5 business days." },
      { question: "What if a developer is not a good cultural fit?", answer: "We offer an immediate, hassle-free replacement with zero penalty under our satisfaction guarantee." },
      { question: "How do we manage the developer day-to-day?", answer: "Augmented engineers work directly inside your Slack, GitHub, Jira, and attend your daily standups just like internal hires." },
    ],
  },

  "digital-transformation": {
    slug: "digital-transformation",
    title: "Digital Transformation & Cloud Strategy",
    shortTitle: "Digital Transformation",
    eyebrow: "STRATEGY & ENTERPRISE ROADMAPPING",
    tagline: "Modernise legacy systems, automate complex business processes, and unlock cloud speed.",
    heroImage: bgAbout,
    overview:
      "Digital transformation is not just about technology — it's about business velocity. We help enterprises modernize antiquated core infrastructure, migrate seamlessly to the cloud, integrate fragmented IT silos, and implement automated data governance that accelerates decision-making across global organizations.",
    coreOfferings: [
      {
        title: "Cloud Migration & Modernisation",
        description: "Migrate legacy on-premise infrastructure to AWS, Azure, or GCP with zero data loss and optimized operating costs.",
        bullets: [
          "Well-Architected Framework cloud audits",
          "Lift-and-shift to cloud-native refactoring roadmap",
          "Automated Terraform infrastructure as code (IaC)",
          "FinOps cloud cost governance and optimization",
        ],
      },
      {
        title: "Business Process Automation & BPM",
        description: "Map and streamline multi-department operations to cut processing times by over 60%.",
        bullets: [
          "Process mining to identify operational bottlenecks",
          "Low-code and custom workflow automation engines",
          "API integration between ERP, CRM, and accounting tools",
          "Automated compliance tracking and audit trail generation",
        ],
      },
      {
        title: "Enterprise Systems Integration",
        description: "Connect legacy mainframes, modern SaaS platforms, and partner APIs into a synchronized data highway.",
        bullets: [
          "Enterprise Service Bus (ESB) and micro-gateway setup",
          "Real-time event-driven architecture with Kafka",
          "Webhook management and exponential backoff retry systems",
          "Master Data Management (MDM) and single source of truth",
        ],
      },
      {
        title: "Security, Governance & Compliance",
        description: "Implement defense-in-depth security architectures ready for ISO 27001, SOC2, HIPAA, and GDPR certifications.",
        bullets: [
          "Zero-trust network architecture and IAM governance",
          "Automated vulnerability scanning & penetration audits",
          "Disaster recovery and automated backup replication",
          "Data privacy masking and encryption at rest / in transit",
        ],
      },
    ],
    techStack: [
      { category: "Cloud & Infrastructure", skills: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker"] },
      { category: "Integration & Events", skills: ["Apache Kafka", "RabbitMQ", "MuleSoft", "GraphQL", "Kong Gateway"] },
      { category: "Security & Governance", skills: ["HashiCorp Vault", "Okta SSO", "Datadog", "CrowdStrike", "SonarQube"] },
      { category: "Modernisation Stack", skills: ["Java Spring", ".NET Core", "Node.js", "PostgreSQL", "Snowflake"] },
    ],
    process: [
      { step: "01", title: "Enterprise Assessment", description: "Audit current tech debt, compliance mandates, security vulnerabilities, and cost drivers." },
      { step: "02", title: "Target State Roadmap", description: "Design cloud architecture, phase sequencing, ROI projections, and risk mitigation plan." },
      { step: "03", title: "Phased Execution", description: "Iterative migration of non-critical workloads first, followed by core database sync." },
      { step: "04", title: "Optimization & Enablement", description: "Staff training, operational handover, FinOps governance, and continuous telemetry." },
    ],
    benefits: [
      { title: "Substantial Cost Savings", description: "Reduce IT infrastructure and maintenance overhead by up to 35-50%." },
      { title: "99.99% Reliability", description: "High availability across multi-region cloud setups with zero single points of failure." },
      { title: "Rapid Innovation Velocity", description: "Release new business features in days instead of quarterly release windows." },
      { title: "Ironclad Compliance", description: "Full alignment with ISO, SOC2, HIPAA, and global data privacy standards." },
    ],
    faqs: [
      { question: "How do you prevent downtime during enterprise cloud migration?", answer: "We utilize dual-write replication and blue-green phased traffic cutovers to ensure the legacy system remains active until the new cloud platform is fully verified with 100% data parity." },
      { question: "Can you help our internal team transition to modern tools?", answer: "Yes, every transformation engagement includes comprehensive documentation, runbooks, and hands-on workshops for your internal engineers." },
      { question: "What return on investment (ROI) can we expect?", answer: "Most enterprises see significant operational cost reductions within 6 months, alongside a 3x to 5x acceleration in feature release cycles." },
    ],
  },
};
