import mongoose from "mongoose";

let isConnected = false; // Track connection status across hot reloads

const connectMongoDB = async (): Promise<void> => {
  if (isConnected) {
    // If already connected, skip re-connecting
    console.log("MongoDB already connected.");
    return;
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    await mongoose.connect(uri);
    isConnected = true;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", (error as Error).message);
  }
};

export default connectMongoDB;
