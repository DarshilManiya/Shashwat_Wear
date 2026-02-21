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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, /* Slightly slower stagger */
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 }, /* Less initial displacement */
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 45, /* Much softer spring */
            damping: 18
        }
    }
};

export default function ProcessSection() {
    return (
        <AnimatedSection className={`section ${styles.process}`} id="process">
            <div className="section-container">
                <div className="section-label">HOW WE WORK</div>
                <h2 className="section-title">Our Manufacturing Process</h2>
                <div className="section-underline" />
                <div className="section-subtitle">A streamlined, transparent workflow designed for efficiency and quality consistency.</div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {processSteps.map((step) => (
                        <motion.div key={step.title} className={styles.card} variants={itemVariants}>
                            <div className={styles.stepNumber}>{step.num}</div>
                            <div className={styles.iconBox}>{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
}
