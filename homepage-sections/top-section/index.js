import React from 'react';

import styles from './styles.module.css';

export default function TopSection() {

    return (
        <div className={styles.container}>
            <img src="/topSectionBackground.jpg" className={styles.img} />
            <div className={styles.titleContainer}>
                <div className={styles.title}>Wollongong Fencing And Gates</div>
                <div className={styles.titleDescription}>Fencing Contractor</div>
            </div>
        </div>
    );
}