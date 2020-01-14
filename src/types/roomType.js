import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getRooms: [Room!]!
    getRoom(id: ID!): Room
  }

  type Room {
    placeSchema: [[Place]]
    name: String
    id: ID!
  }

  type Place {
    price: Int!
    type: Int!
    id: ID!
  }

  type Mutation {
    createRoom(
      placeSchema: [[Int]]!
      name: String
      buildingId: ID!
      concertId: ID!
      commonPrice: Int!
      vipPrice: Int!
    ): Room!
    updateRoom(
      id: ID!
      name: String
      placeSchema: [[Int]]
      buildingId: ID
      concertId: ID
      commonPrice: Int
      vipPrice: Int
    ): Room!
    deleteRoom(id: ID!): String!
  }
`;
