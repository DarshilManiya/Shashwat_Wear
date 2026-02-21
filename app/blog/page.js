'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import AnimatedSection from '../../components/AnimatedSection';
import blogs from '../../data/blogs.json';

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
                        {blogs.map((post, i) => (
                            <motion.article
                                key={post.slug}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                            >
                                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                                    <div className={styles.cardImg}>
                                        <Image src={post.img} alt={post.title} width={400} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                        <span className={styles.category}>{post.category}</span>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.date}>{post.date}</div>
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <span className={styles.readMore}>Read More →</span>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <Footer />

        </>
    );
}