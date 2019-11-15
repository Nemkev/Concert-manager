import db from "../models/db";

export default {
  Query: {
    getConcerts: async () => {
      return await db.Concert.find();
    },
    getConcert: async (_, { id }) => {
      return await db.Concert.findById(id);
    }
  },
  Mutation: {
    createConcert: async (_, args) => {
      const concert = await new db.Concert(args).save();
      return concert;
    },
    updateConcert: async (_, args) => {
      const concert = await db.Concert.findByIdAndUpdate(args.id, args);
      return concert
    },
    deleteConcert: async (_, {id}) => {
      await db.Concert.findByIdAndRemove(id);
      return 'Deleted'
    }
  }
}