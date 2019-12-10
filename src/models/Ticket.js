import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Ticket = new Schema({
  userId: {
    type: Schema.Types.String
  },
  buildingId: {
    type: Schema.Types.String
  },
  concertId: {
    type: Schema.Types.String
  },
  placeId: {
    type: Schema.Types.String
  },
  additionalIds: {
    type: [Schema.Types.String]
  }
});

export default mongoose.model("Ticket", Ticket);
