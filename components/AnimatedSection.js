'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedSection({ children, className, id, delay = 0 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={className}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {children}
        </motion.section>
    );
}
