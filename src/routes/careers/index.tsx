import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Coins,
  Search,
  ChevronDown,
  Bookmark,
  BookmarkCheck,
  Share2,
  Check,
  ArrowRight,
  Sparkles,
  Building2,
  X,
  Filter,
} from "lucide-react";
import heroImg from "@/assets/careers-hero.jpg";
import { PageHero } from "@/components/site/PageHero";
import {
  openings,
  industryOptions,
  locationOptions,
  jobTypeOptions,
  experienceOptions,
} from "@/data/careersData";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers & Open Positions | HNR Global" },
      {
        name: "description",
        content:
          "Browse open technical and engineering vacancies at HNR Global. Explore software engineering, AI, mobile development, DevOps, and talent acquisition roles.",
      },
      { property: "og:title", content: "Careers & Open Positions | HNR Global" },
      {
        property: "og:description",
        content: "Find your next career milestone at HNR Global. View open positions and detailed role specifications.",
      },
    ],
  }),
  component: CareersPage,
});

interface FilterSections {
  datePosted: boolean;
  industry: boolean;
  location: boolean;
  jobType: boolean;
  experience: boolean;
}

function CareersPage() {
  // Sort By
  const [sortBy, setSortBy] = useState<"relevance" | "date">("relevance");

  // Filter By Accordions open states
  const [openSections, setOpenSections] = useState<FilterSections>({
    datePosted: true,
    industry: true,
    location: true,
    jobType: false,
    experience: false,
  });

  // Filter selections
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);

  // Keyword Search
  const [keyword, setKeyword] = useState("");

  // Saved Jobs state
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [copiedJobId, setCopiedJobId] = useState<string | null>(null);

  const toggleSection = (key: keyof FilterSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleIndustry = (ind: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(ind) ? prev.filter((item) => item !== ind) : [...prev, ind]
    );
  };

  const toggleLocation = (loc: string) => {
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((item) => item !== loc) : [...prev, loc]
    );
  };

  const toggleJobType = (type: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  const toggleExperience = (exp: string) => {
    setSelectedExperiences((prev) =>
      prev.includes(exp) ? prev.filter((item) => item !== exp) : [...prev, exp]
    );
  };

  const clearAllFilters = () => {
    setDateFilter("all");
    setSelectedIndustries([]);
    setSelectedLocations([]);
    setSelectedJobTypes([]);
    setSelectedExperiences([]);
    setKeyword("");
    setSortBy("relevance");
  };

  const isAnyFilterActive =
    dateFilter !== "all" ||
    selectedIndustries.length > 0 ||
    selectedLocations.length > 0 ||
    selectedJobTypes.length > 0 ||
    selectedExperiences.length > 0 ||
    keyword !== "";

  // Filter & Sort computation
  const filteredJobs = useMemo(() => {
    let result = openings.filter((job) => {
      // Keyword search
      if (keyword.trim() !== "") {
        const q = keyword.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesDesc = job.description.toLowerCase().includes(q);
        const matchesSkills = job.skills.some((s) => s.toLowerCase().includes(q));
        const matchesDept = job.department.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesSkills && !matchesDept) {
          return false;
        }
      }

      // Date posted filter
      if (dateFilter === "24h" && job.postedDaysAgo > 1) return false;
      if (dateFilter === "7d" && job.postedDaysAgo > 7) return false;
      if (dateFilter === "14d" && job.postedDaysAgo > 14) return false;
      if (dateFilter === "30d" && job.postedDaysAgo > 30) return false;

      // Industry / Department
      if (
        selectedIndustries.length > 0 &&
        !selectedIndustries.includes(job.department)
      ) {
        return false;
      }

      // Location
      if (selectedLocations.length > 0) {
        const matchesLoc = selectedLocations.some((loc) =>
          job.location.toLowerCase().includes(loc.toLowerCase())
        );
        if (!matchesLoc) return false;
      }

      // Job Type
      if (
        selectedJobTypes.length > 0 &&
        !selectedJobTypes.some((t) => job.type.toLowerCase().includes(t.toLowerCase()))
      ) {
        return false;
      }

      // Experience
      if (selectedExperiences.length > 0) {
        const matchesExp = selectedExperiences.some(
          (e) => job.experience.includes(e) || e.includes(job.experience) || (e.includes("7") && job.experience.includes("7"))
        );
        if (!matchesExp) return false;
      }

      return true;
    });

    if (sortBy === "date") {
      result = [...result].sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
    }

    return result;
  }, [
    keyword,
    dateFilter,
    selectedIndustries,
    selectedLocations,
    selectedJobTypes,
    selectedExperiences,
    sortBy,
  ]);

  const handleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/careers/${id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedJobId(id);
      setTimeout(() => setCopiedJobId(null), 2000);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* High-Impact Hero Section */}
      <PageHero
        eyebrow="ENGINEERING CAREERS"
        title="Build Mission-Critical Platforms with Global Impact"
        subtitle="Join specialized engineering pods working on scalable enterprise architectures and modern AI."
        bgImage={heroImg}
      />

      {/* Main Layout: Filters Sidebar + Job Listings */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Sidebar: Filter Accordions */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                <span className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <Filter className="h-4 w-4 text-[#1d4ed8] dark:text-[#38bdf8]" />
                  <span>Filter Roles</span>
                </span>
                {isAnyFilterActive && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-semibold text-[#1d4ed8] dark:text-[#38bdf8] hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {/* 1. Date Posted Accordion */}
                <div className="border-b border-border pb-4">
                  <button
                    onClick={() => toggleSection("datePosted")}
                    className="flex w-full items-center justify-between text-sm font-medium text-foreground py-1 text-left cursor-pointer"
                  >
                    <span>Date Posted</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#1d4ed8] dark:text-[#38bdf8] transition-transform duration-200 ${
                        openSections.datePosted ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSections.datePosted && (
                    <div className="mt-3 space-y-2 text-xs text-foreground/80 pl-1">
                      {[
                        { id: "all", label: "All Time" },
                        { id: "24h", label: "Last 24 hours" },
                        { id: "7d", label: "Last 7 days" },
                        { id: "14d", label: "Last 14 days" },
                        { id: "30d", label: "Last 30 days" },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-foreground"
                        >
                          <input
                            type="radio"
                            name="dateFilter"
                            checked={dateFilter === item.id}
                            onChange={() => setDateFilter(item.id)}
                            className="text-[#1d4ed8] accent-[#1d4ed8] h-3.5 w-3.5"
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Industry / Department Accordion */}
                <div className="border-b border-border pb-4">
                  <button
                    onClick={() => toggleSection("industry")}
                    className="flex w-full items-center justify-between text-sm font-medium text-foreground py-1 text-left cursor-pointer"
                  >
                    <span>Department</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#1d4ed8] dark:text-[#38bdf8] transition-transform duration-200 ${
                        openSections.industry ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSections.industry && (
                    <div className="mt-3 space-y-2 text-xs text-foreground/80 pl-1">
                      {industryOptions.map((ind) => (
                        <label
                          key={ind}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-foreground"
                        >
                          <input
                            type="checkbox"
                            checked={selectedIndustries.includes(ind)}
                            onChange={() => toggleIndustry(ind)}
                            className="rounded text-[#1d4ed8] accent-[#1d4ed8] h-3.5 w-3.5"
                          />
                          <span>{ind}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. Location Accordion */}
                <div className="border-b border-border pb-4">
                  <button
                    onClick={() => toggleSection("location")}
                    className="flex w-full items-center justify-between text-sm font-medium text-foreground py-1 text-left cursor-pointer"
                  >
                    <span>Location</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#1d4ed8] dark:text-[#38bdf8] transition-transform duration-200 ${
                        openSections.location ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSections.location && (
                    <div className="mt-3 space-y-2 text-xs text-foreground/80 pl-1">
                      {locationOptions.map((loc) => (
                        <label
                          key={loc}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-foreground"
                        >
                          <input
                            type="checkbox"
                            checked={selectedLocations.includes(loc)}
                            onChange={() => toggleLocation(loc)}
                            className="rounded text-[#1d4ed8] accent-[#1d4ed8] h-3.5 w-3.5"
                          />
                          <span>{loc}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. Job Type Accordion */}
                <div className="border-b border-border pb-4">
                  <button
                    onClick={() => toggleSection("jobType")}
                    className="flex w-full items-center justify-between text-sm font-medium text-foreground py-1 text-left cursor-pointer"
                  >
                    <span>Employment Type</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#1d4ed8] dark:text-[#38bdf8] transition-transform duration-200 ${
                        openSections.jobType ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSections.jobType && (
                    <div className="mt-3 space-y-2 text-xs text-foreground/80 pl-1">
                      {jobTypeOptions.map((jt) => (
                        <label
                          key={jt}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-foreground"
                        >
                          <input
                            type="checkbox"
                            checked={selectedJobTypes.includes(jt)}
                            onChange={() => toggleJobType(jt)}
                            className="rounded text-[#1d4ed8] accent-[#1d4ed8] h-3.5 w-3.5"
                          />
                          <span>{jt}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* 5. Experience Accordion */}
                <div className="pb-1">
                  <button
                    onClick={() => toggleSection("experience")}
                    className="flex w-full items-center justify-between text-sm font-medium text-foreground py-1 text-left cursor-pointer"
                  >
                    <span>Experience</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#1d4ed8] dark:text-[#38bdf8] transition-transform duration-200 ${
                        openSections.experience ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSections.experience && (
                    <div className="mt-3 space-y-2 text-xs text-foreground/80 pl-1">
                      {experienceOptions.map((exp) => (
                        <label
                          key={exp}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-foreground"
                        >
                          <input
                            type="checkbox"
                            checked={selectedExperiences.includes(exp)}
                            onChange={() => toggleExperience(exp)}
                            className="rounded text-[#1d4ed8] accent-[#1d4ed8] h-3.5 w-3.5"
                          />
                          <span>{exp}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Area: Search Bar + Horizontal Job Cards */}
          <main className="lg:col-span-9 space-y-5">
            {/* Top Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-card border border-border p-3 sm:p-4 rounded-2xl shadow-xs">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search positions by title, skill, or department..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full rounded-xl bg-background border border-border pl-10 pr-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-[#1d4ed8] dark:focus:border-[#38bdf8] focus:ring-2 focus:ring-[#1d4ed8]/20"
                />
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 px-1">
                <span className="text-xs font-semibold text-muted-foreground">
                  Showing <strong className="text-foreground">{filteredJobs.length}</strong> {filteredJobs.length === 1 ? "Job" : "Jobs"}
                </span>

                {isAnyFilterActive && (
                  <button
                    onClick={clearAllFilters}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1d4ed8] dark:text-[#38bdf8] hover:underline cursor-pointer"
                  >
                    <X className="h-3 w-3" /> Reset
                  </button>
                )}
              </div>
            </div>

            {/* List of Job Cards (Clean "View Details" action) */}
            {filteredJobs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                <Search className="h-10 w-10 mx-auto text-muted-foreground/50 mb-3" />
                <h4 className="text-base font-bold text-foreground">No jobs found matching your criteria</h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
                  Try adjusting your search keywords or clearing selected filters to see more available openings.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] dark:bg-[#38bdf8] dark:text-black px-4 py-2 text-xs font-semibold text-white transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => {
                  const isSaved = savedJobs.includes(job.id);

                  return (
                    <article
                      key={job.id}
                      className="group relative rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:border-[#1d4ed8]/50 dark:hover:border-[#38bdf8]/50 hover:shadow-md"
                    >
                      {/* Top Row: Title, Metadata Badges & Actions */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="rounded-md bg-[#1d4ed8]/10 dark:bg-[#38bdf8]/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8] dark:text-[#38bdf8]">
                              {job.department}
                            </span>
                            <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold text-foreground/75">
                              {job.type}
                            </span>
                            <span className="text-[11px] text-muted-foreground ml-1">
                              • Posted {job.postedDate}
                            </span>
                          </div>

                          <Link
                            to="/careers/$jobId"
                            params={{ jobId: job.id }}
                            className="text-lg sm:text-xl font-bold text-foreground group-hover:text-[#1d4ed8] dark:group-hover:text-[#38bdf8] transition-colors"
                          >
                            {job.title}
                          </Link>
                        </div>

                        {/* Top Right Action Buttons */}
                        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                          <button
                            onClick={(e) => handleBookmark(job.id, e)}
                            className="rounded-xl border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                            title="Bookmark Role"
                          >
                            {isSaved ? (
                              <BookmarkCheck className="h-4 w-4 text-[#1d4ed8] dark:text-[#38bdf8]" />
                            ) : (
                              <Bookmark className="h-4 w-4" />
                            )}
                          </button>

                          <button
                            onClick={(e) => handleShare(job.id, e)}
                            className="rounded-xl border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                            title="Share Job Link"
                          >
                            {copiedJobId === job.id ? (
                              <Check className="h-4 w-4 text-emerald-500" />
                            ) : (
                              <Share2 className="h-4 w-4" />
                            )}
                          </button>

                          {/* Clean "View Details" button linking directly to dedicated page */}
                          <Link
                            to="/careers/$jobId"
                            params={{ jobId: job.id }}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] dark:bg-[#38bdf8] dark:text-black hover:bg-[#1e40af] dark:hover:bg-[#0ea5e9] text-white px-4 py-2 text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer group/btn"
                          >
                            <span>View Details</span>
                            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                      {/* Middle Row: Metadata Pills */}
                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5 text-[#1d4ed8] dark:text-[#38bdf8]" />
                          <span className="font-semibold text-foreground">HNR Global PVT LTD</span>
                        </span>

                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#1d4ed8] dark:text-[#38bdf8]" />
                          <span>{job.location}</span>
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-[#1d4ed8] dark:text-[#38bdf8]" />
                          <span>{job.experience}</span>
                        </span>

                        <span className="flex items-center gap-1.5 text-foreground font-semibold">
                          <Coins className="h-3.5 w-3.5 text-[#1d4ed8] dark:text-[#38bdf8]" />
                          <span>{job.compensation}</span>
                        </span>
                      </div>

                      {/* Description Snippet */}
                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Bottom Skills Row */}
                      <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/60">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      <CtaBand />
    </div>
  );
}
