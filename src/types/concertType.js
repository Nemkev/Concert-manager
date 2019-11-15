import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getConcerts: [Concerts!]!
    getConcert(id: ID!): Concerts
  }
  scalar Date
  type Concerts {
    name: String!
    date: Date!
    description: String
    price: Int!
    id: ID!
  }
  type Mutation {
    createConcert(name: String!, price: Int!, date: String!): Concerts!
    updateConcert(
      id: ID!
      description: String
      name: String!
      price: Int!
    ): Concerts!
    deleteConcert(id: ID!): String!
  }
`;
