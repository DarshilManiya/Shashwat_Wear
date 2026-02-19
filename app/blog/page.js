'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import AnimatedSection from '../../components/AnimatedSection';

const blogPosts = [
    { title: 'The Future of Sustainable Fashion Manufacturing', excerpt: 'Exploring eco-friendly practices and sustainable materials in modern garment production.', category: 'Sustainability', date: 'Jan 15, 2024', img: '/images/hero-bg.png' },
    { title: 'Quality Control in Bulk Garment Production', excerpt: 'How we maintain consistent quality across thousands of garments in every production run.', category: 'Quality', date: 'Jan 10, 2024', img: '/images/cutting-department.png' },
    { title: 'Private Label Manufacturing: A Complete Guide', excerpt: 'Everything you need to know about starting your own clothing brand with a manufacturing partner.', category: 'Business', date: 'Jan 5, 2024', img: '/images/stitching-lines.png' },
    { title: 'Cotton Fabric Selection for Premium Shirts', excerpt: 'Understanding thread counts, weave patterns, and cotton grades for the best shirt quality.', category: 'Materials', date: 'Dec 28, 2023', img: '/images/mens-collection.png' },
    { title: 'Export Compliance for Garment Manufacturers', excerpt: 'Navigating international standards and certifications for global garment exports.', category: 'Export', date: 'Dec 20, 2023', img: '/images/uniforms.png' },
    { title: 'Corporate Uniform Design Trends 2024', excerpt: 'Latest trends in corporate wear design balancing professionalism with employee comfort.', category: 'Design', date: 'Dec 15, 2023', img: '/images/womens-wear.png' },
];

import styles from './page.module.css';

export default function BlogPage() {
    return (
        <>
            <TopBar />
            <Header activePage="blog" />

            <section className={styles.hero}>
                <div className="section-container">
                    <div className={styles.sectionLabel}>OUR BLOG</div>
                    <h1 className={styles.sectionTitle}>Industry Insights & Updates</h1>
                    <div className="section-underline" />
                    <p className={styles.sectionSubtitle}>Stay updated with the latest trends, tips, and news from the garment manufacturing industry.</p>
                </div>
            </section>

            <AnimatedSection className={`section ${styles.gridSection}`}>
                <div className="section-container">
                    <div className={styles.grid}>
                        {blogPosts.map((post, i) => (
                            <motion.article
                                key={post.title}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                            >
                                <div className={styles.cardImg}>
                                    <Image src={post.img} alt={post.title} width={400} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                    <span className={styles.category}>{post.category}</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.date}>{post.date}</div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <a href="#" className={styles.readMore}>Read More →</a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <Footer />
            <WhatsAppButton />
        </>
    );
}
