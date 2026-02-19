'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ClientMarquee.module.css';

const clientLogos = [
    { name: 'Harmon Shirts', logo: '/images/harmon-logo.png', hasImage: true },
    { name: 'Vestro', logo: '/images/vestro-logo.png', hasImage: true },
    { name: 'Blackstitch', logo: '/images/blackstitch-logo.png', hasImage: true, darkBg: true },
];

function LogoItem({ client, index }) {
    return (
        <motion.div
            className={`${styles.logoItem} ${client.darkBg ? styles.darkBg : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={60}
                style={{ objectFit: 'contain' }}
            />
        </motion.div>
    );
}

export default function ClientMarquee() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.label}>
                    TRUSTED BY LEADING BRANDS ACROSS <span>12+ COUNTRIES</span>
                </div>
                <div className={styles.showcase}>
                    {clientLogos.map((c, i) => (
                        <LogoItem key={i} client={c} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
