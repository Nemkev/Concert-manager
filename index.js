import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/Evgeny';
const app = express();
mongoose.connect(url);

const apollo = new ApolloServer({
  typeDefs: `
        type Query {
            hello: String!
        }
    `,
  resolvers: {
    Query: {
      hello: () => "world"
    }
  }
});

mongoose.model("users", { name: String });

apollo.applyMiddleware({ app });

app.get("/", (req, res) =>
  mongoose.model("users").find((err, users) => {
    res.send(users);
  })
);

app.listen(8080, () =>
  console.log("server was started on http://localhost:8080/graphql")
);
