import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import db from "./src/models/db";

const url = "mongodb://localhost:27017/Evgeny";
const port = 8080;
const app = express();
mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const apollo = new ApolloServer({
  typeDefs: `
  type Query {
    getBuildings: [Building]
  }

  type Building {
    id: ID!
    coordinates: [String!]!
    city: String!
    concerts: [String]
  }
    `,
  resolvers: {
    Query: {
      getBuildings: () => db.Building.find()
    }
  }
});

mongoose.model("users", { name: String });

apollo.applyMiddleware({ app });

app.get("/", (req, res) => res.redirect(`localhost:${port}/graphql`));

mongoose.connection.once("open", () => {
  app.listen(port, () =>
    console.log("server was started on http://localhost:8080/graphql")
  );
});
