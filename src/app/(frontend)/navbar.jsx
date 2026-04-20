"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import logo from "@/assets/images/mashiralogo.png";
import rightUp from "@/assets/images/solar_arrow-up-linear.png";

// ── Icons ──────────────────────────────────────────────────────────────────────
const Icons = {
  strategy: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  data: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
      <path d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
    </svg>
  ),
  ai: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  business: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 3H8M12 3v4" />
      <circle cx="8" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="14" r="1" fill="currentColor" />
    </svg>
  ),
  cloud: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
    </svg>
  ),
  support: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

// ── Fallbacks (shown while DB loads or if global is unpopulated) ───────────────
const FALLBACK = {
  navLinks: [
    { id: "1", label: "Who We Are",  href: "/who-we-are",  hasMegaMenu: false },
    {
      id: "2",
      label: "What We Do",
      href: "/what-we-do",
      hasMegaMenu: true,
      megaMenuTagline: {
        heading: "Turning complexity into clarity",
        body: "We combine strategy, design, technology, and data to deliver unified solutions that turn ideas into impact.",
      },
      megaMenuSections: [
        {
          id: "s1", category: "Strategy and Transformation", icon: "strategy",
          links: [
            { id: "l1", label: "Strategy and Transformation", href: "/what-we-do/strategy-and-transformation" },
            { id: "l2", label: "Enterprise Digital Transformation", href: "/what-we-do/enterprise-digital-transformation" },
          ],
        },
        {
          id: "s2", category: "Data Engineering and BI", icon: "data",
          links: [
            { id: "l3", label: "Data Engineering", href: "/what-we-do/data-engineering" },
            { id: "l4", label: "BI & Analytics", href: "/what-we-do/bi-analytics" },
            { id: "l5", label: "Integration Services", href: "/what-we-do/integration-services" },
          ],
        },
        {
          id: "s3", category: "AI & Intelligent Automation", icon: "ai",
          links: [
            { id: "l6", label: "AI Agents", href: "/what-we-do/ai-agents" },
            { id: "l7", label: "AI Document Intelligence", href: "/what-we-do/ai-document-intelligence" },
          ],
        },
        {
          id: "s4", category: "Business Applications", icon: "business",
          links: [
            { id: "l8",  label: "Pro Code and Low Code", href: "/what-we-do/pro-code-and-low-code" },
            { id: "l9",  label: "Enterprise Project Management", href: "/what-we-do/enterprise-project-management" },
            { id: "l10", label: "CRM Implementation", href: "/what-we-do/crm-implementation" },
          ],
        },
        {
          id: "s5", category: "Cloud & Infrastructure", icon: "cloud",
          links: [
            { id: "l11", label: "Cloud Migration", href: "/what-we-do/cloud-migration" },
            { id: "l12", label: "High Workload Apps", href: "/what-we-do/high-workload-apps" },
          ],
        },
        {
          id: "s6", category: "Support & Sustenance", icon: "support",
          links: [
            { id: "l13", label: "Support & Sustenance", href: "/what-we-do/support-sustenance" },
          ],
        },
      ],
    },
    { id: "3", label: "Resources", href: "/resources", hasMegaMenu: false },
  ],
  ctaButton: { label: "Let's Talk", href: "/cantact" },
  socialLinks: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
};

// ── Mega menu dropdown ─────────────────────────────────────────────────────────
function MegaMenu({ link, socials, cta }) {
  const sections = link.megaMenuSections ?? [];
  const tagline  = link.megaMenuTagline ?? {};

  // Split sections into columns of 2
  const columns = [];
  for (let i = 0; i < sections.length; i += 2) {
    columns.push(sections.slice(i, i + 2));
  }

  return (
    <div className="mega-menu">
      <div className="mega-body">
        <div className="mega-left">
          <p className="mega-left-tag">/ {link.label.toUpperCase()}</p>
          {tagline.heading && <h3>{tagline.heading}</h3>}
          {tagline.body    && <p>{tagline.body}</p>}
        </div>

        <div className="mega-right">
          {columns.map((col, ci) => (
            <div className="mega-col" key={ci}>
              {col.map((section) => (
                <div className="mega-section" key={section.id ?? section.category}>
                  <div className="mega-section-head">
                    <span className="mega-icon">{Icons[section.icon] ?? Icons.strategy}</span>
                    <span className="mega-section-title">{section.category}</span>
                  </div>
                  <ul className="mega-links">
                    {(section.links ?? []).map((l) => (
                      <li key={l.id ?? l.label}>
                        <Link href={l.href}>
                          <span className="arrow"></span> {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mega-footer">
        <Link href={cta.href} className="mega-footer-link">
          {/* {cta.label} <span>→</span> */}
          Book a Call <span>→</span>
        </Link>
        <div className="mega-socials">
          {socials?.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          {socials?.linkedin && socials?.twitter && " / "}
          {socials?.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer">Twitter/X</a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navData, setNavData]   = useState(null);

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000";
    fetch(`${base}/api/globals/navbar`)
      .then((r) => r.json())
      .then((data) => {
        // Only update state if Payload actually returned populated links
        if (data?.navLinks?.length) setNavData(data);
      })
      .catch(() => {
        // Silently fall back to hardcoded defaults
      });
  }, []);

  const navLinks = navData?.navLinks   ?? FALLBACK.navLinks;
  const cta      = navData?.ctaButton  ?? FALLBACK.ctaButton;
  const socials  = navData?.socialLinks ?? FALLBACK.socialLinks;

  return (
    <header className="navbar">
      <Link href="/">
        <Image src={logo} className="logo" alt="Mashira Logo" width={120} />
      </Link>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span /><span />
      </div>

      <nav className={`right-nav ${menuOpen ? "show" : ""}`}>
        {navLinks.map((link) =>
          link.hasMegaMenu ? (
            <div className="nav-item-mega" key={link.id ?? link.href}>
              <Link href={link.href} className="nav-link-mega">
                {link.label}
              </Link>
              <MegaMenu link={link} socials={socials} cta={cta} />
            </div>
          ) : (
            <Link key={link.id ?? link.href} href={link.href}>
              {link.label}
            </Link>
          )
        )}

        <Link href={cta.href} className="cta">
          <div style={{ alignContent: "center" }}>{cta.label}</div>
          <Image src={rightUp} className="rightlogo" alt="Arrow" />
        </Link>
      </nav>
    </header>
  );
}
