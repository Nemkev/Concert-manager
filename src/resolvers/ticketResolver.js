import db from "../models/db";
import ticketValidate from "../services/ticketValidate";
import joi from "joi";
import { isAuth } from "../helpers/isAuth";

export default {
  Query: {
    getTickets: async (_, __, { req }) => {
      isAuth(req);
      return await db.Ticket.find();
    },
    getTicket: async (_, { id }, { req }) => {
      isAuth(req);
      return await db.Ticket.findById(id);
    },
    getUserTickets: async (_, { userId, limit, skip }, { req }) => {
      isAuth(req);
      const userTickets = await db.Ticket.find({ userId }, null, {
        limit,
        skip
      })
        .populate({
          path: "concertId",
          model: db.Concert
        })
        .lean();
      return userTickets;
    }
  },
  Mutation: {
    createTicket: async (_, args, { req }) => {
      try {
        isAuth(req);
        await joi.validate(args, ticketValidate);

        const ticket = await new db.Ticket(args).save();
        return ticket;
      } catch (error) {
        console.log(error);
      }
    },
    updateTicket: async (_, args, { req }) => {
      try {
        isAuth(req);
        await joi.validate(args, ticketValidate);
        const ticket = await db.Ticket.findByIdAndUpdate(args.id, args, {
          new: true
        });
        return ticket;
      } catch (error) {
        console.log(error);
      }
    },
    deleteTicket: async (_, { id }, { req }) => {
      isAuth(req);
      await db.Ticket.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
