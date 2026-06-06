'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={100} 
              height={100} 
              style={{ objectFit: 'contain' }} 
              priority
            />
          </Link>
        </div>
        
        <nav className={styles.desktopNav}>
          <Link href="#reviews" className={styles.navLink}>Reviews</Link>
          <Link href="#education" className={styles.navLink}>Education</Link>
          <Link href="#strategy" className={styles.navLink}>Strategy</Link>
          <Link href="#workshops" className={styles.navLink}>Workshops</Link>
          <Link href="#mentorship" className={styles.navLink}>Mentorship</Link>
        </nav>
        
        <div className={styles.rightSection}>
          <div className={styles.headerRight}>
            <Link href="/#contact" className={styles.registerBtn}>Join Now</Link>
          </div>
          
          <button 
            className={`${styles.iconBtn} ${styles.mobileMenuBtn}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <nav className={styles.mobileNav}>
            <Link href="#reviews" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
            <Link href="#education" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Education</Link>
            <Link href="#strategy" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Strategy</Link>
            <Link href="#workshops" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Workshops</Link>
            <Link href="#mentorship" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Mentorship</Link>
            <div className={styles.mobileNavDivider}></div>
            <Link href="/login" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
