import express from "express";
import { ApolloServer } from "apollo-server-express";

const app = express();

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

apollo.applyMiddleware({ app });

app.get("/", (req, res) => res.send("Hello World"));

app.listen(8080, () =>
  console.log("server was started on http://localhost:8080")
);
