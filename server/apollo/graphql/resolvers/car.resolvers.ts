// This is backend Apollo server code.
// Here to resolve requests from the client
// the request might has filter within.
export const carResolvers = {
  Query: {
    getAllCars: async (
      parent: any
      //{ filters }: { filters: any },
      //context: any
    ) => {
      return "Hello from getAllCars";
    },
  },
};
