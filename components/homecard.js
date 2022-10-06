import React from "react";

import styles from "./homecard.module.scss"

export default function HomeCard({
    id,
    title,
    date,
    image,
    des,
    link,
    ...props
}) {
    return (
        <div className={styles.homeCard}>
            <div>
                <div className={styles.textDate}>
                    {date}
                </div>
            </div>
            <h2 className={styles.textTitle}><a href={link}><span>{title}</span></a></h2>
            <div>
                <div className={styles.header_after}></div>
            </div>
            <div className={styles.imageHome}>
                <a href={link}><img src={image} alt="" /></a>
            </div>
            <div className={styles.textDes}>{des}</div>
            <p className={styles.readMore}><a href={link} className={styles.buttonReadmore}><span>READ MORE</span></a></p>
        </div>
    );
}