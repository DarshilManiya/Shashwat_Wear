'use client';

import AnimatedCounter from './AnimatedCounter';

import styles from './StatsSection.module.css';

const statsDark = [
    { num: 50000, suffix: '+', label: 'Monthly Capacity' },
    { num: 60, suffix: '+', label: 'Machines' },
    { num: 500, suffix: '+', label: 'Skilled Workers' },
    { num: 15, suffix: '+', label: 'Years Experience' },
];

const statsTeal = [
    { num: 100, suffix: '%', label: 'Quality Checked' },
    { num: 50, suffix: '+', label: 'Brand Partners' },
    { num: 25, suffix: '+', label: 'Countries Served' },
    { num: 98, suffix: '%', label: 'On-Time Delivery' },
];

export default function StatsSection() {
    return (
        <>
            <div className={styles.dark}>
                <div className={styles.grid}>
                    {statsDark.map((stat) => (
                        <div key={stat.label} className={styles.item}>
                            <div className={styles.number}>
                                <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.teal}>
                <div className={styles.grid}>
                    {statsTeal.map((stat) => (
                        <div key={stat.label} className={styles.item}>
                            <div className={styles.number}>
                                <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
