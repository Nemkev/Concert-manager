import db from "../models/db";
import ticketValidate from "../services/ticketValidate";
import joi from "joi";

export default {
  Query: {
    getTicket: async () => {
      return await db.Ticket.find();
    },
    getTickets: async (_, { id }) => {
      return await db.Ticket.findById(id);
    }
  },
  Mutation: {
    createTicket: async (_, args) => {
      try {
        await joi.validate(args, ticketValidate);
        const ticket = await new db.Ticket(args).save();
        return ticket;
      } catch (error) {
        console.log(error);
        return ticket;
      }
    },
    updateTicket: async (_, args) => {
      try {
        await joi.validate(args, ticketValidate);
        const ticket = await db.Ticket.findByIdAndUpdate(args.id, args);
        return ticket;
      } catch (error) {
        console.log(error);
        return ticket;
      }
    },
    deleteTicket: async (_, { id }) => {
      await db.Ticket.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
