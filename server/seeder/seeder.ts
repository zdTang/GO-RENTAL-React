import mongoose from "mongoose";
import Car from "../models/car.model"; // Adjust the path based on your project structure
import { cars } from "./data";

const seedCars = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/go-rental");
    console.log("Connected to MongoDB!");

    await Car.deleteMany();
    console.log("Cars are deleted!");

    await Car.insertMany(cars);
    console.log("Cars are added!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1); // Exit with error code if something goes wrong
  } finally {
    await mongoose.disconnect(); // Close DB connection after operation
    console.log("Disconnected from MongoDB.");
    process.exit(0); // Ensure Node exits properly
  }
};

seedCars();
