import db from "../models/db";
import additionValidate from "../services/additionalValidate";
import joi from "joi";

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
      try {
        await joi.validate(args, additionValidate);
        const addition = await new db.Additional(args).save();
        return addition;
      } catch (error) {
        console.log(error);
        return addition;
      }
    },
    updateAddition: async (_, args) => {
      try {
        await joi.validate(args, additionValidate);
        const addition = await db.Additional.findByIdAndUpdate(args.id, args);
        return addition;
      } catch (error) {
        console.log(error);
        return addition;
      }
    },
    deleteAddition: async (_, { id }) => {
      await db.Additional.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
