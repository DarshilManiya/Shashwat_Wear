'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

import styles from './FAQSection.module.css';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.item}>
            <div className={`${styles.question} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <h4>{question}</h4>
                <FaChevronDown className={styles.chevron} />
            </div>
            <motion.div
                className={styles.answer}
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div>
                    <p>{answer}</p>
                </div>
            </motion.div>
        </div>
    );
}

const faqs = [
    { q: 'What is the minimum order quantity (MOQ)?', a: 'Our standard MOQ is 500 pieces per style. For new clients, we offer flexibility with orders starting from 200 pieces.' },
    { q: 'What types of garments do you manufacture?', a: 'We specialize in cotton shirts, formal wear, corporate uniforms, casual wear, kids apparel, and private label garments for both domestic and international markets.' },
    { q: 'What is your production lead time?', a: 'Standard production lead time is 30-45 days from order confirmation. Rush orders can be accommodated with prior arrangement.' },
    { q: 'Do you offer private label and OEM manufacturing?', a: 'Yes, we provide complete private label and OEM manufacturing services including design, sampling, production, and packaging with your branding.' },
    { q: 'What quality certifications do you hold?', a: 'We hold ISO 9001:2015, GOTS (Global Organic Textile Standard), and OEKO-TEX Standard 100 certifications.' },
    { q: 'Do you export internationally?', a: 'Yes, we export to over 25 countries including USA, UK, Europe, and Middle East. We handle all export documentation and compliance.' },
];

export default function FAQSection() {
    return (
        <AnimatedSection className={`section ${styles.faq}`} id="faq">
            <div className="section-container">
                <div className="section-label">FAQ</div>
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="section-underline" />
                <div className={styles.list}>
                    {faqs.map((faq) => (
                        <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
