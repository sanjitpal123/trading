'use client';

import { motion } from 'framer-motion';
import styles from './FloatingCoins.module.css';

export default function FloatingCoins() {
  return (
    <div className={styles.container}>
      {/* Bitcoin 1 */}
      <motion.div
        className={`${styles.coin} ${styles.btc}`}
        style={{ top: '15%', left: '10%' }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="11" fill="rgba(247, 147, 26, 0.1)" stroke="rgba(247, 147, 26, 0.5)"/>
          <path d="M14.5 10c1.5 0 2.5-1 2.5-2.5S16 5 14.5 5H9v5h5.5z" fill="rgba(247, 147, 26, 0.8)"/>
          <path d="M15.5 19c1.5 0 2.5-1 2.5-2.5S17 14 15.5 14H9v5h6.5z" fill="rgba(247, 147, 26, 0.8)"/>
          <path d="M9 5v14" strokeWidth="2"/>
          <path d="M11 3v2" strokeWidth="2"/>
          <path d="M14 3v2" strokeWidth="2"/>
          <path d="M11 19v2" strokeWidth="2"/>
          <path d="M14 19v2" strokeWidth="2"/>
        </svg>
      </motion.div>

      {/* Ethereum 1 */}
      <motion.div
        className={`${styles.coin} ${styles.eth}`}
        style={{ top: '60%', right: '15%' }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="11" fill="rgba(98, 126, 234, 0.1)" stroke="rgba(98, 126, 234, 0.5)"/>
          <path d="M12 4l-5 8 5 2.5L17 12 12 4z" fill="rgba(98, 126, 234, 0.8)"/>
          <path d="M12 20l-5-5.5 5 2.5 5-2.5L12 20z" fill="rgba(98, 126, 234, 0.8)"/>
        </svg>
      </motion.div>

      {/* Solana 1 */}
      <motion.div
        className={`${styles.coin} ${styles.sol}`}
        style={{ top: '25%', right: '10%' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="11" fill="rgba(20, 241, 149, 0.1)" stroke="rgba(20, 241, 149, 0.5)"/>
          <path d="M6 10l3-3h9l-3 3H6z" fill="rgba(20, 241, 149, 0.8)"/>
          <path d="M6 14l3-3h9l-3 3H6z" fill="rgba(153, 69, 255, 0.8)"/>
          <path d="M6 18l3-3h9l-3 3H6z" fill="rgba(20, 241, 149, 0.8)"/>
        </svg>
      </motion.div>

      {/* Bitcoin 2 (Blurred in background) */}
      <motion.div
        className={`${styles.coin} ${styles.btc}`}
        style={{ top: '70%', left: '20%', filter: 'blur(4px)', transform: 'scale(0.7)' }}
        animate={{
          y: [0, -50, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="11" fill="rgba(247, 147, 26, 0.2)" stroke="rgba(247, 147, 26, 0.6)"/>
          <path d="M14.5 10c1.5 0 2.5-1 2.5-2.5S16 5 14.5 5H9v5h5.5z"/>
          <path d="M15.5 19c1.5 0 2.5-1 2.5-2.5S17 14 15.5 14H9v5h6.5z"/>
          <path d="M9 5v14"/>
          <path d="M11 3v2"/>
          <path d="M14 3v2"/>
          <path d="M11 19v2"/>
          <path d="M14 19v2"/>
        </svg>
      </motion.div>
    </div>
  );
}
