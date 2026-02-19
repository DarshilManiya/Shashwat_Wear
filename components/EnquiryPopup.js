'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EnquiryPopup.module.css';

const STORAGE_KEY = 'enquiry_popup_dismissed';

export default function EnquiryPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });

    const dismiss = useCallback(() => {
        setIsOpen(false);
        try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (_) { }
    }, []);

    useEffect(() => {
        // Don't show if already dismissed this session
        try {
            if (sessionStorage.getItem(STORAGE_KEY)) return;
        } catch (_) { }

        // 30-second timer trigger
        const timer = setTimeout(() => setIsOpen(true), 30000);

        // Exit-intent trigger (mouse leaves viewport at the top)
        const handleExitIntent = (e) => {
            if (e.clientY < 10) {
                try { if (sessionStorage.getItem(STORAGE_KEY)) return; } catch (_) { }
                setIsOpen(true);
                document.removeEventListener('mouseleave', handleExitIntent);
            }
        };

        document.addEventListener('mouseleave', handleExitIntent);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleExitIntent);
        };
    }, []);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production: send to an API / EmailJS / Formspree
        setSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (_) { }
        }, 3500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className={styles.backdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={dismiss}
                    />

                    {/* Modal */}
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, scale: 0.88, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 40 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Enquiry Form"
                    >
                        {/* Close Button */}
                        <button className={styles.closeBtn} onClick={dismiss} aria-label="Close enquiry popup">✕</button>

                        {!submitted ? (
                            <>
                                {/* Header */}
                                <div className={styles.header}>
                                    <span className={styles.badge}>⚡ GET A FREE QUOTE</span>
                                    <h2>Let&apos;s Create Something <span>Exceptional</span></h2>
                                    <p>Tell us your requirements and we&apos;ll get back within 24 hours.</p>
                                </div>

                                {/* Form */}
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label htmlFor="popup-name">Your Name *</label>
                                            <input
                                                id="popup-name"
                                                name="name"
                                                type="text"
                                                placeholder="John Smith"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="popup-company">Company / Brand *</label>
                                            <input
                                                id="popup-company"
                                                name="company"
                                                type="text"
                                                placeholder="Acme Fashion Ltd."
                                                value={form.company}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label htmlFor="popup-email">Email Address *</label>
                                            <input
                                                id="popup-email"
                                                name="email"
                                                type="email"
                                                placeholder="hello@company.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="popup-phone">Phone / WhatsApp</label>
                                            <input
                                                id="popup-phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+44 7700 900000"
                                                value={form.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <label htmlFor="popup-interest">Product Interest *</label>
                                        <select
                                            id="popup-interest"
                                            name="interest"
                                            value={form.interest}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select a category...</option>
                                            <option value="mens-shirts">Men&apos;s Shirts</option>
                                            <option value="womens-wear">Women&apos;s Wear</option>
                                            <option value="kids-apparel">Kids Apparel</option>
                                            <option value="uniforms">Corporate Uniforms</option>
                                            <option value="private-label">Private Label</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className={styles.field}>
                                        <label htmlFor="popup-message">Brief Message</label>
                                        <textarea
                                            id="popup-message"
                                            name="message"
                                            rows={3}
                                            placeholder="e.g. MOQ 500 pcs formal shirts, delivery to UK..."
                                            value={form.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button type="submit" className={styles.submitBtn}>
                                        SEND ENQUIRY →
                                    </button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                className={styles.success}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.successIcon}>✓</div>
                                <h3>Enquiry Sent!</h3>
                                <p>Thank you! Our team will reach out within <strong>24 hours</strong>.</p>
                            </motion.div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
