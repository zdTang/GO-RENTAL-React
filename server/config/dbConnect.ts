import { Connection } from "./../node_modules/mongodb/src/cmap/connection";
import mongoose from "mongoose";
export const dbConnection = async () => {
  try {
    let connectionString = "";
    if (process.env.NODE_ENV === "development")
      connectionString = process.env.MONGO_URI_LOCAL!;
    if (process.env.NODE_ENV === "production")
      connectionString = process.env.MONGO_URI!;

    await mongoose.connect(connectionString);
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar la base de datos");
  }
};
