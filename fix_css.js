const fs = require('fs');
let css = fs.readFileSync('app/page.module.css', 'utf8');

// Fix the corrupted lines at the bottom (inserted by fuzzy tool)
css = css.replace(/pointer-events: none;\r?\n\}\s*border-radius: 50%;\s*border: 1px solid var\(--accent-primary\);\s*animation: ripple 2s infinite ease-out;\s*pointer-events: none;\r?\n\}/g, 'pointer-events: none;\n}');

// Find where .rippleAnim::after is opened and fix the missing closing brace
let regex = /\.rippleAnim::after\s*\{[\s\S]*?bottom:\s*-5px;/g;
css = css.replace(regex, `.rippleAnim::after {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 1px solid var(--accent-primary);
  animation: ripple 2s infinite ease-out;
  pointer-events: none;
}`);

fs.writeFileSync('app/page.module.css', css);
