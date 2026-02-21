'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedSection({ children, className, id, delay = 0 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={className}
            initial={{ opacity: 0, y: 40, filter: "blur(4px)", scale: 0.98 }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : {}}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 1,
                delay
            }}
        >
            {children}
        </motion.section>
    );
}
