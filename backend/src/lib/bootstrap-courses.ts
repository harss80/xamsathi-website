
import mongoose from 'mongoose';
import Course from '../models/Course';
import Test from '../models/Test';

const BOARD_COURSES = [
    {
        _id: "698f8a866fadfeda52b19110",
        class_grade: 10,
        title: "Class 10 - Ultimate Board Booster (1 Month)",
        description: "Intensive 4-Week Crash Course. Maths, Science, SST, English. Target 95%+",
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
                        active: true,
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
                        active: true,
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
    } catch (err) {
        console.error('Bootstrap courses error:', err);
    }
}
