'use client';

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.brand}>
                    <div className={styles.logoBox}>
                        <span className={styles.logoText}>SHASHWAT <span>W</span>EAR</span>
                    </div>
                    <p>Leading apparel manufacturer specializing in premium cotton shirts, corporate uniforms, and private label garments since 2009.</p>
                    <div className={styles.social}>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                    </div>
                </div>
                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/#products">Products</Link></li>
                        <li><Link href="/#infrastructure">Infrastructure</Link></li>
                        <li><Link href="/international">Export</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/#contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Products</h3>
                    <ul>
                        <li><Link href="/gallery?category=Men's+Collection">Men&apos;s Shirts</Link></li>
                        <li><Link href="/gallery?category=Women's+Wear">Women&apos;s Wear</Link></li>
                        <li><Link href="/gallery?category=Kids+Apparel">Kids Apparel</Link></li>
                        <li><Link href="/gallery?category=Uniforms">Corporate Uniforms</Link></li>
                        <li><Link href="/#products">Private Label</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Factory Address</h3>
                    <p className={styles.address}>
                        Survey No. 123, GIDC Industrial Area,<br />
                        Ahmedabad, Gujarat 380015,<br />
                        India<br /><br />
                        <strong style={{ color: '#fff' }}>Working Hours:</strong><br />
                        Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomInner}>
                    <p>© 2024 Shashwat Wear. All Rights Reserved.</p>
                    <div className={styles.bottomLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
