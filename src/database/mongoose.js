import mongoose from 'mongoose';

mongoose
  .connect(process.env.DB_QUERY)  
  .then(() => {
    console.log("Connection to MongoDB established successfully!");
  })
  .catch((error) => {
    console.error("Failed to establish MongoDB connection:", error);
  });