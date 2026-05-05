const fs = require('fs');
const file = 'src/components/Achievements.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/import CountUp from 'react-countup';/g, '');
content = content.replace(/\{inView \? \(([\s\S]*?)\) : "0"\}/g, '{inView ? stat.num : "0"}');
fs.writeFileSync(file, content);
