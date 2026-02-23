const fs = require('fs');
const files = fs.readdirSync('d:/eduman/backend/src/data').filter(f => f.endsWith('.ts') && f !== 'index.ts');
let imports = '';
let exportsList = [];
let allQuestionsCode = 'export const allPhysicsQuestions = [\n';

files.forEach(f => {
    const content = fs.readFileSync('d:/eduman/backend/src/data/' + f, 'utf8');
    const match = content.match(/export const (physicsChapter\w+)/);
    if (match) {
        imports += `import { ${match[1]} } from './${f.replace('.ts', '')}';\n`;
        exportsList.push(match[1]);
        allQuestionsCode += `  ...${match[1]},\n`;
    }
});

allQuestionsCode += '];\n';
const finalCode = imports + '\n' + allQuestionsCode;
fs.writeFileSync('d:/eduman/backend/src/data/index.ts', finalCode);
console.log('Done!');
