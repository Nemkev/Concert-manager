import db from "../models/db";

export default {
  Query: {
    getFilter: async (_, { name, city, date, limit, skip }) => {
      const data = await db.Building.find({}, null)
        .populate({ path: "concerts", model: db.Concert })
        .lean();

      const bar = data
        .filter(item => (city ? item.city.includes(city) : item))
        .map(item => {
          const concerts = item.concerts
            .map(item => Object.assign({}, item, { id: item._id }))
            .filter(item => item.name.includes(name));

          return Object.assign({}, item, { concerts, id: item._id });
        })
        .map(item => {
          const concerts = item.concerts
            .map(item => Object.assign({}, item, { id: item._id }))
            .filter(item => {
              return item.date.toISOString().includes(date);
            });

          return Object.assign({}, item, { concerts, id: item._id });
        })
        .filter(item => item.concerts.length > 0);
      console.log(bar);

      return bar;
    }
  }
};
