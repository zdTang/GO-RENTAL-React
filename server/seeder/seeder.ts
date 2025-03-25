import mongoose from "mongoose";
import Car from "../models/car.model"; // Adjust the path based on your project structure
import { cars } from "./data";

const seedCars = async () => {
  try {
    await mongoose.connect("");
    await Car.deleteMany();
    console.log("Cars are deleted!");
    await Car.insertMany(cars);
    console.log("Cars are added!");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
