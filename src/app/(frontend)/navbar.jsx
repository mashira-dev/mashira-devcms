"use client"
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import logo from "@/assets/images/mashiralogo.png";
import rightUp from "@/assets/images/solar_arrow-up-linear.png";
import { useState } from "react";

// ── Icon map ─────────────────────────────────────────────────────────────────
const StrategyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /><circle cx="12" cy="12" r="3" />
    </svg>
);
const DataIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        <path d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
    </svg>
);
const AIIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
);
const BusinessIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3H8M12 3v4" />
        <circle cx="8" cy="14" r="1" fill="currentColor" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
        <circle cx="16" cy="14" r="1" fill="currentColor" />
    </svg>
);
const CloudIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
    </svg>
);
const SupportIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const ICON_MAP = {
    strategy: <StrategyIcon />,
    data: <DataIcon />,
    ai: <AIIcon />,
    business: <BusinessIcon />,
    cloud: <CloudIcon />,
    support: <SupportIcon />,
};

// ── Hardcoded fallbacks (used when DB global is empty / not yet populated) ───
const FALLBACK_NAV_LINKS = [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Resources", href: "/resources" },
];

const FALLBACK_MEGA_SECTIONS = [
    {
        category: "Strategy and Transformation",
        icon: "strategy",
        links: [
            { label: "Strategy and Transformation", href: "/what-we-do/strategy-and-transformation" },
            { label: "Enterprise Digital Transformation", href: "/what-we-do/enterprise-digital-transformation" },
        ],
    },
    {
        category: "Data Engineering and BI",
        icon: "data",
        links: [
            { label: "Data Engineering", href: "/what-we-do/data-engineering" },
            { label: "BI & Analytics", href: "/what-we-do/bi-analytics" },
            { label: "Integration Services", href: "/what-we-do/integration-services" },
        ],
    },
    {
        category: "AI & Intelligent Automation",
        icon: "ai",
        links: [
            { label: "AI Agents", href: "/what-we-do/ai-agents" },
            { label: "AI Document Intelligence", href: "/what-we-do/ai-document-intelligence" },
        ],
    },
    {
        category: "Business Applications",
        icon: "business",
        links: [
            { label: "Pro Code and Low Code", href: "/what-we-do/pro-code-and-low-code" },
            { label: "Enterprise Project Management", href: "/what-we-do/enterprise-project-management" },
            { label: "CRM Implementation", href: "/what-we-do/crm-implementation" },
        ],
    },
    {
        category: "Cloud & Infrastructure",
        icon: "cloud",
        links: [
            { label: "Cloud Migration", href: "/what-we-do/cloud-migration" },
            { label: "High Workload Apps", href: "/what-we-do/high-workload-apps" },
        ],
    },
    {
        category: "Support & Sustenance",
        icon: "support",
        links: [
            { label: "Support & Sustenance", href: "/what-we-do/support-sustenance" },
        ],
    },
];

const FALLBACK_CTA = { label: "Let's Talk", href: "/cantact" };

const FALLBACK_TAGLINE = {
    heading: "Turning complexity into clarity",
    body: "We combine strategy, design, technology, and data to deliver unified solutions that turn ideas into impact.",
};

const FALLBACK_SOCIALS = {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function Navbar({ data }) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Resolve data from Payload global, falling back to hardcoded values
    const navLinks        = data?.navLinks?.length        ? data.navLinks        : FALLBACK_NAV_LINKS;
    const megaSections    = data?.megaMenuSections?.length ? data.megaMenuSections : FALLBACK_MEGA_SECTIONS;
    const cta             = data?.ctaButton?.label         ? data.ctaButton       : FALLBACK_CTA;
    const tagline         = data?.megaMenuTagline?.heading  ? data.megaMenuTagline  : FALLBACK_TAGLINE;
    const socials         = data?.socialLinks              ? data.socialLinks      : FALLBACK_SOCIALS;

    // Split mega-menu sections into 3 columns of 2
    const columns = [
        megaSections.slice(0, 2),
        megaSections.slice(2, 4),
        megaSections.slice(4, 6),
    ];

    return (
        <header className="navbar">
            <Link href="/">
                <Image src={logo} className="logo" alt="Logo" width={120} />
            </Link>

            <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span /><span /><span />
            </div>

            <nav className={`right-nav ${menuOpen ? "show" : ""}`}>
                {/* Dynamic nav links from CMS */}
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                        {link.label}
                    </Link>
                ))}

                {/* What We Do — mega menu (always in DOM, shown/hidden by CSS) */}
                <div className="nav-item-mega">
                    <Link href="/what-we-do" className="nav-link-mega">
                        What We Do
                    </Link>

                    <div className="mega-menu">
                        <div className="mega-body">
                            {/* Left panel — tagline from CMS */}
                            <div className="mega-left">
                                <p className="mega-left-tag">/ WHAT WE DO</p>
                                <h3>{tagline.heading}</h3>
                                <p>{tagline.body}</p>
                            </div>

                            {/* Right grid — sections from CMS */}
                            <div className="mega-right">
                                {columns.map((col, colIdx) => (
                                    <div className="mega-col" key={colIdx}>
                                        {col.map((section) => (
                                            <div className="mega-section" key={section.category}>
                                                <div className="mega-section-head">
                                                    <span className="mega-icon">
                                                        {ICON_MAP[section.icon] ?? <StrategyIcon />}
                                                    </span>
                                                    <span className="mega-section-title">{section.category}</span>
                                                </div>
                                                <ul className="mega-links">
                                                    {section.links.map((link) => (
                                                        <li key={link.label}>
                                                            <Link href={link.href}>
                                                                <span className="arrow"></span> {link.label}
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

                        {/* Mega footer — CTA + socials from CMS */}
                        <div className="mega-footer">
                            <Link href={cta.href} className="mega-footer-link">
                                {cta.label} <span>→</span>
                            </Link>
                            <div className="mega-socials">
                                {socials.linkedin && (
                                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                )}
                                {socials.linkedin && socials.twitter && " / "}
                                {socials.twitter && (
                                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer">Twitter/X</a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA button from CMS */}
                <Link href={cta.href} className="cta">
                    <div style={{ alignContent: "center" }}>{cta.label}</div>
                    <Image src={rightUp} className="rightlogo" alt="Arrow" />
                </Link>
            </nav>
        </header>
    );
}
