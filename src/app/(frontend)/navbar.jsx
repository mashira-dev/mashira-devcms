"use client"
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import logo from "@/assets/images/mashiralogo.png"
import rightUp from "@/assets/images/solar_arrow-up-linear.png"
import { useState } from "react";

export default function FrontendLayout() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <Link href="/">
                <Image
                    src={logo}
                    className="logo"
                    alt="Logo"
                    width={120}
                />
            </Link>
            <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span />
                <span />
                <span />
            </div>

            <nav className={`right-nav ${menuOpen ? "show" : ""}`}>
                {/* <Link href="/">Home</Link> */}
                <Link href="/who-we-are">Who We Are</Link>
                <Link href="/what-we-do">What We Do</Link>
                <Link href="/resources">Resources</Link>
                {/* <Link href="/careers">Careers</Link> */}
                <Link href="/cantact">Contact Us</Link>
                {/* <Link href="/contact" className="cta">
                    <div style={{ alignContent: "center" }}> Lets Talk </div>
                    <Image
                        src={rightUp}
                        className="rightlogo"
                        alt="Logo"
                    />
                </Link> */}
            </nav>
        </header>
    );
}