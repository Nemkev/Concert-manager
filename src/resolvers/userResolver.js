import db from "../models/db";

export default {
  Query: {
    getConcerts: async () => {
      return await db.User.find();
    },
    getConcert: async (_, { id }) => {
      return await db.User.findById(id);
    }
  },
  Mutation: {
    createConcert: async (_, args) => {
      const Concert = await new db.User(args).save();
      return Concert;
    },
    updateConcert: async (_, args) => {
      const Concert = await db.User.findByIdAndUpdate(args.id, args);
      return Concert
    },
    deleteConcert: async (_, {id}) => {
      await db.User.findByIdAndRemove(id);
      return 'Deleted'
    }
  }
}