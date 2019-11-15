import db from "../models/db";

export default {
  Query: {
    getAdditions: async () => {
      return await db.Additional.find();
    },
    getConcert: async (_, { id }) => {
        return await db.Additional.findById(id);
      }
    
  },
  Mutation: {
    createAddition: async (_, args) => {
      const Concert = await new db.Additional(args).save();
      return Concert;
    },
    updateAddition: async (_, args) => {
      const Concert = await db.Additional.findByIdAndUpdate(args.id, args);
      return Concert
    },
    deleteAddition: async (_, {id}) => {
      await db.Additional.findByIdAndRemove(id);
      return 'Deleted'
    }
}
}
