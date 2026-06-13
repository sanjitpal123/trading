const fs = require('fs');

let code = fs.readFileSync('app/page.js', 'utf8');
const lines = code.split('\n');

const correctText = `    text: <>The Trade Pulse Research Center is the engine room of our strategies. Our team of quantitative analysts and seasoned traders constantly backtest new concepts, analyze market micro-structure, and develop proprietary indicators.<br/><br/>Members get exclusive access to our ongoing research, helping them stay ahead of the curve in an ever-evolving financial landscape.</>
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
        <section className={\`\${styles.hero} \${styles.curvedBottomShape}\`}>
          
          <div className={styles.heroBgImage}>
            <Image src="/hero_bg.png" alt="Trading Background" fill style={{ objectFit: 'cover', opacity: 0.4 }} priority />
            <div className={styles.heroBgGradient}></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.heroContent}`;

const startIdx = lines.findIndex(l => l.includes('title: "Our Research Center"'));
const endIdx = lines.findIndex((l, i) => i > startIdx && l.trim() === '>');

if (startIdx !== -1 && endIdx !== -1) {
  lines.splice(startIdx + 1, endIdx - startIdx, correctText);
}

fs.writeFileSync('app/page.js', lines.join('\n'));
console.log('Fixed page.js structure');
