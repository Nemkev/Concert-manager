import db from "../models/db";

export default {
  Query: {
    getFilter: async (_, { name, city, date, limit, skip }) => {
      const data = await db.Building.find(
        {
          $or: [
            {
              name: new RegExp(`${name}`)
            }
          ],
          $and: [
            {
              city: new RegExp(`${city}`)
            }
          ]
          //   $or:[
          //     {
          //       date: new RegExp(`${date}`)
          //     }
          //   ]
        },
        null,
        { limit, skip }
      ).populate({ path: "concerts", model: db.Concert });

      console.log(data[0].concerts);

      return data;
    }
  }
};
