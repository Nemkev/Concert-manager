import mongoose from "mongoose";
const Schema = mongoose.Schema;

const additionalServices = new Schema({
  freeCocktails: {
    type: Schema.Types.Boolean,
    required: true
  },
  afterpartyPass: {
    type: Schema.Types.Boolean,
    required: true
  },
  freeSnacks: {
    type: Schema.Types.Boolean,
    required: true
  },
  autographSession: {
    type: Schema.Types.Boolean,
    required: true
  }
});

export default mongoose.model("Additional Services", additionalServices);
