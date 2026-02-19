'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CursorGlow.module.css';

export default function CursorGlow() {
    const glowRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Don't activate on touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        let rafId;
        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!visible) setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        const animate = () => {
            // Smooth follow with lerp
            glowX += (mouseX - glowX) * 0.15;
            glowY += (mouseY - glowY) * 0.15;

            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${glowX - 150}px, ${glowY - 150}px)`;
            }
            rafId = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        rafId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(rafId);
        };
    }, [visible]);

    return (
        <div
            ref={glowRef}
            className={`${styles.glow} ${visible ? styles.visible : ''}`}
            aria-hidden="true"
        />
    );
}
