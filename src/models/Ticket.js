import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Ticket = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  buildingId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  concertId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  placeId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  additionalIds: {
    type: [Schema.Types.String]
  }
});

export default mongoose.model("Ticket", Ticket);
