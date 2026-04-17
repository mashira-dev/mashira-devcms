"use client";
import { useState } from "react";
import Image from "next/image";
import mashiraFrame from "../../../public/images/mashira-footer.svg";
import mashiraLogo from "../../../public/images/mashira-logo.svg";
import "./footer.css"

export default function Footer() {

    const [visible, setVisible] = useState(false);

    const LinkedInIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );

    const ArrowUpIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
    );

    const companyLinks = [
        { label: "Home", active: true },
        { label: "Who We Are" },
        { label: "Careers" },
        { label: "Contact" },
    ];

    const whatWeDoLinks = [
        { label: "Enterprise Digital Transformation" },
        { label: "Automation & AI Solutions" },
        { label: "Project Management" },
        { label: "Data & Business Intelligence" },
        { label: "Low-Code / No-Code Development" },
        { label: "Custom Solution Development" },
    ];

    const resourceLinks = [
        { label: "Blog" },
        { label: "Articles" },
    ];

    const locationLinks = [
        { label: "USA" },
        { label: "UK" },
        { label: "India" },
        { label: "Contact" },
    ];

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <div className="container">
                <div className="blur-bg" />
                <footer className={`footer ${visible ? "footer-visible" : "footer-hidden"}`}>
                    <div className="footer-top">
                        <div>
                            <div className="brand-title">
                                <Image
                                    src={mashiraLogo}
                                    alt="Mashira"
                                    className="brand-logo"
                                    priority
                                />
                            </div>                            <p className="brand-text">
                                Your trusted implementation partner for enterprise AI transformation...
                            </p>
                            <a href="#" className="linkedin-btn">
                                <LinkedInIcon />
                            </a>
                        </div>
                        <button onClick={scrollToTop} className="scroll-btn">
                            <ArrowUpIcon />
                        </button>
                    </div>

                    <div className="footer-grid">
                        {[
                            { title: "Company", links: companyLinks },
                            { title: "What We Do", links: whatWeDoLinks },
                            { title: "Resources", links: resourceLinks },
                            { title: "Location", links: locationLinks },
                        ].map((section, i) => (
                            <div key={section.title} className="footer-column">
                                <div className="footer-heading">
                                    <span>/</span> {section.title}
                                </div>

                                <ul className="footer-list">
                                    {section.links.map(link => (
                                        <li key={link.label}>
                                            <a href="#" className={`footer-link ${link.active ? "active" : ""}`}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="footer-bottom">
                        <span className="footer-meta">&copy; {new Date().getFullYear()} mashira Inc. All rights reserved</span>
                        <span className="footer-meta">Designed by mashira.</span>
                    </div>
                    <div className="footer-frame">
                        <Image src={mashiraFrame} alt="Frame" className="frame-img" />
                    </div>

                </footer>
            </div>
        </>
    );
}