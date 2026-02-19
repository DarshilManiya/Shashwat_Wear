'use client';
import { toast } from 'sonner';

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import styles from './ContactSection.module.css';

export default function ContactSection() {
    return (
        <section className={styles.contact} id="contact">
            <div className="section-container">
                <div className={styles.layout}>
                    <div className={styles.left}>
                        <div className={`section-label ${styles.label}`}>GET IN TOUCH</div>
                        <h2>Let&apos;s Discuss Your Next Project</h2>
                        <p>Ready to start your apparel manufacturing journey? Get in touch with our team for a free consultation and quote.</p>
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><FaPhone /></div>
                            <div className={styles.infoContent}>
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><FaEnvelope /></div>
                            <div className={styles.infoContent}>
                                <h4>Email Us</h4>
                                <p>info@shashwatwear.com</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><FaMapMarkerAlt /></div>
                            <div className={styles.infoContent}>
                                <h4>Visit Us</h4>
                                <p>Survey No. 123, GIDC Industrial Area, Ahmedabad, Gujarat 380015</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.formContainer}>
                        <h3>Request a Quote</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            toast.success("Message sent successfully!", {
                                description: "We'll get back to you within 24 hours."
                            });
                            e.target.reset();
                        }}>
                            <div className={styles.formRow}>
                                <input type="text" className={styles.formControl} placeholder="Your Name" required />
                                <input type="email" className={styles.formControl} placeholder="Your Email" required />
                            </div>
                            <div className={styles.formRow}>
                                <input type="tel" className={styles.formControl} placeholder="Phone Number" />
                                <input type="text" className={styles.formControl} placeholder="Company Name" />
                            </div>
                            <input type="text" className={`${styles.formControl} ${styles.full}`} placeholder="Subject" required />
                            <textarea className={`${styles.formControl} ${styles.full}`} placeholder="Tell us about your project requirements..." required />
                            <button type="submit" className={styles.submitBtn}>SEND MESSAGE →</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
