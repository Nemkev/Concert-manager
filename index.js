import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from "path";
import db from "./src/models/db";

const url = "mongodb://localhost:27017/Evgeny";
const port = 8080;

const app = express();

mongoose.connect(url);
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./src/types/")));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./src/resolvers/"))
);

const apollo = new ApolloServer({
  typeDefs,
  resolvers
});

apollo.applyMiddleware({ app });

app.get("/", (_, res) => res.redirect(`/graphql`));

mongoose.connection.once("open", () => {
  app.listen(port, () =>
    console.log("server was started on http://localhost:8080/graphql")
  );
});
