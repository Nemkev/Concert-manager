import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Tickets = new Schema({
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
    type: Schema.Types.Array,
    default: null
  }
});

export default mongoose.model("Tickets", Tickets);
