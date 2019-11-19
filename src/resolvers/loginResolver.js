import db from "../models/db";
import bcrypt from "bcryptjs";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../config/configs";

export default {
  Query: {
    auth: (_, __, { req }) => {
      if (!req.userId) {
        return null;
      }
      return db.User.findById(req.userId);
    }
  },
  Mutation: {
    register: async (_, { email, hashPassword }) => {
      const hashedPassword = await bcrypt.hash(hashPassword, 10);
      await db.User.create({
        email,
        hashPassword: hashedPassword
      }).save();

      return true;
    },
    login: async (_, { email, hashPassword }) => {
      const user = await db.User.findOne({ where: { email } });
      if (!user) {
        return null;
      }

      const valid = await bcrypt.compare(hashPassword, user.hashPassword);
      if (!valid) {
        return null;
      }

      const refreshToken = sign(
        { userId: user.id, count: user.count },
        REFRESH_TOKEN_SECRET,
        {
          expiresIn: "7d"
        }
      );
      const accessToken = sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: "15min"
      });

      res.cookie("refresh-token", refreshToken);
      res.cookie("access-token", accessToken);

      return user;
    }
  }
};
