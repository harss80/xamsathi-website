
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import Course from '../models/Course';
import Test from '../models/Test';

// Load environment variables (from backend root .env)
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in .env');
    process.exit(1);
}

// Course details
const COURSE_TITLE = 'Class 9 - Monthly Premium Series';
const CLASS_GRADE = 9;

// The 20 tests plan (Month 1 roadmap)
const TESTS_TO_CREATE = [
    // Week 1
    { title: 'Maths - Test M1: Number Systems', difficulty: 'Medium', duration_min: 40 },
    { title: 'Maths - Test M2: Polynomials', difficulty: 'Medium', duration_min: 40 },
    { title: 'Science - Test S1: Matter, Cell, Motion', difficulty: 'Medium', duration_min: 35 },
    { title: 'English - Test E1: Literature (Beehive & Moments)', difficulty: 'Medium', duration_min: 30 },
    { title: 'SST - Test SS1: History - The French Revolution', difficulty: 'Medium', duration_min: 30 },

    // Week 2
    { title: 'Maths - Test M3: Linear Equations in Two Variables', difficulty: 'Medium', duration_min: 40 },
    { title: 'Maths - Test M4: Coordinate Geometry', difficulty: 'Easy', duration_min: 40 },
    { title: 'Science - Test S2: Matter, Graphics, Tissues', difficulty: 'Medium', duration_min: 35 },
    { title: 'English - Test E2: Grammar (Tenses) & Writing (Diary)', difficulty: 'Medium', duration_min: 30 },
    { title: 'SST - Test SS2: Geography - India Size & Location', difficulty: 'Medium', duration_min: 30 },

    // Week 3
    { title: 'Maths - Test M5: Lines and Angles', difficulty: 'Hard', duration_min: 40 },
    { title: 'Maths - Test M6: Triangles (Congruence)', difficulty: 'Hard', duration_min: 40 },
    { title: 'Science - Test S3: Matter Pure?, Force, Plant Tissues', difficulty: 'Hard', duration_min: 35 },
    { title: 'English - Test E3: Literature (Sound of Music, Toto)', difficulty: 'Medium', duration_min: 30 },
    { title: 'SST - Test SS3: Civics - Democracy', difficulty: 'Medium', duration_min: 30 },

    // Week 4
    { title: 'Maths - Test M7: Quadrilaterals', difficulty: 'Hard', duration_min: 40 },
    { title: 'Maths - Test M8: Areas of Parallelograms & Triangles', difficulty: 'Hard', duration_min: 40 },
    { title: 'Science - Test S4: Gravitation, Separation, Animal Tissues', difficulty: 'Hard', duration_min: 35 },
    { title: 'English - Test E4: Mixed Revision (Grammar, Reading, Writing)', difficulty: 'Easy', duration_min: 30 },
    { title: 'SST - Test SS4: Economics - Village Palampur', difficulty: 'Easy', duration_min: 30 },
];

async function seed() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI as string);
        console.log('Connected to MongoDB');

        // 1. Find or Create Course
        let course = await Course.findOne({
            class_grade: CLASS_GRADE,
            title: COURSE_TITLE
        });

        if (!course) {
            console.log(`Course "${COURSE_TITLE}" not found. Creating it...`);
            course = await Course.create({
                title: COURSE_TITLE,
                class_grade: CLASS_GRADE,
                active: true,
                description: 'Premium Monthly Series for Class 9 (Maths, Science, English, SST)'
            });
            console.log(`Created Course: ${course._id}`);
        } else {
            console.log(`Found existing Course: ${course._id}`);
        }

        const courseId = course._id;

        // 2. Create Tests
        console.log(`Creating ${TESTS_TO_CREATE.length} tests for Class 9...`);
        let createdCount = 0;

        for (const testData of TESTS_TO_CREATE) {
            // Check if test already exists to avoid duplicates
            const existingTest = await Test.findOne({
                course_id: courseId,
                title: testData.title
            });

            if (!existingTest) {
                await Test.create({
                    course_id: courseId,
                    title: testData.title,
                    difficulty: testData.difficulty,
                    duration_min: testData.duration_min,
                    active: true // Active by default so they show up, questions will be empty initially
                });
                createdCount++;
                process.stdout.write('.'); // progress indicator
            } else {
                process.stdout.write('s'); // skip
            }
        }

        console.log(`\n\nSeed Complete!Created ${createdCount} new tests.`);
        console.log(`Total tests in course: ${await Test.countDocuments({ course_id: courseId })}`);

    } catch (error) {
        console.error('Seed Error:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    }
}

seed();
