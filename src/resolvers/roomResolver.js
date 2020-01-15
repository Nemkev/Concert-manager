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
    createRoom: async (
      _,
      { concertId, buildingId, placeSchema, commonPrice, vipPrice, name }
    ) => {
      let typesArray = placeSchema;

      for (let x = 0; x < typesArray.length; x++) {
        for (let y = 0; y < typesArray[x].length; y++) {
          if (typesArray[x][y] === 1) {
            const id = uuidv4()
              .replace(/-/g, "")
              .substr(-24);
            await new db.Ticket({
              userId: null,
              concertId: concertId,
              buildingId: buildingId,
              placeId: id
            }).save();
            typesArray[x][y] = { price: commonPrice, id, booked: false };
          } else if (typesArray[x][y] === 2) {
            const id = uuidv4()
              .replace(/-/g, "")
              .substr(-24);
            await new db.Ticket({
              userId: null,
              concertId,
              buildingId,
              placeId: id
            }).save();
            typesArray[x][y] = { price: vipPrice, id, booked: false };
          }
        }
      }
      console.log(11111);
      const room = await new db.Room({
        placeSchema: typesArray,
        name
      }).save();
      console.log(room);

      return room;
    },
    updateRoom: async (_, args) => {
      const room = await db.Room.findByIdAndUpdate(args.id, args, {
        new: true
      });
      return room;
    },
    deleteRoom: async (_, { id }) => {
      await db.Room.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
