import db from "../models/db";
import bcrypt from "bcryptjs";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../config/configs";
import { sign } from "jsonwebtoken";

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
      });

      return true;
    },
    login: async (_, { email, hashPassword }, { req, res }) => {
      // console.log(req.cookie);
      const user = await db.User.findOne({ email });
      if (!user) {
        console.log(email);
        return null;
      }

      const valid = await bcrypt.compare(hashPassword, user.hashPassword);
      if (!valid) {
        console.log(hashPassword);
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

      console.log(res.cookie, 1);
      console.log(refreshToken);
      res.cookie("refresh-token", refreshToken);
      res.cookie("access-token", accessToken);

      return user;
    }
  }
};
