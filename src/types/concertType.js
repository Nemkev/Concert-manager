import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getConcert(id: ID!): Concerts
    getConcerts(name: String!): [Concert]
  }
  scalar Date
  type Concerts {
    name: String!
    date: Date!
    description: String
    price: Int!
    id: ID!
  }
  type Concert {
    name: String!
    date: Date!
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
