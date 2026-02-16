
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import Course from '../models/Course';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI as string).then(async () => {
    const courses = await Course.find({}).sort({ class_grade: 1 });
    const data = courses.map(c => ({
        id: c._id.toString(),
        title: c.title,
        grade: c.class_grade
    }));
    console.log(JSON.stringify(data, null, 2));
    mongoose.disconnect();
});
