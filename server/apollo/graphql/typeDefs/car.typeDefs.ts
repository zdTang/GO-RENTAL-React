import { gql } from "graphql-tag";

// These are grqphql type definitions for car
export const carTypeDefs = gql`
  type CartImages {
    url: String
    public_id: String
  }
  type Car {
    id: ID!
    name: String!
    description: String!
    rentPerDay: Float!
    address: String!
    year: Int!
    power: Int!
    milleage: Int!
    brand: String!
    transmission: String!
    fuelType: String!
    seats: Int!
    doors: Int!
    images: [CartImages]
    category: String!
    ratings: CarRatings
    createdAt: String!
    updatedAt: String!
  }

  input CarInput {
    name: String!
    description: String!
    status: String
    rentPerDay: Float!
    address: String!
    images: [String]
    brand: String!
    year: Int!
    transmission: String!
    milleage: Int!
    power: Int!
    seats: Int!
    doors: Int!
    fuelType: String!
    category: String!
  }
  type CarRatings {
    value: Float
    count: Int
  }

  type Query {
    getAllCars: [Car]
    getCarById(carId: ID!): Car
  }

  type Mutation {
    createCar(carInput: CarInput!): Car
    updateCar(carId: ID!, carInput: CarInput!): Boolean
  }
`;
