import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Coins,
  Building2,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Share2,
  Check,
  Upload,
  FileText,
  X,
  Send,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import heroImg from "@/assets/services-hero-pro.jpg";
import { openings, JobOpening } from "@/data/careersData";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/careers/$jobId")({
  loader: ({ params }) => {
    const job = openings.find((o) => o.id === params.jobId);
    if (!job) {
      throw notFound();
    }
    return { job };
  },
  head: ({ loaderData }) => {
    const job = loaderData?.job;
    return {
      meta: [
        { title: `${job?.title || "Job Details"} | Careers at HNR Global` },
        {
          name: "description",
          content: job?.description || "Apply for open engineering roles at HNR Global PVT LTD.",
        },
        { property: "og:title", content: `${job?.title} | HNR Global Careers` },
        { property: "og:description", content: job?.description || "" },
      ],
    };
  },
  component: JobDetailPage,
});

function JobDetailPage() {
  const { job } = Route.useLoaderData() as { job: JobOpening };

  // Form & Resume state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [currentCtc, setCurrentCtc] = useState("");
  const [expectedCtc, setExpectedCtc] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [note, setNote] = useState("");

  // Resume drag & drop
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Bookmark & Share
  const [isSaved, setIsSaved] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    const validExtensions = [".pdf", ".doc", ".docx"];
    const fileExt = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!validExtensions.includes(fileExt)) {
      setErrorMessage("Please upload a valid PDF or Word document (.pdf, .doc, .docx).");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("File size exceeds 10MB limit. Please upload a smaller document.");
      return;
    }
    setErrorMessage("");
    setResumeFile(file);
    // Simulate upload progress
    setUploadProgress(20);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 30;
      });
    }, 100);
  };

  const removeFile = () => {
    setResumeFile(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("Please fill in your name, email, and contact phone number.");
      return;
    }
    if (!resumeFile) {
      setErrorMessage("Please upload or drag-and-drop your resume to submit your application.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate submission to recruitment pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden bg-[#030914] min-h-[420px] flex items-center border-b border-white/10 pt-28 pb-16">
        <img
          src={heroImg}
          alt={job.title}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/90 to-[#030914]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-transparent/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-white/60 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#38bdf8] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/careers" className="hover:text-[#38bdf8] transition-colors">
              Careers
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#38bdf8] truncate max-w-xs">{job.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-md bg-[#38bdf8]/15 border border-[#38bdf8]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                  {job.department}
                </span>
                <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  {job.type}
                </span>
                <span className="text-xs text-white/60">• Posted {job.postedDate}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl leading-tight">
                {job.title}
              </h1>

              {/* Metadata Pills */}
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-300">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <Building2 className="h-4 w-4 text-[#38bdf8]" />
                  <span>HNR Global PVT LTD</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#38bdf8]" />
                  <span>{job.location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#38bdf8]" />
                  <span>{job.experience}</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-[#38bdf8]">
                  <Coins className="h-4 w-4 text-[#38bdf8]" />
                  <span>{job.compensation}</span>
                </span>
              </div>
            </div>

            {/* Top Action CTAs */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsSaved((v) => !v)}
                className="rounded-xl border border-white/20 bg-white/5 p-3 text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Bookmark Position"
              >
                {isSaved ? (
                  <BookmarkCheck className="h-5 w-5 text-[#38bdf8]" />
                ) : (
                  <Bookmark className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={handleShare}
                className="rounded-xl border border-white/20 bg-white/5 p-3 text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Share Job Listing"
              >
                {isCopied ? (
                  <Check className="h-5 w-5 text-emerald-400" />
                ) : (
                  <Share2 className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={scrollToApply}
                className="inline-flex items-center gap-2 rounded-xl bg-[#38bdf8] hover:bg-[#0ea5e9] text-black px-6 py-3 text-sm font-bold shadow-lg shadow-[#38bdf8]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details & Form */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Main Column: Specs + Apply Form */}
          <div className="lg:col-span-8 space-y-12">
            {/* About the Role */}
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xs space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Role Overview
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {job.description}
              </p>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-border/60">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                  Required Technologies &amp; Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xs space-y-5">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements & Qualifications */}
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xs space-y-5">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Requirements &amp; Qualifications
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Offer / Offerings */}
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xs space-y-5">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                What We Offer
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {job.offerings.map((off, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4"
                  >
                    <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-foreground/90">
                      {off}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Section & Drag-and-Drop Resume Form */}
            <div
              id="apply-form"
              ref={formSectionRef}
              className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Send className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  DIRECT APPLICATION
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Apply for {job.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Complete your details below and attach your resume. Our talent acquisition directors review applications within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center animate-in fade-in-50">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white mb-4">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Application Submitted Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you, <strong className="text-foreground">{name}</strong>. We have received your application and resume for the{" "}
                    <strong className="text-foreground">{job.title}</strong> role. Our recruitment team will contact you at{" "}
                    <strong className="text-foreground">{email}</strong>.
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <Link
                      to="/careers"
                      className="rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-primary/90"
                    >
                      Browse Other Openings
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-medium text-rose-600 dark:text-rose-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Personal Details Row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Current Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Hyderabad, India"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Experience & Notice Period Row */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Total Experience
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5 Years"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Notice Period
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Immediate / 30 Days"
                        value={noticePeriod}
                        onChange={(e) => setNoticePeriod(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Expected CTC
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹20 LPA"
                        value={expectedCtc}
                        onChange={(e) => setExpectedCtc(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Portfolio / LinkedIn */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                      LinkedIn Profile / GitHub / Portfolio URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* DRAG-AND-DROP RESUME UPLOAD ZONE */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                      Upload Resume / CV <span className="text-rose-500">*</span>
                      <span className="text-muted-foreground/75 font-normal ml-2">
                        (PDF, DOC, DOCX up to 10MB)
                      </span>
                    </label>

                    {!resumeFile ? (
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleFileDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`group relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-all cursor-pointer ${
                          isDragging
                            ? "border-primary bg-primary/10 scale-[1.01]"
                            : "border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform mb-3">
                          <Upload className="h-6 w-6" />
                        </div>
                        <h4 className="text-sm font-bold text-foreground">
                          Drag and drop your resume here, or{" "}
                          <span className="text-primary underline underline-offset-2">browse files</span>
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Supports PDF, DOC, DOCX files up to 10MB
                        </p>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground truncate max-w-xs sm:max-w-md">
                              {resumeFile.name}
                            </p>
                            <span className="text-xs text-muted-foreground">
                              {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to submit
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={removeFile}
                          className="rounded-lg p-2 text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                          title="Remove file"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Cover Note */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Cover Note / Summary
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly highlight your key achievements, preferred domains, or questions..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Uploading &amp; Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Quick Summary Card */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-foreground">
                Job Overview
              </h3>

              <div className="divide-y divide-border/60 text-xs space-y-3">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-muted-foreground">Department:</span>
                  <span className="font-semibold text-foreground">{job.department}</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-semibold text-foreground">{job.location}</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-muted-foreground">Employment Type:</span>
                  <span className="font-semibold text-foreground">{job.type}</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-muted-foreground">Experience Required:</span>
                  <span className="font-semibold text-foreground">{job.experience}</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-muted-foreground">Compensation:</span>
                  <span className="font-semibold text-primary">{job.compensation}</span>
                </div>
              </div>

              <button
                onClick={scrollToApply}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Apply for Position</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Direct HR Connect */}
            <div className="rounded-3xl border border-border bg-muted/30 p-6 space-y-3">
              <h4 className="text-sm font-bold text-foreground">Need Assistance?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Have questions regarding the interview timeline or relocation support? Reach out directly to our HR leadership.
              </p>
              <div className="pt-2 space-y-2 text-xs">
                <a
                  href="mailto:hr.hnrglobal@gmail.com"
                  className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" /> hr.hnrglobal@gmail.com
                </a>
                <a
                  href="tel:+919177111311"
                  className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" /> +91-9177111311
                </a>
              </div>
            </div>

            {/* Back to Careers List Link */}
            <div>
              <Link
                to="/careers"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border p-3.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
              >
                <span>← Back to All Openings</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
