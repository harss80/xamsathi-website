import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI');
}

const cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = {
  conn: null,
  promise: null,
};

export async function connectMongo() {
  if (cached.conn) {
    console.log(`Mongo: using cached connection (readyState=${mongoose.connection.readyState})`);
    return cached.conn;
  }
  if (!cached.promise) {
    console.log('Mongo: connecting...');
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB || undefined,
    });
  }
  cached.conn = await cached.promise;
  console.log(`Mongo: connected (readyState=${mongoose.connection.readyState})`);
  return cached.conn;
}
