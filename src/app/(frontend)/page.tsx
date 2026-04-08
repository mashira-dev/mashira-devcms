"use client";
import Image from "next/image";
import rightA from "../../../public/images/rightArrow.png"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rightArrow from "../../../public/images/rightBlackA.png"
import rightArrowHover from "../../../public/images/rightWhiteA.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "/images/enterprise-complexity1.png",
    title: "Enterprise digital transformation",
    description:
      "As enterprises move away from legacy technologies and fragmented processes, Mashira focuses on helping businesses align new technologies with business outcomes. We bring forth digital solutions to practical problems that drive operational effectiveness and workplace modernization.",
  },
  {
    icon: "/images/enterprise-complexity2.png",
    title: "Automation and AI solutions",
    description:
      "Businesses are often already sitting on ample data, the gap is in intelligence. Automation and AI solutions enable businesses to work smarter, grow faster and scale operations intelligently.",
  },
  {
    icon: "/images/enterprise-complexity1.png",
    title: "Data & Analytics",
    description:
      "Turn raw data into actionable insight. Our analytics practice helps enterprises build modern data platforms, self-service BI layers, and real-time dashboards that empower every decision-maker.",
  },
  {
    icon: "/images/enterprise-complexity2.png",
    title: "Cloud Infrastructure",
    description:
      "From lift-and-shift migrations to cloud-native architectures, we design resilient, cost-efficient infrastructure on AWS, Azure, and GCP — so your teams ship faster and sleep better.",
  },
  {
    icon: "/images/enterprise-complexity1.png",
    title: "Cybersecurity & Compliance",
    description:
      "Security is not a feature — it's a foundation. We help enterprises identify vulnerabilities, implement zero-trust frameworks, and stay ahead of evolving compliance requirements.",
  },
];

const enterprises = [
  {
    title: "Finance and Accounting",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "/images/functionSol1.png",
  },
  {
    title: "Sales and Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "/images/functionSol2.png",
  },
  {
    title: "HR and Workforce",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "/images/functionSol3.png",
  },
  {
    title: "Operational Effectiveness Solution",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "/images/functionSol4.png",
  },
];


export default function HomePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return; // ✅ IMPORTANT FIX

    const getScrollAmount = () =>
      -(track.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tag">
            DIGITAL TRANSFORMATION. AI. DATA & INTELLIGENCE. CLOUD. MANAGEMENT
          </p>

          <h1>
            Enterprise amplification through <br />
            <span className="italic">Intelligent</span> Digital Solutions
          </h1>

          <p className="description">
            Mashira specializes in services for creating, curating, implementing
            and managing digital solutions across all enterprise functions.
            With presence across US, EU and Asia, Mashira is a stable and
            reliable partner to deliver precise digital goals.
          </p>

          <div className="actions">
            <button className="primary">
              <div className="text-wrapper">
                <span className="text">Get Started</span>
                <span className="text">Get Started</span>
              </div>
              <span className="btn__icon">
                <Image
                  src={rightA}
                  alt="arrow"
                  width="24"
                  height="24"
                />
              </span>
            </button>

            <button className="secondary">Explore Services</button>
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
            <h2>120+</h2>
            <p>Clients</p>
          </div>

          <div className="stat-box">
            <h2>120+</h2>
            <p>Success Stories</p>
          </div>

          <div className="stat-box">
            <h2>3+</h2>
            <p>Country Presence</p>
          </div>
        </div>
      </section>

      <section className="whatwedo" ref={sectionRef}>
        <div className="wwd-track" ref={trackRef}>
          <div className="wwd-left-panel">
            <div className="tag">/ WHAT WE DO</div>
            <h1>
              From enterprise <br />
              complexity to <br />
              <span className="italic">Intelligence</span> and <br />
              <span className="italic">Clarity</span>
            </h1>
            <button className="btn">
              {/* Explore all services */}
              <div className="text-wrapper">
                <span className="text">Explore all services </span>
                <span className="text">Explore all services </span>
              </div>
              <span className="arrow-box">
                <Image
                  src={rightArrowHover}
                  alt="rightArrow"
                />
              </span>
            </button>
          </div>
          {services.map((svc, i) => (
            <div key={i} className="card">
              <Image
                src={svc.icon}
                alt={svc.title}
                width={40}
                height={40}
                className="cardIcon"
              />

              <h3>{svc.title}</h3>
              <p>{svc.description}</p>

              <span
                className="card-arrow"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={hoveredIndex === i ? rightArrowHover : rightArrow}
                  alt="rightArrow"
                />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section">
        <div className="badge">
          / FUNCTION-FOCUSED SOLUTIONS
        </div>

        <h1 className="heading">
          Mashira enables enterprises to reimagine how they{" "}
          <span>Operate, Adapt, Innovate and Scale.</span>
        </h1>

        <div className="cards">
          {enterprises.map((item, index) => (
            <div key={index} className="enterprisecard">

              <div className="imageicon">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </div>
          ))}
        </div>
      </section>


    </>
  );
}