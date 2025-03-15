'use client';

import styles from './Spinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default LoadingSpinner;
