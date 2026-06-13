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
    text: <>Welcome to the heart of Trade Pulse—a behind the scenes look at the people, programs and perspectives that are the pulse of the company. We are glad you found us. Meet our amazing staff, instructors and students, check out their contributions, and get inspired. As you explore, you will see that we put love at the core of everything we do from helping our students become confident traders, to our inspirational instructors, our network of centers, our happy employees, the community, and beyond.<br/><br/>Together we are relentlessly committed to making a difference and enriching lives!</>
  },
  perspectives: {
    title: "Our Perspectives",
    text: <>Dive into our unique approach to the financial markets. We believe in providing actionable insights, data-driven analysis, and a realistic view of trading. Our perspectives are forged from years of institutional experience, cutting through the noise of social media "gurus".<br/><br/>We are dedicated to equipping our members with the mental frameworks and strategic understanding necessary to navigate volatile markets with clarity.</>
  },
  commitment: {
    title: "Relentless Commitment",
    text: <>Our top priority is our students. We invest relentlessly in our education, services, products, technologies, support, and community. We understand that trading is a challenging journey, which is why we provide an unparalleled support system designed to catch you when you stumble.<br/><br/>Your success is our success, and we won't stop until you achieve your trading goals.</>
  },
  research: {
    title: "Our Research Center",
    text: <>The Trade Pulse Research Center is the engine room of our strategies. Our team of quantitative analysts and seasoned traders constantly backtest new concepts, analyze market micro-structure, and develop proprietary indicators.<br/><br/>Members get exclusive access to our ongoing research, helping them stay ahead of the curve in an ever-evolving financial landscape.</>
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
              <h2 className={styles.builtByTitle}>Built by Traders,<br/>for <span style={{color: "#f59e0b"}}>Traders</span></h2>
              <p className={styles.builtByText}>
                We were tired of the &quot;gurus&quot; selling dreams without execution. 
                Trade Pulse was founded by a collective of prop-firm funded traders 
                with over a decade of institutional experience.
              </p>
              <ul className={styles.builtByList}>
                <li><i className="fa-solid fa-check" style={{color: "#fff", marginRight: "10px"}}></i> Over $50M+ in collective funded capital</li>
                <li><i className="fa-solid fa-check" style={{color: "#fff", marginRight: "10px"}}></i> 15,000+ Students Trained at our Institute</li>
                <li><i className="fa-solid fa-check" style={{color: "#fff", marginRight: "10px"}}></i> 94% Prop Firm Pass Rate for Mentorship Students</li>
              </ul>
            </div>
            <div className={styles.builtByImageWrapper}>
              <Image src="/owner.png" alt="Mentor" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
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
                <div className={styles.educationAvatar}>
                  <Image src="/bento_mentorship.png" alt="Support" fill style={{ objectFit: 'cover' }} />
                </div>
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
          
          <div className={styles.imgTestimonialsGrid}>
            <div className={styles.imgTestimonialCard}>
              <div className={styles.imgTestimonialBg}>
                <Image src="/test_indian_4.png" alt="Nitin K." fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div className={styles.imgTestimonialOverlay}></div>
              <div className={styles.imgTestimonialContent}>
                <div className={styles.imgTestimonialQuote}>
                  <span className={styles.imgTestimonialQuoteIcon}>&ldquo;</span>
                  TRADE PLUS IS ONE OF MOST EXCELLENT TRADING INSTITUTION RUN BY DR.SUPRATIM GHOSH.I HAVE IMPROVED A LOT FROM SIR'S STRATEGY and his experience and logic.first learn and then Earn.
                  <span className={styles.imgTestimonialQuoteIcon}>&rdquo;</span>
                </div>
                <div className={styles.imgTestimonialName}>Nitin Keshwani</div>
              </div>
            </div>
            
            <div className={styles.imgTestimonialCard}>
              <div className={styles.imgTestimonialBg}>
                <Image src="/test_indian_1.png" alt="Bishal D." fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div className={styles.imgTestimonialOverlay}></div>
              <div className={styles.imgTestimonialContent}>
                <div className={styles.imgTestimonialQuote}>
                  <span className={styles.imgTestimonialQuoteIcon}>&ldquo;</span>
                  Mind blowing experience at Trade Pulse learned a lot from Supratim sir he is superb he is very friendly and supportive. before joining Trade Pulse i made some losses but after joining with sir my loses are very limited and i am in a profitable stage right now and he gave me the confidence how to take trade without fear soo Over all my experience is outstanding
                  <span className={styles.imgTestimonialQuoteIcon}>&rdquo;</span>
                </div>
                <div className={styles.imgTestimonialName}>Bishal Das</div>
              </div>
            </div>
            
            <div className={styles.imgTestimonialCard}>
              <div className={styles.imgTestimonialBg}>
                <Image src="/test_rohan.png" alt="Rohan D." fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div className={styles.imgTestimonialOverlay}></div>
              <div className={styles.imgTestimonialContent}>
                <div className={styles.imgTestimonialQuote}>
                  <span className={styles.imgTestimonialQuoteIcon}>&ldquo;</span>
                  Hi everyone .Attended the trader conclave for 5 day wef 23 May 2026.Its really an amazing eyeopener for all of us .The mentors Dr Supratim is really an wizard He really understand problem of every individual so closely and gives tailor made solution
                  <span className={styles.imgTestimonialQuoteIcon}>&rdquo;</span>
                </div>
                <div className={styles.imgTestimonialName}>Chakradhar Sahoo</div>
              </div>
            </div>
            
            <div className={styles.imgTestimonialCard}>
              <div className={styles.imgTestimonialBg}>
                <Image src="/test_indian_2.png" alt="Debabrata S." fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div className={styles.imgTestimonialOverlay}></div>
              <div className={styles.imgTestimonialContent}>
                <div className={styles.imgTestimonialQuote}>
                  <span className={styles.imgTestimonialQuoteIcon}>&ldquo;</span>
                  Enjoying as a pro trader with decipline Thanks to My Mentor Dr.Suprratim Sir .Realy simple strategy make me as chalte phirte ATM . Definately one day you will be a financial freedom after learning from My Mentor's strategy. Jay Jagannath 🙏🙏🙏
                  <span className={styles.imgTestimonialQuoteIcon}>&rdquo;</span>
                </div>
                <div className={styles.imgTestimonialName}>Debabrata Sahu</div>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>
            <GlowButton href="https://www.google.com/maps/place/TRADE+PULSE/@22.5729837,88.4303058,17z/data=!4m8!3m7!1s0x3a02753815cd4d29:0x727a891dcd94364!8m2!3d22.5729837!4d88.4303058!9m1!1b1!16s%2Fg%2F11z74_r7nf!5m1!1e1!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">View More Reviews</GlowButton>
          </div>

          {/* <div className={styles.videoSliderWrapper}>
            <VideoReviewsSlider />
          </div> */}
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
                <div className={styles.promoFeatureText}>Weekly<br/>Stock<br/>Trade<br/>Samples</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
                </div>
                <div className={styles.promoFeatureText}>Weekly<br/>Market<br/>Updates</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                </div>
                <div className={styles.promoFeatureText}>Content<br/>Updated<br/>Weekly</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                </div>
                <div className={styles.promoFeatureText}>Bear<br/>Market<br/>Survival<br/>Guide</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div className={styles.promoFeatureText}>Crypto<br/>Mini<br/>Lessons</div>
              </div>
              <div className={styles.promoFeature}>
                <div className={styles.promoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div className={styles.promoFeatureText}>And<br/>Much<br/>More</div>
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
            <GlowButton href="#contact" className={styles.pulseGlowAnim}>Join Now</GlowButton>
          </div>
        </section>

        {/* Mentorship Paths Section */}
        <section id="mentorship" className={styles.mentorshipSection}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>Chakravyuh <span className="text-gradient">Programs.</span></h2>
            <p className={styles.sectionSubtitle}>Two structured paths — from a complete trading system to an intensive 1-year mentorship.</p>
          </div>
          
          <div className={styles.mentorshipGrid}>
            {/* Chakravyuh 1.0 */}
            <div className={`${styles.mentorshipCard} ${styles.shineMoveAnim}`}>
              <div className={styles.mentorshipHeader}>
                <div className={styles.mentorshipIconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <div className={styles.mentorshipTitles}>
                  <h3 className={styles.mentorshipCardTitle}><span className="text-gradient">CHAKRAVYUH</span> 1.0</h3>
                  <p className={styles.mentorshipCardSubtitle}>5 Part Complete Trading System</p>
                  <p className={styles.mentorshipCardDuration}>Comprehensive Foundation</p>
                </div>
              </div>
              <div className={styles.mentorshipPriceArea}>
                <div className={styles.mentorshipCurrentPrice}>
                  ₹29,932.00 <span className={styles.currency}>INR</span>
                </div>
              </div>
              <ul className={styles.mentorshipFeatures}>
                <li><span className={styles.checkIcon}>1</span> <span><b>Basic:</b> Build a strong foundation</span></li>
                <li><span className={styles.checkIcon}>2</span> <span><b>Analysis:</b> Learn to read the market</span></li>
                <li><span className={styles.checkIcon}>3</span> <span><b>Strategy:</b> Develop winning strategies</span></li>
                <li><span className={styles.checkIcon}>4</span> <span><b>Risk Management:</b> Protect your capital, trade with confidence</span></li>
                <li><span className={styles.checkIcon}>5</span> <span><b>Trader&apos;s Psychology:</b> Master your mindset, master the market</span></li>
                <li className={styles.moreDetails} style={{ fontStyle: 'italic', marginTop: '16px', color: 'var(--accent-primary)' }}>&quot;We don&apos;t predict the market. We prepare for it.&quot;</li>
              </ul>
              <GlowButton href="#contact">EXPLORE CHAKRAVYUH 1.0</GlowButton>
            </div>
            
            {/* Chakravyuh 2.0 */}
            <div className={`${styles.mentorshipCard} ${styles.eliteCard} ${styles.shineMoveAnim}`}>
              <div className={styles.mentorshipHeader}>
                <div className={`${styles.mentorshipIconWrapper} ${styles.eliteIcon}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <div className={styles.mentorshipTitles}>
                  <h3 className={styles.mentorshipCardTitle}><span className="text-gradient">OPTION CHAKRAVYUH</span> 2.0</h3>
                  <p className={`${styles.mentorshipCardSubtitle} ${styles.eliteSubtitle}`}>1 Year Mentorship Program</p>
                  <p className={styles.mentorshipCardDuration}>1 Year Intensive Program</p>
                </div>
              </div>
              <div className={styles.mentorshipPriceArea}>
                <div className={`${styles.mentorshipCurrentPrice} ${styles.elitePrice}`}>
                  ₹99,935.00 <span className={styles.currency}>INR</span>
                </div>
              </div>
              <ul className={`${styles.mentorshipFeatures} ${styles.eliteFeatures}`}>
                <li><span className={styles.checkIcon}>✓</span> <span><b>Classes 5 Days/Week:</b> Market Session (Live) &amp; Evening Strategy Session</span></li>
                <li><span className={styles.checkIcon}>✓</span> <span><b>Offline Elite Meetup:</b> Every 2 Months</span></li>
                <li><span className={styles.checkIcon}>✓</span> <span><b>Live Trading:</b> With big size capital after 3 months</span></li>
                <li><span className={styles.checkIcon}>✓</span> <span><b>Exclusivity:</b> Designed for Serious Traders Only</span></li>
                <li><span className={styles.checkIcon}>✓</span> <span><b>Only 30 Seats:</b> Mandatory Entrance Test</span></li>
              </ul>
              <GlowButton href="#contact">APPLY FOR CHAKRAVYUH 2.0</GlowButton>
            </div>
          </div>
        </section>

                {/* --- NEW SECTIONS --- */}
        
        {/* AI Tools Section */}
        <section className={styles.aiToolsSection}>
          <h3 className={styles.aiToolsTitle}>The AI tools & APIs that you will learn about in Our Trading & Investing Framework</h3>
          <div className={styles.aiToolsGrid}>
            <div className={styles.aiToolLogo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              OpenAI
            </div>
            <div className={styles.aiToolLogo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              Perplexity
            </div>
            <div className={styles.aiToolLogo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
              Gemini
            </div>
            <div className={styles.aiToolLogo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              Meta
            </div>
            <div className={styles.aiToolLogo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              Claude
            </div>
          </div>
        </section>

        {/* Why Attend Section */}
        <section className={styles.whyAttendSection}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>WHY ATTEND THIS <span className="text-gradient">WORKSHOP?</span></h2>
          </div>
          <div className={styles.whyAttendGrid}>
            <div className={styles.gradientCardBase}>
              <div className={styles.whyCardIcon}><i className="fa-solid fa-robot"></i></div>
              <div className={styles.whyCardText}>Get a comprehensive list of AI tools for trading, their functions and the best ways to use them</div>
            </div>
            <div className={styles.gradientCardBase}>
              <div className={styles.whyCardIcon}><i className="fa-solid fa-chart-line"></i></div>
              <div className={styles.whyCardText}>Learn to practically format data & train AI bots with your Trading Setup for stock analysis</div>
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
          <GlowButton href="#contact">Become an AI Financial Analyst @ ₹499</GlowButton>
        </section>

        {/* Results Section */}
        <section className={styles.resultsSection}>
          <div className={styles.sectionHeaderCentered}>
            <div style={{ color: "#f59e0b", letterSpacing: "2px", fontWeight: "700", marginBottom: "8px" }}>★★★★★</div>
            <h2 className={styles.sectionTitle}>CHECK OUT <span className="text-gradient">OUR RESULTS...</span></h2>
            <p className={styles.sectionSubtitle}>Here is how Trade Pulse AI Trading framework changes the game.</p>
          </div>
          
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}><i className="fa-solid fa-microchip" style={{ color: "#10b981" }}></i></div>
              <h3 className={styles.resultTitle}>Before learning AI framework for Stock Analysis</h3>
              <p className={styles.resultText}>You have an unorganized approach and struggle with finding stocks, analyzing charts, and staying updated with news & fundamentals.</p>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}><i className="fa-solid fa-money-bill-trend-up" style={{ color: "#f59e0b" }}></i></div>
              <h3 className={styles.resultTitle}>After learning AI in Trading</h3>
              <p className={styles.resultText}>You have AI systems in place which scan sectors & stocks, automatically analyze their technicals & fundamentals and deliver ready reports!</p>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultIcon}><i className="fa-solid fa-rocket" style={{ color: "#f59e0b" }}></i></div>
              <h3 className={styles.resultTitle}>Overall, <span className={styles.resultHighlight}>You Will Become an AI Empowered Trader...</span></h3>
              <p className={styles.resultText}>Your trading gets organized, you execute with clarity, manage risks better, and ultimately improve your strike rate to become consistent.</p>
            </div>
          </div>
        </section>

        {/* How AI Will Change Section */}
        <section className={styles.aiChangeSection}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>Here&apos;s How AI Will Change <span className="text-gradient">Investing & Trading Forever</span></h2>
          </div>
          <div className={styles.aiChangeList}>
            <div className={styles.aiChangeCard}>
              <h3 className={styles.aiChangeCardTitle}>Massive Time & Effort Reduction</h3>
              <p className={styles.aiChangeCardText}>What used to take hours of manual scanning, chart reading, and fundamental analysis can now be done in seconds by training customized AI models, freeing you up to focus on execution.</p>
            </div>
            <div className={styles.aiChangeCard}>
              <h3 className={styles.aiChangeCardTitle}>AI-Driven AI Powered Investing is The Future</h3>
              <p className={styles.aiChangeCardText}>The Market is filled with Noise. AI filters out the irrelevant data and gives you exactly what you need to know for your strategy.</p>
            </div>
            <div className={styles.aiChangeCard}>
              <h3 className={styles.aiChangeCardTitle}>Custom AI Assistant on your side</h3>
              <p className={styles.aiChangeCardText}>Imagine having a financial analyst working for you 24/7. AI doesn&apos;t just scan; it understands your specific criteria and notifies you only when a high-probability setup occurs.</p>
            </div>
          </div>
          <GlowButton href="#contact">Become an AI Financial Analyst @ ₹499</GlowButton>
        </section>

        {/* Bundle Section */}
        <section className={styles.bundleSection}>
          <div className={styles.bundleHighlight}>Get Trading & Investing in AI Bundle Now</div>
          <h2 className={styles.sectionTitle}>Immediate Access to bonuses Worth <span style={{color: "#f59e0b", textDecoration: "line-through"}}>₹49,999</span><br/>Now only <span style={{color: "#10b981"}}>₹499</span></h2>
          
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
              <h3 className={styles.bundleCardTitle}>4 Steps Ultimate Guide on AI prompt writing Framework</h3>
              <p className={styles.bundleCardText}>Get a step-by-step PDF guide with 200+ Prompts tailored specifically for stock analysis and algorithmic testing.</p>
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
              <h3 className={styles.bundleCardTitle}>AI For Beginners 2024: A Free learning Resource</h3>
              <p className={styles.bundleCardText}>Start from zero. Everything you need to know about Generative AI, LLMs, and how to effectively use them.</p>
            </div>
          </div>
          
          <p style={{fontSize: "14px", color: "#cbd5e1", marginBottom: "20px"}}>Unlock Your Bonus worth Rs 49,999 Plus Recording of the Masterclass</p>
          <GlowButton href="#contact">Register now to claim early bird pricing @ ₹499</GlowButton>
        </section>

        {/* Empower Section */}
        <section className={styles.empowerSection}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle} style={{fontSize: "24px", letterSpacing: "1px"}}>THIS WORKSHOP WILL EMPOWER YOU TO 👇</h2>
          </div>
          
          <div className={styles.empowerGridTop}>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>Learn exactly how to interact with AI models for Trading</div>
            </div>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>Leverage Top LLMs to Analyze your Stock Portfolio quickly</div>
            </div>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>Set automated AI triggers on Telegram for entry opportunities</div>
            </div>
          </div>
          
          <div className={styles.empowerGridBottom}>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>Screen thousands of Stocks using fundamental criteria in a fraction of the time</div>
            </div>
            <div className={styles.empowerCard}>
              <div className={styles.empowerIcon}><i className="fa-solid fa-check"></i></div>
              <div className={styles.empowerText}>The exact Prompts required to train the AI as per your Custom Strategy & Rules</div>
            </div>
          </div>
        </section>

        {/* Decision Section */}
        <section className={styles.decisionSection}>
          <h2 className={styles.decisionTitle}>THE DECISION IS YOURS TO MAKE...</h2>
          <p className={styles.decisionSubtitle}>Are You Ready To Trade Faster, Smarter & Without Emotions? Join The Waitlist for our next class!</p>
          <GlowButton href="#contact">Register for the Live Masterclass @ ₹499</GlowButton>
          <p style={{fontSize: "14px", color: "#cbd5e1", marginTop: "20px"}}>Don&apos;t wait! AI is evolving fast. By joining now, you get an early-mover advantage in trading technology.</p>
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
