"use client";

import Image from "next/image";
import styles from "./contact.module.css";
import Footer from "../footer";
import React, { useState } from "react";
import arrow from "../../../../public/images/rightCrossArrow.png"
import rightA from "../../../../public/images/rightarrowslide.png"
import address from "../../../../public/images/address.png"
import email from "../../../../public/images/email.png"
import { MapPin, Mail, Copy, ArrowRight } from 'lucide-react';


const areasOfInterest = [
    "Strategy and Transformation",
    "AI & Automation",
    "Cloud Migration",
    "Data & Analytics",
    "Enterprise Delivery",
    "Other",
];

const howWeHelp = [
    "Planning a digital transformation initiative?",
    "Evaluating AI or automation opportunities?",
    "Modernizing legacy systems or migrating to the cloud?",
    "Looking to align project execution with business strategy?",
    "Exploring data, analytics, or enterprise intelligence solutions?",
];


export default function Resources() {

    const [form, setForm] = useState({
        fullName: "",
        workEmail: "",
        phone: "",
        area: "Strategy and Transformation",
        company: "",
        challenge: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>

            <main className={styles.page}>
                <div className={styles.container}>
                    <section className={styles.left}>
                        <span className={styles.badge}><span style={{ color: "#FF3503" }}>/</span>&nbsp; CONTACT US</span>
                        <h1 className={styles.headline}>
                            Let&apos;s Build{" "}
                            <em className={styles.italic}>What&apos;s Next,</em>
                            <br />
                            Together.
                        </h1>

                        <p className={styles.subtext}>
                            Whether you&apos;re exploring digital transformation, scaling AI
                            initiatives, modernizing infrastructure, or optimizing enterprise
                            delivery, we&apos;re here to help you move forward with confidence.
                        </p>

                        <div className={styles.helpSection}>
                            <p className={styles.helpTitle}>How can we help?</p>
                            <ul className={styles.helpList}>
                                {howWeHelp.map((item, i) => (
                                    <li
                                        key={i}
                                        className={styles.helpItem}
                                        style={{ animationDelay: `${0.1 * i + 0.4}s` }}
                                    >
                                        <Image
                                            src={arrow}
                                            alt="icon"
                                            width={12}
                                            height={16}
                                            className={styles.iconDefault}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className={styles.right}>
                        <form className={styles.form} onSubmit={handleSubmit} noValidate>

                            <div className={styles.row}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="fullName">
                                        Full Name<span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        id="fullName" name="fullName" type="text"
                                        placeholder="Jane"
                                        value={form.fullName} onChange={handleChange}
                                        className={styles.input} autoComplete="name"
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="workEmail">
                                        Work Email<span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        id="workEmail" name="workEmail" type="email"
                                        placeholder="jane@company.com"
                                        value={form.workEmail} onChange={handleChange}
                                        className={styles.input} autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="phone">Phone</label>
                                    <input
                                        id="phone" name="phone" type="tel"
                                        placeholder="+91 xxxxx xx xxx"
                                        value={form.phone} onChange={handleChange}
                                        className={styles.input} autoComplete="tel"
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="area">Area of Interest</label>
                                    <div className={styles.selectWrapper}>
                                        <select
                                            id="area" name="area"
                                            value={form.area} onChange={handleChange}
                                            className={`${styles.input} ${styles.select}`}
                                        >
                                            {areasOfInterest.map((a) => (
                                                <option key={a} value={a}>{a}</option>
                                            ))}
                                        </select>
                                        <span className={styles.selectArrow}>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                <path d="M3 5.5L7.5 10L12 5.5" stroke="#aaa" strokeWidth="1.5"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Company */}
                            <div className={styles.fieldGroupFull}>
                                <label className={styles.label} htmlFor="company">Company / Organization</label>
                                <input
                                    id="company" name="company" type="text"
                                    placeholder="Acme Corp"
                                    value={form.company} onChange={handleChange}
                                    className={styles.input} autoComplete="organization"
                                />
                            </div>

                            {/* Challenge */}
                            <div className={styles.fieldGroupFull}>
                                <label className={styles.label} htmlFor="challenge">Your Challenge or Objective</label>
                                <textarea
                                    id="challenge" name="challenge" rows={5}
                                    placeholder="Tell us about your goals, challenges, and timeline..."
                                    value={form.challenge} onChange={handleChange}
                                    className={`${styles.input} ${styles.textarea}`}
                                />
                            </div>

                            <button className={styles.primary}>
                                <div className={styles.textwrapper}>
                                    <span className={styles.text}>Get Started</span>
                                    <span className={styles.text}>Get Started</span>
                                </div>
                                <span className={styles.btnicon}>
                                    <Image
                                        src={rightA}
                                        alt="arrow"
                                        width={18}
                                        height={18}
                                    />
                                </span>
                            </button>

                        </form>
                    </section>
                </div>
            </main>

            <main className={styles.context}>
                <section className={styles.wrapper}>
                    <div className={styles.grid}>
                        <div className={styles.colLeft}>
                            <div className={styles.tag}><span>/</span> WHAT TO SHARE WITH US:</div>

                            <h1 className={styles.heading}>
                                Give Us <em>Context.</em><br />
                                Get Better <em>Outcomes.</em>
                            </h1>

                            <ul className={styles.list}>
                                {[
                                    'A brief overview of your organization',
                                    'Your current challenge or objective',
                                    'Timeline and priorities (if known)',
                                    'Any relevant systems or platforms in use',
                                    'The more context you provide, the faster we can deliver meaningful insight.'
                                ].map((item) => (
                                    <li key={item}><span></span>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.colMiddle}>
                            <h3 className={styles.title}>
                                {/* <MapPin size={18} /> */}
                                <Image
                                    src={address}
                                    alt="address-icon"
                                    height={32}
                                    width={32}
                                />
                                Address</h3>
                            <div className={styles.addresses}>
                                <p><strong>USA</strong><br />Mashira Inc.</p>
                                <p><strong>Mumbai</strong><br />Mashira Computing Private Limited<br />211 & 212, The Summit Business Park,<br />Gundavali, Andheri (East),<br />Mumbai, Maharashtra – 400093</p>
                                <p><strong>Hyderabad</strong><br />Mashira Computing Private Limited<br />503, 5th Floor, Trend Works, Jyothi Granules,<br />No. 199, Kondapur,<br />Hyderabad, Telangana – 500084</p>
                            </div>
                        </div>

                        <div className={styles.colRight}>
                            <h3 className={styles.title}>
                                <Image
                                    src={email}
                                    alt="address-icon"
                                    height={32}
                                    width={32}
                                />
                                Email us</h3>

                            <div className={styles.emailBox}>
                                <span>contact@mashira.io</span>
                                <Copy size={18} />
                            </div>

                            <div className={styles.card}>
                                <p>Book a discovery session<br />with our experts</p>
                                <button>

                                    <div className={styles.textwrapper}>
                                        <span className={styles.text}>Book a Consultation</span>
                                        <span className={styles.text}>Book a Consultation</span>
                                    </div>
                                    <span className={styles.btnicon}>
                                        <Image
                                            src={rightA}
                                            alt="arrow"
                                            width={18}
                                            height={18}
                                        />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}