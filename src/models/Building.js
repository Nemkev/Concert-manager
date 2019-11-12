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
  }
});

export default mongoose.model("Buildings", Buildings);
     