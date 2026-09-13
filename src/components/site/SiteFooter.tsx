import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Linkedin } from "lucide-react";
import logo from "@/assets/hnr-white-logo.png";

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
              className="h-12 w-auto object-contain rounded-xl shadow-md border border-white/15"
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
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/hnr-global-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-blue-600 hover:border-blue-500 hover:scale-105 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4 text-sky-400" />
              <span>Follow us on LinkedIn</span>
            </a>
          </div>
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
              <a href="mailto:info@hnrglobal.tech">info@hnrglobal.tech</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white" />
              <a href="mailto:hr@hnrglobal.tech">hr@hnrglobal.tech</a>
            </li>
            <li className="flex items-start gap-2 pt-1 text-xs text-white/80 leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 text-sky-400 shrink-0" />
              <div>
                <strong className="text-white block font-semibold">Visakhapatnam (HQ):</strong>
                <a
                  href="https://maps.app.goo.gl/odJ32fdL9ChEiUGE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 hover:underline transition-colors"
                >
                  DNo. 5-138, 1st street, Near:Postoffice, Simhachalam, Visakhapatnam 530028 ↗
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2 pt-1 text-xs text-white/80 leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 text-sky-400 shrink-0" />
              <div>
                <strong className="text-white block font-semibold">Hyderabad Hub:</strong>
                <a
                  href="https://maps.app.goo.gl/ZCY9vjFUL5MoPWAX9?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 hover:underline transition-colors"
                >
                  AR Brindavan Teachers Colony Rd, Raghavendra Colony, Ramachandrapuram, Hyderabad 502032 ↗
                </a>
              </div>
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
