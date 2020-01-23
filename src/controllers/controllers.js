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
    const id = req.params.placeId;
    const placeSchema = req.body.placeSchema;

    const newPlaceSchema = await db.Room.findByIdAndUpdate(id, {
      placeSchema
    });
    res.json(newPlaceSchema);
  } catch (error) {
    console.log(error);
  }
};

export const bookedPlace = async (req, res) => {
  try {
    const id = req.body.bookedPlaces;
    const idUser = req.params.userId;
    for (let i = 0; i < id.length; i++) {
      const newTicket = await db.Ticket.find({ placeId: id[i] }).update({
        userId: idUser
      });
      if (i === id.length - 1) {
        res.json({ newTicket });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const bindTicketToUser = async (req, res) => {
  try {
    const { userId, placeId } = req.params;
    const bookedTicket = await db.Ticket.find({ placeId }).update({ userId });
    res.json(bookedTicket);
  } catch (error) {
    console.log(error);
  }
};

export const bindAdditionalToTicket = async (req, res) => {
  try {
    const id = req.body.bookedPlaces;
    const additionalId = req.body.additionalArr;
    for (let i = 0; i < id.length; i++) {
      const newTicket = await db.Ticket.find({ placeId: id[i] }).update({
        additionalIds: additionalId
      });
      if (i === id.length - 1) {
        res.json({ newTicket });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
