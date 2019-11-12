import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getBuildings: [Building]
    getbuilding(id: ID!): Building
  }

  input BuildingInput {
    id: ID!
  }

  type Building {
    id: ID!
    coordinates: [String!]!
    city: String!
    concerts: [String]
  }

  type Mutation {
    createBuilding(city: String!): String!

    updateBuilding(id: ID!, city:String!): String!

    delelteBuilding(idL ID!): String!
 }`;
