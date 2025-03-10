// This is backend Apollo server code.
import { getAllCars } from "../../../controllers/car.controller";
// Here to resolve requests from the client
// the request might has filter within.
export const carResolvers = {
  Query: {
    getAllCars: async (parent: any) => await getAllCars(),
  },
};
