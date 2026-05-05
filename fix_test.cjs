const fs = require('fs');
const file = 'src/components/Achievements.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/<CountUp/g, '{/*<CountUp');
content = content.replace(/duration=\{2.5\} \/>/g, 'duration={2.5} />*/}');
fs.writeFileSync(file, content);
