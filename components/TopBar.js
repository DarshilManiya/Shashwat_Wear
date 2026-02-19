'use client';

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './TopBar.module.css';

export default function TopBar() {
    return (
        <div className={styles.topBar}>
            <div className={styles.inner}>
                <div className={styles.contact}>
                    <span><FaEnvelope /> info@shashwatwear.com</span>
                    <span><FaPhone /> +91 98765 43210</span>
                </div>
                <div className={styles.social}>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
    );
}
