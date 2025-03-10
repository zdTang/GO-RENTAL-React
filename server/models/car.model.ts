import mongoose from "mongoose";
const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    status: { type: String, required: [true, "Draft"] },
    rentPerDay: { type: Number, required: [true, "Rent per day is required"] },
    address: { type: String, required: [true, "Address is required"] },
    year: { type: Number, required: [true, "Year is required"] },
    power: { type: Number, required: [true, "Power is required"] },
    milleage: { type: Number, required: [true, "Milleage is required"] },
    brand: { type: String, required: [true, "Brand is required"] },
    transmission: {
      type: String,
      required: [true, "Transmission is required"],
    },
    fuelType: { type: String, required: [true, "Fuel type is required"] },
    seats: { type: Number, required: [true, "Seats is required"] },
    doors: { type: Number, required: [true, "Doors is required"] },
    images: [{ url: String, public_id: String }],
    category: { type: String, required: [true, "Category is required"] },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    reviews: [String],
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);
export default Car;
