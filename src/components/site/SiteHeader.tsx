import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/xnr-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 md:py-6">
        {/* Prominent Logo */}
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="HNR Global PVT LTD"
            width={240}
            height={80}
            className="h-14 md:h-16 lg:h-20 w-auto rounded-md object-contain brightness-105"
          />
        </Link>

        {/* Right-aligned Navigation without phone number */}
        <nav className="hidden items-center gap-2 md:gap-4 lg:gap-6 ml-auto lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3.5 py-2 text-[1rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white [&.active]:text-[#38bdf8] [&.active]:font-semibold"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/20 p-2 text-white hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#030914]/95 backdrop-blur-xl lg:hidden text-white">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-medium text-white/85 hover:text-[#38bdf8] last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
