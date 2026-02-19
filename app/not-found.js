import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.errorCode}>404</div>
            <div className={styles.content}>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.description}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <div className={styles.actions}>
                    <Link href="/" className={styles.homeBtn}>
                        RETURN HOME
                    </Link>
                    <Link href="/#contact" className={styles.contactBtn}>
                        CONTACT US
                    </Link>
                </div>
            </div>
        </div>
    );
}
