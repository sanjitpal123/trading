import React from 'react';
import styles from './page.module.css';
import AnimatedBackground from '../components/AnimatedBackground';

export const metadata = {
  title: 'Privacy Policy | Trade Pulse Traders Institute',
  description: 'Privacy Policy for Trade Pulse Traders Institute',
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="main" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground />
        
        <div className={styles.privacyContainer}>
          <h1 className={styles.title}>
            <span className="text-gradient">Privacy</span> Policy
          </h1>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className={styles.contentWrapper}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                1. Information We Collect
              </h2>
              <p className={styles.text}>
                At Trade Pulse Traders Institute, we prioritize your privacy and are committed to protecting your personal data. We collect information that you voluntarily provide to us when you register for an account, express an interest in obtaining information about us or our products and services, or otherwise contact us.
              </p>
              <ul className={styles.list}>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, courses, and trading community.</li>
                <li><strong>Device Data:</strong> IP address, browser type, operating system, and access times.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                2. How We Use Your Information
              </h2>
              <p className={styles.text}>
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className={styles.list}>
                <li>To facilitate account creation and logon process.</li>
                <li>To provide and deliver products, services, and educational materials.</li>
                <li>To send administrative information to you, such as product, service, and new feature information.</li>
                <li>To protect our Services from fraudulent activities or unauthorized access.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                3. Information Sharing and Disclosure
              </h2>
              <p className={styles.text}>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
              </p>
              <ul className={styles.list}>
                <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                4. Data Security and Retention
              </h2>
              <p className={styles.text}>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
              <p className={styles.text}>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                5. Contact Us
              </h2>
              <p className={styles.text}>
                If you have questions or comments about this notice, you may email us at <strong>tradepulse14@gmail.com</strong> or contact us by phone at <strong>8927578901</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
