import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getTickets: [Ticket!]!
    getTicket(id: ID!): Ticket
    getUserTickets(userId: String, limit: Int, skip: Int): [UserTicket]
  }

  type UserTicket {
    concertId: Concerts
    placeId: String
  }

  type Ticket {
    userId: ID
    buildingId: ID
    concertId: ID
    placeId: ID
    additionalIds: ID
    id: ID!
  }

  type Mutation {
    createTicket(
      userId: ID!
      buildingId: ID!
      concertId: ID!
      placeId: ID!
      additionalIds: [ID]
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
