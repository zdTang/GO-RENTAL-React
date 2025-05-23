import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
  query GetAllCars {
    getAllCars {
      id
      name
      description
      rentPerDay
      address
      year
      power
      milleage
      brand
      transmission
      fuelType
      seats
      doors
      images {
        url
        public_id
      }
      category
      ratings {
        value
        count
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_CAR_BY_ID = gql`
  query ExampleQuery($carId: ID!) {
    getCarById(carId: $carId) {
      id
      name
      description
      rentPerDay
      address
      year
      power
      milleage
      brand
      transmission
      fuelType
      seats
      doors
      images {
        url
        public_id
      }
      category
      ratings {
        value
        count
      }
      createdAt
      updatedAt
    }
  }
`;
