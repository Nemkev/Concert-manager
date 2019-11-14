import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getBuildings: [Building!]!
    getBuilding(id: ID!): Building
  }

  type Building {
    id: ID!
    city: String!
    concerts: [String]
    name: String!
    description: String
    location: [String!]
    rooms: [String!]
    additionsId: [String!]
  }

  type Mutation {
    createBuilding(city: String!, name: String!): Building!
    updateBuilding(id: ID!, city: String!, name: String!): Building!
    deleteBuilding(id: ID!): String!
  }
`;
