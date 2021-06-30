import React from 'react';

import styles from './styles.module.css';

export default function DescriptionSection() {

    return (
        <div className={styles.container + " container"} id='who-are-we'>
            <div className={styles.title + " defaultTitle"}>
                WOLLONGONGS’S BEST RESIDENTIAL AND COMMERCIAL FENCING CONTRACTOR
            </div>

            <div className="description">
                For a quality fencing service based in Berkeley, call Wollongong Fencing and Gates.
                <br />
                With more than 5 years of experience, we build fences and gates of various materials and implement the most modern designs. We do everything from pool fences and colorbond gates to timber fencing.

                Give us a call today or request a quote!
            </div>
        </div >
    );
}