import db from "../models/db";

export default {
  Query: {
    getRooms: async () => {
      return await db.Room.find();
    },
    getRoom: async (_, { id }) => {
      return await db.Room.findById(id);
    }
  },
  Mutation: {
    createRoom: async (_, args) => {
      const room = await new db.Room(args).save();
      return room;
    },
    updateRoom: async (_, args) => {
      const room = await db.Room.findByIdAndUpdate(args.id, args);
      return room;
    },
    deleteRoom: async (_, { id }) => {
      await db.Room.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
