"use client";

import React from "react";
import styles from "./GlowButton.module.css";
import { motion } from "framer-motion";

export default function GlowButton({ children, onClick, className = "", ...props }) {
  return (
    <button className={`${styles.glowBtn} ${className}`} onClick={onClick} {...props}>
      <span className={styles.glowElement}></span>
      <span className={styles.btnContent}>{children}</span>
    </button>
  );
}
