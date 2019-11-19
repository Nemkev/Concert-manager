import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    email: String
  }
  type Query {
    auth: User
  }
  type Mutation {
    register(email: String!, hashPassword: String!): Boolean!
    login(email: String!, hashPassword: String!): User
  }
`;
