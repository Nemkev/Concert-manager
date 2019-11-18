import db from "../models/db";
import userValidate from "../services/userValidate";
import joi from "joi";

export default {
  Query: {
    getUsers: async () => {
      return await db.User.find();
    },
    getUser: async (_, { id }) => {
      return await db.User.findById(id);
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      try {
        await joi.validate(args, userValidate);
        const user = await new db.User(args).save();
        return user;
      } catch (error) {
        console.log(error);
        return user;
      }
    },
    updateUser: async (_, args) => {
      try {
        await joi.validate(args, userValidate);
        const user = await db.User.findByIdAndUpdate(args.id, args);
        return user;
      } catch (error) {
        console.log(error);
        return user;
      }
    },
    deleteUser: async (_, { id }) => {
      await db.User.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
