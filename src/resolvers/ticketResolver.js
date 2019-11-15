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
    createTicket: async (_, args) => {
      const ticket = await new db.Ticket(args).save();
      return ticket;
    },
    updateConcert: async (_, args) => {
      const ticket = await db.Ticket.findByIdAndUpdate(args.id, args);
      return ticket;
    },
    deleteConcert: async (_, { id }) => {
      await db.Ticket.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
