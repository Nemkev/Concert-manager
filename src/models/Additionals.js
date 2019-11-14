import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Additional = new Schema({
  freeCocktails: {
    type: Schema.Types.Boolean,
    default: null
  },
  afterpartyPass: {
    type: Schema.Types.Boolean,
    default: null
  },
  freeSnacks: {
    type: Schema.Types.Boolean,
    default: null
  },
  autographSession: {
    type: Schema.Types.Boolean,
    default: null
  }
});

export default mongoose.model("Additional", Additional);
