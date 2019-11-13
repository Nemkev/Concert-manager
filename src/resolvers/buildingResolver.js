import buildingValidate from "../services/buildingValidate";
import db from "../models/db";

export default {
  Query: {
    getBuildings: async () => {
      return await db.Building.find({});
    },
    getBuilding: async (_, { id }) => {
      return await db.Building.findById(id);
    }
  },

  Mutation: {
    createBuilding: async (_, arg) => {
      const building = await new db.Building(Object.assign(arg)).save();
      return building;
    }
  }

  //   updateBuilding: async (args, { db, joi }) => {
  //     try {
  //       await joi.validate(args, buildingValidate);
  //       await db.Building.findByIdAndUpdate(args.id, args);
  //       return "All Right";
  //     } catch {
  //       return "Something going wrong";
  //     }
  //   },

  //   deleteBuilding: async ({ id }, { db }) => {
  //     try {
  //       await db.Building.findByIdAndRemove(id);
  //       return "All Right";
  //     } catch {
  //       return "Something going wrong";
  //     }
  //   }
  // }
};
