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
      const room = await new db.Room({
        rooms: [
          {
            placeSchema: [
              [
                { type: 0, price: 10, id: 121231313 },
                { type: 0, price: 10, id: 121231313 },
                { type: 0, price: 10, id: 121231313 },
                { type: 0, price: 10, id: 121231313 }
              ]
            ]
          }
        ]
      }).save();
      console.log(room, 11111111111111112);

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
