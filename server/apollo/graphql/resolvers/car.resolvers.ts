// This is backend Apollo server code.
import { getAllCars, createCar } from "../../../controllers/car.controller";
import { CarInput } from "../../../types/car.types";
// Here to resolve requests from the client
// the request might has filter within.
export const carResolvers = {
  Query: {
    getAllCars: async (parent: any) => await getAllCars(),
  },
  Mutation: {
    createCar: async (_: any, { carInput }: { carInput: CarInput }) =>
      await createCar(carInput),
  },
};
