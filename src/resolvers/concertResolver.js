import db from "../models/db";
import concertValidate from "../services/concertValidate";
import joi from "joi";

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
      try {
        await joi.validate(args, concertValidate);
        const concert = await new db.Concert(args).save();
        return concert;
      } catch (error) {
        console.log(error);
        return concert;
      }
    },
    updateConcert: async (_, args) => {
      try {
        await joi.validate(args, concertValidate);
        const concert = await db.Concert.findByIdAndUpdate(args.id, args);
        return concert;
      } catch (error) {
        console.log(error);
        return concert;
      }
    },
    deleteConcert: async (_, { id }) => {
      await db.Concert.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
