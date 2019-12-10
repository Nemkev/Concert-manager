import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getTickets: [Ticket!]!
    getTicket(id: ID!): Ticket
  }

  type Ticket {
    userId: String
    buildingId: String
    concertId: String
    placeId: String
    additionalIds: String
    id: ID!
  }

  type Mutation {
    createTicket(
      userId: String!
      buildingId: String!
      concertId: String!
      placeId: String!
      additionalIds: [String]
    ): Ticket
    updateTicket(
      id: ID!
      buildingId: ID
      concertId: ID
      placeId: ID
      additionalIds: ID
    ): Ticket!
    deleteTicket(id: ID!): String!
  }
`;
