'use client';

import AnimatedSection from './AnimatedSection';

import styles from './LaunchCTASection.module.css';

export default function LaunchCTASection() {
    return (
        <AnimatedSection className={styles.launchCta}>
            <div className="section-container">
                <div className={styles.layout}>
                    <div className={styles.left}>
                        <h2>Ready to <span>Launch Your Brand?</span></h2>
                        <p>Partner with Shashwat Wear to bring your apparel vision to life with India&apos;s most trusted garment manufacturer.</p>
                        <div className={styles.buttons}>
                            <a href="#contact" className={styles.btnPrimary}>START YOUR PROJECT</a>
                            <a href="#products" className={styles.btnOutline}>VIEW CATALOGUE</a>
                        </div>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.featureNum}>1</div>
                            <div>
                                <h4>Low MOQ Starting</h4>
                                <p>Start with as few as 200 pieces per style for new clients.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureNum}>2</div>
                            <div>
                                <h4>Free Sampling</h4>
                                <p>Get up to 3 free samples before committing to bulk production.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureNum}>3</div>
                            <div>
                                <h4>Global Shipping</h4>
                                <p>We handle end-to-end logistics to 25+ countries worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
