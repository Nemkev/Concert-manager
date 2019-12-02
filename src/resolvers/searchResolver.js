import db from "../models/db";
export default {
  Query: {
    searchConcerts: async (_, { text }) => {
      return await db.Concert.find({ name: /Hell/i });
    }
  }
};
