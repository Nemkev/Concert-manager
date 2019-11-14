import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getTickets: [Tickets!]!
    getTicket(id: ID!): Tickets
  }

  type Tickets {
    userId: ID
    buildingId: ID
    concertId: ID
    placeId: ID
    additionalIds: ID
    id:ID!
  }

  type Mutation {
    createTicket(userId: ID!
    buildingId: ID!
    concertId: ID!
    placeId: ID!
    additionalIds: ID): Tickets
  }
`;
