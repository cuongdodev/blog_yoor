import React from "react";
import styles from "./maincard.module.scss";

export default function MainCard({ children }) {
    return (
        <div className={styles.container}>
            <div style={{ gridArea: "first" }}>{children[0]}</div>
            <div style={{ gridArea: "second" }}>{children[1]}</div>
        </div>
    )
}