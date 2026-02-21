'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGem, FaLeaf, FaClock, FaUsers } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopBar from '../../components/TopBar';
import AnimatedSection from '../../components/AnimatedSection';
import styles from './page.module.css';

const values = [
    { icon: <FaGem />, title: "Uncompromising Quality", desc: "We utilize premium fabrics, precision cutting, and rigorous inspections to ensure every stitch is perfect." },
    { icon: <FaLeaf />, title: "Sustainable Practices", desc: "Committed to eco-friendly production, minimal wastage, and ethically sourced organic materials." },
    { icon: <FaClock />, title: "Timely Delivery", desc: "A streamlined manufacturing pipeline guarantees your bulk orders arrive strictly on schedule." },
    { icon: <FaUsers />, title: "Client-Centric", desc: "Transparent communication, competitive pricing, and dedicated support for every manufacturing partner." },
];

const milestones = [
    { year: "2009", title: "Foundation", desc: "Shashwat Wear was established as a boutique apparel manufacturer in Ahmedabad, Gujarat." },
    { year: "2012", title: "Factory Expansion", desc: "Scaled production capacity to 100,000 units per month, integrating advanced CAD machinery." },
    { year: "2015", title: "Global Compliance", desc: "Achieved ISO 9001 and OEKO-TEX certifications, officially moving into international exports." },
    { year: "2019", title: "Sustainable Initiative", desc: "Launched our first 100% organic cotton manufacturing line, achieving GOTS certification." },
    { year: "2024", title: "Global Reach", desc: "Proudly exporting premium garments to over 25 countries across the US, Europe, and UAE." },
];

export default function About() {
    return (
        <main>
            <TopBar />
            <Header activePage="about" />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroLabel}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        OUR STORY
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Crafting Excellence Since 2009
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We are fundamentally a partner to brands worldwide. Our mission is to seamlessly bridge the gap between creative design and flawless, large-scale apparel manufacturing.
                    </motion.p>
                </div>
            </section>

            <section className={styles.storySection}>
                <div className={styles.storyContainer}>
                    <AnimatedSection>
                        <div className={styles.storyContent}>
                            <h2>A Legacy of Premium Manufacturing</h2>
                            <p>
                                What began as a small sewing workshop in Ahmedabad has grown into a state-of-the-art export facility. For over 15 years, Shashwat Wear has remained dedicated to the art and science of garment construction.
                            </p>
                            <p>
                                We don&apos;t just cut and sew fabric. We engineer apparel. Our deep understanding of global fashion trends, combined with strict adherence to international quality compliances, ensures that every piece of clothing leaving our factory represents the absolute best of Indian manufacturing.
                            </p>
                            <p>
                                Today, we are proud to be the silent machinery behind some of the world&apos;s most respected formal wear, corporate uniform, and private label brands.
                            </p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className={styles.storyImageWrapper}>
                            <Image
                                src="/images/manufacturing-hero.png"
                                alt="Shashwat Wear Factory Floor"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <AnimatedSection>
                    <div className={styles.valuesHeader}>
                        <h2>Our Core Values</h2>
                        <p style={{ color: "var(--text-muted)" }}>The principles that drive our factory floor every single day.</p>
                    </div>
                </AnimatedSection>
                <div className={styles.valuesGrid}>
                    {values.map((v, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className={styles.valueCard}>
                                <div className={styles.valueIcon}>{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <section className={styles.timelineSection}>
                <AnimatedSection>
                    <h2>Our Journey</h2>
                </AnimatedSection>
                <div className={styles.timelineGrid}>
                    {milestones.map((m, i) => (
                        <AnimatedSection key={i} delay={i * 0.15}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot} />
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineYear}>{m.year}</div>
                                    <h4>{m.title}</h4>
                                    <p>{m.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <section className={styles.leadershipSection}>
                <AnimatedSection>
                    <h2>Meet the Leadership</h2>
                    <p style={{ color: "var(--text-muted)" }}>The visionaries behind our manufacturing excellence.</p>
                </AnimatedSection>
                <div className={styles.leadershipGrid}>
                    <AnimatedSection delay={0.1}>
                        <div className={styles.leaderCard}>
                            <div className={styles.leaderImage}>
                                {/* Using placeholder style pattern for now */}
                                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #1f2937, #374151)' }}></div>
                            </div>
                            <h3>Aarav Patel</h3>
                            <div className={styles.leaderRole}>Managing Director</div>
                            <p>With 20 years of textile experience, Aarav leads the strategic vision and global relationships.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className={styles.leaderCard}>
                            <div className={styles.leaderImage}>
                                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #4b5563, #6b7280)' }}></div>
                            </div>
                            <h3>Neha Sharma</h3>
                            <div className={styles.leaderRole}>Head of Production</div>
                            <p>Neha oversees factory operations, ensuring every unit meets strict quality and timeline standards.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <div className={styles.leaderCard}>
                            <div className={styles.leaderImage}>
                                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #374151, #4b5563)' }}></div>
                            </div>
                            <h3>Vikram Singh</h3>
                            <div className={styles.leaderRole}>Compliance Officer</div>
                            <p>Vikram ensures our facilities adhere to all international ethical, safety, and environmental protocols.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
