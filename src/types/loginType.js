import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type JWT {
    id: ID!
    email: String
  }
  type Query {
    auth: JWT
  }
  type Mutation {
    signup(email: String!, hashPassword: String!): String
    login(email: String!, hashPassword: String!): String
  }
`;
