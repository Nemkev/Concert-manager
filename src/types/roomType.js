import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getRooms: [Room!]!
    getRoom(id: ID!): Room
  }

  type N {
    field: Int
  }

  union PlaceSchema = Place | N

  type Room {
    placeSchema: [[PlaceSchema]]
    name: String
    id: ID!
  }

  type Place {
    price: Int!
    type: Int!
    id: ID!
    booked: Boolean
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
