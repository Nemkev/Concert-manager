import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getConcert(id: ID!): Concerts
    getConcerts(name: String!, limit: Int, skip: Int): [Concerts]
  }
  scalar Date
  type Concerts {
    name: String!
    date: Date!
    description: String
    price: Int!
    id: ID!
    roomId: ID
  }
  type Mutation {
    createConcert(
      name: String!
      price: Int!
      roomId: ID
      date: String!
      description: String
    ): Concerts!
    updateConcert(
      id: ID!
      description: String
      name: String
      price: Int
      date: String
      roomId: ID
    ): Concerts
    deleteConcert(id: ID!): String!
  }
`;
