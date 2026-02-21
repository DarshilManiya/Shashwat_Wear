'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

import styles from './CategoriesSection.module.css';

const categories = [
    { name: "Men's Collection", sub: 'Formal & Casual Shirts', img: '/images/mens-collection.png', filter: "Men's Collection" },
    { name: "Women's Wear", sub: 'Corporate & Casual Tops', img: '/images/womens-wear.png', filter: "Women's Wear" },
    { name: "Kids Apparel", sub: 'Comfort Meets Durability', img: '/images/kids-apparel.png', filter: "Kids Apparel" },
    { name: "Uniforms", sub: 'Corporate & Industrial', img: '/images/uniforms.png', filter: "Uniforms" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25, /* Slower stagger */
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

export default function CategoriesSection() {
    return (
        <AnimatedSection className={`section ${styles.categories}`} id="products">
            <div className="section-container">
                <div className="section-label">OUR SPECIALIZATION</div>
                <h2 className="section-title">Manufacturing Categories</h2>
                <div className="section-underline" />
                <div className="section-subtitle">From formal shirts to casual wear, we manufacture a diverse range of premium garments.</div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {categories.map((cat) => (
                        <Link key={cat.name} href={`/gallery?category=${encodeURIComponent(cat.filter)}`} style={{ textDecoration: 'none' }}>
                            <motion.div className={styles.card} variants={itemVariants}>
                                <Image src={cat.img} alt={cat.name} fill style={{ objectFit: 'cover' }} />
                                <div className={styles.overlay}>
                                    <div className={styles.accentLine} />
                                    <h3>{cat.name}</h3>
                                    <p>{cat.sub}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                <div className={styles.viewCatalogue}>
                    <Link href="/gallery">VIEW FULL CATALOGUE →</Link>
                </div>
            </div>
        </AnimatedSection>
    );
}
