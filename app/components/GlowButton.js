"use client";

import React from "react";
import styles from "./GlowButton.module.css";
import { motion } from "framer-motion";

import Link from "next/link";

export default function GlowButton({ children, onClick, className = "", href, ...props }) {
  const content = (
    <>
      <span className={styles.glowElement}></span>
      <span className={styles.btnContent}>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.glowBtn} ${className}`} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${styles.glowBtn} ${className}`} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
