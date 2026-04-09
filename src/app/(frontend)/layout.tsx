import Link from "next/link";
import "./styles.css";
import Image from "next/image";
import rightA from "../../../public/images/rightArrow.png"
import logo from "@/assets/images/mashiralogo.png"
import rightUp from "@/assets/images/solar_arrow-up-linear.png"

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="app-bg">
          <header className="navbar">
            <Image
              src={logo}
              className="logo"
              alt="Logo"
              width={120}
            // height={40}
            />

            <nav className="right-nav">
              <Link href="/">Home</Link>
              <Link href="/who-we-are">Who We Are</Link>
              <Link href="/what-we-do">What We Do</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact" className="cta">
                <div style={{ alignContent: "center" }}> Lets Talk </div>
                <Image
                  src={rightUp}
                  className="rightlogo"
                  alt="Logo"
                />
              </Link>
            </nav>
          </header>
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
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}