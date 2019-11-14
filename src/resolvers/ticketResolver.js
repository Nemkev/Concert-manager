import db from "../models/db";

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
    createConcert: async (_, args) => {
      const Ticket = await new db.Ticket(args).save();
      return Ticket;
    },
    updateConcert: async (_, args) => {
      const Ticket = await db.Ticket.findByIdAndUpdate(args.id, args);
      return Ticket;
    },
    deleteConcert: async (_, { id }) => {
      await db.Ticket.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
