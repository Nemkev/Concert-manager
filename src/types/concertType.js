import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getConcerts: [Concerts!]!
    getConcert(id: ID!): Concerts
  }


  type Concerts {
      name:String!
      date: String!
      description: String
      price: Int!
  }

  type Mutation {
    createConcert(name: String!, price: Int!, date: String!): Concerts!
    updateConcert(id: ID!, description: String, name: String!, price: Int!): Concerts!
    deleteConcert(id: ID!): String!
  }
`;