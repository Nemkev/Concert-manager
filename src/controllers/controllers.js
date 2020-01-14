import db from "../models/db";

export const getDescription = async (req, res) => {
  try {
    const id = req.params.concertId;
    const concert = await db.Concert.findById(id);
    res.json({ concert });
  } catch (error) {
    console.log(error);
  }
};

export const getPlaceSchema = async (req, res) => {
  try {
    const id = req.params.roomId;
    const schema = await db.Room.findById(id);
    res.json({ schema });
  } catch (error) {
    console.log(error);
  }
};

export const bookPlace = async (req, res) => {
  try {
    const id = req.params.concertId;
    const newSchema = { placeSchema: req.body.matrix };
    const newPlaceSchema = db.Room.findByIdAndUpdate(id, newSchema);
    res.json({ newPlaceSchema });
  } catch (error) {
    console.log(error);
  }
};
