import React from 'react';

import styles from './styles.module.css';

const ITEMS = [
    {
        src: "/smile-regular.svg",
        title: "Customer Service",
        description: "We are not simply another fence company serving Wollongong. We are a business committed to quality that prioritizes customer service and value for money. Any concern of yours we make a priority."
    },
    {
        src: "/tools-solid.svg",
        title: "Quick Service",
        description: "Monday through Friday, we can guarantee that when you call for an estimate on fencing, gates or repairs, we will be there to answer all your questions."
    },
    {
        src: "/dollar-sign-solid.svg",
        title: "Competitive Pricing",
        description: "We focus on keeping our prices competitive with other Wollongong fencing companies while also maintaining quality standards.",
        className: "dollarSignIcon"
    },
]

export default function WhyChooseUs() {

    return (
        <div className={styles.container + " container greyBackground"} id='why-choose-us'>

            {ITEMS.map((item, index) =>
                <div className={styles.itemContainer} key={index}>
                    <img src={item.src} className={styles[item.className || 'icon']} />
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.description}>{item.description}</div>
                </div>
            )}

        </div >
    );
}