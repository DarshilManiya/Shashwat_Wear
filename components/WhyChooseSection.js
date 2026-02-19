'use client';

import { MdDiversity3, MdLocalShipping, MdEco, MdWorkspacePremium } from 'react-icons/md';
import AnimatedSection from './AnimatedSection';

import styles from './WhyChooseSection.module.css';

const whyChooseItems = [
    { icon: <MdDiversity3 />, title: 'Diverse Product Range', desc: 'From formal shirts to corporate uniforms, we manufacture it all.' },
    { icon: <MdLocalShipping />, title: 'Timely Delivery', desc: 'Strict adherence to production schedules ensuring on-time dispatch.' },
    { icon: <MdEco />, title: 'Eco-Friendly Practices', desc: 'Sustainable manufacturing processes with minimal waste.' },
    { icon: <MdWorkspacePremium />, title: 'Trusted Experience', desc: 'Over 15 years of expertise in garment manufacturing.' },
];

export default function WhyChooseSection() {
    return (
        <AnimatedSection className={`section ${styles.whyChoose}`} id="about">
            <div className="section-container">
                <div className={styles.layout}>
                    <div className={styles.left}>
                        <div className="section-label" style={{ textAlign: 'left' }}>WHY CHOOSE US</div>
                        <h2>WHY CHOOSE <span>SHASHWAT WEAR</span> FOR YOUR CLOTHING NEEDS?</h2>
                        <p>
                            Quality Craftsmanship: At Shashwat Wear, we take pride in our commitment to quality. Our experienced artisans and skilled team ensure that every garment we manufacture meets the highest standards of craftsmanship.
                        </p>
                        <a href="#contact" className={styles.appointmentBtn}>MAKE AN APPOINTMENT →</a>
                    </div>
                    <div className={styles.grid}>
                        {whyChooseItems.map((item) => (
                            <div key={item.title} className={styles.card}>
                                <div className={styles.icon}>{item.icon}</div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
