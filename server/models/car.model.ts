import mongoose from "mongoose";
import { CarsStatus,CarBrand,CarTransmission,CarSeats,CarDoors,CarFuelType,CarCategories,ICar} from "go-rental-shared";


// These a mongoose schema for car, not belongs to graphql or apollo
const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    status: { type: String, required: [true, "Draft"], enum: {
      values: CarsStatus,
      message: "Status is either: Draft or Active"
    }},
    rentPerDay: { type: Number, required: [true, "Rent per day is required"] },
    address: { type: String, required: [true, "Address is required"] },
    year: { type: Number, required: [true, "Year is required"] },
    power: { type: Number, required: [true, "Power is required"] },
    milleage: { type: Number, required: [true, "Milleage is required"] },
    brand: { 
      type: String, 
      required: [true, "Brand is required"], 
      enum: {
      values: CarBrand,
      message: "Please select a valid brand"
    }},
    transmission: {
      type: String,
      required: [true, "Transmission is required"],
      enum: {
        values: CarTransmission,
        message: "Please select a valid transmission",
      },
    },
    fuelType: { 
      type: String, 
      required: [true, "Fuel type is required"],
      enum: {
        values: CarFuelType,
        message: "Please select a valid fuel type",}
        },
    seats: { 
      type: Number, 
      required: [true, "Seats is required"],
      enum:{
      values:CarSeats,
      message:"Please select a valid number of seats"
    } },
    doors: {
       type: Number, 
       required: [true, "Doors is required"],
       enum:{
        values:CarDoors,
        message:"Please select a valid number of doors"
       } },
    images: [{ url: String, public_id: String }],
    category: { 
      type: String, 
      required: [true, "Category is required"],
      enum: {
        values: CarCategories,
        message: "Please select a valid category",
        }},
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    reviews: [String],
  },
  {
    timestamps: true,
  }
);

carSchema.virtual("ratings").get(function () {
  return {
    value: 5,
    count: 10,
  };
});

const Car = mongoose.model<ICar>("Car", carSchema);
export default Car;
