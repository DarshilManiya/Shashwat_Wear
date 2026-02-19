'use client';

import { motion } from 'framer-motion';
import { HiOutlineScissors, HiOutlineColorSwatch, HiOutlineCube, HiOutlineCog, HiOutlineClipboardCheck, HiOutlineTruck } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';

import styles from './ProcessSection.module.css';

const processSteps = [
    { icon: <HiOutlineColorSwatch />, title: 'Design & Pattern', desc: 'CAD-based pattern making and sampling to ensure perfect fit.', num: '01' },
    { icon: <HiOutlineCube />, title: 'Fabric Sourcing', desc: 'Premium cottons and blends sourced directly from certified mills.', num: '02' },
    { icon: <HiOutlineScissors />, title: 'Precision Cutting', desc: 'Laser-guided cutting for accuracy and minimal fabric wastage.', num: '03' },
    { icon: <HiOutlineCog />, title: 'Expert Stitching', desc: 'Skilled artisans assembling garments with high-speed machinery.', num: '04' },
    { icon: <HiOutlineClipboardCheck />, title: 'Quality Control', desc: '100% inspection for stitching, measurements, and finishing.', num: '05' },
    { icon: <HiOutlineTruck />, title: 'Finishing & Pack', desc: 'Steam ironing, tagging, and export-ready packaging.', num: '06' },
];

export default function ProcessSection() {
    return (
        <AnimatedSection className={`section ${styles.process}`} id="process">
            <div className="section-container">
                <div className="section-label">HOW WE WORK</div>
                <h2 className="section-title">Our Manufacturing Process</h2>
                <div className="section-underline" />
                <div className="section-subtitle">A streamlined, transparent workflow designed for efficiency and quality consistency.</div>
                <div className={styles.grid}>
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <div className={styles.stepNumber}>{step.num}</div>
                            <div className={styles.iconBox}>{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
