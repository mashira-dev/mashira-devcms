"use client";
import Image from "next/image";
// import rightA from "../../../public/images/rightArrow.png"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rightArrow from "../../../public/images/rightBlackA.png"
import rightArrowHover from "../../../public/images/rightWhiteA.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
// import "swiper/css/navigation";
import bubbleChart from "../../../public/images/support-technology.png";
import Footer from "../(frontend)/footer"

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

const data = [
  {
    title: "Data to decisions with AI-based Digital Solutions",
    // description: "Create smarter workflows and generate faster growth",
    image: "/images/whyM1.1.png",
    icon: "/images/whyM1.png",
  },
  {
    title: "Create smarter workflows and generate faster growth",
    // description: "Automate processes and scale efficiently",
    image: "/images/whyM2.1.png",
    icon: "/images/whyM2.png",
  },
  {
    title: "From insight to execution – an outcome based partnership",
    // description: "We deliver measurable business results",
    image: "/images/whyM3.1.png",
    icon: "/images/whyM3.png",
  },
  {
    title: "Tailored to your precise needs",
    // description: "Custom solutions for every business",
    image: "/images/whyM4.1.png",
    icon: "/images/whyM4.png",
  },
];

const blogData = [
  {
    "id": 1,
    "title": "Project Online to AI-Enabled Portfolio Intelligence",
    "description": "With Microsoft Project Online retiring in September 2026, a leading digital financial and mobility enterprise used the transition as an opportunity to modernize.",
    "author": "Samuel Torres",
    "date": "March 27, 2026",
    "readTime": "5 mins",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    "id": 2,
    "title": "Centralized Daily Sales Dashboard using Azure and Power BI",
    "description": "Developed for a global pharmaceutical organization that operates across multiple regions and countries.",
    "author": "Samuel Torres",
    "date": "March 27, 2026",
    "readTime": "8 mins",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    "id": 3,
    "title": "Developing a Digital Healthcare Platform",
    "description": "A leading multi-location healthcare provider sought modernization opportunities to establish a real-time care delivery ecosystem.",
    "author": "Samuel Torres",
    "date": "March 27, 2026",
    "readTime": "5 mins",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
  },
  {
    "id": 4,
    "title": "AI Automation in Enterprise Workflow",
    "description": "How automation and machine learning are reshaping enterprise business operations.",
    "author": "Samuel Torres",
    "date": "March 27, 2026",
    "readTime": "6 mins",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  }
]

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. sed do eiusmod tempor incididunt ut labore.",
    name: "James Parker",
    role: "Operations Lead at TechEdge",
  },
  {
    id: 2,
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit.",
    name: "Sarah Mitchell",
    role: "CTO at NovaCorp",
  },
  {
    id: 3,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    name: "Daniel Reeves",
    role: "VP of Engineering at Streamline",
  },
];

export default function HomePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [currentValue, setCurrentValue] = useState(0);

  const redirect = (dir: any) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentValue((prev) =>
        dir === "next"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setAnimating(false);
    }, 300);
  };

  const { quote, name, role } = testimonials[currentValue];

  // const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
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

  useEffect(() => {
    if (!containerRef.current) return;

    const total = 4; // number of tabs

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${total * 100}%`, // scroll length
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1
          const index = Math.min(
            total - 1,
            Math.floor(progress * total)
          );
          setActiveIndex(index);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      {/* <section className="hero">
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
      </section> */}
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

      <section ref={containerRef} className="scroll-wrapper">
        <div className="left">
          <span className="scrolltag">/ WHY MASHIRA</span>

          <h1 className="scrollheading">
            An all-weather, <em>Stable</em> and <br />
            <em>Reliable Partner</em>
          </h1>

          <div className="accordion">
            {data.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${activeIndex === index ? "active" : ""
                  }`}
              >
                <div className="accordion-header">
                  {index === 0 && (
                    <img src={item.icon} className="iconimg" alt="icon" />
                  )}
                  <h3>{item.title}</h3>
                </div>

                {/* <div className="accordion-content">
                  <p>{item.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <div
            className="bg"
            style={{
              backgroundImage: `url(${data[activeIndex].image})`,
            }}
          />
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-header">
          <div>
            <span className="blog-tag">// INSIGHTS</span>
            <h2 className="blog-title">
              Latest from our <em>Blog</em>
            </h2>
          </div>

          <button className="view-all-btn">
            View all blogs
            <span>→</span>
          </button>
        </div>

        <div className="blog-slider-wrapper">
          <Swiper
            spaceBetween={20}
            slidesPerView={3.2}
            grabCursor={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
              },
              768: {
                slidesPerView: 2.2,
              },
              1200: {
                slidesPerView: 3.2,
              },
            }}
          >
            {blogData.map((blog) => (
              // <SwiperSlide key={blog.id}>
              //   <div className="blog-card">
              //     <div className="blog-image-wrapper">
              //       <img
              //         src={blog.image}
              //         alt={blog.title}
              //         className="blog-image"
              //       />
              //     </div>

              //     <div className="blog-content">
              //       <h3>{blog.title}</h3>
              //       <p>{blog.description}</p>

              //       <div className="blog-footer">
              //         <span>{blog.author}</span>
              //         <div className="blog-meta">
              //           <span>{blog.date}</span>
              //           <span>{blog.readTime}</span>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </SwiperSlide>
              <SwiperSlide key={blog.id}>
                <div className="blog-card">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />

                  <div className="blog-overlay">
                    <span className="blog-badge">Insights</span>

                    <div className="blog-overlay-content">
                      <h3>{blog.title}</h3>
                      <p>{blog.readTime}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-controls">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="slider-btn"
            >
              ←
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="slider-btn"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-overlay" />

        <div className="testimonials-header">
          <span className="testimonials-badge">/ TESTIMONIALS</span>
          <h2 className="testimonials-title">
            Real <span>Results</span> from Real <span>Clients</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {/* LEFT CARD */}
          <div className="testimonial-card">
            <div className="testimonial-inner-border" />

            <div className="testimonial-content">
              <div
                className={`testimonial-quote-wrapper ${animating
                  ? `slide-out-${direction}`
                  : `slide-in-${direction}`
                  }`}
              >
                <span className="quote-mark">“</span>

                <blockquote className="testimonial-quote">
                  {quote}
                </blockquote>
              </div>

              <div
                className={`testimonial-author ${animating
                  ? `slide-out-${direction}`
                  : `slide-in-${direction}`
                  }`}
              >
                <div className="author-line" />
                <p className="author-name">{name}</p>
                <p className="author-role">{role}</p>
              </div>
            </div>

            <div className="testimonial-blob top-glow" />
            <div className="testimonial-blob bottom-glow" />

            <div className="carousel-controls">
              <button
                className="carousel-btn"
                onClick={() => redirect("prev")}
                aria-label="Previous testimonial"
              >
                ←
              </button>

              <button
                className="carousel-btn"
                onClick={() => redirect("next")}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT CTA */}
          <div className="cta-card">
            <div className="cta-glow" />

            <Image
              src={bubbleChart}
              alt="bubbleChart"
              className="cta-icon"
            />

            <h3 className="cta-title">
              Ready to Transform Your Enterprise?
            </h3>

            <p className="cta-description">
              Empower your enterprise to adapt,
              innovate, and scale.
            </p>

            <button className="cta-button">
              <span>Contact Us</span>
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}