import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Coordinates = new Schema({
  type: {
    type: Schema.Types.String,
    required: true
  },
  coordinates: {
    type: Schema.Types.String,
    required: true
  },
  additional_service: {
    type: Schema.Types.Array,
    required: true
  },
  owner: {
    type: Schema.Types.String,
    required: true,
    default: null
  },
  expire: {
    type: Schema.Types.Boolean,
    required: true
  }
});

export default mongoose.model("Coordinates", Coordinates);
