import buildingValidate from "../services/buildingValidate";

export default {
  Query: {
    getBuildings: async ({ db }) => {
      return await db.Buildings.find({});
    },
    getBuilding: async ({ id }, { db }) => {
      const data = await db.Building.findById(id);
      return data;
    }
  },

  Mutation: {
    createBuilding: async (args, { db, joi }) => {
      try {
        await joi.validate(args, buildingValidate);
        await new db.Building(args).save();
        return "All Right";
      } catch {
        return "Something going wrong";
      }
    },

    updateBuilding: async (args, { db, joi }) => {
      try {
        await joi.validate(args, buildingValidate);
        await db.Building.findByIdAndUpdate(args.id, args);
        return "All Right";
      } catch {
        return "Something going wrong";
      }
    },

    deleteBuilding: async ({ id }, { db }) => {
      try {
        await db.Building.findByIdAndRemove(id);
        return "All Right";
      } catch {
        return "Something going wrong";
      }
    }
  }
};
