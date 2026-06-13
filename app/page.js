"use client";

import React, { useState } from "react";

import styles from "./page.module.css";
import AnimatedBackground from "./components/AnimatedBackground";
import GlowButton from "./components/GlowButton";
import TiltCard from "./components/TiltCard";
import Marquee from "./components/Marquee";
import AnimatedCurvedLines from "./components/AnimatedCurvedLines";
import FloatingCoins from "./components/FloatingCoins";
import AnimatedOrbs from "./components/AnimatedOrbs";
import { motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";
import VideoReviewsSlider from "./components/VideoReviewsSlider";

const tradingPairs = [
  { symbol: "BTC/USDT", price: "68,432.10", change: "+2.4%" },
  { symbol: "ETH/USDT", price: "3,892.45", change: "+5.1%" },
  { symbol: "SOL/USDT", price: "164.20", change: "-1.2%" },
  { symbol: "BNB/USDT", price: "612.80", change: "+0.8%" },
  { symbol: "EUR/USD", price: "1.0845", change: "+0.1%" },
  { symbol: "XAU/USD", price: "2,341.50", change: "+1.5%" },
  { symbol: "AAPL", price: "189.98", change: "-0.4%" },
  { symbol: "TSLA", price: "174.56", change: "+3.2%" },
];

const faqs = [
  { question: "Do I need prior trading experience?", answer: "No, our Beginner Bootcamp is designed to take you from absolute zero to understanding market structure." },
  { question: "Are the physical classes recorded?", answer: "Yes, all our in-person trading sessions and lectures are recorded and uploaded to the student vault for you to review." },
  { question: "What markets do you trade?", answer: "Our strategies apply to all high-liquidity markets: Forex, Crypto, Indices, and Commodities." },
  { question: "Can I manage my enrollment?", answer: "Yes, you can manage your course enrollment at the administration office or from your student dashboard." }
];

const testimonials = [
  { name: "Rohan Desai", handle: "@rohan_trades", review: "Passed my ₹80L prop firm challenge in just 3 weeks after taking the Liquidity Concepts course at the institute.", avatar: "👨‍💼", role: "Funded Trader" },
  { name: "Arjun Mehta", handle: "@arjun_fx", review: "The in-person trading sessions at the campus are a cheat code. Seeing a 7-figure trader execute live completely fixed my psychology.", avatar: "👨‍💻", role: "Pro Member" },
  { name: "Priya Sharma", handle: "@priya_crypto", review: "I was stuck in a break-even cycle for years. The physical classroom sessions and 1-on-1 feedback finally got me profitable.", avatar: "👩‍💼", role: "Funded Trader" }
];

const companyTabData = {
  company: {
    title: "Our Company",
    text: <>Welcome to the heart of Trade Pulse—a behind the scenes look at the people, programs and perspectives that are the pulse of the company. We are glad you found us. Meet our amazing staff, instructors and students, check out their contributions, and get inspired. As you explore, you will see that we put love at the core of everything we do from helping our students become confident traders, to our inspirational instructors, our network of centers, our happy employees, the community, and beyond.<br /><br />Together we are relentlessly committed to making a difference and enriching lives!</>
  },
  perspectives: {
    title: "Our Perspectives",
    text: <>Dive into our unique approach to the financial markets. We believe in providing actionable insights, data-driven analysis, and a realistic view of trading. Our perspectives are forged from years of institutional experience, cutting through the noise of social media "gurus".<br /><br />We are dedicated to equipping our members with the mental frameworks and strategic understanding necessary to navigate volatile markets with clarity.</>
  },
  commitment: {
    title: "Relentless Commitment",
    text: <>Our top priority is our students. We invest relentlessly in our education, services, products, technologies, support, and community. We understand that trading is a challenging journey, which is why we provide an unparalleled support system designed to catch you when you stumble.<br /><br />Your success is our success, and we won't stop until you achieve your trading goals.</>
  },
  research: {
    title: "Our Research Center",
    text: <>The Trade Pulse Research Center is the engine room of our strategies. Our team of quantitative analysts and seasoned traders constantly backtest new concepts, analyze market micro-structure, and develop proprietary indicators.<br /><br />Members get exclusive access to our ongoing research, helping them stay ahead of the curve in an ever-evolving financial landscape.</>
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCompanyTab, setActiveCompanyTab] = useState("company");

  return (
    <>
      <AnimatedBackground />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={`${styles.hero} ${styles.curvedBottomShape}`}>

          <div className={styles.heroBgImage}>
            <Image src="/hero_bg.png" alt="Trading Background" fill style={{ objectFit: 'cover', opacity: 0.4 }} priority />
            <div className={styles.heroBgGradient}></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <span className={styles.heroBadge}>
                <span className={styles.pulseDot}></span>
                Live Trading Floor Now Open
              </span>
            </div>

            <h1 className={styles.heroTitle}>
              Master the Markets with <br />
              <span className="text-gradient">Trade Pulse</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Learn institutional trading strategies from funded traders at our institute. Get access to our physical trading floor, in-person classes, and 1-on-1 mentorship.
            </p>

            <div className={styles.heroActions}>
              <GlowButton href="#education">Book a Campus Tour</GlowButton>
              <GlowButton href="#mentorship">Explore Offline Courses</GlowButton>
            </div>
          </motion.div>
        </section>


        {/* Live Ticker Marquee */}
        <div className={styles.tickerSection}>
          <Marquee speed={30}>
            {tradingPairs.map((pair, idx) => (
              <div key={idx} className={styles.tickerCard}>
                <span className={styles.tickerSymbol}>{pair.symbol}</span>
                <span className={styles.tickerPrice}>{pair.price}</span>
                <span className={pair.change.startsWith("+") ? styles.positiveChange : styles.negativeChange}>
                  {pair.change}
                </span>
              </div>
            ))}
          </Marquee>
        </div>


        {/* Built By Section */}
        <section className={styles.builtBySection}>
          <div className={styles.builtByContainer}>
            <div className={styles.builtByContent}>
              <h2 className={styles.builtByTitle}>Built by Traders,<br />for <a href="#mentorship" className="text-gradient" style={{ textDecoration: 'none', cursor: 'pointer' }}>Traders</a></h2>
              <p className={styles.builtByText}>
                We were tired of the &quot;gurus&quot; selling dreams without execution.
                Trade Pulse was founded by a collective of prop-firm funded traders
                with over a decade of institutional experience.
              </p>
              <ul className={styles.builtByList}>
                <li><i className="fa-solid fa-check" style={{ color: "#fff", marginRight: "10px" }}></i> Over $50M+ in collective funded capital</li>
                <li><i className="fa-solid fa-check" style={{ color: "#fff", marginRight: "10px" }}></i> 15,000+ Students Trained at our Institute</li>
                <li><i className="fa-solid fa-check" style={{ color: "#fff", marginRight: "10px" }}></i> 94% Prop Firm Pass Rate for Mentorship Students</li>
              </ul>
            </div>
            <div className={styles.builtByImageWrapper}>
              <img src="/owner.png" alt="Mentor" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center', display: 'block' }} />
            </div>
          </div>
        </section>


        {/* Education Center Section */}
        <section id="education" className={styles.educationCenterSection}>
          <h2 className={styles.educationCenterTitle}>Your <span className="text-gradient">Education</span> Center</h2>

          <div className={styles.educationGrid}>
            <div className={styles.educationContent}>
              <h3 className={styles.educationSubtitle}><span className="text-gradient">Global</span> Territories</h3>
              <p className={styles.educationText}>
                We invite you to join us for an upcoming in-person intro class at our campus. Our experienced instructors and staff are here to help you build skills and confidence as you progress in your financial education. As a Trade Pulse student, you'll become part of a community of traders and investors committed to excellence.
              </p>

              <div className={styles.educationContact}>

                <span className={styles.educationPhone}>Phone: +91 8927578901, +91 9422799531</span>
              </div>

              <GlowButton href="#workshops">Learn More</GlowButton>
            </div>

            <div className={styles.educationImageWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/pNhswVTg28U"
                title="Trade Pulse Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="reviews" className={styles.imgTestimonialsSection}>
          <h2 className={styles.imgTestimonialsTitle}>What Students <span className="text-gradient">Are Saying</span></h2>

          <div className={styles.videoSliderWrapper}>
            <VideoReviewsSlider />
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>
            <GlowButton href="https://www.youtube.com/@TRADEPULSE-n7p" target="_blank" rel="noopener noreferrer">View More Video Reviews</GlowButton>
          </div>
        </section>

        {/* Horizontal Promo Banner */}
        <section className={styles.promoSectionWrapper}>
          <div className={styles.horizontalPromoBanner}>
            <div className={styles.horizontalPromoLeft}>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase" }}>Get Our</p>
              <h2 className={styles.promoTitle} style={{ fontSize: "36px", marginBottom: "8px" }}><span className="text-gradient">Trade Pulse</span></h2>
              <p style={{ color: "#fff", fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>TRADING FLOOR ACCESS</p>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "32px" }}>Free access to our campus, just for attending</p>
              <GlowButton href="#workshops" className={styles.pulseGlowAnim}>Get Started Now</GlowButton>
            </div>
            <div className={styles.horizontalPromoRight}>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div className={styles.promoFeatureText}>Weekly<br />Stock<br />Trade<br />Samples</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
                </div>
                <div className={styles.promoFeatureText}>Weekly<br />Market<br />Updates</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                </div>
                <div className={styles.promoFeatureText}>Content<br />Updated<br />Weekly</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                </div>
                <div className={styles.promoFeatureText}>Bear<br />Market<br />Survival<br />Guide</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div className={styles.promoFeatureText}>Crypto<br />Mini<br />Lessons</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div className={styles.promoFeatureText}>And<br />Much<br />More</div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Banner Section */}


        {/* Path to Profitability Section */}




        {/* The Trending Standard Section */}
        {/* Workshop Section */}
        <section id="workshops" className={styles.workshopSection}>
          <div className={styles.workshopOverlay}></div>
          <div className={styles.workshopContent}>
            <h2 className={styles.workshopTitle}>World-Class Workshops & <span className="text-gradient">In-Person</span> Trading Sessions</h2>
            <p className={styles.workshopSubtitle}>
              Get First Access to our World-Class Workshops & In-Person Trading Sessions at our campus led by our expert team. These are designed to test your ability, assist you in your learning and make you a more competent trader.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '10px' }}>
              <GlowButton href="#contact" className={styles.pulseGlowAnim}>Join Now</GlowButton>
              <GlowButton href="tel:+918927578901">Call Us Now</GlowButton>
            </div>
          </div>
        </section>

        {/* Mentorship Paths Section */}


        {/* --- NEW SECTIONS --- */}


        {/* Why Attend Section */}
        {/* <section className={styles.whyAttendSection}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>WHY ATTEND THIS <span className="text-gradient">WORKSHOP?</span></h2>
          </div>
          <div className={styles.whyAttendGrid}>
            <div className={styles.gradientCardBase}>
              <div className={styles.whyCardIcon}><i className="fa-solid fa-robot"></i></div>
              <div className={styles.whyCardText}>Get a comprehensive breakdown of institutional trading concepts and how to apply them to your daily trading</div>
            </div>
            <div className={styles.gradientCardBase}>
              <div className={styles.whyCardIcon}><i className="fa-solid fa-chart-line"></i></div>
              <div className={styles.whyCardText}>Learn to practically backtest your strategies, manage risk, and identify high-probability trade setups</div>
            </div>
            <div className={styles.gradientCardBase}>
              <div className={styles.whyCardIcon}><i className="fa-solid fa-stopwatch"></i></div>
              <div className={styles.whyCardText}>Learn to fully automate the Data collection, formatting & analysis loop to save your time</div>
            </div>
            <div className={styles.gradientCardBase}>
              <div className={styles.whyCardIcon}><i className="fa-solid fa-bullseye"></i></div>
              <div className={styles.whyCardText}>Setting Alerts on Telegram to notify you when the stock comes to your buying zones</div>
            </div>
            <div className={styles.gradientCardBase}>
              <div className={styles.whyCardIcon}><i className="fa-solid fa-brain"></i></div>
              <div className={styles.whyCardText}>Learn to manage multiple trades with emotional and psychological stability</div>
            </div>
            <div className={styles.gradientCardBase}>
              <div className={styles.whyCardIcon}><i className="fa-solid fa-briefcase"></i></div>
              <div className={styles.whyCardText}>Automating P&L Tracking and Journaling Process for Professional & structured Traders</div>
            </div>
          </div>
        </section> */}


        {/* How Education Will Change Section */}
        <section className={styles.aiChangeSection}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>Here&apos;s How Proper Education Will Change <span className="text-gradient">Your Trading Journey</span></h2>
          </div>
          <div className={styles.aiChangeList}>
            <div className={styles.aiChangeCard}>
              <h3 className={styles.aiChangeCardTitle}>Structured Learning Path</h3>
              <p className={styles.aiChangeCardText}>Stop guessing and jumping between strategies. Our curriculum gives you a clear, step-by-step roadmap from market basics to advanced institutional concepts.</p>
            </div>
            <div className={styles.aiChangeCard}>
              <h3 className={styles.aiChangeCardTitle}>Real-Time Market Analysis</h3>
              <p className={styles.aiChangeCardText}>Theory is nothing without execution. Learn to analyze live charts, manage risk properly, and execute trades with confidence in real market conditions.</p>
            </div>
            <div className={styles.aiChangeCard}>
              <h3 className={styles.aiChangeCardTitle}>1-on-1 Mentorship & Support</h3>
              <p className={styles.aiChangeCardText}>You are never alone in your journey. Get direct feedback, personalized trade reviews, and daily guidance from prop-firm funded traders.</p>
            </div>
          </div>
          <GlowButton href="#mentorship">Join the Trading Masterclass</GlowButton>
        </section>

        {/* Bundle Section */}
        <section id="bonuses" className={styles.bundleSection}>
          <div className={styles.bundleHighlight}>Get the Trading & Mentorship Bundle Now</div>
          <h2 className={styles.sectionTitle}>Immediate Access to <span className="text-gradient">Premium Bonuses</span></h2>

          <div className={styles.bundleGrid}>
            <div className={styles.bundleCard}>
              <div className={styles.bundleBadge}>Bonus 1</div>
              <div className={styles.bundleCardIcon}><i className="fa-solid fa-arrow-trend-up"></i></div>
              <h3 className={styles.bundleCardTitle}>Free Financial Literacy</h3>
              <p className={styles.bundleCardText}>Learn to manage your personal finances and how to invest intelligently to compound your money over time.</p>
            </div>
            <div className={styles.bundleCard}>
              <div className={styles.bundleBadge}>Bonus 2</div>
              <div className={styles.bundleCardIcon}><i className="fa-solid fa-clipboard-list"></i></div>
              <h3 className={styles.bundleCardTitle}>4-Step Ultimate Guide to Trading Psychology & Discipline</h3>
              <p className={styles.bundleCardText}>Get a step-by-step PDF guide detailing the exact routines, risk management rules, and psychological frameworks used by professional traders.</p>
            </div>
            <div className={styles.bundleCard}>
              <div className={styles.bundleBadge}>Bonus 3</div>
              <div className={styles.bundleCardIcon}><i className="fa-solid fa-link"></i></div>
              <h3 className={styles.bundleCardTitle}>A Premium Excel Document of Data sources for Analysis</h3>
              <p className={styles.bundleCardText}>Get the curated list of top data sources and API endpoints that professional quants use for analysis.</p>
            </div>
            <div className={styles.bundleCard}>
              <div className={styles.bundleBadge}>Bonus 4</div>
              <div className={styles.bundleCardIcon}><i className="fa-solid fa-wand-magic-sparkles"></i></div>
              <h3 className={styles.bundleCardTitle}>Technical Analysis Mastery Guide</h3>
              <p className={styles.bundleCardText}>Start from zero. Everything you need to know about reading price action, identifying key levels, and executing trades.</p>
            </div>
          </div>


          <GlowButton href="#contact">Register now to claim your spot</GlowButton>
        </section>

        {/* Empower Section */}
        <section className={styles.empowerSection}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle} style={{ fontSize: "24px", letterSpacing: "1px" }}>THIS WORKSHOP WILL EMPOWER YOU TO 👇</h2>
          </div>

          <div className={styles.empowerGridTop}>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>Learn exactly how to read price action and institutional order flow</div>
            </div>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>Leverage Top LLMs to Analyze your Stock Portfolio quickly</div>
            </div>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>Build mechanical trading plans with strict entry and exit criteria</div>
            </div>
          </div>

          <div className={styles.empowerGridBottom}>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>Screen thousands of Stocks using fundamental criteria in a fraction of the time</div>
            </div>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>The exact risk management rules required to preserve capital and grow your account</div>
            </div>
          </div>
        </section>





        {/* --- END NEW SECTIONS --- */}



        <section id="contact" className={styles.contactSection}>
          <div className={styles.formContainerWide}>
            <div className={styles.formTitleRow}>
              <div className={styles.formTitleLine}></div>
              <h2 className={styles.formTitleText}>Enquire to <span className="text-gradient">Learn Trading</span></h2>
              <div className={styles.formTitleLineRight}></div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGrid3}>

                {/* Row 1 */}
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <input type="text" className={styles.formInputLine} placeholder="Name" />
                </div>
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <input type="tel" className={styles.formInputLine} placeholder="Phone no." />
                </div>
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <input type="email" className={styles.formInputLine} placeholder="Email Address" />
                </div>

                {/* Row 2 */}
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
                  <input type="text" className={styles.formInputLine} placeholder="Years of Trading Experience" />
                </div>
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  <select className={styles.formInputLine} defaultValue="">
                    <option value="" disabled>-- Select Program --</option>
                    <option value="beginner">Beginner Bootcamp</option>
                    <option value="mentorship">1-on-1 Mentorship</option>
                    <option value="propfirm">Prop Firm Challenge Prep</option>
                  </select>
                </div>
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <input type="text" className={styles.formInputLine} placeholder="Preferred Contact Time" />
                </div>

                {/* Row 3 */}
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <input type="text" className={styles.formInputLine} placeholder="dd-mm-yyyy (Preferred Start Date)" />
                </div>
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <input type="text" className={styles.formInputLine} placeholder="Country / Timezone" />
                </div>
                <div className={styles.formGroupLine}>
                  <svg className={styles.formInputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  <input type="text" className={styles.formInputLine} placeholder="Primary Trading Goal" />
                </div>

              </div>

              <div className={styles.formCheckboxRow}>
                <input type="checkbox" id="privacyConsent" className={styles.formCheckbox} />
                <label htmlFor="privacyConsent" className={styles.formCheckboxText}>
                  I have read and agree to the Privacy Policy and Terms & Conditions.
                </label>
              </div>

              <div className={styles.formSubmitCenter}>
                <GlowButton type="submit" className={styles.pulseGlowAnim}>SUBMIT</GlowButton>
              </div>
            </form>
          </div>
        </section>


      </main>
    </>
  );
}
