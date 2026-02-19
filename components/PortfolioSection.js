'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

import styles from './PortfolioSection.module.css';

const partners = [
    { name: 'Harmon Shirts', logo: '/images/harmon-logo.png', logoClass: 'harmon', sub: 'PREMIUM FORMAL WEAR', link: 'https://www.harmonshirts.in/' },
    { name: 'Vestro', logo: '/images/vestro-logo.png', logoClass: 'vestro', sub: 'CASUAL & TRENDY APPAREL', link: 'https://www.vestro.in/' },
    { name: 'Blackstitch', logo: '/images/blackstitch-logo.png', logoClass: 'blackstitch', sub: 'URBAN FASHION BRAND', link: 'https://www.blackstitch.in/' },
];

export default function PortfolioSection() {
    return (
        <AnimatedSection className={`section ${styles.portfolio}`}>
            <div className="section-container">
                <div className="section-label">OUR PORTFOLIO</div>
                <h2 className="section-title">Trusted Manufacturing Partners</h2>
                <div className="section-underline" />
                <div className="section-subtitle">We proudly manufacture for some of India&apos;s fastest-growing fashion brands.</div>
                <div className={styles.grid}>
                    {partners.map((p, i) => (
                        <motion.div
                            key={p.name}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div className={`${styles.brandLogo} ${styles[p.logoClass]}`}>
                                <Image src={p.logo} alt={p.name} width={180} height={80} style={{ objectFit: 'contain' }} />
                            </div>
                            <h3>{p.name}</h3>
                            <div className={styles.sub}>{p.sub}</div>
                            <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>Visit Website →</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
