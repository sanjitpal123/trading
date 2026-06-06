const https = require('https');

function fetchCSS(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', () => resolve(''));
    });
}

async function analyze() {
    const styleCSS = await fetchCSS('https://goadslive.com/css/style.css');
    const customCSS = await fetchCSS('https://goadslive.com/css/custom.css');
    
    const allCSS = styleCSS + '\n' + customCSS;
    
    // Find keyframes
    const keyframes = allCSS.match(/@keyframes\s+[^{]+\{[\s\S]*?\}/g);
    if(keyframes) {
        console.log("Animations (keyframes):", keyframes.map(k => k.substring(0, 50) + "..."));
    }
    
    // Find shapes (clip-path, border-radius on major elements)
    const shapes = allCSS.match(/[^{]+\{[^}]*(clip-path:|border-radius:\s*[5-9][0-9]px|border-radius:\s*50%)[^}]*\}/g);
    if(shapes) {
        console.log("\nShape classes found:", shapes.slice(0, 10).map(s => s.trim().substring(0, 80)));
    }
}

analyze();
