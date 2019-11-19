import jsonwebtoken from "jsonwebtoken";
import db from "../models/db";
import bcrypt from "bcryptjs";

export default {
  Query: {
    auth: async (_, __, { user }) => {
      if (!user) {
        throw new Error("You are not authenticated!");
      }
      return await db.User.findById(user.id);
    }
  },
  Mutation: {
    signup: async (_, { email, hashPassword }) => {
      const user = await db.User.create({ email, hashPassword });
      await db.User.create({
        email,
        hashPassword: await bcrypt.hash(hashPassword, 10)
      });

      return jsonwebtoken.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1y" }
      );
    },
    login: async (_, { email, password }) => {
      const user = await db.User.findOne({ where: { email } });
      if (!user) {
        throw new Error("No user with this email");
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Incorrect password");
      }

      return jsonwebtoken.sign(
        { id: db.User.id, email: db.User.id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return user;
    }
  }
};
