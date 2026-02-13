
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import Course from '../models/Course';
import Test from '../models/Test';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in .env');
    process.exit(1);
}

// Data for Board Classes
const SEED_DATA = [
    {
        classGrade: 10,
        title: "Class 10 - Ultimate Board Booster (1 Month)",
        price: 499,
        description: "Intensive 4-Week Crash Course. Maths, Science, SST, English. Target 95%+",
        tests: [
            // Week 1: Foundation & High Weightage
            { title: 'Maths - Real Numbers & Polynomials (MCQ Special)', difficulty: 'Medium', duration: 45 },
            { title: 'Science - Light: Reflection & Refraction', difficulty: 'Medium', duration: 45 },
            { title: 'SST - History: Nationalism in India', difficulty: 'Medium', duration: 45 },
            { title: 'English - Grammar & Reading Skills', difficulty: 'Easy', duration: 40 },

            // Week 2: Core Concepts
            { title: 'Maths - Linear Equations & Quadratic Equations', difficulty: 'Hard', duration: 50 },
            { title: 'Science - Chemical Reactions & Acids, Bases', difficulty: 'Medium', duration: 45 },
            { title: 'SST - Geo: Resources & Agriculture', difficulty: 'Medium', duration: 45 },
            { title: 'English - Literature (First Flight Prose)', difficulty: 'Medium', duration: 40 },

            // Week 3: Complex Topics
            { title: 'Maths - Triangles & Trigonometry', difficulty: 'Hard', duration: 60 },
            { title: 'Science - Life Processes & Control', difficulty: 'Hard', duration: 50 },
            { title: 'SST - Civics: Power Sharing to Gender', difficulty: 'Medium', duration: 45 },
            { title: 'English - Writing Skills (Letters/Analytical Para)', difficulty: 'Medium', duration: 40 },

            // Week 4: Final Strikes (Full Mocks)
            { title: 'Maths - Full Syllabus Mock Test 1', difficulty: 'Hard', duration: 90 },
            { title: 'Science - Full Syllabus Mock Test 1', difficulty: 'Hard', duration: 90 },
            { title: 'SST - Full Syllabus Mock Test 1', difficulty: 'Medium', duration: 90 },
        ]
    },
    {
        classGrade: 11,
        title: "Class 11 - Science Final Prep (1 Month)",
        price: 499,
        description: "Systematic revision for Class 11 Finals. Physics, Chemistry, Maths, Biology.",
        tests: [
            // Week 1
            { title: 'Physics - Kinematics & Laws of Motion', difficulty: 'Medium', duration: 50 },
            { title: 'Chemistry - Atomic Structure & Periodicity', difficulty: 'Medium', duration: 50 },
            { title: 'Maths - Sets, Relations & Functions', difficulty: 'Medium', duration: 50 },
            { title: 'Biology - Biological Classification & Plant Kingdom', difficulty: 'Medium', duration: 50 },

            // Week 2
            { title: 'Physics - Work, Energy & Rotation', difficulty: 'Hard', duration: 60 },
            { title: 'Chemistry - Chemical Bonding & Thermodynamics', difficulty: 'Hard', duration: 60 },
            { title: 'Maths - Trigonometry & Complex Numbers', difficulty: 'Hard', duration: 60 },
            { title: 'Biology - Animal Kingdom & Morphology', difficulty: 'Medium', duration: 50 },

            // Week 3
            { title: 'Physics - Gravitation, Solids & Fluids', difficulty: 'Medium', duration: 50 },
            { title: 'Chemistry - Equilibrium & Redox', difficulty: 'Hard', duration: 60 },
            { title: 'Maths - Linear Inequalities & Permutations', difficulty: 'Medium', duration: 50 },
            { title: 'Biology - Cell: Structure & Biomolecules', difficulty: 'Hard', duration: 50 },

            // Week 4
            { title: 'PCMB - Full Syllabus Combined Mock', difficulty: 'Hard', duration: 120 },
        ]
    },
    {
        classGrade: 12,
        title: "Class 12 - Board Exam Mastery (1 Month)",
        price: 499,
        description: "Ace your Boards with Case Studies & MCQs. Physics, Chemistry, Maths/Bio, English.",
        tests: [
            // Week 1: Electromagnetism & Physical Chem
            { title: 'Physics - Electric Charges, Fields & Potential', difficulty: 'Medium', duration: 50 },
            { title: 'Chemistry - Solutions & Electrochemistry', difficulty: 'Hard', duration: 50 },
            { title: 'Maths - Relations, Functions & Matrices', difficulty: 'Medium', duration: 50 },
            { title: 'English - Reading Comprehension & Flamingo (Prose)', difficulty: 'Easy', duration: 40 },

            // Week 2: Current, Magnetism & Inorganic
            { title: 'Physics - Current Electricity & Magnetism', difficulty: 'Hard', duration: 60 },
            { title: 'Chemistry - Chemical Kinetics & d-f Block', difficulty: 'Medium', duration: 50 },
            { title: 'Maths - Calculus: Continuity & Derivatives', difficulty: 'Hard', duration: 60 },
            { title: 'Biology - Reproduction (Human & Flowering Plants)', difficulty: 'Medium', duration: 50 },

            // Week 3: Optics, Organic & Integals
            { title: 'Physics - Ray & Wave Optics', difficulty: 'Hard', duration: 60 },
            { title: 'Chemistry - Haloalkanes to Amines', difficulty: 'Hard', duration: 60 },
            { title: 'Maths - Integrals & Differential Equations', difficulty: 'Hard', duration: 60 },
            { title: 'Biology - Genetics & Evolution', difficulty: 'Hard', duration: 50 },

            // Week 4: The Final Lap
            { title: 'Physics - Full Board Pattern Mock', difficulty: 'Hard', duration: 90 },
            { title: 'Chemistry - Full Board Pattern Mock', difficulty: 'Hard', duration: 90 },
            { title: 'Maths - Full Board Pattern Mock', difficulty: 'Hard', duration: 90 },
        ]
    }
];


async function seed() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI as string);
        console.log('Connected to MongoDB');

        let outputLog = "";

        for (const data of SEED_DATA) {
            console.log(`\nProcessing Class ${data.classGrade}...`);

            // 1. Find or Create Course
            let course = await Course.findOne({
                class_grade: data.classGrade,
                title: data.title
            });

            if (!course) {
                course = await Course.create({
                    title: data.title,
                    class_grade: data.classGrade,
                    active: true,
                    description: data.description
                });
                console.log(`Created Course: ${course.title} (${course._id})`);
            } else {
                console.log(`Found existing Course: ${course.title} (${course._id})`);
            }

            outputLog += `${data.classGrade}:${course._id}\n`;
            const courseId = course._id;

            // 2. Create Tests
            for (const testData of data.tests) {
                const existingTest = await Test.findOne({
                    course_id: courseId,
                    title: testData.title
                });

                if (!existingTest) {
                    await Test.create({
                        course_id: courseId,
                        title: testData.title,
                        difficulty: testData.difficulty,
                        duration_min: testData.duration,
                        active: true
                    });
                    process.stdout.write('+');
                } else {
                    process.stdout.write('.');
                }
            }
        }

        console.log('\n\n--- ID SUMMARY (COPY THIS) ---');
        console.log(outputLog);
        console.log('------------------------------');

    } catch (error) {
        console.error('Seed Error:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    }
}

seed();
