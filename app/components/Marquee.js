import React from "react";
import styles from "./Marquee.module.css";

export default function Marquee({ children, speed = 40, direction = "left" }) {
  return (
    <div className={styles.marqueeContainer}>
      <div 
        className={`${styles.marqueeContent} ${direction === "right" ? styles.reverse : ""}`} 
        style={{ "--animation-duration": `${speed}s` }}
      >
        <div className={styles.marqueeItem}>{children}</div>
        <div className={styles.marqueeItem}>{children}</div>
      </div>
    </div>
  );
}
