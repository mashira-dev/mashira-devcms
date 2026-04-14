"use client";

import Image from "next/image";
import Navbar from "../navbar";
import styles from "./HeroSection.module.css";
import contextual from "../../../../public/images/contextual.png"
import governed from "../../../../public/images/governed.png"
import scalable from "../../../../public/images/scalable.png"
import outcomes from "../../../../public/images/outcomes.png"
import Footer from "../footer";

const cards = [
    {
        iconDefault: "/images/ai-brain-02-black.png",
        iconHover: "/images/ai-brain-02.png",
        title:
            "You already know AI works. The problem is getting it to work for you.",
        desc: "These are the conversations we have with technology leaders every week before they start working with us.",
    },
    {
        iconDefault: "/images/blockchain-04-black.png",
        iconHover: "/images/blockchain-04.png",
        title: "Endless Pilots, Zero Production",
        desc: "Three POCs. Zero in production. The gap between demo and deployment is where AI investments die.",
    },
    {
        iconDefault: "/images/ai-lock-black.png",
        iconHover: "/images/ai-lock.png",
        title: "Knowledge Locked in Silos",
        desc: "It lives in Confluence, SharePoint, legacy docs, and people’s heads. No one can access it when it matters.",
    },
    {
        iconDefault: "/images/user-ai-black.png",
        iconHover: "/images/user-ai.png",
        title: "Manual efforts made where automation should exist",
        desc: "Data extraction. Report generation. Query routing. Your best people doing tasks AI should handle.",
    },
    {
        iconDefault: "/images/security-block-black.png",
        iconHover: "/images/security-block.png",
        title: "No Guardrails",
        desc: "AI drafts a client document. It goes out unchecked. No governance means no control.",
    },
    {
        iconDefault: "/images/artificial-intelligence-08-black.png",
        iconHover: "/images/artificial-intelligence-08.png",
        title: "Generic AI Doesn't Know Your Business",
        desc: "Off-the-shelf tools give off-the-shelf answers. They don’t know your business. Ours does.",
    },
];

const services = [
    {
        id: 1,
        icon: "/images/service1.png",
        title: "Gen AI Knowledge Engines",
        description:
            "As part of our AI Implementation services, we design and deploy Gen AI Knowledge Engines that unify fragmented data across ERP Systems, CRMs, documents and internal applications into a single knowledge layer.",
        bullets: [
            "Intelligent document detection and complexity analysis",
            "AI-driven insights delivered at critical decision moments",
            "Context-aware answers generated in seconds",
            "Continuous learning from enterprise usage patterns",
        ],
    },
    {
        id: 2,
        icon: "/images/service2.png",
        title: "AI Agents & Copilots",
        description:
            "Our AI agents and copilots are not standalone assistants they are in fact deeply integrated and context-aware and aligned with your business. Enterprise grade automation agents that augment every function.",
        bullets: [
            "MR Persona copilots for personalized, role-specific support",
            "Idea Management Intelligence to drive and scale innovation",
            "KMS chatbots for instant, seamless knowledge access",
            "Enterprise GPT embedded directly into your workflows",
        ],
    },
    {
        id: 3,
        icon: "/images/service3.png",
        title: "Strategic AI Governance",
        description:
            "Unmanaged AI adoption always poses a risk. For regulated enterprise, we at Mashira, design secure and complaint frameworks without compromising controls.",
        bullets: [
            "Built-in governance integrated into your AI architecture",
            "Role-based audit controls ensuring accountability and traceability",
            "Comprehensive data lineage with GDPR & SOC2 compliance frameworks",
            "Real-time risk visibility through intelligent monitoring dashboards",
        ],
    },
];

export default function WhatWeDoPage() {

    const logos = [
        { name: "Boltshift", icon: "/images/boltshift.png" },
        { name: "Lightbox", icon: "/images/lightbox.png" },
        { name: "FeatherDev", icon: "/images/featherDev.png" },
        { name: "GlobalBank", icon: "/images/globalbank.png" },
        { name: "Boltshift", icon: "/images/boltshift.png" },
        { name: "Lightbox", icon: "/images/lightbox.png" },
        { name: "FeatherDev", icon: "/images/featherDev.png" },
        { name: "GlobalBank", icon: "/images/globalbank.png" },
    ];

    return (
        <>
            <Navbar />
            <section className={styles.hero}>
                <div className={styles.container}>
                    {/* Left Content */}
                    <div className={styles.left}>
                        <h1 className={styles.title}>
                            Enterprise AI <br />
                            Implementation <span>Solutions</span>
                        </h1>

                        <button className={styles.button}>
                            Get Started
                            <span className={styles.arrow}>→</span>
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className={styles.right}>
                        <p>
                            From Gen AI Knowledge Engines to enterprise-grade AI Agents,
                            Mashira designs and deploys systems that go live, get used, and
                            deliver outcomes you can measure.
                        </p>
                    </div>
                </div>
            </section>

            <section className="partners-section">
                <div className="left-partners-section">
                    <h1>Trusted by</h1>
                    <div className="marquee">
                        <div className="marquee-content">
                            {logos.concat(logos).map((logo, index) => (
                                <div key={index} className="logo-item">
                                    <Image
                                        src={logo.icon}
                                        alt={logo.name}
                                        width={24}
                                        height={24}
                                    />
                                    <span>{logo.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right-partners-section">
                    <div className="stat-box">
                        <h2>8wks</h2>
                        <p>Average Deployment Time</p>
                    </div>

                    <div className="stat-box">
                        <h2>4x</h2>
                        <p>Productivity Gains Across Clients Teams</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.challengeContainer}>
                    {/* Heading */}
                    <div className={styles.header}>
                        <p className={styles.subheading}> <span style={{ color: "red" }}>/</span> THE CHALLENGES</p>
                        <h2 className={styles.heading}>
                            Enterprise data remains{" "}
                            <span>Siloed, Inaccessible,</span>
                            <br />
                            and <span>Underutilized</span>
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className={styles.grid}>
                        {cards.map((card, i) => {
                            return (
                                <div key={i} className={styles.card}>
                                    <div className={styles.overlay}></div>

                                    <div className={styles.content}>
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                src={card.iconDefault}
                                                alt="icon"
                                                width={60}
                                                height={60}
                                                className={styles.iconDefault}
                                            />

                                            <Image
                                                src={card.iconHover}
                                                alt="icon"
                                                width={60}
                                                height={60}
                                                className={styles.iconHover}
                                            />
                                        </div>

                                        <h3 className={styles.challengetitle}>{card.title}</h3>
                                        <p className={styles.desc}>{card.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.approachContainer}>
                <div className={styles.containers}>
                    {/* LEFT */}
                    <div className={styles.appleft}>
                        <span className={styles.badge}>
                            <span style={{ color: "red" }}>/</span>&nbsp;
                            WHAT MAKES OUR APPROACH DIFFERENT ?
                        </span>

                        <h1>
                            For us, AI is not a feature but an enterprise wide{" "}
                            <span className={styles.italic}>Capability</span>
                        </h1>

                        <p>
                            We embed the AI ecosystem into your enterprise. Not a tool, not a
                            bolt-on — a layer of intelligence that runs through how your
                            organisation thinks and operates.
                        </p>

                        <h3>
                            Stop <span className={styles.italic}>Piloting</span>. Start{" "}
                            <span className={styles.italic}>Shipping</span>.
                        </h3>
                    </div>

                    {/* RIGHT */}
                    <div className={styles.appright}>
                        <h4>WE BELIEVE ENTERPRISE AI MUST BE</h4>

                        <div className={styles.item}>
                            <div className={styles.appicon}>
                                <Image
                                    src={contextual}
                                    alt="contextual"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div>
                                <h5>Contextual</h5>
                                <p>Trained on your data. Aware of your business logic.</p>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.appicon}>
                                <Image
                                    src={governed}
                                    alt="contextual"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div>
                                <h5>Governed</h5>
                                <p>Role-based controls, audit trails, full traceability.</p>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.appicon}>
                                <Image
                                    src={scalable}
                                    alt="contextual"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div>
                                <h5>Scalable</h5>
                                <p>Built to grow across functions, not just one team.</p>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.appicon}>
                                <Image
                                    src={outcomes}
                                    alt="contextual"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div>
                                <h5>Tied to Outcomes</h5>
                                <p>
                                    Every deployment connects to a measurable business result.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.serviceSection}>
                <div className={styles.serviceContainer}>
                    <h2 className={styles.serviceHeading}>
                        Our AI Implementation <em className={styles.headingItalic}>Services</em>
                    </h2>

                    <div className={styles.connectorWrapper}>
                        <div className={styles.connectorDot} />
                        <div className={styles.connectorVertical} />
                        <div className={styles.connectorHorizontal} />
                        <div className={styles.connectorBranchLeft} />
                        <div className={styles.connectorBranchCenter} />
                        <div className={styles.connectorBranchRight} />
                    </div>

                    <div className={styles.servicegrid}>
                        {services.map((service) => (
                            <div key={service.id} className={styles.serviceCard}>
                                {/* <div className={styles.serviceIconWrapper}>{service.icon}</div> */}
                                <Image className={styles.serviceIconWrapper} src={service.icon} alt={service.title} width={80} height={80} />
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <ul className={styles.bulletList}>
                                    {service.bullets.map((bullet, index) => (
                                        <li key={index} className={styles.bulletItem}>
                                            <span className={styles.bulletSquare} />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}