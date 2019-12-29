import db from "../models/db";
import userValidate from "../services/userValidate";
import joi from "joi";
import { isAuth } from "../helpers/isAuth";

export default {
  Query: {
    getUsers: async (_, { email, limit, skip }, { req }) => {
      isAuth(req);
      return await db.User.find({ email: new RegExp(`${email}`) }, null, {
        limit,
        skip
      });
    },
    getUser: async (_, { id }, { req }) => {
      isAuth(req);
      return await db.User.findById(id);
    }
  },
  Mutation: {
    createUser: async (_, args, { req }) => {
      try {
        isAuth(req);
        await joi.validate(args, userValidate);
        const user = await new db.User(args).save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    updateUser: async (_, args, { req }) => {
      try {
        isAuth(req);
        await joi.validate(args, userValidate);
        const user = await db.User.findByIdAndUpdate(args.id, args, {
          new: true
        });
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser: async (_, { id }, { req }) => {
      isAuth(req);
      await db.User.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
