import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.db_url);
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1);
    }
};