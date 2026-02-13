
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
import Course from '../models/Course';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI as string).then(async () => {
    const courses = await Course.find({}).sort({ class_grade: 1 });
    let output = "--- COURSES ---\n";
    courses.forEach(c => {
        output += `Class ${c.class_grade}: ${c.title} -> ID: ${c._id}\n`;
    });
    fs.writeFileSync('courses.txt', output);
    console.log("Done");
    mongoose.disconnect();
    process.exit(0);
});
