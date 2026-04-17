import Navbar from "../navbar";
// import { useEffect, useRef, useState } from "react";
import Footer from "../footer";
import styles from "./whoweare.module.css";
import Image from 'next/image';

const TAGS_ROW_1 = [
    { label: 'Execute Faster', icon: '✦' },
    { label: 'AI-Led Strategy', icon: '✦' },
];

const TAGS_ROW_2 = [
    { label: 'Enterprise-Ready', icon: '✦' },
    { label: 'Build for Scale', icon: '✦' },
    { label: 'Production Mindset', icon: '✦' },
];

const STATS = [
    { number: '120+', label: 'Clients' },
    { number: '120+', label: 'Success Stories' },
    { number: '3+', label: 'Country Presence' },
];

const PHILOSOPHY = [
    'Technology should create clarity, not complexity.',
    'AI should amplify human intelligence, not replace it.',
    'Strategy is meaningless without execution.',
];

const cards = [
    {
        // Icon: ValueIcon,
        image: "/images/value-white.png",
        hoverImage: "/images/value-red.png",
        title: 'Value Proposition',
        body: 'Mashira enables enterprises to move beyond fragmented AI initiatives and isolated pilots by providing a structured, execution-led approach to AI implementation. Through proven frameworks and enterprise-grade governance, Mashira ensures that your AI initiatives are aligned to business KPIs, deployed at scale, and designed to deliver measurable, sustainable value.',
    },
    {
        // Icon: ApproachIcon,
        image: "/images/approach-white.png",
        hoverImage: "/images/approach-red.png",
        title: 'Our Approach',
        body: 'A clear, execution-focused model designed to move AI from strategy to scale. You receive structured implementation frameworks, a partnership model that integrates your teams, and hands-on support through strategy definition, implementation, and optimization. Engagements typically begin with a clearly defined Proof of Value (6–8 weeks), allowing organizations to validate outcomes, governance, and adoption before scaling. Each engagement is designed to connect AI initiatives directly to business priorities and measurable outcomes.',
    },
    {
        // Icon: CommitmentIcon,
        image: "/images/commitment-white.png",
        hoverImage: "/images/commitment-red.png",
        title: 'Our Commitment',
        body: 'A relationship built for durability and trust. You gain enterprise-grade delivery standards, with security, compliance, and governance embedded from day one, alongside intentional knowledge transfer that strengthens internal capabilities. The focus is on creating lasting value ensuring AI adoption remains effective, and scalable long after initial implementation.',
    },
];

export default function WhoWeArePage() {
    return (
        <div>
            <div className={styles.bg}>
                <Navbar />
                <section className={styles.aboutus}>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <p className={styles.subheading}> <span style={{ color: "red" }}>/</span> ABOUT MASHIRA</p>
                            <h1 className={styles.title}>
                                Building <span>Underutilized</span> <br />
                                Enterprises with Purpose
                            </h1>
                        </div>

                        <div className={styles.right}>
                            <p>
                                At Mashira, we exist to turn ambitious ideas into<br />
                                operational reality. We are a techno-functional consulting<br />
                                firm focused on AI-led digital transformation. Our work sits<br />
                                at the intersection of strategy, systems, and execution as<br />
                                that is where vision transforms to measurable outcomes.<br />
                                We don’t chase trends. We build foundations that last.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className={styles.section}>

                <div className={styles.header}>
                    <div className={styles.badge}>Our Story</div>
                    <h2 className={styles.title}>
                        Who <em className={styles.titleItalic}>We</em> Are
                    </h2>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.imageCard}>
                        <Image
                            src="/images/shakehand.png"
                            alt="Human and robot handshake symbolising AI-human collaboration"
                            fill
                            className={styles.heroImage}
                            style={{ objectFit: 'cover' }}
                            priority
                        />

                        {/* Brand watermark */}
                        <span className={styles.imageBrandTag}>mashira</span>

                        {/* Floating pill tags */}
                        <div className={styles.tagsRow}>
                            <div className={styles.tagLine}>
                                {TAGS_ROW_1.map(({ label, icon }) => (
                                    <span key={label} className={styles.tag}>
                                        <span className={styles.tagIcon}>{icon}</span>
                                        {label}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.tagLine}>
                                {TAGS_ROW_2.map(({ label, icon }) => (
                                    <span key={label} className={styles.tag}>
                                        <span className={styles.tagIcon}>{icon}</span>
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Text card */}
                    <div className={styles.textCard}>
                        <p className={styles.description}>
                            <span className={styles.descriptionBrand}>Mashira</span> is a partner
                            to organizations navigating complex changes in this AI-first digital
                            landscape. Enterprises come to us when they plan on scaling operations,
                            modernizing legacy systems, embedding AI responsibly, or rethinking how
                            technology drives growth. We combine deep domain understanding with
                            enterprise-grade engineering to deliver solutions that are not just
                            innovative — but reliable, secure, and production-ready.
                        </p>

                        <p className={styles.philosophyHeading}>Our philosophy is simple:</p>

                        <ul className={styles.philosophyList}>
                            {PHILOSOPHY.map((point) => (
                                <li key={point}>
                                    <span className={styles.bullet} aria-hidden="true" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Stats Row ── */}
                <div className={styles.statsRow}>
                    {STATS.map(({ number, label }) => (
                        <div>
                            <div key={label} className={styles.statItem}>
                                <p className={styles.statNumber}>{number}</p>
                            </div>
                            <p className={styles.statLabel}>{label}</p>
                        </div>
                    ))}
                </div>

            </section>

            <section className={styles.driveSection}>
                {/* <div className={styles.noise} /> */}

                <div className={styles.driveHeader}>
                    <span className={styles.eyebrow}>
                        <span className={styles.eyebrowSlash}>/</span> OUR VALUES
                    </span>

                    <h2 className={styles.heading}>
                        What <em className={styles.headingItalic}>Drives</em> Us
                    </h2>
                </div>

                <div className={styles.divider} />
                <div className={styles.grid}>
                    {cards.map(({ image, hoverImage, title, body }, i) => (
                        <article
                            key={title}
                            className={styles.card}
                            style={{ "--delay": `${i * 0.12}s` } as React.CSSProperties}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.iconWrap}>
                                    {/* default image */}
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={80}
                                        height={80}
                                        className={`${styles.iconImage} ${styles.defaultImage}`}
                                    />

                                    {/* hover image */}
                                    <Image
                                        src={hoverImage}
                                        alt={title}
                                        width={80}
                                        height={80}
                                        className={`${styles.iconImage} ${styles.hoverImage}`}
                                    />
                                </div>

                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{title}</h3>
                                    <p className={styles.cardText}>{body}</p>
                                </div>
                            </div>

                            <div className={styles.cardGlow} />
                        </article>
                    ))}
                </div>
                <div className={styles.divider} />
            </section>
            <Footer />
        </div>
    );
}