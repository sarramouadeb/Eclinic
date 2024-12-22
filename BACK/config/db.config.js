const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);  // Exit the process with an error code
  }
};

module.exports = connectDB;
