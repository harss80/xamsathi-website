
import mongoose from 'mongoose';
import Course from '../models/Course';
import Test from '../models/Test';
import Question from '../models/Question';

const BOARD_COURSES = [
    {
        _id: "698f8a866fadfeda52b19110",
        class_grade: 10,
        title: "Class 10 - Ultimate Board Booster (1 Month)",
        description: "Intensive 4-Week Crash Course. Maths, Science, SST, English. Target 95%+",
        active: true,
        tests: [
            { title: 'Maths - Real Numbers & Polynomials (MCQ Special)', difficulty: 'Medium', duration: 45 },
            { title: 'Science - Light: Reflection & Refraction', difficulty: 'Medium', duration: 45 },
            { title: 'SST - History: Nationalism in India', difficulty: 'Medium', duration: 45 },
            { title: 'English - Grammar & Reading Skills', difficulty: 'Easy', duration: 40 },
            { title: 'Maths - Linear Equations & Quadratic Equations', difficulty: 'Hard', duration: 50 },
            { title: 'Science - Chemical Reactions & Acids, Bases', difficulty: 'Medium', duration: 45 },
            { title: 'SST - Geo: Resources & Agriculture', difficulty: 'Medium', duration: 45 },
            { title: 'English - Literature (First Flight Prose)', difficulty: 'Medium', duration: 40 },
            { title: 'Maths - Triangles & Trigonometry', difficulty: 'Hard', duration: 60 },
            { title: 'Science - Life Processes & Control', difficulty: 'Hard', duration: 50 },
            { title: 'SST - Civics: Power Sharing to Gender', difficulty: 'Medium', duration: 45 },
            { title: 'English - Writing Skills (Letters/Analytical Para)', difficulty: 'Medium', duration: 40 },
            { title: 'Maths - Full Syllabus Mock Test 1', difficulty: 'Hard', duration: 90 },
            { title: 'Science - Full Syllabus Mock Test 1', difficulty: 'Hard', duration: 90 },
            { title: 'SST - Full Syllabus Mock Test 1', difficulty: 'Medium', duration: 90 },
        ]
    },
    {
        _id: "698f8a866fadfeda52b1916a",
        class_grade: 12,
        title: "Class 12 - Board Exam Mastery (1 Month)",
        description: "Ace your Boards with Case Studies & MCQs. Physics, Chemistry, Maths/Bio, English.",
        active: false,
        tests: [
            { title: 'Physics - Electric Charges, Fields & Potential', difficulty: 'Medium', duration: 50 },
            { title: 'Chemistry - Solutions & Electrochemistry', difficulty: 'Hard', duration: 50 },
            { title: 'Maths - Relations, Functions & Matrices', difficulty: 'Medium', duration: 50 },
            { title: 'English - Reading Comprehension & Flamingo (Prose)', difficulty: 'Easy', duration: 40 },
            { title: 'Physics - Current Electricity & Magnetism', difficulty: 'Hard', duration: 60 },
            { title: 'Chemistry - Chemical Kinetics & d-f Block', difficulty: 'Medium', duration: 50 },
            { title: 'Maths - Calculus: Continuity & Derivatives', difficulty: 'Hard', duration: 60 },
            { title: 'Biology - Reproduction (Human & Flowering Plants)', difficulty: 'Medium', duration: 50 },
            { title: 'Physics - Ray & Wave Optics', difficulty: 'Hard', duration: 60 },
            { title: 'Chemistry - Haloalkanes to Amines', difficulty: 'Hard', duration: 60 },
            { title: 'Maths - Integrals & Differential Equations', difficulty: 'Hard', duration: 60 },
            { title: 'Biology - Genetics & Evolution', difficulty: 'Hard', duration: 50 },
            { title: 'Physics - Full Board Pattern Mock', difficulty: 'Hard', duration: 90 },
            { title: 'Chemistry - Full Board Pattern Mock', difficulty: 'Hard', duration: 90 },
            { title: 'Maths - Full Board Pattern Mock', difficulty: 'Hard', duration: 90 },
        ]
    }
];

const PREMIUM_NEET_ADVANCED = {
    _id: "699f9a1b2c3d4e5f6a7b8c9d",
    class_grade: 12,
    title: "NEET Advanced Mock Pro",
    description: "Premium NEET full-length mocks (180 minutes) with detailed solutions and pro-level experience.",
    active: true,
    fullMocksCount: 15,
    partTestsCount: 10,
    fullMockDurationMin: 180,
    fullMockQuestions: 180,
    partTestDurationMin: 60,
    partTestQuestions: 45,
};

async function ensureDummyQuestions(testId: string, total: number) {
    const existingCount = await Question.countDocuments({ test_id: testId, active: true });
    if (existingCount >= total) return;

    const toCreate = total - existingCount;
    const batch: Array<{
        test_id: string;
        body: string;
        options: string[];
        correct_indices: number[];
        explanation: string;
        tags: string[];
        active: boolean;
    }> = [];
    for (let i = 0; i < toCreate; i++) {
        const n = existingCount + i + 1;
        batch.push({
            test_id: testId,
            body: `Dummy Question ${n}: This is a placeholder NEET-level question for demo/mock purposes.`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct_indices: [0],
            explanation: "Dummy explanation: Option A is marked correct for placeholder questions.",
            tags: ["dummy", "neet"],
            active: true,
        });
    }
    if (batch.length) {
        await Question.insertMany(batch, { ordered: false });
    }
}

export async function ensureBootstrapCourses() {
    try {
        for (const data of BOARD_COURSES) {
            let course = await Course.findById(data._id);
            if (!course) {
                // If not found by ID, try to find by title/grade to avoid duplicates if ID was different
                course = await Course.findOne({ class_grade: data.class_grade, title: data.title });
                if (!course) {
                    course = await Course.create({
                        _id: new mongoose.Types.ObjectId(data._id),
                        title: data.title,
                        class_grade: data.class_grade,
                        active: data.active !== false,
                        description: data.description,
                        price: 499
                    });
                } else {
                    // Update ID if it was different? (Risky)
                    // Better to just use the found one, but our frontend expects data._id.
                    // For simplicity, if title matches but ID is different, we'll just keep it.
                    // But in this specific case, the user says "course not found" for data._id,
                    // so we definitely need a course with data._id.
                }
            }

            if (course) {
                const desiredActive = data.active !== false;
                if (course.title !== data.title || course.description !== data.description || course.active !== desiredActive) {
                    await Course.updateOne(
                        { _id: course._id },
                        { $set: { title: data.title, description: data.description, active: desiredActive } }
                    );
                }
            }

            // If we found a course with title but different ID, we still might want to ensure ONE
            // exists with the hardcoded ID for the frontend link.
            if (course && course._id.toString() !== data._id) {
                // Create another one with the hardcoded ID if it doesn't exist
                const exact = await Course.findById(data._id);
                if (!exact) {
                    await Course.create({
                        _id: new mongoose.Types.ObjectId(data._id),
                        title: data.title,
                        class_grade: data.class_grade,
                        active: data.active !== false,
                        description: data.description,
                        price: 499
                    });
                }
            }

            // Sync tests
            const courseId = data._id;
            for (const testData of data.tests) {
                const existing = await Test.findOne({ course_id: courseId, title: testData.title });
                if (!existing) {
                    await Test.create({
                        course_id: courseId,
                        title: testData.title,
                        difficulty: testData.difficulty,
                        duration_min: testData.duration,
                        active: true
                    });
                }
            }
        }

        // --- Premium NEET Advanced Mock Pro (Class 12) ---
        const premiumId = PREMIUM_NEET_ADVANCED._id;
        let premiumCourse = await Course.findById(premiumId);
        if (!premiumCourse) {
            premiumCourse = await Course.create({
                _id: new mongoose.Types.ObjectId(premiumId),
                title: PREMIUM_NEET_ADVANCED.title,
                class_grade: PREMIUM_NEET_ADVANCED.class_grade,
                active: true,
                description: PREMIUM_NEET_ADVANCED.description,
                price: 499,
            });
        } else {
            await Course.updateOne(
                { _id: premiumCourse._id },
                {
                    $set: {
                        title: PREMIUM_NEET_ADVANCED.title,
                        class_grade: PREMIUM_NEET_ADVANCED.class_grade,
                        active: true,
                        description: PREMIUM_NEET_ADVANCED.description,
                    },
                }
            );
        }

        for (let i = 1; i <= PREMIUM_NEET_ADVANCED.fullMocksCount; i++) {
            const title = `Full Mock Test ${i}`;
            let test = await Test.findOne({ course_id: premiumId, title });
            if (!test) {
                test = await Test.create({
                    course_id: premiumId,
                    title,
                    difficulty: "Medium-Hard",
                    duration_min: PREMIUM_NEET_ADVANCED.fullMockDurationMin,
                    active: true,
                });
            } else {
                await Test.updateOne(
                    { _id: test._id },
                    {
                        $set: {
                            duration_min: PREMIUM_NEET_ADVANCED.fullMockDurationMin,
                            active: true,
                        },
                    }
                );
            }

            await ensureDummyQuestions(String(test._id), PREMIUM_NEET_ADVANCED.fullMockQuestions);
        }

        for (let i = 1; i <= PREMIUM_NEET_ADVANCED.partTestsCount; i++) {
            const title = `Part Test ${i}`;
            let test = await Test.findOne({ course_id: premiumId, title });
            if (!test) {
                test = await Test.create({
                    course_id: premiumId,
                    title,
                    difficulty: "Medium",
                    duration_min: PREMIUM_NEET_ADVANCED.partTestDurationMin,
                    active: true,
                });
            } else {
                await Test.updateOne(
                    { _id: test._id },
                    {
                        $set: {
                            duration_min: PREMIUM_NEET_ADVANCED.partTestDurationMin,
                            active: true,
                        },
                    }
                );
            }

            await ensureDummyQuestions(String(test._id), PREMIUM_NEET_ADVANCED.partTestQuestions);
        }

        await Test.updateMany(
            {
                course_id: premiumId,
                title: { $regex: /^Full Mock Test (1[6-9]|20)$/ },
            },
            { $set: { active: false } }
        );

        await Test.updateMany(
            {
                course_id: premiumId,
                title: { $regex: /^Part Test (1[1-9]|[2-9][0-9])$/ },
            },
            { $set: { active: false } }
        );
    } catch (err) {
        console.error('Bootstrap courses error:', err);
    }
}
