import mongoose from "mongoose";
let isConnected = false;
const connectionToDatabase = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: "anu_db",
    });
    isConnected = true;
    console.log("Connected to database");
  } catch (err) {
    console.log("MongoDB Error ❌", err);
  }
};
export default connectionToDatabase;
