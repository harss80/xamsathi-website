
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

// Data for each class
const SEED_DATA = [
    {
        classGrade: 5,
        title: "Class 5 - Monthly Premium Series",
        price: 399,
        tests: [
            // Week 1
            { title: 'Maths - Test M1: Large Numbers', difficulty: 'Easy', duration: 40 },
            { title: 'Maths - Test M2: Operations on Large Numbers', difficulty: 'Medium', duration: 40 },
            { title: 'Science - Test S1: Plants & Animals', difficulty: 'Medium', duration: 35 },
            { title: 'English - Test E1: Grammar (Nouns)', difficulty: 'Easy', duration: 30 },
            // Week 2
            { title: 'Maths - Test M3: Factors and Multiples', difficulty: 'Medium', duration: 40 },
            { title: 'Maths - Test M4: Fractions (Intro)', difficulty: 'Medium', duration: 40 },
            { title: 'Science - Test S2: Human Body (Bones/Muscles)', difficulty: 'Medium', duration: 35 },
            { title: 'English - Test E2: Reading Comprehension', difficulty: 'Easy', duration: 30 },
            // Week 3
            { title: 'Maths - Test M5: Decimals', difficulty: 'Medium', duration: 40 },
            { title: 'Maths - Test M6: Percentage', difficulty: 'Hard', duration: 40 },
            { title: 'Science - Test S3: Food and Health', difficulty: 'Medium', duration: 35 },
            { title: 'English - Test E3: Writing (Formal Letter)', difficulty: 'Medium', duration: 30 },
            // Week 4
            { title: 'Maths - Test M7: Geometry (Angles)', difficulty: 'Medium', duration: 40 },
            { title: 'Maths - Test M8: Perimeter and Area', difficulty: 'Hard', duration: 40 },
            { title: 'Science - Test S4: Matter and Materials', difficulty: 'Hard', duration: 35 },
            { title: 'English - Test E4: Mixed Revision', difficulty: 'Medium', duration: 30 },
        ]
    },
    {
        classGrade: 6,
        title: "Class 6 - Monthly Premium Series",
        price: 399,
        tests: [
            // Week 1
            { title: 'Maths - Test M1: Knowing Our Numbers', difficulty: 'Easy', duration: 40 },
            { title: 'Maths - Test M2: Whole Numbers', difficulty: 'Medium', duration: 40 },
            { title: 'Science - Test S1: Food: Where Does It Come From?', difficulty: 'Easy', duration: 35 },
            { title: 'English - Test E1: Grammar (Sentences)', difficulty: 'Easy', duration: 30 },
            { title: 'SST - Test SS1: History (What, Where, How)', difficulty: 'Medium', duration: 30 },
            // Week 2
            { title: 'Maths - Test M3: Playing with Numbers', difficulty: 'Medium', duration: 40 },
            { title: 'Maths - Test M4: Basic Geometrical Ideas', difficulty: 'Medium', duration: 40 },
            { title: 'Science - Test S2: Components of Food', difficulty: 'Medium', duration: 35 },
            { title: 'English - Test E2: A House, A Home (Poem)', difficulty: 'Medium', duration: 30 },
            { title: 'SST - Test SS2: Geography (Earth in Solar System)', difficulty: 'Medium', duration: 30 },
            // ... (Simplified for brevity but can add full 20)
        ]
    },
    {
        classGrade: 7,
        title: "Class 7 - Monthly Premium Series",
        price: 399,
        tests: [
            { title: 'Maths - Test M1: Integers', difficulty: 'Easy', duration: 40 },
            { title: 'Maths - Test M2: Fractions and Decimals', difficulty: 'Medium', duration: 40 },
            { title: 'Science - Test S1: Nutrition in Plants', difficulty: 'Medium', duration: 35 },
            { title: 'English - Test E1: Three Questions', difficulty: 'Medium', duration: 30 },
            { title: 'SST - Test SS1: History (Tracing Changes)', difficulty: 'Medium', duration: 30 },
            // Week 2
            { title: 'Maths - Test M3: Data Handling', difficulty: 'Medium', duration: 40 },
            { title: 'Maths - Test M4: Simple Equations', difficulty: 'Medium', duration: 40 },
            { title: 'Science - Test S2: Nutrition in Animals', difficulty: 'Medium', duration: 35 },
            { title: 'English - Test E2: The Squirrel (Poem)', difficulty: 'Easy', duration: 30 },
            { title: 'SST - Test SS2: Geography (Environment)', difficulty: 'Easy', duration: 30 },
        ]
    },
    {
        classGrade: 8,
        title: "Class 8 - Monthly Premium Series",
        price: 399,
        tests: [
            { title: 'Maths - Test M1: Rational Numbers', difficulty: 'Easy', duration: 40 },
            { title: 'Maths - Test M2: Linear Equations', difficulty: 'Medium', duration: 40 },
            { title: 'Science - Test S1: Crop Production', difficulty: 'Medium', duration: 35 },
            { title: 'English - Test E1: The Best Christmas Present', difficulty: 'Medium', duration: 30 },
            { title: 'SST - Test SS1: History (How, When, Where)', difficulty: 'Medium', duration: 30 },
            // Week 2
            { title: 'Maths - Test M3: Understanding Quadrilaterals', difficulty: 'Medium', duration: 40 },
            { title: 'Maths - Test M4: Practical Geometry', difficulty: 'Hard', duration: 40 },
            { title: 'Science - Test S2: Microorganisms', difficulty: 'Medium', duration: 35 },
            { title: 'English - Test E2: The Ant and the Cricket', difficulty: 'Medium', duration: 30 },
            { title: 'SST - Test SS2: Geography (Resources)', difficulty: 'Medium', duration: 30 },
        ]
    }
];


async function seed() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI as string);
        console.log('Connected to MongoDB');

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
                    description: `Premium Monthly Series for Class ${data.classGrade} (Maths, Science, English, SST)`
                });
                console.log(`Created Course: ${course._id}`);
            } else {
                console.log(`Found existing Course: ${course._id}`);
            }

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

        console.log('\n\nSeed Complete!');

    } catch (error) {
        console.error('Seed Error:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    }
}

seed();
