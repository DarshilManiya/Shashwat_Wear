'use client';

import styles from './SectionDivider.module.css';

/**
 * SectionDivider — renders an SVG wave between sections.
 * @param {string} color — fill color of the wave (defaults to dark-slate)
 * @param {boolean} flip — flip vertically for bottom-of-section placement
 * @param {'wave'|'diagonal'|'curve'} variant — shape type
 */
export default function SectionDivider({ color = 'var(--dark-slate)', flip = false, variant = 'wave' }) {
    const cls = `${styles.divider} ${flip ? styles.flip : ''}`;

    if (variant === 'diagonal') {
        return (
            <div className={cls} aria-hidden="true">
                <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon fill={color} points="0,60 1440,0 1440,60" />
                </svg>
            </div>
        );
    }

    if (variant === 'curve') {
        return (
            <div className={cls} aria-hidden="true">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill={color} d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
                </svg>
            </div>
        );
    }

    // Default: wave
    return (
        <div className={cls} aria-hidden="true">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill={color}
                    d="M0,40 C160,100 320,0 480,50 C640,100 800,10 960,50 C1120,90 1280,20 1440,60 L1440,100 L0,100 Z"
                />
            </svg>
        </div>
    );
}
