import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getNums: [Int!]!
  }
  type Mutation {
    addNum: Boolean
  }
  type Subscription {
    newNum: Int!
  }
`;
