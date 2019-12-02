import db from "../models/db";
export default {
  Query: {
    searchConcerts: async (_, { name }) => {
      return await db.Concert.find({ name: new RegExp(`${name}`) });
    }
  }
};
