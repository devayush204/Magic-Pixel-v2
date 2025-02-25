import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  // Return cached connection if it exists and is still connected
  if (cached.conn) {
    console.log('Using cached database connection');

    // Verify the connection is still active
    if (mongoose.connection.readyState === 1) { // 1 = connected
      console.log('Cached connection is active');
      return cached.conn;
    } else {
      console.log('Cached connection is not active. Reconnecting...');
      cached.conn = null; // Clear the cached connection
    }
  }

  // Throw an error if MONGODB_URL is missing
  if (!MONGODB_URL) {
    throw new Error('Missing MONGODB_URL');
  }

  // Create a new connection if one doesn't exist
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'magic-pixel',
      bufferCommands: false,
    })
    .then((mongoose) => {
      console.log('Successfully connected to the database');
      return mongoose;
    })
    .catch((error) => {
      console.error('Failed to connect to the database:', error);
      throw error;
    });

  // Await the connection promise and cache the connection
  cached.conn = await cached.promise;

  return cached.conn;
};