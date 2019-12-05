import db from "../models/db";

export default {
  Query: {
    getFilter: async (_, { name, city, date, limit, skip }) => {
      const data = await db.Building.find({}, null, { limit, skip })
        .populate({ path: "concerts", model: db.Concert })
        .lean();

      return data
        .filter(item => (city ? item.city.includes(city) : item))
        .filter(item => (name ? item.name.includes(name) : item))
        .map(item => {
          if (date) {
            const concerts = item.concerts
              .map(item => Object.assign({}, item, { id: item._id }))
              .filter(item => ("" + item.date).includes(date));

            return Object.assign({}, item, { concerts, id: item._id });
          }

          return item;
        });
    }
  }
};
