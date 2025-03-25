import { CarInput } from "./../types/car.types";
// will put all the logic for the car routes in this file
// so that the resolver can call the functions from here
import Car from "../models/car.model";
import mongoose from "mongoose";
import { GraphQLError } from "graphql";

export const getAllCars = async () => {
  const cars = await Car.find();
  return cars;
};

export const createCar = async (carInput: CarInput) => {
  const newCar = await Car.create(carInput);
  return newCar;
};

export const getCarById = async (carId: string) => {
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new GraphQLError("Invalid Car ID format", {
      extensions: { code: "BAD_USER_INPUT" },
    });
  }

  const car = await Car.findById(carId);
  if (!car) {
    throw new GraphQLError("Car not found", {
      extensions: { code: "NOT_FOUND" },
    });
  }
  return car;
};

export const updateCar = async (carId: string, carInput: CarInput) => {
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new GraphQLError("Invalid Car ID format", {
      extensions: { code: "BAD_USER_INPUT" },
    });
  }

  const car = await Car.findById(carId);
  if (!car) {
    throw new GraphQLError("Car not found", {
      extensions: { code: "NOT_FOUND" },
    });
  }
  // update the car
  await car.set(carInput).save();
  return true;
};

export const deleteCar = async (carId: string) => {
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new GraphQLError("Invalid Car ID format", {
      extensions: { code: "BAD_USER_INPUT" },
    });
  }

  const car = await Car.findById(carId);
  if (!car) {
    throw new GraphQLError("Car not found", {
      extensions: { code: "NOT_FOUND" },
    });
  }
  // update the car
  await car?.deleteOne();
  return true;
};
