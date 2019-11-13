import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from 'path';
import db from "./src/models/db";
import resolvers from './src/resolvers/buildingResolver';
import typeDefs from './src/types/buildingType'

const url = "mongodb://localhost:27017/Evgeny";
const port = 8080;
const app = express();

mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const apollo = new ApolloServer({
  typeDefs,
  resolvers
});

apollo.applyMiddleware({ app });

app.get("/", (req, res) => res.redirect(`/graphql`));

mongoose.connection.once("open", () => {
  app.listen(port, () =>
    console.log("server was started on http://localhost:8080/graphql")
  );
});
