const https = require('https');

https.get('https://goadslive.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const cssLinks = data.match(/<link[^>]+href="([^"]+\.css)"[^>]*>/g);
    console.log(cssLinks);
    
    // Also try to find shapes or SVGs in HTML
    const svgs = data.match(/<svg[^>]*>[\s\S]*?<\/svg>/g);
    if(svgs) console.log("Found", svgs.length, "SVGs");
    
    const elementsWithAnimations = data.match(/data-aos="([^"]+)"/g);
    if(elementsWithAnimations) {
        console.log("AOS Animations found:", [...new Set(elementsWithAnimations)]);
    }
  });
});
