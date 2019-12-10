import db from "../models/db";
import uuidv4 from "uuid";

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
      let typesArray = args.locationScheme;

      for (let x = 0; x < typesArray.length; x++) {
        for (let y = 0; y < typesArray[x].length; y++) {
          if (typesArray[x][y] === 1) {
            // createTicket: async (_, args) => {

            // }
            typesArray[x][y] = { price: 10, id: uuidv4() };
          }
        }
      }

      const room = await new db.Room({
        rooms: [
          {
            placeSchema: typesArray
          }
        ]
      }).save();
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
