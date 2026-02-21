'use client';

import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaShippingFast, FaHandshake, FaFileContract, FaPlane, FaShip, FaBoxOpen, FaClipboardCheck } from 'react-icons/fa';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ContactSection from '../../components/ContactSection';
import AnimatedSection from '../../components/AnimatedSection';
import WorldMap from '../../components/WorldMap';

const whyPartner = [
    { icon: <FaGlobeAmericas />, title: 'Global Compliance', desc: 'Sourcing partners with SEDEX, GOTS, and ISO certifications.' },
    { icon: <FaHandshake />, title: 'End-to-End Service', desc: 'From design & sampling to production & logistics.' },
    { icon: <FaFileContract />, title: 'Transparent Process', desc: 'Real-time production updates and visual inspections.' },
    { icon: <FaShippingFast />, title: 'Reliable Logistics', desc: 'Door-to-door delivery with handled customs clearance.' },
];

const paymentTerms = [
    { title: 'Letter of Credit (L/C)', desc: 'Secure payment method for large volume orders.', icon: '🏦' },
    { title: 'T/T (Bank Transfer)', desc: '30% advance, 70% before shipment.', icon: '💸' },
    { title: 'PayPal / Wise', desc: 'Accepted for sampling and small test orders.', icon: '💳' },
];

const shippingOptions = [
    { mode: 'Air Freight', time: '5-8 Days', desc: 'Best for samples & rush orders. DHL/FedEx/UPS.', icon: <FaPlane /> },
    { mode: 'Sea Freight', time: '25-45 Days', desc: 'Cost-effective for bulk production (FCL/LCL).', icon: <FaShip /> },
];

const exportMarkets = [
    { region: 'North America', countries: '🇺🇸 USA, 🇨🇦 Canada' },
    { region: 'Europe', countries: '🇬🇧 UK, 🇩🇪 Germany, 🇫🇷 France, 🇮🇹 Italy' },
    { region: 'Middle East', countries: '🇦🇪 UAE, 🇸🇦 Saudi Arabia, 🇶🇦 Qatar' },
    { region: 'Asia Pacific', countries: '🇦🇺 Australia, 🇸🇬 Singapore, 🇯🇵 Japan' },
];

const moqData = [
    { product: "Men's Shirts", moq: '200 pcs / style', leadTime: '25-35 Days' },
    { product: "Women's Wear", moq: '300 pcs / style', leadTime: '30-40 Days' },
    { product: "Kids Apparel", moq: '500 pcs / style', leadTime: '30-40 Days' },
    { product: "Uniforms", moq: '100 pcs / style', leadTime: '20-30 Days' },
];

import styles from './page.module.css';

export default function InternationalClient() {
    return (
        <>
            <TopBar />
            <Header activePage="exports" />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.sectionLabel}>GLOBAL EXPORT PARTNER</div>
                        <h1>Sourcing Premium Apparel from India Made Simple</h1>
                        <p>We simplify international garment sourcing with verified manufacturing, global compliance, and seamless logistics to 25+ countries.</p>
                        <a href="#contact" className="btn-primary">START SOURCING</a>
                    </motion.div>
                </div>
            </section>

            {/* Why Partner */}
            <AnimatedSection className={`section ${styles.features}`}>
                <div className="section-container">
                    <h2 className="section-title text-center">Why Global Brands Trust Us</h2>
                    <div className="section-underline" />
                    <div className={styles.featuresGrid}>
                        {whyPartner.map((item, i) => (
                            <div key={i} className={styles.featureCard}>
                                <div className={styles.iconBox}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Export Markets */}
            <section className={`section ${styles.markets}`}>
                <div className="section-container">
                    <div className={styles.splitLayout}>
                        <div className={styles.marketsContent}>
                            <div className="section-label" style={{ textAlign: 'left' }}>GLOBAL REACH</div>
                            <h2>Exporting to 12+ Countries Worldwide</h2>
                            <p>We understand the specific quality standards and labeling requirements for different regions, including REACH (EU) and CPSIA (USA).</p>
                            <div className={styles.marketsGrid}>
                                {exportMarkets.map((m, i) => (
                                    <div key={i} className={styles.marketItem}>
                                        <h4>{m.region}</h4>
                                        <p>{m.countries}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.mapGraphic}>
                            <WorldMap />
                        </div>
                    </div>
                </div>
            </section>

            {/* Logistics & Payment */}
            <AnimatedSection className={`section ${styles.logistics}`}>
                <div className="section-container">
                    <h2 className="section-title text-center">Seamless Logistics & Terms</h2>
                    <div className="section-underline" />

                    <div className={styles.logisticsGrid}>
                        <div className={styles.logisticsColumn}>
                            <h3><FaBoxOpen /> Shipping Options</h3>
                            <div className={styles.shippingList}>
                                {shippingOptions.map((opt, i) => (
                                    <div key={i} className={styles.shippingItem}>
                                        <div className={styles.sIcon}>{opt.icon}</div>
                                        <div>
                                            <h4>{opt.mode} <span>({opt.time})</span></h4>
                                            <p>{opt.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.incoterms}>
                                Supports: <strong>FOB</strong> (Mumbai/Mundra), <strong>CIF</strong>, <strong>Ex-Works</strong>, <strong>DDP</strong> (Select regions)
                            </div>
                        </div>

                        <div className={styles.logisticsColumn}>
                            <h3><FaClipboardCheck /> Payment Terms</h3>
                            <div className={styles.paymentGrid}>
                                {paymentTerms.map((term, i) => (
                                    <div key={i} className={styles.paymentCard}>
                                        <span className={styles.pIcon}>{term.icon}</span>
                                        <h4>{term.title}</h4>
                                        <p>{term.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* MOQ & Lead Times */}
            <section className={`section ${styles.moq}`}>
                <div className="section-container">
                    <h2 className="section-title text-center">MOQ & Production Timelines</h2>
                    <p className="section-subtitle">Flexible minimums for startups and established brands.</p>

                    <div className={styles.moqTableWrapper}>
                        <table className={styles.moqTable}>
                            <thead>
                                <tr>
                                    <th>Product Category</th>
                                    <th>Minimum Order (MOQ)</th>
                                    <th>Avg. Lead Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {moqData.map((row, i) => (
                                    <tr key={i}>
                                        <td><strong>{row.product}</strong></td>
                                        <td>{row.moq}</td>
                                        <td>{row.leadTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.samplePolicy}>
                        <h3>Sample Policy</h3>
                        <p>We provide fit and PP samples for approval. Sample development takes <strong>7-10 working days</strong>. Sample cost is adjustable against bulk orders.</p>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />

        </>
    );
}
