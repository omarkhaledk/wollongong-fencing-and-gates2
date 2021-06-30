import React from 'react';

import styles from './styles.module.css';

export default function AboutUs() {

    return (
        <div className="container greyBackground" id='about-us'>
            <div className={styles.title + " defaultTitle"}>About Us</div>
            <div className="description">
                Wollongong Fencing and Gates is a locally owned and trusted business with more than 5 years of experience.
                <br />
                We build fences and gates of various materials and implement the most modern designs. We do everything from pool fences and colorbond gates to timber fencing.
                <br /><br />
                Our fences are built professionally to suit the customers needs.
                <br /><br />
                Our colorbond fences and gates come with 10 years manufacturing warranty.
                <br />
                We are proud to be the quickest and cheapest In the Illawarra.
                <br /><br />
                We make sure to beat any price!!!
            </div>
        </div >
    );
}