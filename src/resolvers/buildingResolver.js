import db from "../models/db";
import buildingValidation from "../services/buildingValidate";
import joi from "joi";

export default {
  Query: {
    getBuildings: async () => {
      const data = await db.Building.find();

      return data;
    },
    getBuilding: async (_, { id }) => {
      return await db.Building.findById(id);
    }
  },
  Building: {
    concerts: async parent => {
      const concerts = await db.Concert.findById(parent.concerts).find();
      return concerts;
    }
  },
  Mutation: {
    createBuilding: async (_, args) => {
      try {
        await joi.validate(args, buildingValidation);
        const building = await new db.Building(args).save();
        return building;
      } catch (error) {
        console.log(error);
        return building;
      }
    },
    updateBuilding: async (_, arg) => {
      try {
        await joi.validate(args, buildingValidation);
        const building = await db.Building.findByIdAndUpdate(arg.id, arg, {
          new: true
        });
        return building;
      } catch (error) {
        console.log(error);
        return building;
      }
    },
    deleteBuilding: async (_, { id }) => {
      await db.Building.findByIdAndRemove(id);
      return "Deleted";
    }
  }
};
