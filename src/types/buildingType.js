import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getBuildings: [Building!]!
    getBuilding(id: ID!): Building
  }

  type Building {
    id: ID!
    coordinates: [String!]!
    city: String!
    concerts: [String]
  }

  type Mutation {
    createBuilding(city: String!, name: String!): Building!

    updateBuilding(id: ID!, city:String!): String!

    delelteBuilding(id: ID!): String!
 }`;
