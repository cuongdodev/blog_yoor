import React from "react";

import styles from "./headercard.module.scss"

export default function HeaderCard({
    image
}) {
    return (

        <a href="https://blog-yoor.vercel.app/"><img className={styles.imageHeader}
            src={image}
        /></a>
    );
}