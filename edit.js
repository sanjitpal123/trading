const sharp = require('sharp');

const svg = `
<svg width="1024" height="1024">
  <rect x="170" y="70" width="180" height="40" fill="#2b2e33" />
  <text x="171" y="100" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff">Trade Pulse</text>
</svg>
`;

sharp('public/discord_trade_screenshot.png')
  .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
  .toFile('public/discord_trade_screenshot2.png')
  .then(() => {
    console.log('done');
  })
  .catch(err => console.error(err));
