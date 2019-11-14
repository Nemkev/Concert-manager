import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getUsers: [Tickets!]!
    getUser(id: ID!): Tickets
  }

  type Users {
    firstName: String!
    secondName: String!
    hashPassword: String!
    settings: String
    role: String!
    id: ID!
  }

  type Mutation {
    createUser(
      firstName: String!
      secondName: String!
      hashPassword: String!
      role: String!
      settings: String
    ): Users!
    updateUser(
      firstName: String!
      secondName: String!
      hashPassword: String!
      settings: String
      role: String!
    ): Concerts!
    deleteUser(id: ID!): String!
  }
`;
