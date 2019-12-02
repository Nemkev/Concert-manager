import { gql } from "apollo-server-express";

export default gql`
  type Query {
    searchConcerts(name: String!): [Concert]
  }

  type Concert {
    name: String!
    date: Date!
  }
`;
