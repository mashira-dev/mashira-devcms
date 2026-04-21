"use client";

import Image from "next/image";
import styles from "./whatwedo.module.css";
import contextual from "../../../../public/images/contextual.png"
import governed from "../../../../public/images/governed.png"
import scalable from "../../../../public/images/scalable.png"
import outcomes from "../../../../public/images/outcomes.png"
import { useEffect, useRef, useState } from "react";
import Footer from "../footer";

const cards = [
    {
        iconDefault: "/images/chart-02.svg",
        iconHover: "/images/chart-02-ai.svg",
        title:
            "Digital Maturity Assessment",
        desc: "Assess the maturity of your organization in people, processes, and technology. Understand where you stand as an enterprise today and what would be required to continue growing.",
    },
    {
        iconDefault: "/images/artificial-intelligence-07.svg",
        iconHover: "/images/artificial-intelligence-07-ai.svg",
        title: "AI, Automation & Innovation Discovery",
        desc: "Identify impactful applications for AI, automation, and innovative business process design that are scoped specifically for your industry and organization and deliverable in 12 months or less.",
    },
    {
        iconDefault: "/images/chart-relationship.svg",
        iconHover: "/images/chart-relationship-ai.svg",
        title: "Change Readiness & Stakeholder Alignment",
        desc: "Conduct facilitated workshops to align your executive stakeholders on the strategy that will be developed so that the necessary funding and execution will take place.",
    },
    // {
    //     iconDefault: "/images/user-ai-black.png",
    //     iconHover: "/images/user-ai.png",
    //     title: "Manual efforts made where automation should exist",
    //     desc: "Data extraction. Report generation. Query routing. Your best people doing tasks AI should handle.",
    // },
    // {
    //     iconDefault: "/images/security-block-black.png",
    //     iconHover: "/images/security-block.png",
    //     title: "No Guardrails",
    //     desc: "AI drafts a client document. It goes out unchecked. No governance means no control.",
    // },
    // {
    //     iconDefault: "/images/artificial-intelligence-08-black.png",
    //     iconHover: "/images/artificial-intelligence-08.png",
    //     title: "Generic AI Doesn't Know Your Business",
    //     desc: "Off-the-shelf tools give off-the-shelf answers. They don’t know your business. Ours does.",
    // },
];

const topcards = [
    {
        iconDefault: "/images/route-01.svg",
        iconHover: "/images/route-01-ai.svg",
        title:
            "Technology Assessment & Road mapping",
        desc: "First, we look at what you already have and figure out where there are gaps, redundancies, and missed chances in your current technology landscape. Then, we make a prioritized roadmap that shows you how to spend your money.",
    },
    {
        iconDefault: "/images/dashboard-square-01.svg",
        iconHover: "/images/dashboard-square-01-ai.svg",
        title: "Microsoft Platform Strategy",
        desc: "Your Microsoft platform licenses likely aren't being maximized. We assist in maximizing your current investment - Azure, Power Platform, Microsoft 365, Dynamics 365, Copilot and more to plan out an effective roadmap for future growth.",
    }
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

const faqData = [
    {
        question: "Do you provide AI implementation services for tech businesses only?",
        answer:
            "No. In fact majority Our clients are We are industry agnostic and serve clients in diverse fields such as Pharmaceuticals, Healthcare, Legal, Media and Entertainment, Defence, EPC, in addition to clients in IT, BFSI, Manufacturing, et al.",
    },
    {
        question:
            "What differentiates the AI Implementation Solutions of Mashira from others?",
        answer:
            "We focus on scalable, real-world AI solutions tailored to business needs with strong integration capabilities.",
    },
    {
        question: "Can you integrate with our existing ERP and CRMs?",
        answer:
            "Yes, we seamlessly integrate with most ERP and CRM platforms using APIs and middleware solutions.",
    },
    {
        question: "How do you handle fragmented enterprise data?",
        answer:
            "We unify and structure data using pipelines, ensuring consistency and actionable insights.",
    },
    {
        question:
            "Who are your AI Implementation services best suited for?",
        answer:
            "Our services are ideal for enterprises looking to leverage AI for efficiency, automation, and growth.",
    },
];

const steps = [
    {
        id: "01",
        // title: "Enterprise AI-readiness & Risk Assessment",
        image: "/images/01.png",
        description:
            "Enterprise AI-readiness & Risk Assessment - Our team finds the right use cases. Check infrastructure and governance gaps.",
    },
    {
        id: "02",
        // title: "Knowledge Architecture & Design",
        image: "/images/02.png",
        description:
            "Knowledge Architecture & Design - Includes Data Estate Mapping, Knowledge Graph Construction, ERP/CRM Integrations. Create a unified intelligence layer.",
    },
    {
        id: "03",
        // title: "AI Model & Agent Deployment with Orchestration",
        image: "/images/03.png",
        description:
            "AI Model & Agent Deployment with Orchestration - Gen AI Model integrations and fine-tuning, domain specific AI Agent design, Copilot deployment by function, multi-system workflow.",
    },
    {
        id: "04",
        // title: "Governance and Transparency",
        image: "/images/04.png",
        description:
            "Governance and Transparency - Implement Role based access controls, audit logging and data lineage tracking, ethical AI policies, provide encryption and data sovereignty controls.",
    },
    {
        id: "05",
        // title: "Continuous learning and scaling",
        image: "/images/05.png",
        description:
            "Continuous learning and scaling - Performance monitoring dashboards. Close feedback loops. Grow AI across the enterprise.",
    },
];

const technologies = [
    {
        name: "Microsoft Azure",
        image: "/images/azure.svg",
        color: "#ECF8FD",
        border: "#32ADE9",
    },
    {
        name: "Microsoft 365",
        image: "/images/microsoft365.svg",
        color: "#F5EDFD",
        border: "#9E73CB",
    },
    {
        name: "Power Apps",
        image: "/images/powerapps.svg",
        color: "#F4ECF1",
        border: "#8F2D87",
    },
    {
        name: "Power Automate",
        image: "/images/powerAutomate.svg",
        color: "#E0EEFF",
        border: "#0F43B6",
    },
    {
        name: "Power BI",
        image: "/images/PowerBi.svg",
        color: "#FEFAE9",
        border: "#D6950D",
    },
    {
        name: "Microsoft Copilot",
        image: "/images/copilot-icon.svg",
        color: "#FFF5F4",
        border: "#F3553D",
    },
    {
        name: "Dynamics 365",
        image: "/images/group.svg",
        color: "#E9ECF3",
        border: "#3753BF",
    },
    {
        name: "Microsoft Fabric",
        image: "/images/image16.svg",
        color: "#EDFEF8",
        border: "#299580",
    },
];

const items = [
    {
        title: 'Certified Microsoft Solutions Partner with cross-platform expertise',
        icon: '/images/star-award-01.svg',
    },
    {
        title: 'Industry experience across manufacturing, services, government, and healthcare',
        icon: '/images/briefcase-04.svg',
    },
    {
        title: 'We are hands-on practitioners and not just consultants',
        icon: '/images/user-check-01.svg',
    },
    {
        title: 'Strategy that leads directly into implementation',
        icon: '/images/ai-innovation-03.svg',
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

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = (index: number) => {
        const currentEl = contentRefs.current[index];

        if (!currentEl) return;

        if (activeIndex === index) {
            // CLOSE (like slideUp)
            currentEl.style.height = currentEl.scrollHeight + "px";

            requestAnimationFrame(() => {
                currentEl.style.height = "0px";
            });

            setActiveIndex(null);
        } else {
            // CLOSE previous
            if (activeIndex !== null) {
                const prevEl = contentRefs.current[activeIndex];
                if (prevEl) {
                    prevEl.style.height = prevEl.scrollHeight + "px";
                    requestAnimationFrame(() => {
                        prevEl.style.height = "0px";
                    });
                }
            }

            // OPEN (like slideDown)
            currentEl.style.height = currentEl.scrollHeight + "px";

            setActiveIndex(index);
        }
    };

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);
    const [startOffset, setStartOffset] = useState(0);
    const [lineStart, setLineStart] = useState(0);
    const [lineEnd, setLineEnd] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = () => {
            const windowH = window.innerHeight;

            const firstCard = cardRefs.current[0];
            const lastCard = cardRefs.current[cardRefs.current.length - 1];

            if (!firstCard || !lastCard || !lineRef.current) return;

            const firstRect = firstCard.getBoundingClientRect();
            const lastRect = lastCard.getBoundingClientRect();

            // 👉 center positions
            const startY = firstRect.top + firstRect.height / 2;
            const endY = lastRect.top + lastRect.height / 2;

            const totalDistance = endY - startY;

            const containerRect = lineRef.current.getBoundingClientRect();

            // start (first card center)
            const startOffset = startY - containerRect.top;

            // end (last card center)
            const endOffset = endY - containerRect.top;

            setStartOffset(startOffset);
            setLineStart(startOffset);
            setLineEnd(endOffset);

            // scroll progress (starts only when first card hits center)
            const progress = Math.min(
                1,
                Math.max(0, (windowH * 0.5 - startY) / totalDistance)
            );

            // set line height
            setLineHeight(progress * totalDistance);

            // active card detection
            let newActive = 0;

            cardRefs.current.forEach((card, i) => {
                if (!card) return;

                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;

                // 👉 activate ONLY when red line crosses card center
                if (windowH * 0.5 >= cardCenter) {
                    newActive = i;
                }
            });

            setCurrentIndex(newActive);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
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

            <section className={styles.partnersSection}>
                <div className={styles.leftPartnersSection}>
                    <h1>Trusted by</h1>
                    <div className={styles.marquee}>
                        <div className={styles.marqueeContent}>
                            {logos.concat(logos).map((logo, index) => (
                                <div key={index} className={styles.logoItem}>
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
                {/* <div className={styles.rightPartnersSection}>
                    <div className={styles.statBox}>
                        <h2>8wks</h2>
                        <p>Average Deployment Time</p>
                    </div>

                    <div className={styles.statBox}>
                        <h2>4x</h2>
                        <p>Productivity Gains Across Clients Teams</p>
                    </div>
                </div> */}
            </section>

            <section className={styles.section}>
                <div className={styles.challengeContainer}>
                    {/* Heading */}
                    <div className={styles.header}>
                        <p className={styles.subheading}> <span style={{ color: "red" }}>/</span> Our offerings</p>
                        <h2 className={styles.heading}>
                            Digital transformation plans that link <br /> technology to{" "}
                            <span>Business Results.</span>
                        </h2>
                    </div>

                    <div className={styles.topgrid}>
                        {topcards.map((card, i) => {
                            return (
                                <div key={i} className={styles.topcard}>
                                    <div className={styles.topoverlay}></div>
                                    <div className={styles.topcontent}>
                                        {/* <div className={styles.topiconWrapper}> */}
                                        <Image
                                            src={card.iconDefault}
                                            alt="icon"
                                            width={80}
                                            height={80}
                                            className={styles.topiconDefault}
                                        />

                                        <Image
                                            src={card.iconHover}
                                            alt="icon"
                                            width={80}
                                            height={80}
                                            className={styles.topiconHover}
                                        />
                                        {/* </div> */}

                                        <h3 className={styles.topchallengetitle}>{card.title}</h3>
                                        <p className={styles.topdesc}>{card.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Grid */}
                    <div className={styles.grid}>
                        {cards.map((card, i) => {
                            return (
                                <div key={i} className={styles.card}>
                                    <div className={styles.overlay}></div>
                                    <div className={styles.content}>
                                        {/* <div className={styles.iconWrapper}> */}
                                        <Image
                                            src={card.iconDefault}
                                            alt="icon"
                                            width={80}
                                            height={80}
                                            className={styles.iconDefault}
                                        />

                                        <Image
                                            src={card.iconHover}
                                            alt="icon"
                                            width={80}
                                            height={80}
                                            className={styles.iconHover}
                                        />
                                        {/* </div> */}

                                        <h3 className={styles.challengetitle}>{card.title}</h3>
                                        <p className={styles.desc}>{card.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <main className={styles.techwrapper}>
                <div className={styles.techheading}>
                    <span>/</span> MICROSOFT TECHNOLOGIES LEVERAGED
                </div>

                <div className={styles.techgrid}>
                    {technologies.map((item, index) => (
                        <div
                            key={index}
                            className={styles.techcard}
                            style={{
                                "--hover-bg": item.color,
                                "--hover-border": item.border,
                            } as React.CSSProperties
                            }
                        >
                            <div className={styles.imageWrap}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className={styles.socialicon}
                                />
                            </div>

                            <p className={styles.techlabel}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </main>

            {/* <section className={styles.approachContainer}>
                <div className={styles.containers}>
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
            </section> */}

            {/* <section className={styles.serviceSection}>
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
            </section> */}

            <section ref={sectionRef} className={styles.processSection}>
                <div className={styles.processContainer}>
                    <div className={styles.processLeft}>
                        <span className={styles.processBadge}><span style={{ color: "red" }}>/</span> PROCESS</span>
                        <h2 className={styles.processHeading}>
                            How it <em>Works</em>
                        </h2>
                        <p className={styles.subtext}>
                            Here is our unified 5-stage AI implementation framework~
                        </p>
                    </div>

                    <div className={styles.processRight}>
                        <div ref={lineRef}
                            className={styles.track}
                            style={{
                                "--line-start": `${lineStart}px`,
                                "--line-end": `${lineEnd}px`,
                            } as React.CSSProperties}>
                            <div
                                className={styles.trackFill}
                                style={{
                                    height: `${lineHeight}px`,
                                    top: `${startOffset}px`, // 👈 ADD THIS
                                }}
                            />
                        </div>
                        <div className={styles.cards}>
                            {steps.map((step, i) => (
                                <div key={step.id} className={styles.cardRow}>

                                    <div
                                        className={`${styles.dot} ${i <= currentIndex ? styles.dotActive : ""}`}
                                    />

                                    <div
                                        ref={(el) => {
                                            cardRefs.current[i] = el;
                                        }}
                                        className={`${styles.processCard} ${i <= currentIndex ? styles.cardActive : ""
                                            }`}
                                    >
                                        <div className={styles.cardInner}>
                                            <p className={styles.cardDesc}>{step.description}</p>
                                        </div>

                                        <span className={styles.cardNumber}>
                                            {/* {step.id} */}

                                            <Image
                                                src={step.image}
                                                alt={`step-${step.id}`}
                                                width={50}
                                                height={50}
                                                className={styles.stepImage}
                                            />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.caseStudy}>
                <div className={styles.caseOverlay} />

                <div className={styles.caseContent}>
                    <span className={styles.caseBadge}><span style={{ color: "red" }}>/</span> CASE STUDY</span>

                    <h1 className={styles.caseTitle}>
                        See how we implemented <br />
                        Enterprise AI for
                    </h1>
                </div>

                <div className={styles.action}>
                    <button className={styles.readMore}>
                        Read more
                        <span className={styles.arrow}>→</span>
                    </button>
                </div>
            </section>

            <section className={styles.wrapper}>
                <div className={styles.DoOverlay} />

                <div className={styles.DoContainer}>
                    <div className={styles.DoBadge}> <span style={{ color: "red" }}>/</span> WHO THIS IS FOR</div>

                    <h1 className={styles.DoHeading}>
                        See if this is the right fit for your <span>team</span>
                    </h1>

                    <div className={styles.DoGrid}>
                        {/* LEFT DoCard */}
                        <div className={styles.DoCard}>
                            <h3>This is for you if ...</h3>
                            <ul>
                                <li>Need AI embedded in real decisions</li>
                                <li>Operate in a regulated industry.</li>
                                <li>
                                    Want to scale across finance, HR, ops, or customer service.
                                </li>
                                <li>Are done experimenting and ready to build.</li>
                            </ul>
                            <div className={`${styles.testimonialblob} ${styles.bottomglow}`} />
                        </div>


                        {/* RIGHT SIDE */}
                        <div className={styles.notForYou}>
                            <h3>This is not for you if ...</h3>
                            <ul>
                                <li>
                                    You’re only looking for a basic chatbot or a plug-and-play GPT
                                    wrapper.
                                </li>
                                <li>
                                    You don’t require governance, compliance, or audit trails in your
                                    AI systems.
                                </li>
                                <li>
                                    You’re experimenting casually with AI tools without a structured
                                    implementation roadmap
                                </li>
                                <li>
                                    You don’t need cross-system workflow orchestration or enterprise
                                    knowledge integration.
                                </li>
                                <li>
                                    You see AI as a side initiative rather than enterprise
                                    infrastructure.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.mashiraSection}>
                <span className={styles.mashiraBadge}><span style={{ color: "#FF3503" }}>/</span> WHY MASHIRA</span>
                <h2 className={styles.mashiraHeading}>
                    Why Clients Choose Us, and <em>Stay</em>
                </h2>

                <div className={styles.mashiraGrid}>
                    <div className={`${styles.mashiraCard} ${styles.mashiraReveal}`}>
                        <div className={styles.mashiraIcon}>
                            <Image
                                src={items[0].icon}
                                alt="Image"
                                width={80}
                                height={80} />
                        </div>
                        <p>{items[0].title}</p>
                    </div>

                    <div className={styles.centerBox}>
                        <h3>mashira</h3>
                    </div>

                    <div className={`${styles.mashiraCard} ${styles.mashiraReveal}`}>
                        <div className={styles.mashiraIcon}>
                            <Image
                                src={items[1].icon}
                                alt="Image"
                                width={80}
                                height={80} />
                        </div>
                        <p>{items[1].title}</p>
                    </div>

                    <div className={`${styles.mashiraCard} ${styles.mashiraReveal}`}>
                        <div className={styles.mashiraIcon}>
                            <Image
                                src={items[2].icon}
                                alt="Image"
                                width={80}
                                height={80} />
                        </div>
                        <p>{items[2].title}</p>
                    </div>

                    <div className={`${styles.mashiraCard} ${styles.mashiraReveal}`}>
                        <div className={styles.mashiraIcon}>
                            <Image
                                src={items[3].icon}
                                alt="Image"
                                width={80}
                                height={80} />
                        </div>
                        <p>{items[3].title}</p>
                    </div>
                </div>
            </section>

            {/* <section className={styles.faqContainer}>
                <div className={styles.faqHeader}>
                    <span className={styles.faqBadge}>/ FAQ</span>
                    <h2 className={styles.faqTitle}>
                        Your questions, <span>answered</span>
                    </h2>
                </div>

                <div className={styles.accordion}>
                    {faqData.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${isActive ? styles.active : ""
                                    }`}
                            >
                                <div
                                    className={styles.question}
                                    onClick={() => toggle(index)}
                                >
                                    <p>{item.question}</p>
                                    <img
                                        src={
                                            isActive
                                                ? "/images/uparrow.png"
                                                : "/images/downarrow.png"
                                        }
                                        alt="arrow"
                                        className={styles.faqIcon}
                                    />
                                </div>

                                <div
                                    ref={(el) => {
                                        contentRefs.current[index] = el;
                                    }}
                                    className={styles.answerWrapper}
                                    style={{
                                        height: isActive
                                            ? contentRefs.current[index]?.scrollHeight + "px"
                                            : "0px",
                                    }}
                                >
                                    <div className={styles.answer}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section> */}

            <section className={styles.faqContainer}>
                <div className={styles.faqHeader}>
                    <span className={styles.faqBadge}>/ FAQ</span>
                    <h2 className={styles.faqTitle}>
                        Your questions, <span>answered</span>
                    </h2>
                </div>

                <div className={styles.accordion}>
                    {faqData.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${isActive ? styles.active : ""
                                    }`}
                            >
                                <div
                                    className={styles.question}
                                    onClick={() => toggle(index)}
                                >
                                    <p>{item.question}</p>

                                    <img
                                        src={
                                            isActive
                                                ? "/images/uparrow.png"
                                                : "/images/downarrow.png"
                                        }
                                        alt="arrow"
                                        className={styles.faqIcon}
                                    />
                                </div>

                                <div
                                    ref={(el) => {
                                        contentRefs.current[index] = el;
                                    }}
                                    className={styles.answerWrapper}
                                    style={{ height: "0px" }}
                                >
                                    <div className={styles.answer}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
}