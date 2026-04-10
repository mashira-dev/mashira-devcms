import Navbar from "../navbar";
import styles from "./HeroSection.module.css";


export default function WhatWeDoPage() {
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
        </>
    );
}