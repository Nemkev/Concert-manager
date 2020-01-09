import db from "../models/db";

export const getDescription = (req, res) => {
  return db.Concert.find((err, article) => {
    if (!err) {
      return res.send(article);
    } else {
      res.statusCode = 500;
      log.error("Internal error(%d): %s", res.statusCode, err.message);
      return res.send({ error: "Server error" });
    }
  });
};

export const getPlaceSchema = (req, res) => {
  return db.Room.find((err, article) => {
    if (!err) {
      return res.send(article);
    } else {
      res.statusCode = 500;
      log.error("Internal error(%d): %s", res.statusCode, err.message);
      return res.send({ error: "Server error" });
    }
  });
};
