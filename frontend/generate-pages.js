const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');
const govPagePath = path.join(srcDir, 'government-exams', 'page.tsx');
const sscPagePath = path.join(srcDir, 'government-exams', 'ssc', 'page.tsx');

const govContent = fs.readFileSync(govPagePath, 'utf8');
const sscContent = fs.readFileSync(sscPagePath, 'utf8');

const categoriesToCreate = [
    {
        dir: 'banking-exams',
        title: 'Banking & Insurance',
        desc: 'Comprehensive test series for IBPS, SBI, RBI and other banking exams.',
        exams: [
            { id: 'sbi-po', title: 'SBI PO', desc: 'Pre & Mains Tests', tests: 150, users: '1.2 Lakh', tag: 'Popular', link: '/banking-exams/sbi-po' },
            { id: 'ibps-po', title: 'IBPS PO', desc: 'Pre & Mains Tests', tests: 120, users: '1 Lakh', tag: 'Trending', link: '/banking-exams/ibps' },
        ],
        filters: ['All', 'SBI', 'IBPS', 'RBI'],
        icon: 'BookOpen'
    },
    {
        dir: 'engineering-exams',
        title: 'Engineering Exams',
        desc: 'Structured mock tests for JEE Main, JEE Advanced, BITSAT and others.',
        exams: [
            { id: 'jee-main', title: 'JEE Main', desc: 'Full Mocks & Chapter Tests', tests: 300, users: '5 Lakh', tag: 'Most Popular', link: '/engineering-exams/jee-main' },
            { id: 'jee-advanced', title: 'JEE Advanced', desc: 'Tough Mocks & Pyqs', tests: 150, users: '2 Lakh', tag: 'Premium', link: '/engineering-exams/jee-advanced' },
        ],
        filters: ['All', 'JEE', 'BITSAT', 'State Level'],
        icon: 'GraduationCap'
    },
    {
        dir: 'medical-exams',
        title: 'Medical Exams',
        desc: 'High-quality test series for NEET UG and other medical entrances.',
        exams: [
            { id: 'neet', title: 'NEET UG', desc: 'NCERT based tests', tests: 400, users: '8 Lakh', tag: 'Bestseller', link: '/medical-exams/neet' },
        ],
        filters: ['All', 'NEET', 'AIIMS', 'JIPMER'],
        icon: 'GraduationCap'
    },
    {
        dir: 'defence-exams',
        title: 'Defence Exams',
        desc: 'Test series for NDA, CDS, AFCAT and other defence services.',
        exams: [
            { id: 'nda', title: 'NDA', desc: 'Maths & GAT Mocks', tests: 150, users: '50k', tag: 'Popular', link: '/defence-exams/nda' },
            { id: 'cds', title: 'CDS', desc: 'IMA, INA, AFA, OTA', tests: 120, users: '40k', tag: '', link: '/defence-exams/cds' },
        ],
        filters: ['All', 'NDA', 'CDS', 'AFCAT'],
        icon: 'Shield'
    },
    {
        dir: 'entrance-exams',
        title: 'Private/Entrance Exams',
        desc: 'Test series for CUET, State entrances and private university exams.',
        exams: [
            { id: 'cuet', title: 'CUET', desc: 'Domain specific mocks', tests: 200, users: '3 Lakh', tag: 'Trending', link: '/entrance-exams/cuet' },
        ],
        filters: ['All', 'CUET', 'State', 'Private'],
        icon: 'Sparkles'
    }
];

categoriesToCreate.forEach(cat => {
    const catDir = path.join(srcDir, cat.dir);
    if (!fs.existsSync(catDir)) {
        fs.mkdirSync(catDir, { recursive: true });
    }

    // Prepare Category Page
    let catPage = govContent;
    catPage = catPage.replace(/GovernmentExamsCategory/g, cat.dir.replace(/-/g, '').toUpperCase() + 'Category');
    catPage = catPage.replace(/const exams = \[[\s\S]*?\];/g, `const exams = ${JSON.stringify(cat.exams, null, 4).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'")};`);
    catPage = catPage.replace(/<span.*?Government Exams<\/span>/, `<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">${cat.title}</span>`);
    catPage = catPage.replace(/Structured mock tests.*?government exams\./, cat.desc);
    catPage = catPage.replace(/placeholder="Search exams \(e\.g\. SSC CGL\)\.\.\."/, `placeholder="Search exams..."`);
    catPage = catPage.replace(/\['All', 'SSC', 'UPSC', 'Railway', 'State PSC'\]/g, JSON.stringify(cat.filters).replace(/"/g, "'"));

    fs.writeFileSync(path.join(catDir, 'page.tsx'), catPage);

    // Prepare Details Pages (Mocks)
    cat.exams.forEach(exam => {
        const examParts = exam.link.split('/');
        const examSlug = examParts[examParts.length - 1];
        const examDir = path.join(catDir, examSlug);
        if (!fs.existsSync(examDir)) {
            fs.mkdirSync(examDir, { recursive: true });
        }

        let detailPage = sscContent;
        detailPage = detailPage.replace(/SSCExamPage/g, examSlug.replace(/-/g, '').toUpperCase() + 'ExamPage');
        detailPage = detailPage.replace(/SSC CGL 2026/g, exam.title);
        detailPage = detailPage.replace(/About SSC CGL Exam/g, `About ${exam.title} Exam`);
        detailPage = detailPage.replace(/The Staff Selection Commission.*?across ministries and departments./s, `Details about ${exam.title} will be described here.`);
        detailPage = detailPage.replace(/\/dashboard\/test-series\/ssc-cgl/g, `/dashboard/test-series/${exam.id}`);

        fs.writeFileSync(path.join(examDir, 'page.tsx'), detailPage);
    });
});

console.log("Pages regenerated successfully.");
