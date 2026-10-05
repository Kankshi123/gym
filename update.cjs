const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        replaceInDir(fullPath);
      }
    } else if (/\.(js|jsx|html|md|css)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      content = content.replace(/IRONPEAK/g, 'FITNESS STACK UNISEX GYM');
      content = content.replace(/ironpeak/g, 'fitnessstack');
      content = content.replace(/Mumbai/g, 'Dehradun');
      content = content.replace(/MUMBAI/g, 'DEHRADUN');
      content = content.replace(/Level 3, IndiaBulls Tower, Lower Parel, Mumbai 400013/g, 'Niranjanpur Mandi, Dehradun, India 248001');
      content = content.replace(/Lower Parel, Mumbai/g, 'Niranjanpur Mandi, Dehradun');
      content = content.replace(/Lower Parel\+Mumbai/g, 'Niranjanpur+Mandi+Dehradun');
      
      if (original !== content) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}
replaceInDir(__dirname);
