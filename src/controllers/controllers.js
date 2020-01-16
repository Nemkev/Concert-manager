import db from "../models/db";
// import socketIO from "socket.io";

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
    // socketIO.emit("broadcast", [{}, 0, {}]);
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

export const bindTicketToUser = async (req, res) => {
  try {
    const { userId, placeId } = req.params;
    const bookedTicket = await db.Ticket.findOneAndUpdate(placeId, { userId });
    res.json(bookedTicket);
  } catch (error) {
    console.log(error);
  }
};
