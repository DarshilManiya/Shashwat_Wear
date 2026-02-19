import styles from './Tooltip.module.css';

export default function Tooltip({ text, children }) {
    return (
        <span className={styles.tooltipWrapper}>
            {children}
            <span className={styles.tooltipContent}>
                {text}
                <span className={styles.arrow}></span>
            </span>
        </span>
    );
}
