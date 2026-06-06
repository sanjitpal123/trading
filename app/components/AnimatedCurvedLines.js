'use client';

import styles from './AnimatedCurvedLines.module.css';

export default function AnimatedCurvedLines() {
  return (
    <div className={styles.linesContainer}>
      <svg className={styles.svg} viewBox="0 0 1000 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent-primary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-secondary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent-secondary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Line 1 */}
        <path 
          className={styles.line1} 
          d="M 0,200 C 300,400 700,0 1000,200" 
          fill="none" 
          stroke="url(#gradient1)" 
          strokeWidth="2"
        />
        {/* Line 2 */}
        <path 
          className={styles.line2} 
          d="M 0,250 C 400,100 600,400 1000,150" 
          fill="none" 
          stroke="url(#gradient2)" 
          strokeWidth="1.5"
        />
        {/* Line 3 */}
        <path 
          className={styles.line3} 
          d="M 0,100 C 250,-50 750,450 1000,250" 
          fill="none" 
          stroke="url(#gradient1)" 
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
