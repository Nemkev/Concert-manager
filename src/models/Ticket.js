import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Ticket = new Schema({
  userId: {
    type: Schema.Types.Number,
    required: true,
    unique: true
  },
  buildingId: {
    type: Schema.Types.Number,
    required: true,
    unique: true
  },
  concertId: {
    type: Schema.Types.Number,
    required: true,
    unique: true
  },
  PlaceId: {
    type: Schema.Types.Number,
    required: true,
    unique: true
  },
  additionalIds: {
    type: [Schema.Types.ObjectId],
    default: null
  }
});

export default mongoose.model("Ticket", Ticket);
