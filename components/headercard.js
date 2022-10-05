import React from "react";

import styles from "./headercard.module.scss"

export default function HeaderCard({
    image
}) {
    return (
        <img className={styles.imageHeader}
            src={image}
        />
    );
}