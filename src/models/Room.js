import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Place = new Schema({
  type: Schema.Types.String,
  price: {
    type: Schema.Types.Number,
    required: true
  }
});

const Row = new Schema({
  row: [Place]
});

const Room = new Schema({
  locationScheme: [Row]
});

export default mongoose.model("Room", Room);
