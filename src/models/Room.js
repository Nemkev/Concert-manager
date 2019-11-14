import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Room = new Schema({
  schema: {
    type: Schema.Types.Array,
  },
  id: {
    type: Schema.Types.Number,
    required: true
  },
  type: {
    type: Schema.Types.String,
    required: true
  },
  price: {
    type: Schema.Types.Number,
    required: true
  }
});

export default mongoose.model("Room", Room);
