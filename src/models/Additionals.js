import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Additional = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  price: {
    type: Schema.Types.Int,
    required: true
  }
});

export default mongoose.model("Additional", Additional);
