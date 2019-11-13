import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Buildings = new Schema({
  additionsId: {
    type: Schema.Types.Array,
    required: true
  },
  rooms: {
    type: Schema.Types.Array,
    default: null
  },
  concerts: {
    type: Schema.Types.Array,
    default: null
  },
  location: {
    type: Schema.Types.Array,
    required: true
  },
  city: {
    type: Schema.Types.String,
    required: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  description: {
    type: Schema.Types.String,
    default: null
  }
});

export default mongoose.model("Buildings", Buildings);
