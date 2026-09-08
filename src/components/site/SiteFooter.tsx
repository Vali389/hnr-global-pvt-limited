import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/xnr-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="HNR Global PVT LTD logo"
              width={140}
              height={48}
              loading="lazy"
              className="h-12 w-auto object-contain rounded-md bg-white p-1 drop-shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
            />
            <div>
              <p className="text-lg font-bold text-white">HNR Global PVT LTD</p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                Driven by Trust, delivering the values
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
            A software development, product engineering and IT talent partner headquartered in
            Visakhapatnam with a strategic presence in Hyderabad.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Explore</p>
          <ul className="mt-4 space-y-2 text-base text-white/75">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/engagement">Engagement Models</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Contact</p>
          <ul className="mt-4 space-y-3 text-base text-white/75">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white" />
              <a href="tel:+919177111311">+91-9177111311</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-white" />
              <a
                href="https://wa.me/919177111311"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white" />
              <a href="mailto:hr.hnrglobal@gmail.com">hr.hnrglobal@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-white" />
              <span>Visakhapatnam &amp; Hyderabad, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} HNR Global PVT LTD. All rights reserved.
      </div>
    </footer>
  );
}
