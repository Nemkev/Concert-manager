import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Coordinates = new Schema({
  size: {
    type: Schema.Types.Number,
    required: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  tickets: {
    type: Schema.Types.Array,
    required: true
  }
});

export default mongoose.model("Coordinates", Coordinates);
