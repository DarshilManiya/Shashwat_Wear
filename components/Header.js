'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'INFRASTRUCTURE', href: '#infrastructure' },
    { label: 'BLOG', href: '/blog' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'EXPORTS', href: '/international' },
    { label: 'CONTACT', href: '#contact' },
];

export default function Header({ activePage = '' }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // For non-home pages, prefix hash links with /
    const getHref = (link) => {
        if (activePage !== '' && link.href.startsWith('#')) {
            return '/' + link.href;
        }
        return link.href;
    };

    return (
        <header className={styles.header} style={scrolled ? { boxShadow: '0 2px 30px rgba(0,0,0,0.12)' } : {}}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoBox}>
                        SHASHWAT <span>W</span>EAR
                        <div className={styles.logoSub}>PREMIUM APPAREL</div>
                    </div>
                </Link>
                <nav className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={getHref(link)}
                            className={`${styles.navLink} ${activePage === link.label.toLowerCase() ? styles.active : ''}`}
                        >
                            {link.label}
                            {activePage === link.label.toLowerCase() && (
                                <motion.div
                                    className={styles.activeBackground}
                                    layoutId="navHighlight"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </nav>
                <a href={activePage !== '' ? '/#contact' : '#contact'} className={`${styles.quoteBtn} ${styles.desktop}`}>GET A QUOTE</a>
                <button className={styles.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                    {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
            <div className={`${styles.mobileNav} ${mobileOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <a key={link.label} href={getHref(link)} onClick={() => setMobileOpen(false)}>{link.label}</a>
                ))}
                <a href={activePage !== '' ? '/#contact' : '#contact'} className={styles.quoteBtn} onClick={() => setMobileOpen(false)}>GET A QUOTE</a>
            </div>
        </header>
    );
}
