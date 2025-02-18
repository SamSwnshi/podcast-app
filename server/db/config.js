import mongoose from "mongoose";

const config = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB Connected!");
  } catch (error) {
    console.log("Error in Connecting to MONGO_DB", error.message);
  }
};

export default config;
