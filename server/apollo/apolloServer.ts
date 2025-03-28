import { makeExecutableSchema } from "@graphql-tools/schema";
import express, { Application } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { json } from "body-parser";
import { carTypeDefs } from "./graphql/typeDefs/car.typeDefs"; // Old import path
import cors from "cors";
import { carResolvers } from "./graphql/resolvers/car.resolvers"; // New import path
export async function startApolloServer(app: Application) {
  const typeDefs = [carTypeDefs];
  const resolvers = [carResolvers];
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();
  app.use(
    "/graphql",
    cors({
      origin: ["http://localhost:5173"], // React App URL, Vite dev server URL
      credentials: true,
    }),
    json(),
    expressMiddleware(apolloServer)
  );
}
