import { getCarById, updateCar } from "./../../../controllers/car.controller";
// This is backend Apollo server code.
import { getAllCars, createCar } from "../../../controllers/car.controller";
import { CarInput } from "../../../types/car.types";
// Here to resolve requests from the client
// the request might has filter within.
export const carResolvers = {
  Query: {
    getAllCars: async (parent: any) => await getAllCars(),
    getCarById: async (_: any, { carId }: { carId: string }) =>
      await getCarById(carId),
  },
  Mutation: {
    createCar: async (_: any, { carInput }: { carInput: CarInput }) =>
      await createCar(carInput),
    updateCar: async (
      _: any,
      { carId, carInput }: { carId: string; carInput: CarInput }
    ) => await updateCar(carId, carInput),
  },
};
