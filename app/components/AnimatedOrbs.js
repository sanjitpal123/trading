'use client';

import { motion } from 'framer-motion';
import styles from './AnimatedOrbs.module.css';

export default function AnimatedOrbs() {
  return (
    <div className={styles.container}>
      <motion.div 
        className={`${styles.orb} ${styles.orb1}`}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className={`${styles.orb} ${styles.orb2}`}
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -100, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className={`${styles.orb} ${styles.orb3}`}
        animate={{
          x: [0, 80, -120, 0],
          y: [0, 150, -50, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
