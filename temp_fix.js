const fs = require('fs');
let c = fs.readFileSync('app/page.js', 'utf8');
let lines = c.split('\n');
let useClientIndex = lines.findIndex(l => l.includes('"use client"'));
if (useClientIndex > 0) {
  let topPart = lines.slice(0, useClientIndex).join('\n');
  let bottomPart = lines.slice(useClientIndex).join('\n');
  let mainIndex = bottomPart.indexOf('<main');
  let heroEndIndex = bottomPart.indexOf('</section>', mainIndex) + 10;
  let newContent = bottomPart.substring(0, heroEndIndex) + '\n' + topPart + '\n' + bottomPart.substring(heroEndIndex);
  fs.writeFileSync('app/page.js', newContent, 'utf8');
  console.log('Fixed successfully');
} else {
  console.log('Could not find use client');
}
