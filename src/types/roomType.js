import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getRooms: [Room!]!
    getRoom(id: ID!): Room
  }

  type Room {
    locationScheme: [String!]
    id: ID!
  }

  type Mutation {
    createRoom(locationScheme: [String!]!): Room!
    updateRoom(id: ID!, locationScheme: [String]): Room!
    deleteRoom(id: ID!): String!
  }
`;
