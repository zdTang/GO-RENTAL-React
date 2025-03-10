import { gql } from "graphql-tag";
export const carTypeDefs = gql`
  type CartImages {
    url: String
    public_id: String
  }
  type Cart {
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
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    getAllCars: String
  }
`;
