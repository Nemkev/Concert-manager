import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { getDescription, getPlaceSchema } from "./src/controllers/controllers";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from "path";
import { port, url } from "./src/config/configs";
import cookieParser from "cookie-parser";
import { ACCESS_TOKEN_SECRET } from "./src/config/configs";
import { verify } from "jsonwebtoken";
import cors from "cors";
import http from "http";
import SocketIO from "socket.io";

mongoose.connect(url, { useFindAndModify: false });

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./src/types/")));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./src/resolvers/"))
);

const startServer = async () => {
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res })
  });

  const app = express();
  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
  app.use(cookieParser());
  app.use((req, _, next) => {
    const accessToken = req.cookies["access-token"];
    try {
      const data = verify(accessToken, ACCESS_TOKEN_SECRET);
      req.userId = data.userId;
    } catch (error) {}
    next();
  });

  app.get("/about/:concertId", getDescription);
  app.get("/", (_, res) => res.redirect(`/graphql`));
  app.get("/place/:roomId", getPlaceSchema);
  // io.on("connection", socket => {
  //   socket.emit("news", { hello: "world" });
  //   socket.on("my other event", data => {
  //     console.log(data);
  //   });
  // });
  // io.on("connection", socket => {
  //   let nick = socket.handshake.query.nick;
  // });

  apollo.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: "http://localhost:3000"
    }
  });

  mongoose.connection.once("open", () => {
    app.listen(port, () =>
      console.log("server was started on http://localhost:8080/graphql")
    );
  });
};

startServer();
