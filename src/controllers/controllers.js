import db from "../models/db";

export const getDescription = async (req, res) => {
  try {
    const concert = await db.Concert.find();
    res.json({ concert });
  } catch (error) {
    console.log(error);
  }
};

export const getPlaceSchema = async (req, res) => {
  return await db.Room.find((err, article) => {
    if (!err) {
      return res.send(article);
    } else {
      res.statusCode = 500;
      log.error("Internal error(%d): %s", res.statusCode, err.message);
      return res.send({ error: "Server error" });
    }
  });
};
