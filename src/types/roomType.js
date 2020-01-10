import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getRooms: [Room!]!
    getRoom(id: ID!): Room
  }

  type Room {
    locationScheme: [Place!]
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
      locationScheme: [[Int]]!
      name: String
      buildingId: ID!
      concertId: ID!
      commonPrice: Int!
      vipPrice: Int!
    ): Room!
    updateRoom(
      id: ID!
      locationScheme: [[Int]]
      buildingId: ID
      concertId: ID
    ): Room!
    deleteRoom(id: ID!): String!
  }
`;
