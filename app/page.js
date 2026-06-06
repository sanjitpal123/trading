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
  { question: "Are the live sessions recorded?", answer: "Yes, all NY session live streams are recorded and uploaded to the vault within 2 hours." },
  { question: "What markets do you trade?", answer: "Our strategies apply to all high-liquidity markets: Forex, Crypto, Indices, and Commodities." },
  { question: "Can I cancel my subscription?", answer: "Yes, you can cancel at any time from your dashboard, no questions asked." }
];

const testimonials = [
  { name: "Sarah J.", handle: "@sarah_trades", review: "Passed my $100k prop firm challenge in just 3 weeks after taking the Liquidity Concepts course.", avatar: "👩‍💼", role: "Funded Trader" },
  { name: "Michael T.", handle: "@mike_fx", review: "The NY session live streams are a cheat code. Seeing a 7-figure trader execute live completely fixed my psychology.", avatar: "👨‍💻", role: "Pro Member" },
  { name: "David L.", handle: "@dave_crypto", review: "I was stuck in a break-even cycle for years. The advanced risk management calculator finally got me profitable.", avatar: "👨‍💼", role: "Funded Trader" }
];

const companyTabData = {
  company: {
    title: "Our Company",
    text: <>Welcome to the heart of Trade Pulse Traders Institute—a behind the scenes look at the people, programs and perspectives that are the pulse of the company. We are glad you found us. Meet our amazing staff, instructors and students, check out their contributions, and get inspired. As you explore, you will see that we put love at the core of everything we do from helping our students become confident traders, to our inspirational instructors, our network of centers, our happy employees, the community, and beyond.<br/><br/>Together we are relentlessly committed to making a difference and enriching lives!</>
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
    text: <>The Trade Pulse Traders Institute Research Center is the engine room of our strategies. Our team of quantitative analysts and seasoned traders constantly backtest new concepts, analyze market micro-structure, and develop proprietary indicators.<br/><br/>Members get exclusive access to our ongoing research, helping them stay ahead of the curve in an ever-evolving financial landscape.</>
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
          <FloatingCoins />
          
          <div className={styles.heroBgImage}>
            <Image src="/hero_bg.png" alt="Trading Background" fill style={{ objectFit: 'cover', opacity: 0.4 }} priority />
            <div className={styles.heroBgGradient}></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.heroContent}
          >
            <div className={styles.badgeWrapper}>
              <span className={styles.heroBadge}>
                <span className={styles.pulseDot}></span>
                Live Trading Floor Now Open
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Master the Markets with <br />
              <span className="text-gradient">Trade Pulse Traders Institute</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Learn institutional trading strategies from funded traders. Get access to our proprietary indicators, live sessions, and 1-on-1 mentorship.
            </p>
            
            <div className={styles.heroActions}>
              <GlowButton>Start Learning for Free</GlowButton>
              <GlowButton>Explore Courses</GlowButton>
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

        {/* Education Center Section */}
        <section id="education" className={styles.educationCenterSection}>
          <h2 className={styles.educationCenterTitle}>Your <span className="text-gradient">Education</span> Center</h2>
          
          <div className={styles.educationGrid}>
            <div className={styles.educationContent}>
              <h3 className={styles.educationSubtitle}><span className="text-gradient">Global</span> Territories</h3>
              <p className={styles.educationText}>
                We invite you to join us for an upcoming intro class. Our experienced instructors and staff are here to help you build skills and confidence as you progress in your financial education. As a Trade Pulse Traders Institute student, you'll become part of a community of traders and investors committed to excellence.
              </p>
              
              <div className={styles.educationContact}>
                <div className={styles.educationAvatar}>
                  <Image src="/bento_mentorship.png" alt="Support" fill style={{ objectFit: 'cover' }} />
                </div>
                <span className={styles.educationPhone}>Phone: 8927578901</span>
              </div>
              
              <GlowButton>Learn More</GlowButton>
            </div>
            
            <div className={styles.educationImageWrapper}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/pNhswVTg28U" 
                title="Trade Pulse Traders Institute Video" 
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
                <Image src="/test_mac.png" alt="Mac C." fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgTestimonialOverlay}></div>
              <div className={styles.imgTestimonialContent}>
                <div className={styles.imgTestimonialQuote}>
                  <span className={styles.imgTestimonialQuoteIcon}>&ldquo;</span>
                  Trade Pulse Traders Institute provides education for any kind of market. Up, down or sideways.
                  <span style={{ alignSelf: 'flex-end' }} className={styles.imgTestimonialQuoteIcon}>&rdquo;</span>
                </div>
                <div className={styles.imgTestimonialName}>Mac C.</div>
              </div>
            </div>
            
            <div className={styles.imgTestimonialCard}>
              <div className={styles.imgTestimonialBg}>
                <Image src="/test_melanie.png" alt="Melanie T." fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgTestimonialOverlay}></div>
              <div className={styles.imgTestimonialContent}>
                <div className={styles.imgTestimonialQuote}>
                  <span className={styles.imgTestimonialQuoteIcon}>&ldquo;</span>
                  Trade Pulse Traders Institute does a fabulous job of taking you through step-by-step. It is about educating you for life, not just for the minute.
                  <span style={{ alignSelf: 'flex-end' }} className={styles.imgTestimonialQuoteIcon}>&rdquo;</span>
                </div>
                <div className={styles.imgTestimonialName}>Melanie T.</div>
              </div>
            </div>
            
            <div className={styles.imgTestimonialCard}>
              <div className={styles.imgTestimonialBg}>
                <Image src="/test_mark.png" alt="Mark J." fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgTestimonialOverlay}></div>
              <div className={styles.imgTestimonialContent}>
                <div className={styles.imgTestimonialQuote}>
                  <span className={styles.imgTestimonialQuoteIcon}>&ldquo;</span>
                  The most important place you should invest in is yourself.
                  <span style={{ alignSelf: 'flex-end' }} className={styles.imgTestimonialQuoteIcon}>&rdquo;</span>
                </div>
                <div className={styles.imgTestimonialName}>Mark J.</div>
              </div>
            </div>
            
            <div className={styles.imgTestimonialCard}>
              <div className={styles.imgTestimonialBg}>
                <Image src="/test_beatriz.png" alt="Beatriz P." fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgTestimonialOverlay}></div>
              <div className={styles.imgTestimonialContent}>
                <div className={styles.imgTestimonialQuote}>
                  <span className={styles.imgTestimonialQuoteIcon}>&ldquo;</span>
                  I will say that Trade Pulse Traders Institute was a great investment.
                  <span style={{ alignSelf: 'flex-end' }} className={styles.imgTestimonialQuoteIcon}>&rdquo;</span>
                </div>
                <div className={styles.imgTestimonialName}>Beatriz P.</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "64px", marginBottom: "32px" }}>
            <VideoReviewsSlider />
          </div>
        </section>

        {/* Horizontal Promo Banner */}
        <section style={{ width: '100%', maxWidth: '1200px', margin: '0 auto 64px', padding: '0 24px' }}>
          <div className={styles.horizontalPromoBanner}>
            <div className={styles.horizontalPromoLeft}>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase" }}>Get Our</p>
              <h2 className={styles.promoTitle} style={{ fontSize: "36px", marginBottom: "8px" }}><span className="text-gradient">Trade Pulse</span> Traders Institute</h2>
              <p style={{ color: "#fff", fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>MEMBER PORTAL</p>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "32px" }}>Free access, just for attending</p>
              <GlowButton className={styles.pulseGlowAnim}>Get Started Now</GlowButton>
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
        
        {/* Transparency Section */}
        <section className={styles.transparencySection}>
          <div className={styles.transparencyHeader}>
            <h2 className={styles.transparencyTitle}>
              <span className="text-gradient">Transparency</span> Is Everything
            </h2>
            <p className={styles.transparencySubtitle}>
              Every trade we take is shown inside the group along with a broker confirmation. This allows you to see that we really do what we say we do. Openness is a principle we uphold to the highest standard.
            </p>
          </div>
          
          <div className={styles.transparencyGrid}>
            <div className={styles.transparencyCard}>
              <div className={styles.transparencyImages}>
                <div className={styles.transparencyImgWrapper}>
                  <Image src="/discord_trade_screenshot_2.png" alt="Trade 1" fill style={{ objectFit: 'cover', objectPosition: 'top' }} className={styles.floatAnim} />
                </div>
                <div className={styles.transparencyImgWrapper}>
                  <Image src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=600&q=80" alt="Trade 2" fill style={{ objectFit: 'cover' }} className={styles.floatAnim} />
                </div>
              </div>
              <h3 className={styles.transparencyCardTitle}><span className="text-gradient">Team</span> Trades</h3>
              <p className={styles.transparencyCardText}>
                Every team trade is shared inside the Team Trades channel on Discord, giving you full transparency into every trade we're executing. You'll see the trades we take in real time, complete with markups, analysis, and broker screenshots. You can understand the narrative behind each move. Whether it's a win, break-even, or loss, it's all there. We believe in showing the full picture, because openness and honesty aren't just values, they're the standard we hold ourselves to.
              </p>
            </div>
            
            <div className={styles.transparencyPhoneCol}>
              <div className={styles.phoneGlow}></div>
              <div className={styles.phoneWrapper}>
                <Image src="/discord_trade_screenshot.png" alt="Discord Trading Post" fill style={{ objectFit: 'cover', objectPosition: 'top' }} className={styles.floatAnim} />
              </div>
            </div>
          </div>
        </section>

<section className={styles.pathSection}>
          <div className={styles.pathHeader}>
            <h2 className={styles.pathTitle}>
              Your Path to Consistent Profitability <span className="text-gradient">Starts Here</span>
            </h2>
            <p className={styles.pathSubtitle}>
              We Teach the Complete Framework to Turn Unprofitable Traders into Consistent Profitable Traders.
            </p>
          </div>
          
          <div className={styles.pathGrid}>
            <div className={styles.pathCard}>
              <div className={styles.pathImageWrapper}>
                <Image src="/bento_chart.png" alt="Live Trading Sessions" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 className={styles.pathCardTitle}><span className="text-gradient">Live</span> Trading Sessions</h3>
              <p className={styles.pathCardSubtitle}>Trade the markets live with the Envision Team</p>
              <p className={styles.pathCardText}>
                Every week we host a live trading session where you will be able to tape-read and execute live with us. You'll gain a front-row seat to our thinking process, real-time decision-making and trade management.
              </p>
              <p className={styles.pathCardText}>
                Watch, observe and ask questions. This is an opportunity for you to drastically speed up your learning curve, by watching what we're doing and how we're doing it.
              </p>
            </div>
            
            <div className={styles.pathCard}>
              <div className={styles.pathImageWrapper}>
                <Image src="/bento_indicators.png" alt="12-Week Funding Accelerator" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 className={styles.pathCardTitle}><span className="text-gradient">12-Week</span> Funding Accelerator</h3>
              <p className={styles.pathCardSubtitle}>A Structured Roadmap to Get You Ready For Funding</p>
              <p className={styles.pathCardText}>
                The 12-week accelerator is designed to take everything you've learnt in the core content and turn it into a clear path towards funding and consistency.
              </p>
              <p className={styles.pathCardText}>
                Inside the program you'll gain access to an exclusive training program featuring further advanced concepts, helping you sharpen your understanding of price action, time and execution.
              </p>
            </div>
            
            <div className={styles.pathCard}>
              <div className={styles.pathImageWrapper}>
                <Image src="/bento_mentorship.png" alt="1-1 Coaching & Personal Mentorship" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 className={styles.pathCardTitle}><span className="text-gradient">1-1 Coaching</span> & Personal Mentorship</h3>
              <p className={styles.pathCardSubtitle}>Direct Feedback to Fast-Track Your Growth</p>
              <p className={styles.pathCardText}>
                Get private 1-1 coaching with Michael and the Envision Team to fine-tune your strategy, build consistency, and break through mental or technical barriers holding you back. This is for traders who are serious about levelling up and committed to the journey ahead.
              </p>
              <p className={styles.pathCardText}>
                Spaces are extremely limited. Fill out the application form on the store page.
              </p>
            </div>
          </div>
        </section>

        {/* Our Company Section */}
        <section className={styles.companySection}>
          <div className={styles.companyNav}>
            <div 
              className={`${styles.companyNavItem} ${activeCompanyTab === 'company' ? styles.companyNavItemActive : ''}`}
              onClick={() => setActiveCompanyTab('company')}
            >Our Company</div>
            <div 
              className={`${styles.companyNavItem} ${activeCompanyTab === 'perspectives' ? styles.companyNavItemActive : ''}`}
              onClick={() => setActiveCompanyTab('perspectives')}
            >Our Perspectives</div>
            <div 
              className={`${styles.companyNavItem} ${activeCompanyTab === 'commitment' ? styles.companyNavItemActive : ''}`}
              onClick={() => setActiveCompanyTab('commitment')}
            >Relentless Commitment</div>
            <div 
              className={`${styles.companyNavItem} ${activeCompanyTab === 'research' ? styles.companyNavItemActive : ''}`}
              onClick={() => setActiveCompanyTab('research')}
            >Our Research Center</div>
          </div>
          
          <div className={styles.companyContentArea}>
            <h2 className={styles.companyTitle}>{companyTabData[activeCompanyTab].title}</h2>
            <p className={styles.companyText}>
              {companyTabData[activeCompanyTab].text}
            </p>
          </div>
          
          <div className={styles.companyCardsWrapper}>
            <div className={styles.companyCard}>
              <div className={styles.companyCardIcon}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <h3 className={styles.companyCardTitle}><span className="text-gradient">Awards</span></h3>
              <div className={styles.companyCardSubtitle}>Recent Awards</div>
              <p className={styles.companyCardText}>
                Trade Pulse Traders Institute has been recognized for excellence in quality of trader education and service to the community.
              </p>
            </div>
            
            <div className={styles.companyCard}>
              <div className={styles.companyCardIcon}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className={styles.companyCardTitle}><span className="text-gradient">Relentless</span> Commitment</h3>
              <div className={styles.companyCardSubtitle}>Our Top Priority is Our Students</div>
              <p className={styles.companyCardText}>
                Trade Pulse Traders Institute invests relentlessly in our education, services, products, technologies, support and community.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>Built by Traders, <br/><span className="text-gradient">for Traders</span></h2>
              <p className={styles.sectionSubtitle} style={{ textAlign: 'left', marginBottom: '24px' }}>
                We were tired of the "gurus" selling dreams without execution. Trade Pulse Traders Institute was founded by a collective of prop-firm funded traders with over a decade of institutional experience.
              </p>
              <ul className={styles.aboutList}>
                <li>✔ Over $50M+ in collective funded capital</li>
                <li>✔ 15,000+ Students Worldwide</li>
                <li>✔ 94% Prop Firm Pass Rate for Mentorship Students</li>
              </ul>
              <div style={{ marginTop: '32px' }}>
                <GlowButton>Meet the Team</GlowButton>
              </div>
            </div>
            <div className={styles.aboutImageWrapper}>
              <Image src="/about_team.png" alt="Trading Floor" fill style={{ objectFit: 'cover', borderRadius: '24px' }} />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </section>


        {/* Core Strategy Section */}
        <section id="strategy" className={styles.coreStrategySection}>
          <div className={styles.coreStrategyTop}>
            <div className={styles.coreStrategyIconCol}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              <div className={styles.coreStrategyIconLabel}>RULES</div>
            </div>
            <div className={styles.coreStrategyContent}>
              <h2 className={styles.coreStrategyTitle}><span className="text-gradient">CORE STRATEGY</span> | PROPRIETARY METHODOLOGY</h2>
              <p className={styles.coreStrategyText}>
                Learn the rules of our proprietary market timing methodology to take advantage of volatility. Honed over more than two decades with over 60 talented instructors and serving 85,000 students with lifelong education. Learn and apply Core Strategy which is integrated throughout all aspects of your educational experience, providing a step-by-step set of rules that can be used with all styles of trading, and in a variety of markets whether you are trading stocks, futures, options, or foreign exchange. Most people fear volatility. We teach our students how to take advantage of it.
              </p>
            </div>
          </div>
          <div className={styles.coreStrategyBottom}>
            <h3 className={styles.coreStrategyBottomTitle}><span className="text-gradient">DISCIPLINE</span></h3>
            <p className={styles.coreStrategyQuote}>
              "As a martial arts instructor for over 20 years, I appreciate discipline. It's so freeing to know that with my trading rules, I can be in the markets whether they go up, down or sideways."
            </p>
            <div className={styles.coreStrategyAuthor}>Matt S, Student</div>
          </div>
        </section>

        {/* The Trending Standard Section */}
        {/* Workshop Section */}
        <section id="workshops" className={styles.workshopSection}>
          <div className={styles.workshopOverlay}></div>
          <div className={styles.workshopContent}>
            <h2 className={styles.workshopTitle}>World-Class Workshops & <span className="text-gradient">Live Trading</span> Sessions</h2>
            <p className={styles.workshopSubtitle}>
              Get First Access to our World-Class Workshops & Live Trading Sessions led by the Envision Team. These are designed to test your ability, assist you in your learning and make you a more competent trader.
            </p>
            <GlowButton className={styles.pulseGlowAnim}>Join Now</GlowButton>
          </div>
        </section>

        {/* Mentorship Paths Section */}
        <section id="mentorship" className={styles.mentorshipSection}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>Mentorship <span className="text-gradient">Paths.</span></h2>
            <p className={styles.sectionSubtitle}>Four structured paths — from foundational skill-building to private, one-on-one mentorship.</p>
          </div>
          
          <div className={styles.mentorshipGrid}>
            {/* Basecamp */}
            <div className={`${styles.mentorshipCard} ${styles.shineMoveAnim}`}>
              <div className={styles.mentorshipHeader}>
                <div className={styles.mentorshipIconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <div className={styles.mentorshipTitles}>
                  <h3 className={styles.mentorshipCardTitle}><span className="text-gradient">ASCEND</span> BASECAMP</h3>
                  <p className={styles.mentorshipCardSubtitle}>Structured Trading Foundation</p>
                  <p className={styles.mentorshipCardDuration}>8 Weeks</p>
                </div>
              </div>
              <div className={styles.mentorshipPriceArea}>
                <div className={styles.mentorshipOriginalPrice}>
                  <span className={styles.strikethrough}>₹11,990.00</span>
                  <span className={styles.saveBadge}>SAVE 10%</span>
                </div>
                <div className={styles.mentorshipCurrentPrice}>
                  ₹10,791.00 <span className={styles.currency}>INR</span>
                </div>
              </div>
              <ul className={styles.mentorshipFeatures}>
                <li><span className={styles.checkIcon}>✓</span> Individuals entering trading who...</li>
                <li><span className={styles.checkIcon}>✓</span> Traders overwhelmed by scattered...</li>
                <li><span className={styles.checkIcon}>✓</span> Those who have spent time in the...</li>
                <li className={styles.moreDetails}>And more details inside...</li>
              </ul>
              <GlowButton>EXPLORE BASECAMP</GlowButton>
            </div>
            
            {/* Vanguard */}
            <div className={`${styles.mentorshipCard} ${styles.shineMoveAnim}`}>
              <div className={styles.mentorshipHeader}>
                <div className={styles.mentorshipIconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                <div className={styles.mentorshipTitles}>
                  <h3 className={styles.mentorshipCardTitle}><span className="text-gradient">ASCEND</span> VANGUARD</h3>
                  <p className={styles.mentorshipCardSubtitle}>Execution & Performance Development</p>
                  <p className={styles.mentorshipCardDuration}>Monthly Subscription</p>
                </div>
              </div>
              <div className={styles.mentorshipPriceArea}>
                <div className={styles.mentorshipOriginalPrice}>
                  <span className={styles.strikethrough}>₹4,990.00</span>
                  <span className={styles.saveBadge}>SAVE 10%</span>
                </div>
                <div className={styles.mentorshipCurrentPrice}>
                  ₹4,491.00 <span className={styles.currency}>/ month INR</span>
                </div>
              </div>
              <ul className={styles.mentorshipFeatures}>
                <li><span className={styles.checkIcon}>✓</span> Traders who understand basic...</li>
                <li><span className={styles.checkIcon}>✓</span> Individuals who have spent time in...</li>
                <li><span className={styles.checkIcon}>✓</span> Traders facing challenges with...</li>
                <li className={styles.moreDetails}>And more details inside...</li>
              </ul>
              <GlowButton>EXPLORE VANGUARD</GlowButton>
            </div>
            
            {/* Legacy */}
            <div className={`${styles.mentorshipCard} ${styles.shineMoveAnim}`}>
              <div className={styles.mentorshipHeader}>
                <div className={styles.mentorshipIconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div className={styles.mentorshipTitles}>
                  <h3 className={styles.mentorshipCardTitle}><span className="text-gradient">ASCEND</span> LEGACY</h3>
                  <p className={styles.mentorshipCardSubtitle}>Long-Term Investing & Portfolio development</p>
                  <p className={styles.mentorshipCardDuration}>5-7 Weeks</p>
                </div>
              </div>
              <div className={styles.mentorshipPriceArea}>
                <div className={styles.mentorshipOriginalPrice}>
                  <span className={styles.strikethrough}>₹8,790.00</span>
                  <span className={styles.saveBadge}>SAVE 10%</span>
                </div>
                <div className={styles.mentorshipCurrentPrice}>
                  ₹7,911.00 <span className={styles.currency}>INR</span>
                </div>
              </div>
              <ul className={styles.mentorshipFeatures}>
                <li><span className={styles.checkIcon}>✓</span> Individuals interested in long-term...</li>
                <li><span className={styles.checkIcon}>✓</span> Investors looking to structure their...</li>
                <li><span className={styles.checkIcon}>✓</span> Professionals who prefer strategic...</li>
                <li className={styles.moreDetails}>And more details inside...</li>
              </ul>
              <GlowButton>EXPLORE LEGACY</GlowButton>
            </div>
            
            {/* Elite */}
            <div className={`${styles.mentorshipCard} ${styles.eliteCard} ${styles.shineMoveAnim}`}>
              <div className={styles.mentorshipHeader}>
                <div className={`${styles.mentorshipIconWrapper} ${styles.eliteIcon}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <div className={styles.mentorshipTitles}>
                  <h3 className={styles.mentorshipCardTitle}><span className="text-gradient">ASCEND</span> ELITE</h3>
                  <p className={`${styles.mentorshipCardSubtitle} ${styles.eliteSubtitle}`}>Private 1-on-1 Mentorship & Direct Advisory</p>
                  <p className={styles.mentorshipCardDuration}>1 Year Private Access</p>
                </div>
              </div>
              <div className={styles.mentorshipPriceArea}>
                <div className={styles.mentorshipOriginalPrice}>
                  <span className={styles.strikethrough}>₹31,090.00</span>
                  <span className={styles.saveBadge}>SAVE 10%</span>
                </div>
                <div className={`${styles.mentorshipCurrentPrice} ${styles.elitePrice}`}>
                  ₹27,981.00 <span className={styles.currency}>INR</span>
                </div>
              </div>
              <ul className={`${styles.mentorshipFeatures} ${styles.eliteFeatures}`}>
                <li><span className={styles.checkIcon}>✓</span> Traders seeking personalized...</li>
                <li><span className={styles.checkIcon}>✓</span> Individuals serious about...</li>
                <li><span className={styles.checkIcon}>✓</span> Traders who want detailed feedback...</li>
                <li className={styles.moreDetails}>And more details inside...</li>
              </ul>
              <GlowButton>APPLY FOR ELITE</GlowButton>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        
        <section className={styles.contactSection}>
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
