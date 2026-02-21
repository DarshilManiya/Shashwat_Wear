'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import styles from './HeroSection.module.css';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 800], [0, 200]);

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

    // Spring configuration for super premium animations
    const springTransition = {
        type: "spring",
        stiffness: 45, /* Much softer, airy spring */
        damping: 18,
        mass: 0.8 /* Slightly lighter mass for a more delicate float */
    };

    return (
        <section ref={heroRef} className={styles.hero} id="home">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className={styles.bg}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ y: yTransform }}
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
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                        transition={springTransition}
                    >
                        <motion.div
                            className={styles.badge}
                            initial={{ opacity: 0, letterSpacing: "1px" }}
                            animate={{ opacity: 1, letterSpacing: "3px" }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            {slides[currentSlide].badge}
                        </motion.div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, ...springTransition }}
                        >
                            {slides[currentSlide].title}
                        </motion.h1>
                        <motion.p
                            className={styles.subtitle}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, ...springTransition }}
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>
                        <motion.div
                            className={styles.buttons}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, ...springTransition }}
                        >
                            <a href="#contact" className={styles.btnPrimary}>START YOUR ORDER</a>
                            <a href="#products" className={styles.btnOutline}>VIEW CATALOGUE</a>
                        </motion.div>
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
