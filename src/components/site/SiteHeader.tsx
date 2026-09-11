import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code2,
  Layers,
  Bot,
  Cloud,
  Database,
  Smartphone,
  Users,
  RefreshCw,
  Landmark,
  Radio,
  Zap,
  Flame,
  Building2,
  HeartPulse,
  FileText,
  FlaskConical,
  Factory,
  ShoppingCart,
  Orbit,
  Truck,
} from "lucide-react";
import logo from "@/assets/hnr-white-logo.png";

const servicesDropdownItems = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    desc: "Custom enterprise solutions",
    icon: Code2,
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    desc: "SaaS & cloud native platforms",
    icon: Layers,
  },
  {
    slug: "ai-intelligent-solutions",
    title: "AI & Intelligent Solutions",
    desc: "Generative AI & automation",
    icon: Bot,
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    desc: "AWS, Azure & Kubernetes",
    icon: Cloud,
  },
  {
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    desc: "Modern data & BI platforms",
    icon: Database,
  },
  {
    slug: "mobile-engineering",
    title: "Mobile Engineering",
    desc: "iOS, Android & cross-platform",
    icon: Smartphone,
  },
  {
    slug: "technology-talent-solutions",
    title: "IT & Non-IT Talent Solutions",
    desc: "IT & non-IT talent on demand",
    icon: Users,
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    desc: "Modernization & cloud strategy",
    icon: RefreshCw,
  },
];

const industriesDropdownItems = [
  {
    id: "cloud-it-services",
    title: "Cloud & IT Services",
    desc: "Managed IT & SaaS systems",
    icon: Cloud,
  },
  {
    id: "banking-capital-markets",
    title: "Banking & Capital Markets",
    desc: "Core banking & fintech",
    icon: Landmark,
  },
  {
    id: "insurance",
    title: "Insurance",
    desc: "Policy admin & claims AI",
    icon: FileText,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    desc: "EHR/EMR & care analytics",
    icon: HeartPulse,
  },
  {
    id: "life-sciences",
    title: "Life Sciences & Pharma",
    desc: "Clinical trials & lab automation",
    icon: FlaskConical,
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industry 4.0",
    desc: "Smart factory & IoT telemetry",
    icon: Factory,
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    desc: "Smart grid & asset health",
    icon: Zap,
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    desc: "Pipeline & HSE telemetry",
    icon: Flame,
  },
  {
    id: "transportation-logistics",
    title: "Transportation & Logistics",
    desc: "Fleet & supply chain visibility",
    icon: Truck,
  },
  {
    id: "retail-consumer",
    title: "Retail & Consumer",
    desc: "Omnichannel & loyalty commerce",
    icon: ShoppingCart,
  },
  {
    id: "communications-media",
    title: "Communications & Media",
    desc: "BSS/OSS & 5G streaming",
    icon: Radio,
  },
  {
    id: "government-public",
    title: "Government & Public Sector",
    desc: "GovTech & citizen portals",
    icon: Building2,
  },
  {
    id: "space-technology",
    title: "Space & Aerospace Tech",
    desc: "Satellite & flight systems",
    icon: Orbit,
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(true);
  };

  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    };
  }, []);

  const handleIndustryClick = (id: string) => {
    setIndustriesDropdownOpen(false);
    setMobileOpen(false);
    if (window.location.pathname === "/industries") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = `/industries#${id}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-gradient-to-r from-[#0d4586] via-[#145fae] to-[#0d4586] backdrop-blur-xl transition-all shadow-lg">
      {/* Brand gradient top strip */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#38bdf8]" />
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Prominent Corporate Logo */}
        <Link to="/" className="flex items-center py-1 group">
          <img
            src={logo}
            alt="HNR Global PVT LTD"
            width={320}
            height={90}
            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto rounded-2xl transition-transform duration-200 group-hover:scale-[1.02] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:gap-2 lg:gap-5 ml-auto lg:flex">
          <Link
            to="/"
            className="rounded-md px-3.5 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white [&.active]:text-[#38bdf8] [&.active]:font-semibold"
            activeOptions={{ exact: true }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="rounded-md px-3.5 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white [&.active]:text-[#38bdf8] [&.active]:font-semibold"
          >
            About Us
          </Link>

          {/* 1. Services Hover Dropdown (Matching Reference Image Format & Color) */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white [&.active]:text-[#38bdf8] [&.active]:font-semibold"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-[#38bdf8]" : "text-white/60"
                }`}
              />
            </Link>

            {/* Dropdown Menu (White Background, Soft Ice-Blue Squircle Icons) */}
            {servicesDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] max-w-[92vw] z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-2xl ring-1 ring-black/5 text-slate-900">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-3.5 px-1">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                        Enterprise Capabilities
                      </span>
                      <p className="text-xs text-[#64748b] mt-0.5">
                        Specialized digital engineering and talent solutions
                      </p>
                    </div>
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1d4ed8] hover:text-[#2563eb]"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  {/* 2-Column Grid of 8 Services (Matching user reference layout exactly) */}
                  <div className="grid grid-cols-2 gap-2">
                    {servicesDropdownItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.slug}
                          to="/services/$slug"
                          params={{ slug: item.slug }}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group flex items-center gap-3.5 rounded-2xl p-2.5 transition-all duration-150 hover:bg-[#f8fafc] border border-transparent hover:border-slate-200/60"
                        >
                          {/* Soft ice-blue rounded squircle icon container */}
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf5ff] text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                            <Icon className="h-5 w-5 stroke-[1.75]" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-[#1e293b] group-hover:text-[#2563eb] transition-colors truncate leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#64748b] truncate mt-0.5 font-normal">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom Banner */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748b] px-1">
                    <span>Looking for dedicated staffing or squads?</span>
                    <Link
                      to="/services/$slug"
                      params={{ slug: "technology-talent-solutions" }}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-[#1d4ed8] hover:underline flex items-center gap-1"
                    >
                      <span>Talent Solutions</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Industries Hover Dropdown (Matching Reference Image Format & Color) */}
          <div
            className="relative"
            onMouseEnter={handleIndustriesEnter}
            onMouseLeave={handleIndustriesLeave}
          >
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white [&.active]:text-[#38bdf8] [&.active]:font-semibold"
            >
              <span>Industries</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  industriesDropdownOpen ? "rotate-180 text-[#38bdf8]" : "text-white/60"
                }`}
              />
            </Link>

            {/* Dropdown Menu (White Background, Soft Ice-Blue Squircle Icons) */}
            {industriesDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[840px] max-w-[95vw] z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-2xl ring-1 ring-black/5 text-slate-900">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-3.5 px-1">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                        Sector Depth
                      </span>
                      <p className="text-xs text-[#64748b] mt-0.5">
                        Domain knowledge and compliance baked into every engagement
                      </p>
                    </div>
                    <Link
                      to="/industries"
                      onClick={() => setIndustriesDropdownOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1d4ed8] hover:text-[#2563eb]"
                    >
                      <span>Explore All Industries</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  {/* 3-Column Grid of 13 Industries (Matching user reference layout exactly) */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[380px] overflow-y-auto pr-1 [scrollbar-width:thin]">
                    {industriesDropdownItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleIndustryClick(item.id)}
                          className="group flex items-center gap-3.5 rounded-2xl p-2.5 text-left transition-all duration-150 hover:bg-[#f8fafc] border border-transparent hover:border-slate-200/60 cursor-pointer w-full"
                        >
                          {/* Soft ice-blue rounded squircle icon container */}
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#edf5ff] text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                            <Icon className="h-4.5 w-4.5 stroke-[1.75]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-bold text-[#1e293b] group-hover:text-[#2563eb] transition-colors truncate leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#64748b] truncate mt-0.5 font-normal">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Bottom Banner */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748b] px-1">
                    <span>Need industry-specific compliance or HIPAA/GAMP architectures?</span>
                    <Link
                      to="/contact"
                      onClick={() => setIndustriesDropdownOpen(false)}
                      className="text-xs font-bold text-[#1d4ed8] hover:underline flex items-center gap-1"
                    >
                      <span>Contact Specialists</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Technology Expertise Route */}
          <Link
            to="/expertise"
            className="rounded-md px-3.5 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white [&.active]:text-[#38bdf8] [&.active]:font-semibold"
          >
            Expertise
          </Link>

          {/* Enterprise Delivery Model Route */}
          <Link
            to="/delivery"
            className="rounded-md px-3.5 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white [&.active]:text-[#38bdf8] [&.active]:font-semibold"
          >
            Delivery Model
          </Link>

          {/* Contact Route */}
          <Link
            to="/contact"
            className="rounded-md px-3.5 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white [&.active]:text-[#38bdf8] [&.active]:font-semibold"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-md border border-white/20 p-2 text-white hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/15 bg-[#0d4586] px-6 py-6 lg:hidden max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-base font-medium text-white/90 hover:text-[#38bdf8]"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-base font-medium text-white/90 hover:text-[#38bdf8]"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-white/90 hover:text-[#38bdf8]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-[#38bdf8]" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 space-y-2 pl-4 border-l-2 border-[#00347f] py-1 bg-white/5 rounded-r-xl p-2">
                  {servicesDropdownItems.map((item) => (
                    <Link
                      key={item.slug}
                      to="/services/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-white/80 hover:text-[#38bdf8]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-white/90 hover:text-[#38bdf8]"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileIndustriesOpen ? "rotate-180 text-[#38bdf8]" : ""
                  }`}
                />
              </button>

              {mobileIndustriesOpen && (
                <div className="mt-2 space-y-2 pl-4 border-l-2 border-[#00347f] py-1 bg-white/5 rounded-r-xl p-2 max-h-60 overflow-y-auto">
                  {industriesDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleIndustryClick(item.id)}
                      className="block w-full text-left py-1.5 text-sm text-white/80 hover:text-[#38bdf8]"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/expertise"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-base font-medium text-white/90 hover:text-[#38bdf8]"
            >
              Expertise
            </Link>

            <Link
              to="/delivery"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-base font-medium text-white/90 hover:text-[#38bdf8]"
            >
              Delivery Model
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-base font-medium text-white/90 hover:text-[#38bdf8]"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
