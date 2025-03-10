// will put all the logic for the car routes in this file
// so that the resolver can call the functions from here
import Car from "../models/car.model";
import { CarInput } from "../types/car.types";

export const getAllCars = async () => {
  return "Hello from getAllCars controller function!";
};

export const createCar = async (carInput: CarInput) => {
  const newCar = await Car.create(carInput);
  return newCar;
};
