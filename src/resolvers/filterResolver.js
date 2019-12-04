import db from "../models/db";

export default {
  Query: {
    getFilter: async (_, { name, city, date, limit, skip }) => {
      const data = await db.Building.find(
        {
          $and: [
            {
              name: new RegExp(`${name}`)
            }
          ],
          $or: [
            {
              city: new RegExp(`${city}`)
            }
          ]

          //   $or: [
          //     {
          //       date: { $elemMatch: { $in: [new RegExp(`${date}`)] } }
          //     }
          //   ]
        },
        null,
        { limit, skip }
      ).populate({ path: "concerts", model: db.Concert });

      //   data.find(date === data.concerts);
      console.log(data.find(() => date === data.concerts));

      return data;
    }
  }
};
