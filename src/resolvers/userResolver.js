import db from "../models/db";

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
      const user = await new db.User(args).save();
      return user;
    },
    updateUser: async (_, args) => {
      const user = await db.User.findByIdAndUpdate(args.id, args);
      return user;
    },
    deleteUser: async (_, { id }) => {
      await db.User.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
