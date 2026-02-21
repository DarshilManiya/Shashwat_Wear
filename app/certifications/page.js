'use client';

import { motion } from 'framer-motion';
import { FaAward, FaLeaf, FaCheckCircle, FaHandshake, FaBalanceScale } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopBar from '../../components/TopBar';
import AnimatedSection from '../../components/AnimatedSection';
import styles from './page.module.css';

const certDetails = [
    {
        id: 'iso',
        name: "ISO 9001:2015",
        icon: <FaAward />,
        description: "The international standard for a quality management system (QMS).",
        details: "This certification proves our commitment to consistently providing products and services that meet customer and regulatory requirements. We implement rigorous internal audits, track manufacturing defects meticulously, and continuously improve our processes to ensure defect-free apparel production.",
        benefits: ["Consistent high quality", "Rigorous defect tracking", "Continuous process improvement"],
        color: "#1a73e8",
        bg: "rgba(26, 115, 232, 0.1)"
    },
    {
        id: 'gots',
        name: "GOTS",
        icon: <FaLeaf />,
        description: "Global Organic Textile Standard.",
        details: "GOTS is the worldwide leading textile processing standard for organic fibres, including ecological and social criteria, backed up by independent certification of the entire textile supply chain. Our organic cotton apparel is certified to contain a minimum of 70% organic fibres.",
        benefits: ["Certified organic fibres", "Non-toxic dyes", "Environmentally friendly processing"],
        color: "#2e7d32",
        bg: "rgba(46, 125, 50, 0.1)"
    },
    {
        id: 'oeko',
        name: "OEKO-TEX® Standard 100",
        icon: <FaCheckCircle />,
        description: "Confidence in Textiles.",
        details: "Every thread, button, and accessory in our OEKO-TEX certified garments has been tested for harmful substances. This guarantees that our apparel is completely safe for human health, providing peace of mind for you and your end consumers.",
        benefits: ["Free from harmful chemicals", "Safe for direct skin contact", "Global safety compliance"],
        color: "#e65100",
        bg: "rgba(230, 81, 0, 0.1)"
    },
    {
        id: 'sedex',
        name: "SEDEX",
        icon: <FaHandshake />,
        description: "Supplier Ethical Data Exchange.",
        details: "We are proud members of Sedex, operating responsibly and sustainably to protect our workers and source ethically. Our SMETA audits ensure our supply chain maintains high standards in labor rights, health & safety, the environment, and business ethics.",
        benefits: ["Ethical supply chain", "Fair labor practices", "Transparent business ethics"],
        color: "#7b1fa2",
        bg: "rgba(123, 31, 162, 0.1)"
    },
];

export default function Certifications() {
    return (
        <main>
            <TopBar />
            <Header activePage="certifications" />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroLabel}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        UNCOMPROMISING STANDARDS
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Global Manufacturing Certifications
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Our state-of-the-art facilities comply with the highest international standards for quality, sustainability, and ethical trade. Partnering with us means zero compromises on compliance.
                    </motion.p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.grid}>
                    {certDetails.map((cert, index) => (
                        <AnimatedSection key={cert.id} delay={index * 0.1}>
                            <div className={styles.card}>
                                <div className={styles.iconBox} style={{ color: cert.color, backgroundColor: cert.bg }}>
                                    {cert.icon}
                                </div>
                                <h2>{cert.name}</h2>
                                <p>{cert.description}</p>
                                <p>{cert.details}</p>
                                <div className={styles.benefits}>
                                    <h4>Client Benefits</h4>
                                    <ul>
                                        {cert.benefits.map((benefit, i) => (
                                            <li key={i}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
