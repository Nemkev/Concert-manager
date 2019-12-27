import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getUsers(email: String!, limit: Int, skip: Int): [User]
    getUser(id: ID!): User
  }

  type User {
    firstName: String!
    lastName: String!
    hashPassword: String!
    settings: String
    role: String!
    id: ID!
  }

  type Mutation {
    createUser(
      firstName: String!
      email: String!
      lastName: String!
      hashPassword: String!
      role: String!
      settings: String
    ): User!
    updateUser(
      id: ID!
      firstName: String
      lastName: String
      hashPassword: String
      settings: String
      role: String
    ): User!
    deleteUser(id: ID!): String!
  }
`;
