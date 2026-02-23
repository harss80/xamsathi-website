const fs = require('fs');
const path = require('path');

const exams = ['chsl', 'mts', 'cpo'];
exams.forEach(exam => {
    const filePath = path.join(__dirname, 'src', 'app', 'government-exams', 'ssc', `ssc-${exam}`, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/CGL/g, exam.toUpperCase());
        content = content.replace(/SSC CGL Exam/g, `SSC ${exam.toUpperCase()} Exam`);
        content = content.replace(/ssc-cgl/g, `ssc-${exam}`);
        fs.writeFileSync(filePath, content);
    }
});
console.log('Fixed titles for chsl, mts, cpo pages');
