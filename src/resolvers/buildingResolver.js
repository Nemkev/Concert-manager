import db from "../models/db";

export default {
  Query: {
    getBuildings: async () => {
      return await db.Building.find();
    },
    getBuilding: async (_, { id }) => {
      return await db.Building.findById(id);
    }
  },
  Mutation: {
    createBuilding: async (_, args) => {
      const building = await new db.Building(args).save();
      return building;
    },
    updateBuilding: async (_, arg) => {
      const building = await db.Building.findByIdAndUpdate(arg.id, arg);
      return building
    },
    deleteBuilding: async (_, {id}) => {
      await db.Building.findByIdAndRemove(id);
      return 'Deleted'
    }
  }
}

