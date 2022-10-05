import React from "react";

import styles from "./homecard.module.scss"

export default function HomeCard({
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
            <div className={styles.textTitle}>{title}</div>
            <div>
                <div className={styles.header_after}></div>
            </div>
            <div className={styles.imageHome}>
                {{ image } && <img className={styles.image} src={image} loading="lazy" />}
            </div>
            <div className={styles.textDes}>{des}</div>
            <p className={styles.readMore}><a href={link} className={styles.buttonReadmore}><span>READ MORE</span></a></p>
        </div>
    );
}