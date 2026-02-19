'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

import styles from './TestimonialsSection.module.css';

const testimonials = [
    { quote: 'Shashwat Wear has been our trusted manufacturing partner for over 5 years. Their quality and consistency is unmatched.', name: 'Rajesh Kumar', role: 'CEO, Harmon Shirts', location: 'Mumbai', initials: 'RK' },
    { quote: 'The attention to detail and on-time delivery makes Shashwat Wear stand out from other manufacturers we have worked with.', name: 'Priya Sharma', role: 'Founder, Vestro Formals', location: 'Delhi', initials: 'PS' },
    { quote: 'From sampling to bulk production, their process is seamless. Highly recommend for any apparel brand.', name: 'Amit Patel', role: 'Director, Blackstitch', location: 'Ahmedabad', initials: 'AP' },
];

export default function TestimonialsSection() {
    return (
        <AnimatedSection className={`section ${styles.testimonials}`}>
            <div className="section-container">
                <div className="section-label">TESTIMONIALS</div>
                <h2 className="section-title">What Our Partners Say</h2>
                <div className="section-underline" />
                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                            </div>
                            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.initials}</div>
                                <div className={styles.info}>
                                    <h4>{t.name}</h4>
                                    <div className={styles.location}>{t.location}</div>
                                    <div className={styles.role}>{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
