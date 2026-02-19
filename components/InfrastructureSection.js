'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

import styles from './InfrastructureSection.module.css';
import Tooltip from './Tooltip';

const getTooltipText = (tag) => {
    const tips = {
        'Laser Cutting': 'Precise automated cutting for consistent sizing.',
        'CAD Systems': 'Computer Aided Design for optimal fabric usage.',
        '60+ Machines': 'High-capacity production line.',
        'Export Grade': 'Meets international quality standards.',
        'Steam Press': 'Professional wrinkle-free finishing.',
        'Quality Check': 'Multi-stage defect inspection.'
    };
    return tips[tag] || 'Premium Industry Standard';
};

const infraCards = [
    { img: '/images/cutting-department.png', title: 'Cutting Department', desc: 'Computerized precision cutting systems ensure zero fabric wastage and perfect pattern alignment for every garment.', tags: ['Laser Cutting', 'CAD Systems'] },
    { img: '/images/stitching-lines.png', title: 'Stitching Lines', desc: '60+ Juki and Brother industrial machines operated by skilled artisans trained in export-grade finishing techniques.', tags: ['60+ Machines', 'Export Grade'] },
    { img: '/images/hero-bg.png', title: 'Finishing & Packaging', desc: 'Steam pressing, quality inspection stations, and export-compliant packaging for ready-to-ship garments.', tags: ['Steam Press', 'Quality Check'] },
];

export default function InfrastructureSection() {
    return (
        <AnimatedSection className={`section ${styles.infrastructure}`} id="infrastructure">
            <div className="section-container">
                <div className="section-label">OUR FACILITY</div>
                <h2 className="section-title">World-Class Infrastructure</h2>
                <div className="section-underline" />
                <div className="section-subtitle">State-of-the-art machinery and sustainable practices driving efficiency.</div>
                <div className={styles.grid}>
                    {infraCards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.cardImg}>
                                <Image src={card.img} alt={card.title} width={500} height={260} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                                <div className={styles.tags}>
                                    {card.tags.map(tag => (
                                        <Tooltip key={tag} text={getTooltipText(tag)}>
                                            <span className={styles.tag}>{tag}</span>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
