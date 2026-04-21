"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./IndustriesSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Pharmaceutical & Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M2 20h20M4 20V10l4-4 4 4V8l4-4 4 4v12" />
        <rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
  },
  {
    title: "IT/ITES",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "BFSI",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="3" y="10" width="18" height="11" rx="1" />
        <path d="M12 2L2 7h20L12 2z" />
      </svg>
    ),
  },
  {
    title: "Logistics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="1" y="8" width="15" height="10" rx="1" />
        <path d="M16 11l5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    title: "Infrastructure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
      </svg>
    ),
  },
  {
    title: "Retail",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      </svg>
    ),
  },
  {
    title: "Legal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M12 22V8M3 22h18" />
      </svg>
    ),
  },
  {
    title: "Defense",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Media & Entertainment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        `.${styles.industryCard}`,
        gridRef.current
      );
      if (!cards.length) return;

      // Start hidden
      gsap.set(cards, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.07,
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.badge}>
        <span style={{ color: "#FF3503" }}>/</span> BUILT FOR EVERY INDUSTRY
      </div>

      <h2 className={styles.heading}>
        Industries we <em>Serve</em>
      </h2>

      <div className={styles.gridWrapper}>
        <div className={styles.grid} ref={gridRef}>
          {industries.map((item, i) => (
            <div key={i} className={styles.industryCard}>
              <div className={styles.icon}>{item.icon}</div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}