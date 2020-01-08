import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getAdditions(name: String!, limit: Int, skip: Int): [Additions]
    getAddition(id: ID!): Additions
  }

  type Additions {
    name: String!
    price: Int!
    id: ID!
  }

  type Mutation {
    createAddition(name: String!, price: Int!): Additions!
    updateAddition(id: ID!, name: String, price: Int): Additions!
    deleteAddition(id: ID!): String!
  }
`;
