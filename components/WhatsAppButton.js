'use client';

import { FaWhatsapp } from 'react-icons/fa';

import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label="WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
}
