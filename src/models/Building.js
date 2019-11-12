import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Buildings = new Schema({
  coordinates: {
    type: Schema.Types.Array,
    required: true,
    default: null
  },
  city: {
    type: Schema.Types.String,
    required: true
  },
  concerts: {
    type: Schema.Types.Array,
    required: true
  }
});

export default mongoose.model("Buildings", Buildings);
     