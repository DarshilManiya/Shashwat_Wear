'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import styles from './HeroSection.module.css';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "/images/hero-bg.png",
            badge: "PREMIUM APPAREL MANUFACTURER",
            title: "Apparel Manufacturing Redefined",
            subtitle: "Specializing in high-volume production of premium cotton shirts, corporate uniforms, and private label garments for global brands."
        },
        {
            id: 2,
            image: "/images/stitching-lines.png",
            badge: "PRECISION CRAFTSMANSHIP",
            title: "Precision in Every Stitch",
            subtitle: "State-of-the-art machinery meets skilled craftsmanship to deliver flawless garments every time."
        },
        {
            id: 3,
            image: "/images/cutting-department.png",
            badge: "TIMELESS QUALITY",
            title: "Live Shashwat, Wear Shashwat",
            subtitle: "Creating apparel that stands the test of time. Quality that you can feel, durability that you can trust."
        },
        {
            id: 4,
            image: "/images/mens-collection.png",
            badge: "GLOBAL STANDARDS",
            title: "Global Quality Standards",
            subtitle: "Exporting premium apparel to 12+ countries worldwide, meeting international compliance and safety norms."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className={styles.hero} id="home">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className={styles.bg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            <div className={styles.overlay} />

            <div className={styles.contentWrapper}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className={styles.content}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.badge}>{slides[currentSlide].badge}</div>
                        <h1>{slides[currentSlide].title}</h1>
                        <p className={styles.subtitle}>
                            {slides[currentSlide].subtitle}
                        </p>
                        <div className={styles.buttons}>
                            <a href="#contact" className={styles.btnPrimary}>START YOUR ORDER</a>
                            <a href="#products" className={styles.btnOutline}>VIEW CATALOGUE</a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}><div className={styles.wheel} /></div>
                SCROLL
            </div>
        </section>
    );
}
