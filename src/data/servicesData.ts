import heroClean from "@/assets/hero-clean.jpg";
import deliveryHero from "@/assets/delivery-hero.jpg";
import aiSolutionsHero from "@/assets/ai-solutions-hero.jpg";
import cloudDevOpsHero from "@/assets/cloud-devops-hero.jpg";
import dataAnalyticsHero from "@/assets/services-hero-unique.jpg";
import mobileEngineeringHero from "@/assets/careers-hero.jpg";
import techTalentHero from "@/assets/job-hero.jpg";
import digitalTransformationHero from "@/assets/expertise-hero.jpg";

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  tagline: string;
  heroImage: string;
  overview: string;
  capabilities: string[];
  techEcosystem: string[];
  businessValue: string;
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
    number: "01",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    eyebrow: "ENTERPRISE SOFTWARE & MODERN WORKFLOWS",
    tagline: "Enterprise Software. Built Around Your Business.",
    heroImage: heroClean,
    overview:
      "HNR Global delivers scalable custom software solutions designed around enterprise workflows, business processes and long-term technology strategies. We combine modern engineering practices with cloud, data, automation and integration capabilities to build secure, maintainable applications.",
    capabilities: [
      "Enterprise application development",
      "Custom web application development",
      "CRM and ERP solutions",
      "Business process automation",
      "Workflow management platforms",
      "Enterprise portals",
      "API development and integration",
      "Legacy application modernization",
      "Microservices architecture",
      "Application maintenance and enhancement",
      "Business intelligence dashboards",
      "Third-party system integrations",
    ],
    techEcosystem: [
      "Java",
      "Spring Boot",
      "Microsoft .NET / ASP.NET Core",
      "Python",
      "Node.js",
      "React",
      "Angular",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "MySQL",
      "Oracle",
    ],
    businessValue:
      "Modernize. Automate. Scale. We help enterprises reduce technical debt, improve operational efficiency and create software platforms that can evolve with changing business requirements.",
    coreOfferings: [
      {
        title: "Enterprise ERP & CRM Solutions",
        description: "Centralize business workflows, automate global supply chains, and deliver personalized customer journeys with enterprise-ready software.",
        bullets: [
          "Custom ERP architecture for multi-subsidiary global operations",
          "Automated lead routing and omnichannel CRM engines",
          "Role-based access control (RBAC), audit logging, and data sovereignty",
          "Seamless synchronization with existing enterprise databases",
        ],
      },
      {
        title: "Legacy Modernization & Microservices",
        description: "Decompose monolithic systems into resilient, high-speed microservices with zero operational downtime.",
        bullets: [
          "Zero-downtime database and schema migration",
          "Monolith to containerized microservices decomposition",
          "API Gateway design, RESTful and GraphQL integration layers",
          "Cloud-native hosting on AWS, Microsoft Azure, and Google Cloud",
        ],
      },
      {
        title: "Business Process Automation & Portals",
        description: "Eliminate manual operational friction with automated digital approvals, document parsing, and vendor portals.",
        bullets: [
          "Intelligent document parsing and workflow automation",
          "Cross-department approval workflows and SLA tracking",
          "Self-service vendor, employee, and client management portals",
          "Real-time event webhooks and messaging queues",
        ],
      },
      {
        title: "API Development & System Integrations",
        description: "Connect disparate enterprise systems with high-throughput, secure REST and event-driven APIs.",
        bullets: [
          "Enterprise Service Bus (ESB) and micro-gateway setup",
          "Third-party ERP, CRM, payment, and logistics integrations",
          "OpenAPI / Swagger specifications and automated contract testing",
          "Sub-second response times with distributed Redis caching",
        ],
      },
    ],
    techStack: [
      { category: "Backend Languages", skills: ["Java (Spring Boot)", "Python (FastAPI, Django)", "C# (.NET 8)", "Node.js (NestJS)", "Go"] },
      { category: "Frontend Frameworks", skills: ["React 19", "Next.js 15", "Angular 18", "Vue.js 3", "TypeScript", "Tailwind CSS"] },
      { category: "Databases & Storage", skills: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL", "Oracle", "Redis"] },
      { category: "DevOps & Cloud", skills: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"] },
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", description: "Deep-dive into business workflows, security constraints, and database schemas to draft the technical blueprint." },
      { step: "02", title: "Iterative Sprint Engineering", description: "Agile 2-week development sprints with continuous CI/CD deployments and clickable staging environments for stakeholder review." },
      { step: "03", title: "Automated QA & Security", description: "Rigorous automated testing, security scanning, OWASP hardening, and role-based validation before release." },
      { step: "04", title: "Production Cutover & Support", description: "Zero-downtime release rollout, telemetry setup, knowledge handover, and ongoing SLA maintenance." },
    ],
    benefits: [
      { title: "100% IP & Code Ownership", description: "You own all code repositories, documentation, and architectural designs outright." },
      { title: "Reduced Technical Debt", description: "Modern, clean microservices architecture engineered to evolve with your business roadmap." },
      { title: "Enterprise Grade Security", description: "Built from day one with OWASP Top 10 guidelines, TLS encryption, and RBAC compliance." },
      { title: "Predictable Delivery Cadence", description: "Transparent sprint velocity with weekly burndown metrics and clear sprint milestone tracking." },
    ],
    faqs: [
      { question: "How long does a custom software engagement take?", answer: "Initial MVPs and phase 1 deliverables are typically ready in 6 to 12 weeks, followed by iterative feature rollouts every 2 weeks." },
      { question: "Can you integrate with our existing ERP or mainframe database?", answer: "Yes, our team specializes in building custom middleware, event queues, and REST/SOAP wrappers for legacy systems like SAP, Oracle, and proprietary mainframes." },
      { question: "What are your engagement and pricing models?", answer: "We offer Time & Material (T&M), Dedicated Engineering Squads, and Fixed-Price milestones depending on scope clarity." },
    ],
  },

  "product-engineering": {
    slug: "product-engineering",
    number: "02",
    title: "Product Engineering",
    shortTitle: "Product Engineering",
    eyebrow: "SaaS • MVP • CLOUD NATIVE • PLATFORMS",
    tagline: "From Product Vision to Production-Ready Platforms",
    heroImage: deliveryHero,
    overview:
      "HNR Global provides full-cycle product engineering services for organizations building new digital products or modernizing existing platforms. Teams can support the lifecycle from product discovery and architecture through engineering, testing, deployment and continuous optimization.",
    capabilities: [
      "Product discovery",
      "Technical feasibility assessment",
      "Product architecture",
      "MVP development",
      "SaaS platform development",
      "Cloud-native application development",
      "API-first product development",
      "Platform modernization",
      "Feature engineering",
      "Performance optimization",
      "Product testing and QA",
      "DevOps and CI/CD",
      "Product maintenance and enhancement",
    ],
    techEcosystem: [
      "Java",
      "Python",
      "Microsoft .NET",
      "Node.js",
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "TypeScript",
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
    ],
    businessValue:
      "Accelerate time-to-market, de-risk product development, and build scalable digital platforms engineered for rapid user growth and venture viability.",
    coreOfferings: [
      {
        title: "Product Discovery & Architecture",
        description: "Transform conceptual visions into battle-tested software blueprints, clickable wireframes, and scalable cloud architectures.",
        bullets: [
          "Technical feasibility study and market validation",
          "Microservices & domain-driven architecture design",
          "Interactive Figma UI/UX prototyping and user flow testing",
          "Security, privacy, and compliance roadmap",
        ],
      },
      {
        title: "Multi-Tenant SaaS Engineering",
        description: "Engineer resilient, high-retention SaaS platforms with automated provisioning, tiered billing, and tenant data isolation.",
        bullets: [
          "Database isolation models (schema-per-tenant and row-level security)",
          "Subscription billing integration (Stripe, LemonSqueezy)",
          "Automated tenant onboarding and custom domain routing",
          "Fine-grained RBAC, audit logging, and SOC 2 readiness",
        ],
      },
      {
        title: "Rapid MVP Development",
        description: "Ship an investor-ready, production-grade MVP in 6 to 8 weeks without compromising code quality or scalability.",
        bullets: [
          "Pre-engineered architectural scaffolding for instant velocity",
          "Core workflow implementation and payment gateway sync",
          "Built-in telemetry, error tracking, and analytics (PostHog, Mixpanel)",
          "Automated CI/CD deployment pipeline to AWS or Azure",
        ],
      },
      {
        title: "Continuous Modernization & Scale",
        description: "Continuously optimize platform performance, reduce latency, and scale infrastructure as your user base expands exponentially.",
        bullets: [
          "Database query profiling and automated caching layers",
          "Horizontal auto-scaling with Kubernetes (EKS / AKS)",
          "Feature engineering and A/B test experimentation",
          "24/7 reliability engineering and SLA response",
        ],
      },
    ],
    techStack: [
      { category: "Web & Frontend", skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Vue.js 3", "Angular"] },
      { category: "Backend & APIs", skills: ["Node.js", "NestJS", "Java (Spring)", "Python (FastAPI)", "C# (.NET 8)", "GraphQL", "gRPC"] },
      { category: "Cloud & Infrastructure", skills: ["AWS (EKS, Lambda)", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
      { category: "Databases & Caching", skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "ClickHouse"] },
    ],
    process: [
      { step: "01", title: "Product Discovery", description: "Align on feature scope, technical feasibility, user personas, and target deployment milestones." },
      { step: "02", title: "Architecture & Sprint 0", description: "Establish repository scaffolding, CI/CD pipelines, auth boilerplate, and multi-tenant database schemas." },
      { step: "03", title: "Iterative Feature Sprints", description: "Bi-weekly demo releases with continuous regression testing and stakeholder reviews." },
      { step: "04", title: "Production Launch & Scale", description: "Load testing, penetration audit, production cutover, and telemetry setup." },
    ],
    benefits: [
      { title: "2x Faster Time-to-Market", description: "Pre-built SaaS components eliminate weeks of commodity plumbing." },
      { title: "Investor & Enterprise Ready", description: "SOC 2, GDPR, and ISO 27001 data isolation built-in from day one." },
      { title: "Low Maintenance Overhead", description: "Clean microservices patterns make scaling painless as user base grows." },
      { title: "Full Code Ownership", description: "100% of code, repos, and cloud configurations are transferred directly to you." },
    ],
    faqs: [
      { question: "Can you take over an existing half-built product?", answer: "Yes! We conduct a comprehensive code and architectural audit, remediate technical debt, and accelerate the feature delivery roadmap." },
      { question: "How do you handle IP and code ownership?", answer: "You retain 100% intellectual property ownership of all source code, design assets, and cloud configurations." },
      { question: "Do you offer post-launch maintenance?", answer: "Yes, we provide fractional maintenance pods and 24/7 on-call incident response support." },
    ],
  },

  "ai-intelligent-solutions": {
    slug: "ai-intelligent-solutions",
    number: "03",
    title: "AI & Intelligent Solutions",
    shortTitle: "AI Solutions",
    eyebrow: "ENTERPRISE AI SOLUTIONS • AUTOMATION",
    tagline: "Turning Artificial Intelligence Into Business Advantage",
    heroImage: aiSolutionsHero,
    overview:
      "HNR Global helps organizations move from AI experimentation to practical enterprise solutions. The focus is on measurable use cases such as intelligent search, automation, document intelligence, predictive analytics and enterprise AI assistants.",
    capabilities: [
      "Generative AI",
      "Machine Learning",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Intelligent Automation",
      "AI-powered chatbots",
      "Enterprise AI assistants",
      "Document intelligence",
      "Recommendation engines",
      "Predictive forecasting",
      "Intelligent search",
      "AI-powered workflow automation",
    ],
    techEcosystem: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Large Language Models",
      "Retrieval-Augmented Generation (RAG)",
      "Vector databases",
      "Embeddings",
      "AI agents",
      "Prompt engineering",
      "Model evaluation",
      "AWS AI/ML",
      "Azure AI",
      "Google Cloud AI",
    ],
    businessValue:
      "Transform operational velocity, automate cognitive tasks, and empower employees with secure, hallucination-free enterprise intelligence.",
    coreOfferings: [
      {
        title: "Enterprise RAG & Knowledge Assistants",
        description: "Chat with enterprise SOPs, policies, contracts, and codebases with zero hallucination and strict RBAC data governance.",
        bullets: [
          "Hybrid semantic and keyword search across PDFs, docs, and tables",
          "Vector databases (Pinecone, pgvector, Qdrant, Milvus)",
          "Role-based permission filtering on retrieved context",
          "Source citations and auditable verifiable answers",
        ],
      },
      {
        title: "Autonomous AI Agents & Workflows",
        description: "Deploy multi-agent systems that autonomously triage requests, draft complex proposals, and execute ERP transactions.",
        bullets: [
          "LangGraph & CrewAI orchestrated agent squads",
          "Function calling and tool-use integrations with Jira, SAP, Slack",
          "Human-in-the-loop validation checkpoints",
          "Structured output validation with Pydantic and Zod",
        ],
      },
      {
        title: "Predictive Analytics & Machine Learning",
        description: "Uncover hidden business patterns, forecast demand, and predict equipment failure with tailored machine learning pipelines.",
        bullets: [
          "Time-series demand forecasting & inventory optimization",
          "Customer churn and lifetime value (LTV) prediction",
          "Anomaly detection for fraud and payment systems",
          "Continuous model training and drift monitoring (MLOps)",
        ],
      },
      {
        title: "Document Intelligence & Computer Vision",
        description: "Automate invoice verification, ID compliance, and quality inspection with sub-second accuracy.",
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
      { category: "Cloud AI & MLOps", skills: ["AWS SageMaker", "Azure AI", "Google Cloud AI", "vLLM", "Docker", "MLflow"] },
    ],
    process: [
      { step: "01", title: "Use Case & Data Audit", description: "Identify the highest-ROI enterprise workflow bottlenecks and evaluate data readiness and sovereignty." },
      { step: "02", title: "Proof of Concept (PoC)", description: "Build a functioning RAG or ML prototype within 10 days to measure accuracy, latency, and costs." },
      { step: "03", title: "Enterprise Integration", description: "Connect the AI pipeline with security guards, vector storage, and existing ERP/CRM APIs." },
      { step: "04", title: "Guardrails & MLOps", description: "Implement prompt injection defenses, latency monitoring, and automated retraining workflows." },
    ],
    benefits: [
      { title: "Zero Hallucination RAG", description: "Strict grounding in your verified company data with auditable source citations." },
      { title: "Data Privacy & Sovereignty", description: "Private LLM hosting and enterprise zero-data-retention compliance." },
      { title: "Massive Efficiency Gains", description: "Reduce repetitive knowledge lookup and document triage time by up to 80%." },
      { title: "Autonomous 24/7 Operations", description: "Deploy resilient AI agents that execute complex multi-step workflows around the clock." },
    ],
    faqs: [
      { question: "Is our proprietary data safe with AI models?", answer: "Yes! We deploy either dedicated on-premise open-source LLMs (like Llama 3 / Mistral) or private enterprise cloud endpoints with strict Zero Data Retention (ZDR) guarantees." },
      { question: "How do you prevent the AI from hallucinating?", answer: "We enforce strict Retrieval-Augmented Generation (RAG) constraints where the model is mathematically penalized from answering without direct citations from retrieved documents." },
      { question: "How long does it take to deploy an enterprise AI assistant?", answer: "A working Proof of Concept takes 1 to 2 weeks, with full production rollout in 4 to 6 weeks." },
    ],
  },

  "cloud-devops": {
    slug: "cloud-devops",
    number: "04",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    eyebrow: "AWS • AZURE • GOOGLE CLOUD • KUBERNETES • CI/CD",
    tagline: "Cloud Engineering & DevOps for Modern Enterprises",
    heroImage: cloudDevOpsHero,
    overview:
      "HNR Global helps enterprises design, migrate, modernize and operate scalable cloud environments. Cloud and DevOps capabilities are presented as an independent enterprise service, ensuring reliability, speed, and cost efficiency across global workloads.",
    capabilities: [
      "Cloud strategy and assessment",
      "Cloud migration",
      "Cloud-native application development",
      "Cloud modernization",
      "Infrastructure modernization",
      "Hybrid cloud solutions",
      "Multi-cloud architecture",
      "Cloud cost optimization (FinOps)",
      "Disaster recovery and business continuity",
      "CI/CD automation",
      "Infrastructure as Code (IaC)",
      "Automated testing pipelines",
      "Containerization",
      "Kubernetes orchestration",
      "Monitoring and observability",
    ],
    techEcosystem: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "GitLab",
      "Jenkins",
      "Terraform",
      "Ansible",
    ],
    businessValue:
      "Faster releases. Greater reliability. Lower operational complexity. We eliminate release bottlenecks, harden infrastructure security, and optimize cloud spending by up to 40%.",
    coreOfferings: [
      {
        title: "Multi-Cloud Migration & Modernization",
        description: "Seamlessly transition legacy workloads to AWS, Azure, or GCP with zero data loss and minimal operational disruption.",
        bullets: [
          "Well-Architected Framework assessments and migration roadmaps",
          "Automated lift-and-shift to containerized cloud-native refactoring",
          "Hybrid cloud networking, VPN tunnels, and direct connects",
          "Zero-downtime database cutover strategies",
        ],
      },
      {
        title: "Kubernetes & Container Orchestration",
        description: "Deploy and manage resilient, autoscaling container clusters using Amazon EKS, Azure AKS, or Google GKE.",
        bullets: [
          "Production-hardened Kubernetes cluster architecture",
          "Helm charts, GitOps workflows (ArgoCD / Flux)",
          "Service mesh integration (Istio / Linkerd) for zero-trust traffic",
          "Horizontal and vertical pod autoscaling policies",
        ],
      },
      {
        title: "CI/CD & Infrastructure as Code (IaC)",
        description: "Automate delivery pipelines from commit to production with repeatable Terraform, Ansible, and GitHub Actions.",
        bullets: [
          "Immutable infrastructure provisioned via Terraform and OpenTofu",
          "Automated blue-green and canary deployment strategies",
          "Automated security scans (SAST, DAST, container vulnerability auditing)",
          "Standardized developer staging and preview environments",
        ],
      },
      {
        title: "Cloud FinOps & 24/7 Observability",
        description: "Gain complete transparency into cloud spending and full-stack health with distributed tracing and log aggregation.",
        bullets: [
          "Continuous cloud cost governance and reserved instance optimization",
          "Prometheus, Grafana, Datadog, and OpenTelemetry monitoring",
          "Automated anomaly alerts and incident escalation policies",
          "Disaster recovery runbooks and automated backup verification",
        ],
      },
    ],
    techStack: [
      { category: "Cloud Providers", skills: ["AWS (EKS, RDS, S3, Lambda)", "Microsoft Azure (AKS, CosmosDB)", "Google Cloud Platform (GKE, BigQuery)"] },
      { category: "Containers & Orchestration", skills: ["Kubernetes", "Docker", "Helm", "ArgoCD", "Istio", "OpenShift"] },
      { category: "IaC & Automation", skills: ["Terraform", "OpenTofu", "Ansible", "GitHub Actions", "GitLab CI", "Jenkins"] },
      { category: "Observability & Security", skills: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry", "HashiCorp Vault", "SonarQube"] },
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", description: "Analyze existing cloud footprint, security postures, bottleneck services, and monthly expenditure." },
      { step: "02", title: "IaC & Pipeline Architecture", description: "Codify infrastructure in Terraform and establish standardized, automated CI/CD pipelines." },
      { step: "03", title: "Migration & Hardening", description: "Execute phased migration with automated data parity checks and containerized workload isolation." },
      { step: "04", title: "Observability & FinOps", description: "Implement 24/7 telemetry dashboards, automated alerting, and ongoing cloud cost governance." },
    ],
    benefits: [
      { title: "Substantial Cost Savings", description: "Cut redundant cloud infrastructure and idle compute spending by up to 30–45%." },
      { title: "99.99% Availability", description: "Multi-zone redundant infrastructure designed to prevent single points of failure." },
      { title: "10x Faster Deployments", description: "Replace error-prone manual deploys with automated, audited blue-green releases." },
      { title: "Bank-Grade Compliance", description: "Hardened configurations compliant with ISO 27001, SOC 2, HIPAA, and PCI-DSS." },
    ],
    faqs: [
      { question: "How do you ensure zero downtime during cloud migrations?", answer: "We deploy active-passive or dual-write replication patterns with canary DNS routing, allowing seamless traffic shift once data consistency is 100% verified." },
      { question: "Can you manage our cloud infrastructure on an ongoing basis?", answer: "Yes, we provide 24/7 Managed Cloud & SRE services with guaranteed SLA response times and continuous vulnerability patching." },
      { question: "Do you support hybrid or on-premise cloud configurations?", answer: "Absolutely. We routinely configure hybrid enterprise setups with AWS DirectConnect, Azure ExpressRoute, and on-premise Kubernetes clusters." },
    ],
  },

  "data-engineering-analytics": {
    slug: "data-engineering-analytics",
    number: "05",
    title: "Data Engineering & Analytics",
    shortTitle: "Data & Analytics",
    eyebrow: "DATA PLATFORMS • ETL • BI • ADVANCED ANALYTICS",
    tagline: "Turn Enterprise Data Into Actionable Intelligence",
    heroImage: dataAnalyticsHero,
    overview:
      "HNR Global helps organizations establish modern data foundations that make information accessible, governed and useful for operational and strategic decision-making.",
    capabilities: [
      "Data strategy",
      "Data architecture",
      "Data engineering",
      "Data integration",
      "ETL / ELT",
      "Data warehouses",
      "Data lakes",
      "Real-time analytics",
      "Business intelligence",
      "Data visualization",
      "Predictive analytics",
      "Data governance",
      "Data quality management",
    ],
    techEcosystem: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Oracle",
      "Snowflake",
      "Databricks",
      "Microsoft Fabric",
      "BigQuery",
      "Apache Spark",
      "Apache Kafka",
      "Airflow",
      "dbt",
      "Power BI",
      "Tableau",
    ],
    businessValue:
      "Turn enterprise data into actionable intelligence. Break down data silos, ensure regulatory compliance, and empower decision-makers with sub-second executive dashboards.",
    coreOfferings: [
      {
        title: "Modern Data Warehouses & Lakes",
        description: "Architect high-performance cloud data warehouses (Snowflake, Databricks, BigQuery) that unify disparate enterprise data silos.",
        bullets: [
          "Lakehouse architectures combining data lake scale with warehouse ACID compliance",
          "Automated partitioning, clustering, and cost-optimized data tiering",
          "Zero-copy cloning and time-travel data auditing",
          "Data lake cataloging and metadata management",
        ],
      },
      {
        title: "High-Throughput ETL / ELT Pipelines",
        description: "Build fault-tolerant batch and streaming ingestion pipelines with Apache Spark, Airflow, and dbt.",
        bullets: [
          "Real-time streaming ingestion using Apache Kafka and Spark Streaming",
          "Modular SQL transformation models managed and tested via dbt",
          "Scheduled workflow orchestration using Apache Airflow / Prefect",
          "Automated data quality checks, deduplication, and anomaly alerts",
        ],
      },
      {
        title: "Business Intelligence & Executive Dashboards",
        description: "Transform complex operational datasets into intuitive, interactive Power BI and Tableau visualization dashboards.",
        bullets: [
          "Executive KPI command centers and multi-department performance scorecards",
          "Sub-second report rendering with pre-aggregated OLAP models",
          "Embedded analytics for SaaS platforms and customer-facing portals",
          "Automated scheduled PDF/Excel reports and Slack/Teams alerts",
        ],
      },
      {
        title: "Enterprise Data Governance & Master Data (MDM)",
        description: "Establish strict data governance, lineage tracking, and role-based privacy controls across all corporate assets.",
        bullets: [
          "End-to-end data lineage and cataloging for regulatory audits",
          "Automated PII/HIPAA data masking and role-based column/row security",
          "Master Data Management (MDM) establishing single source of truth",
          "Data quality scorecards and SLA monitoring",
        ],
      },
    ],
    techStack: [
      { category: "Cloud Warehouses & Lakehouses", skills: ["Snowflake", "Databricks", "Google BigQuery", "Microsoft Fabric", "AWS Redshift"] },
      { category: "Data Pipelines & ETL", skills: ["Apache Spark", "Apache Kafka", "dbt", "Apache Airflow", "Python", "Fivetran"] },
      { category: "BI & Visualization", skills: ["Power BI", "Tableau", "Looker", "Metabase", "Apache Superset"] },
      { category: "Databases & Storage", skills: ["PostgreSQL", "SQL Server", "MongoDB", "Oracle", "AWS S3", "Azure ADLS"] },
    ],
    process: [
      { step: "01", title: "Data Discovery & Strategy", description: "Audit data sources, volume, velocity, ingestion friction, and corporate reporting objectives." },
      { step: "02", title: "Warehouse & Pipeline Blueprint", description: "Design dimensional schemas (star/snowflake), ingestion DAGs, and transformation models." },
      { step: "03", title: "Engineering & Validation", description: "Build automated dbt models, data quality assertions, and automated ingestion pipelines." },
      { step: "04", title: "BI Dashboards & Governance", description: "Publish interactive Power BI dashboards, establish role permissions, and train stakeholders." },
    ],
    benefits: [
      { title: "Single Source of Truth", description: "Eliminate conflicting spreadsheets with a unified, trusted corporate data warehouse." },
      { title: "Real-Time Decision Making", description: "Access live transactional metrics rather than waiting for month-end manual reporting." },
      { title: "Strict Regulatory Compliance", description: "GDPR, HIPAA, and SOC 2 data privacy masking and auditable access logs." },
      { title: "Sub-Second Query Performance", description: "Engineered for rapid analytics even across multi-terabyte data warehouses." },
    ],
    faqs: [
      { question: "Can you help migrate our on-premise SQL/Oracle warehouse to Snowflake?", answer: "Yes! We specialize in migrating legacy on-premise warehouses to Snowflake, BigQuery, or Databricks with zero data loss and automated validation." },
      { question: "How do you ensure data quality and avoid bad data in reports?", answer: "We embed automated data testing assertions using dbt tests, Great Expectations, and schema validators that halt corrupted runs before reaching production dashboards." },
      { question: "Do you offer custom dashboard development for Power BI and Tableau?", answer: "Yes, our certified BI developers design executive-ready dashboards with intuitive filters, drill-downs, and automated email/Slack subscriptions." },
    ],
  },

  "mobile-engineering": {
    slug: "mobile-engineering",
    number: "06",
    title: "Mobile Engineering",
    shortTitle: "Mobile Engineering",
    eyebrow: "iOS • ANDROID • FLUTTER • REACT NATIVE",
    tagline: "Mobile Experiences Designed for the Modern Enterprise",
    heroImage: mobileEngineeringHero,
    overview:
      "HNR Global develops secure, intuitive and scalable mobile applications across iOS, Android and cross-platform environments.",
    capabilities: [
      "iOS application development",
      "Android application development",
      "Cross-platform application development",
      "Enterprise mobility solutions",
      "Customer-facing mobile applications",
      "Employee productivity applications",
      "Mobile commerce",
      "Healthcare applications",
      "Field-service applications",
      "Mobile dashboards",
      "API and backend integration",
      "Mobile application modernization",
    ],
    techEcosystem: [
      "Flutter",
      "React Native",
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Android SDK",
      "Node.js",
      "Java",
      "Python",
      ".NET",
      "REST APIs",
      "GraphQL",
    ],
    businessValue:
      "One experience. Every device. Security, performance and maintainability built into the mobile lifecycle.",
    coreOfferings: [
      {
        title: "Cross-Platform Development (Flutter & React Native)",
        description: "One single codebase delivering pixel-perfect native performance across both iOS and Android ecosystems.",
        bullets: [
          "Up to 40% reduction in development cost and release cycles",
          "Fluid 60fps animations and OS-native gesture responsiveness",
          "Custom native bridges for Bluetooth, sensors, and camera hardware",
          "Over-the-air (OTA) updates and rapid bug fixes",
        ],
      },
      {
        title: "Native iOS & Android Engineering",
        description: "Uncompromised performance, deep OS hardware integration, and cutting-edge platform capabilities.",
        bullets: [
          "Swift & SwiftUI for iOS, iPadOS, and watchOS apps",
          "Kotlin & Jetpack Compose for modern Android apps",
          "On-device ML inference with CoreML and Google ML Kit",
          "Biometric FaceID / Fingerprint enterprise authentication",
        ],
      },
      {
        title: "Enterprise Mobility & Field-Service Solutions",
        description: "Build reliable mobile apps for distributed workforces, logistics fleets, and healthcare workers.",
        bullets: [
          "Offline-first architecture with automatic background synchronization",
          "Real-time GPS tracking, geofencing, and route optimization",
          "Secure barcode scanning and digital signature capture",
          "Mobile Device Management (MDM) integration for enterprise security",
        ],
      },
      {
        title: "App Store Publishing & Lifecycle Support",
        description: "Full end-to-end release management ensuring 100% approval on Apple App Store and Google Play.",
        bullets: [
          "App Store Optimization (ASO) and review compliance management",
          "In-App Purchases (IAP) & RevenueCat subscription setup",
          "Automated Fastlane deployment pipelines",
          "Real-time crash reporting (Sentry/Firebase) and telemetry",
        ],
      },
    ],
    techStack: [
      { category: "Cross-Platform", skills: ["Flutter", "Dart", "React Native", "TypeScript", "Expo"] },
      { category: "Native Mobile", skills: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Android SDK"] },
      { category: "State & Architecture", skills: ["BLoC", "Riverpod", "Redux Toolkit", "Clean Architecture"] },
      { category: "Backend & CI/CD", skills: ["Firebase", "Node.js", "GraphQL", "Fastlane", "Bitrise", "Sentry"] },
    ],
    process: [
      { step: "01", title: "Mobile UI/UX Wireframing", description: "iOS Human Interface & Material Design 3 guidelines applied to interactive prototypes." },
      { step: "02", title: "Modular Architecture", description: "Clean architecture implementation with offline-first repositories and state management." },
      { step: "03", title: "Device Farm Testing", description: "Automated and manual testing across a wide matrix of real iOS and Android devices." },
      { step: "04", title: "App Store Deployment", description: "Apple App Store and Google Play compliance review, submission, and release monitoring." },
    ],
    benefits: [
      { title: "Fluid 60 FPS Experience", description: "Silky-smooth UI transitions, gestures, and zero frame drops across all devices." },
      { title: "Offline-First Reliability", description: "Enterprise staff can continue working seamlessly even in zero-network conditions." },
      { title: "Enterprise Security", description: "Keychain/Keystore cryptographic storage, certificate pinning, and biometric security." },
      { title: "Fast Store Approvals", description: "Strict compliance with Apple and Google developer review guidelines from day one." },
    ],
    faqs: [
      { question: "Should we build cross-platform with Flutter or native Swift/Kotlin?", answer: "For 90% of business applications, Flutter provides 99% identical native performance at almost half the development cost and time. We assess your hardware and AR needs to recommend the optimal route." },
      { question: "Do you handle App Store submission and approval?", answer: "Yes! We manage the entire submission lifecycle, privacy declarations, and review communications until live in stores." },
      { question: "Can the app work completely offline?", answer: "Yes, our offline-first architecture caches all critical operations locally and syncs automatically when a connection is restored." },
    ],
  },

  "technology-talent-solutions": {
    slug: "technology-talent-solutions",
    number: "07",
    title: "Technology Talent Solutions",
    shortTitle: "Talent Solutions",
    eyebrow: "STAFF AUGMENTATION • RPO • CONTRACT STAFFING • EXECUTIVE SEARCH",
    tagline: "The Right Technology Talent, Aligned to Your Roadmap",
    heroImage: techTalentHero,
    overview:
      "HNR Global combines recruiting expertise with technology understanding to help enterprises acquire, augment and scale specialized engineering teams.",
    capabilities: [
      "Permanent hiring",
      "Contract staffing",
      "Contract-to-hire",
      "Staff augmentation",
      "Dedicated development teams",
      "Executive search",
      "RPO (Recruitment Process Outsourcing)",
      "Project-based staffing",
      "Managed teams",
    ],
    techEcosystem: [
      "Java Developers",
      ".NET Developers",
      "Python Developers",
      "Node.js Developers",
      "Full Stack Developers",
      "React / Angular / Vue Developers",
      "AWS / Azure / GCP Engineers",
      "DevOps Engineers",
      "Kubernetes Engineers",
      "Data Engineers",
      "Data Scientists",
      "Machine Learning Engineers",
      "AI / GenAI Engineers",
      "BI Developers",
      "SAP / Salesforce / Oracle talent",
    ],
    businessValue:
      "The right technology talent, aligned to your roadmap. Eliminate hiring friction, onboard vetted senior engineers within 48 to 72 hours, and retain total delivery flexibility.",
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
        title: "Contract-to-Hire & RPO Solutions",
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
      { category: "Engineering Talent", skills: ["Full-Stack Developers", "Backend Architects (Java, .NET, Python, Go)", "Frontend Engineers (React, Next.js, Vue)", "Mobile Engineers (Flutter, Swift, Kotlin)"] },
      { category: "Cloud & DevOps Talent", skills: ["DevOps / SRE Engineers", "AWS / Azure Cloud Architects", "Kubernetes Specialists", "Security & InfoSec Leads"] },
      { category: "Data & AI Talent", skills: ["AI / ML Engineers", "Data Engineers (Spark, Snowflake, dbt)", "BI & Analytics Developers", "Data Scientists"] },
      { category: "Enterprise & Leadership", skills: ["CTOs & VP of Engineering", "Technical Product Managers", "Scrum Masters", "SAP / Salesforce / Oracle Leads"] },
      { category: "Non-IT & Business Talent", skills: ["Operations & Project Managers", "Business Analysts & Finance", "HR & Talent Partners", "Executive & Administrative Specialists"] },
    ],
    process: [
      { step: "01", title: "Requirement Blueprint", description: "Define exact tech stack, seniority, domain familiarity, and team communication style." },
      { step: "02", title: "Pre-Screened Shortlist", description: "Receive 2-3 vetted candidate profiles with recorded coding interview scorecards within 48 hours." },
      { step: "03", title: "Direct Client Interview", description: "Conduct a direct 1-round technical or cultural interview with shortlisted talent." },
      { step: "04", title: "Onboarding & Sprint Zero", description: "Talent is onboarded onto your tools, repos, and communication channels within 3 business days." },
    ],
    benefits: [
      { title: "Top 3% Vetted Talent", description: "Every engineer passes our rigorous live algorithmic and real-world system design tests." },
      { title: "Fast 48-Hour Turnaround", description: "Skip the 3-month hiring grind with immediately available pre-vetted talent." },
      { title: "Zero Payroll Overhead", description: "We handle payroll, benefits, taxes, hardware, and office infrastructure." },
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
    number: "08",
    title: "Digital Transformation",
    shortTitle: "Digital Transformation",
    eyebrow: "MODERNIZATION • AUTOMATION • CLOUD TRANSFORMATION • STRATEGY",
    tagline: "Modernize. Optimize. Transform.",
    heroImage: digitalTransformationHero,
    overview:
      "HNR Global helps enterprises modernize technology environments, optimize processes and create scalable digital operating models.",
    capabilities: [
      "Digital strategy",
      "Technology assessment",
      "Legacy modernization",
      "Cloud transformation",
      "Application modernization",
      "Process automation",
      "Enterprise integration",
      "Data modernization",
      "AI adoption",
      "Customer experience transformation",
      "Technology roadmap development",
    ],
    techEcosystem: [
      "Cloud",
      "AI & ML",
      "Data platforms",
      "Microservices",
      "APIs",
      "Automation",
      "DevOps",
      "Enterprise application modernization",
    ],
    businessValue:
      "Transform legacy environments into agile, scalable and future-ready technology ecosystems. Slash operational friction, modernise legacy debt, and unlock continuous innovation velocity.",
    coreOfferings: [
      {
        title: "Enterprise Architecture & Legacy Modernization",
        description: "Transform antiquated core infrastructure and mainframes into agile microservices architectures.",
        bullets: [
          "Comprehensive technical debt audits and modernisation blueprints",
          "Incremental monolith decomposition without operational downtime",
          "Database modernization to distributed cloud engines",
          "Modern API wrapper layers for legacy core systems",
        ],
      },
      {
        title: "Business Process Automation & Workflow Engines",
        description: "Map and streamline multi-department business processes to cut operational cycle times by up to 60%.",
        bullets: [
          "Enterprise process mining to identify operational bottlenecks",
          "Intelligent digital document processing and approval workflows",
          "Integration across disparate CRM, ERP, and billing applications",
          "Automated compliance tracking and audit trail generation",
        ],
      },
      {
        title: "Cloud Transformation & Operating Models",
        description: "Transition from fixed on-premise infrastructure to elastic, agile cloud-operating paradigms.",
        bullets: [
          "Cloud center of excellence (CCoE) operating framework",
          "Infrastructure as Code and GitOps standardization",
          "FinOps cloud spend governance and cost optimization",
          "Enterprise business continuity and disaster recovery planning",
        ],
      },
      {
        title: "AI Adoption & Innovation Roadmaps",
        description: "Formulate practical, governance-backed roadmaps for integrating generative AI and automated decision intelligence.",
        bullets: [
          "Enterprise AI readiness assessments and use case prioritization",
          "Responsible AI governance, privacy controls, and audit frameworks",
          "Custom generative AI pilot implementations",
          "Workforce upskilling and organizational change management",
        ],
      },
    ],
    techStack: [
      { category: "Cloud & Platforms", skills: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"] },
      { category: "Integration & Events", skills: ["Apache Kafka", "RabbitMQ", "REST APIs", "GraphQL", "Kong Gateway"] },
      { category: "Modernization Stack", skills: ["Java Spring Boot", ".NET Core", "Node.js", "Python", "PostgreSQL", "Snowflake"] },
      { category: "Security & Governance", skills: ["HashiCorp Vault", "Okta SSO", "Datadog", "SonarQube", "ISO/SOC2 Frameworks"] },
    ],
    process: [
      { step: "01", title: "Enterprise Assessment", description: "Audit current tech debt, compliance mandates, security vulnerabilities, and operational cost drivers." },
      { step: "02", title: "Target State Roadmap", description: "Design cloud architecture, phase sequencing, ROI projections, and risk mitigation strategies." },
      { step: "03", title: "Phased Modernization", description: "Iterative migration of non-critical workloads first, followed by core database synchronization." },
      { step: "04", title: "Enablement & Scale", description: "Staff enablement, operational handover, FinOps governance, and continuous telemetry." },
    ],
    benefits: [
      { title: "Substantial Cost Savings", description: "Reduce IT infrastructure and maintenance overhead by up to 35–50%." },
      { title: "99.99% Reliability", description: "High availability across multi-region cloud setups with zero single points of failure." },
      { title: "Rapid Innovation Velocity", description: "Release new business features in days instead of quarterly release cycles." },
      { title: "Ironclad Compliance", description: "Full alignment with ISO, SOC 2, HIPAA, and global data privacy standards." },
    ],
    faqs: [
      { question: "How do you prevent downtime during enterprise cloud migration?", answer: "We utilize dual-write replication and blue-green phased traffic cutovers to ensure the legacy system remains active until the new cloud platform is fully verified with 100% data parity." },
      { question: "Can you help our internal team transition to modern tools?", answer: "Yes, every transformation engagement includes comprehensive documentation, runbooks, and hands-on workshops for your internal engineers." },
      { question: "What return on investment (ROI) can we expect?", answer: "Most enterprises see significant operational cost reductions within 6 months, alongside a 3x to 5x acceleration in feature release cycles." },
    ],
  },
};

// Aliases for backwards compatibility with existing links
if (servicesData["mobile-engineering"]) {
  servicesData["mobile-app-development"] = servicesData["mobile-engineering"];
}
if (servicesData["technology-talent-solutions"]) {
  servicesData["it-recruitment-staffing"] = servicesData["technology-talent-solutions"];
}

export const primaryServicesList: ServiceDetail[] = [
  servicesData["custom-software-development"]!,
  servicesData["product-engineering"]!,
  servicesData["ai-intelligent-solutions"]!,
  servicesData["cloud-devops"]!,
  servicesData["data-engineering-analytics"]!,
  servicesData["mobile-engineering"]!,
  servicesData["technology-talent-solutions"]!,
  servicesData["digital-transformation"]!,
].filter(Boolean) as ServiceDetail[];
