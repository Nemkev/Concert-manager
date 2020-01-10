import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getBuildings(name: String!, limit: Int, skip: Int): [Building!]!
    getBuilding(id: ID!): Building
  }

  type Building {
    id: ID!
    city: String!
    concerts: [Concerts]
    name: String!
    description: String
    location: [String!]
    rooms: [String!]
    additionsId: [ID!]
  }

  type Mutation {
    createBuilding(
      city: String!
      name: String!
      concerts: [ID]
      additionsId: [ID]
    ): Building!
    updateBuilding(
      id: ID!
      city: String
      name: String
      concerts: [ID!]
      additionsId: [ID]
      rooms: [ID]
    ): Building!
    deleteBuilding(id: ID!): String!
  }
`;
