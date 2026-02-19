'use client';

import { motion } from 'framer-motion';
import { FaAward, FaLeaf, FaCheckCircle, FaHandshake, FaBalanceScale } from 'react-icons/fa';
import styles from './CertificationsSection.module.css';

const certifications = [
    { name: "ISO 9001", icon: <FaAward />, description: "Quality Management", color: "#1a73e8" },
    { name: "GOTS", icon: <FaLeaf />, description: "Organic Standard", color: "#2e7d32" },
    { name: "OEKO-TEX", icon: <FaCheckCircle />, description: "Safety & Chemical Free", color: "#e65100" },
    { name: "SEDEX", icon: <FaHandshake />, description: "Ethical Trade", color: "#7b1fa2" },
    { name: "BSCI", icon: <FaBalanceScale />, description: "Social Compliance", color: "#f9a825" },
    // Duplicate for seamless marquee
    { name: "ISO 9001", icon: <FaAward />, description: "Quality Management", color: "#1a73e8" },
    { name: "GOTS", icon: <FaLeaf />, description: "Organic Standard", color: "#2e7d32" },
    { name: "OEKO-TEX", icon: <FaCheckCircle />, description: "Safety & Chemical Free", color: "#e65100" },
    { name: "SEDEX", icon: <FaHandshake />, description: "Ethical Trade", color: "#7b1fa2" },
    { name: "BSCI", icon: <FaBalanceScale />, description: "Social Compliance", color: "#f9a825" },
];

export default function CertificationsSection() {
    return (
        <div className={styles.certifications}>
            <div className={styles.container}>
                <h3 className={styles.label}>Certified for Global Excellence</h3>

                <div className={styles.marqueeWrapper}>
                    <motion.div
                        className={styles.marquee}
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {certifications.map((cert, index) => (
                            <div key={index} className={styles.card} style={{ '--accent-color': cert.color }}>
                                <div className={styles.icon} style={{ color: cert.color }}>
                                    {cert.icon}
                                </div>
                                <div className={styles.info}>
                                    <h4 className={styles.name}>{cert.name}</h4>
                                    <p className={styles.description}>{cert.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
