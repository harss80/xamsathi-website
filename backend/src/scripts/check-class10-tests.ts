
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import Test from '../models/Test';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const MONGODB_URI = process.env.MONGODB_URI;
const COURSE_ID = '698f8a866fadfeda52b19110'; // Class 10 ID

mongoose.connect(MONGODB_URI as string).then(async () => {
    const tests = await Test.find({ course_id: COURSE_ID });
    console.log(`Found ${tests.length} tests for Course ${COURSE_ID}`);
    tests.forEach(t => console.log(`- ${t.title} (${t._id})`));
    mongoose.disconnect();
    process.exit(0);
});
